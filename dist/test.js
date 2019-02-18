/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/globals.js":
/*!****************************!*\
  !*** ./src/lib/globals.js ***!
  \****************************/
/*! exports provided: GLOBALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBALS", function() { return GLOBALS; });
var GLOBALS = {
  BASE_URL: 'https://api.hsforms.com/submissions/v3/integration/submit',
  IP_URL: 'https://api.ipify.org?format=json'
};

/***/ }),

/***/ "./src/lib/hubspot-ajax-forms.js":
/*!***************************************!*\
  !*** ./src/lib/hubspot-ajax-forms.js ***!
  \***************************************/
/*! exports provided: HubspotAjaxForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubspotAjaxForm", function() { return HubspotAjaxForm; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/lib/globals.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/lib/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var _validateOptions = Symbol('_validateOptions');

var _enhanceForm = Symbol('_enhanceForm');

var HubspotAjaxForm =
/*#__PURE__*/
function () {
  function HubspotAjaxForm(form, options) {
    _classCallCheck(this, HubspotAjaxForm);

    this._form = form;
    this._options = options;

    this[_validateOptions]();

    this[_enhanceForm]();
  }

  _createClass(HubspotAjaxForm, [{
    key: _validateOptions,
    value: function value() {
      if (!this._options.portalId) {
        return console.error('[Hubspot AJAX Forms] - A Portal ID is required.');
      } // TODO: validate all opts

    }
  }, {
    key: _enhanceForm,
    value: function value() {
      var _this = this;

      if (typeof this._form === 'string') {
        this._form = document.querySelector(this._form);
      }

      this._form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (_this._options.withIpAddress) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getUserIp(function (ip) {
            return _this.submit(ip);
          });
        }

        _this.submit();
      });
    }
  }, {
    key: "submit",
    value: function submit(ipAddress) {
      var _this2 = this;

      if (typeof this._options.onSubmit === 'function') {
        return this._options.onSubmit();
      }

      var xhr = new XMLHttpRequest();
      xhr.open('POST', "".concat(_globals__WEBPACK_IMPORTED_MODULE_0__["GLOBALS"].BASE_URL, "/").concat(this._options.portalId, "/").concat(this._options.formId));
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          _this2._options.onComplete({
            response: JSON.parse(xhr.response),
            status: xhr.status
          });
        }
      };

      var formFields = document.querySelectorAll(this._options.fieldSelector);
      var fieldValues = [];

      for (var i = 0, n = formFields.length; i < n; i++) {
        var thisField = formFields[i];
        fieldValues.push({
          name: thisField.name,
          value: thisField.value
        });
      }

      xhr.send(JSON.stringify({
        submittedAt: Date.now(),
        fields: fieldValues
      }));
    }
  }]);

  return HubspotAjaxForm;
}();

/***/ }),

/***/ "./src/lib/utils.js":
/*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/lib/globals.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Utils =
/*#__PURE__*/
function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "getUserIp",
    value: function getUserIp(cb) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', _globals__WEBPACK_IMPORTED_MODULE_0__["GLOBALS"].IP_URL);

      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          cb(JSON.parse(xhr.responseText).ip);
        }
      };

      xhr.send(null);
    }
  }]);

  return Utils;
}();

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_hubspot_ajax_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/hubspot-ajax-forms */ "./src/lib/hubspot-ajax-forms.js");

var hsAjaxForm = new _lib_hubspot_ajax_forms__WEBPACK_IMPORTED_MODULE_0__["HubspotAjaxForm"]('#hs-test-form', {
  portalId: 510975,
  formId: '3f5c696e-313e-4349-8e9f-a12679bb9ece',
  fieldSelector: '.hs-ajax-input',
  // withIpAddress: true,
  onComplete: function onComplete(response) {
    return console.log(response);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=test.js.map