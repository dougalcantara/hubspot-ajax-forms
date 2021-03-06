import { GLOBALS } from './globals';
import { Utils } from './Utils';

// use Symbols to simulate private methods
const _validateRequiredOptions = Symbol('_validateRequiredOptions');
const _enhanceForm = Symbol('_enhanceForm');
const _createPayload = Symbol('_createPayload');

export class HubspotAjaxForm {
  constructor(form, options) {
    this._form = form;
    this._options = options;
    this._endpoint = `${GLOBALS.BASE_URL}/${this._options.portalId}/${this._options.formId}`;
    this._event = null;
    this._ipAddress = null;
    this._submitTrigger = null;

    this[_validateRequiredOptions]();
    this[_enhanceForm]();
  }

  [_validateRequiredOptions]() { // TODO: this needs to be DRY'd up
    if (!this._options.portalId) {
      return console.error('[Hubspot AJAX Forms] - A portalId is required.');
    }

    if (!this._options.formId) {
      return console.error('[Hubspot AJAX Forms] - A formId is required.');
    }

    if (!this._options.fieldSelector) {
      return console.error('[Hubspot AJAX Forms] - A fieldSelector is required.');
    }

    return true;
  }

  [_enhanceForm]() {
    // TODO: let user pass in the form DOMElement OR the CSS Selector for the form
    if (typeof (this._form) === 'string') {
      this._form = document.querySelector(this._form);
    }

    // TODO: allow for custom submit trigger
    this._submitTrigger = this._form.querySelector('button[type="submit"]');

    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._event = e;

      if (this._options.withIpAddress) {
        // Getting the IP requires a separate xhr.
        // In this case, submit the form after that xhr has completed.
        Utils.getUserIp((ip) => {
          this._ipAddress = ip;
          this.submit();
        });
      } else {
        this.submit();
      }
    });
  }

  [_createPayload]() {
    const payload = {
      fields: Utils.createPropertyPairs(this._options.fieldSelector),
      submittedAt: Date.now(),
      context: this._options.context,
    };

    if (this._options.withIpAddress) {
      payload.context.ipAddress = this._ipAddress;
    }

    return JSON.stringify(payload);
  }

  submit() {
    if (typeof (this._options.onSubmit) === 'function') {
      this._options.onSubmit(this._event, this[_createPayload]());
    }

    Utils.handleFormState(this._form, this._submitTrigger);

    // TODO: create xhr micro-lib. There may be multiple XHR's based on supplied context
    const xhr = new XMLHttpRequest();

    xhr.open('POST', this._endpoint);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        this._options.onComplete({
          response: JSON.parse(xhr.response),
          status: xhr.status,
        });

        Utils.handleFormState(this._form, this._submitTrigger, true);
      }
    };

    xhr.send(this[_createPayload]());

    return true;
  }
}
