import { GLOBALS } from './globals';
import { Utils } from './utils';

const _validateOptions = Symbol('_validateOptions');
const _enhanceForm = Symbol('_enhanceForm');

export class HubspotAjaxForm {
  constructor(form, options) {
    this._form = form;
    this._options = options;

    this[_validateOptions]();
    this[_enhanceForm]();
  }

  [_validateOptions]() {
    if (!this._options.portalId) {
      return console.error('[Hubspot AJAX Forms] - A Portal ID is required.');
    }

    // TODO: validate all opts
  }

  [_enhanceForm]() {
    if (typeof(this._form) === 'string') {
      this._form = document.querySelector(this._form);
    }

    this._form.addEventListener('submit', e => {
      e.preventDefault();

      if (this._options.withIpAddress) {
        Utils.getUserIp(ip => this.submit(ip));
      }

      this.submit();
    });
  }

  submit(ipAddress) {
    if (typeof(this._options.onSubmit) === 'function') {
      return this._options.onSubmit();
    }

    const xhr = new XMLHttpRequest();

    xhr.open('POST', `${ GLOBALS.BASE_URL }/${ this._options.portalId }/${ this._options.formId }`);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        this._options.onComplete({
          response: JSON.parse(xhr.response),
          status: xhr.status,
        });
      }
    }

    const formFields = document.querySelectorAll(this._options.fieldSelector);
    const fieldValues = [];

    for (let i = 0, n = formFields.length; i < n; i++) {
      const thisField = formFields[i];

      fieldValues.push({
        name: thisField.name,
        value: thisField.value,
      });
    }

    xhr.send(JSON.stringify({
      submittedAt: Date.now(),
      fields: fieldValues,
    }));
  }
}