import { HubspotAjaxForm } from './lib/HubspotAjaxForm';

const hsAjaxForm = new HubspotAjaxForm('#hs-test-form', {
  portalId: 510975,
  formId: '3f5c696e-313e-4349-8e9f-a12679bb9ece',
  fieldSelector: '.hs-ajax-input',
  withIpAddress: true,
  context: {
    hutk: '3aea3ab5985f7bc544e847d1f76b5857',
    pageName: document.title,
    pageUri: window.location.href,
  },
  onComplete: response => console.log(response),
});
