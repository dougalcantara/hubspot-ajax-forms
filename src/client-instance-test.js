import { HubspotAjaxForm } from './lib/HubspotAjaxForm';

const hsAjaxForm = new HubspotAjaxForm('#hs-test-form', {
  portalId: 510975,
  formId: '3f5c696e-313e-4349-8e9f-a12679bb9ece',
  fieldSelector: '.hs-ajax-input',
  context: {
    ipAddress: true,
    pageName: true,
  },
  onComplete: response => console.log(response),
});
