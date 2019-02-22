!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){(function(e){var n,r,o,i;function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}window,i=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==u(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r="https://api.hsforms.com/submissions/v3/integration/submit";function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"getUserIp",value:function(e){var t=new XMLHttpRequest;t.open("GET","https://api.ipify.org?format=json"),t.onreadystatechange=function(){t.readyState===XMLHttpRequest.DONE&&e(JSON.parse(t.responseText).ip)},t.send(null)}},{key:"createPropertyPairs",value:function(e){return function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(document.querySelectorAll(e)).map(function(e){var t={name:e.name,value:e.value};switch(e.type){case"date":return t.value=new Date(e.value).getTime()/1e3,t;case"checkbox":return t.value=!!e.checked,t;default:return t}})}},{key:"handleFormState",value:function(e,t){2<arguments.length&&void 0!==arguments[2]&&arguments[2]?(e.classList.remove("hs-ajax-form--working"),e.classList.add("hs-ajax-form--submitted"),t.removeAttribute("disabled")):(e.classList.add("hs-ajax-form--working"),t.setAttribute("disabled","disabled"))}}],null&&o(t.prototype,null),n&&o(t,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"HubspotAjaxForm",function(){return c});var s=Symbol("_validateRequiredOptions"),a=Symbol("_enhanceForm"),l=Symbol("_createPayload"),c=function(){function e(t,n){!function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this._form=t,this._options=n,this._endpoint="".concat(r,"/").concat(this._options.portalId,"/").concat(this._options.formId),this._event=null,this._ipAddress=null,this._submitTrigger=null,this[s](),this[a]()}var t,n;return t=e,(n=[{key:s,value:function(){return this._options.portalId?this._options.formId?!!this._options.fieldSelector||console.error("[Hubspot AJAX Forms] - A fieldSelector is required."):console.error("[Hubspot AJAX Forms] - A formId is required."):console.error("[Hubspot AJAX Forms] - A portalId is required.")}},{key:a,value:function(){var e=this;"string"==typeof this._form&&(this._form=document.querySelector(this._form)),this._submitTrigger=this._form.querySelector('button[type="submit"]'),this._form.addEventListener("submit",function(t){t.preventDefault(),e._event=t,e._options.withIpAddress?i.getUserIp(function(t){e._ipAddress=t,e.submit()}):e.submit()})}},{key:l,value:function(){var e={fields:i.createPropertyPairs(this._options.fieldSelector),submittedAt:Date.now(),context:this._options.context};return this._options.withIpAddress&&(e.context.ipAddress=this._ipAddress),JSON.stringify(e)}},{key:"submit",value:function(){var e=this;"function"==typeof this._options.onSubmit&&this._options.onSubmit(this._event,this[l]()),i.handleFormState(this._form,this._submitTrigger);var t=new XMLHttpRequest;return t.open("POST",this._endpoint),t.setRequestHeader("Content-Type","application/json"),t.onreadystatechange=function(){t.readyState===XMLHttpRequest.DONE&&(e._options.onComplete({response:JSON.parse(t.response),status:t.status}),i.handleFormState(e._form,e._submitTrigger,!0))},t.send(this[l]()),!0}}])&&u(t.prototype,n),e}()}])},"object"==u(t)&&"object"==u(e)?e.exports=i():(r=[],void 0===(o="function"==typeof(n=i)?n.apply(t,r):n)||(e.exports=o))}).call(this,n(2)(e))},function(e,t,n){"use strict";n.r(t);var r=n(0),o=document.querySelector("#hs-test-form");new r.HubspotAjaxForm(o,{portalId:510975,formId:"3f5c696e-313e-4349-8e9f-a12679bb9ece",fieldSelector:".hs-ajax-input",withIpAddress:!0,context:{hutk:"3aea3ab5985f7bc544e847d1f76b5857",pageName:document.title,pageUri:window.location.href},onSubmit:function(e){return console.log(e)},onComplete:function(e){return console.log(e)}})},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}]);
//# sourceMappingURL=client-instance-test.build.js.map