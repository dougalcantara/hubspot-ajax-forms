import { HubspotAjaxForm } from './lib/HubspotAjaxForm';

const form = document.querySelector('#hs-test-form')

const hsAjaxForm = new HubspotAjaxForm(form, {
  portalId: 510975,
  formId: '3f5c696e-313e-4349-8e9f-a12679bb9ece',
  fieldSelector: '.hs-ajax-input',
  withIpAddress: true,
  context: {
    hutk: '3aea3ab5985f7bc544e847d1f76b5857',
    pageName: document.title,
    pageUri: window.location.href,
  },
  onSubmit: payload => console.log(JSON.parse(payload)),
  onComplete: response => console.log(response),
});
