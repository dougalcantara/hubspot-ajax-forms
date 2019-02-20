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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client-instance-test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/hubspot-ajax-forms.js":
/*!************************************!*\
  !*** ./dist/hubspot-ajax-forms.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/lib/HubspotAjaxForm.js");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/lib/HubspotAjaxForm.js":
      /*!************************************!*\
        !*** ./src/lib/HubspotAjaxForm.js ***!
        \************************************/

      /*! exports provided: HubspotAjaxForm */

      /***/
      function srcLibHubspotAjaxFormJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "HubspotAjaxForm", function () {
          return HubspotAjaxForm;
        });
        /* harmony import */


        var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./globals */
        "./src/lib/globals.js");
        /* harmony import */


        var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./Utils */
        "./src/lib/Utils.js");

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        } // use Symbols to simulate private methods


        var _validateRequiredOptions = Symbol('_validateRequiredOptions');

        var _enhanceForm = Symbol('_enhanceForm');

        var _createPayload = Symbol('_createPayload');

        var HubspotAjaxForm =
        /*#__PURE__*/
        function () {
          function HubspotAjaxForm(form, options) {
            _classCallCheck(this, HubspotAjaxForm);

            this._form = form;
            this._options = options;
            this._endpoint = "".concat(_globals__WEBPACK_IMPORTED_MODULE_0__["GLOBALS"].BASE_URL, "/").concat(this._options.portalId, "/").concat(this._options.formId);
            this._ipAddress = null;

            this[_validateRequiredOptions]();

            this[_enhanceForm]();
          }

          _createClass(HubspotAjaxForm, [{
            key: _validateRequiredOptions,
            value: function value() {
              // TODO: this needs to be DRY'd up
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
          }, {
            key: _enhanceForm,
            value: function value() {
              var _this = this; // TODO: let user pass in the form DOMElement OR the CSS Selector for the form


              if (typeof this._form === 'string') {
                this._form = document.querySelector(this._form);
              }

              this._form.addEventListener('submit', function (e) {
                e.preventDefault();

                if (_this._options.withIpAddress) {
                  // Getting the IP requires a separate xhr.
                  // In this case, submit the form after that xhr has completed.
                  _Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getUserIp(function (ip) {
                    _this._ipAddress = ip;

                    _this.submit();
                  });
                } else {
                  _this.submit();
                }
              });
            }
          }, {
            key: _createPayload,
            value: function value() {
              var payload = {
                fields: _Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].createPropertyPairs(this._options.fieldSelector),
                submittedAt: Date.now(),
                context: this._options.context
              };

              if (this._options.withIpAddress) {
                payload.context.ipAddress = this._ipAddress;
              }

              return JSON.stringify(payload);
            }
          }, {
            key: "submit",
            value: function submit() {
              var _this2 = this;

              if (typeof this._options.onSubmit === 'function') {
                // let user opt-out of this lib's submit functionality and hijack it w/ their own
                // pass them the packaged-up payload as well
                return this._options.onSubmit(this[_createPayload]());
              } // TODO: create xhr micro-lib. There may be multiple XHR's based on supplied context


              var xhr = new XMLHttpRequest();
              xhr.open('POST', this._endpoint);
              xhr.setRequestHeader('Content-Type', 'application/json');

              xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                  _this2._options.onComplete({
                    response: JSON.parse(xhr.response),
                    status: xhr.status
                  });
                }
              };

              xhr.send(this[_createPayload]());
              return true;
            }
          }]);

          return HubspotAjaxForm;
        }();
        /***/

      },

      /***/
      "./src/lib/Utils.js":
      /*!**************************!*\
        !*** ./src/lib/Utils.js ***!
        \**************************/

      /*! exports provided: Utils */

      /***/
      function srcLibUtilsJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Utils", function () {
          return Utils;
        });
        /* harmony import */


        var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./globals */
        "./src/lib/globals.js");

        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
        }

        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }

        function _iterableToArray(iter) {
          if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }

            return arr2;
          }
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

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
                if (xhr.readyState === XMLHttpRequest.DONE) {
                  cb(JSON.parse(xhr.responseText).ip);
                }
              };

              xhr.send(null);
            }
          }, {
            key: "createPropertyPairs",
            value: function createPropertyPairs(selector) {
              return _toConsumableArray(document.querySelectorAll(selector)).map(function (input) {
                var propPair = {
                  name: input.name,
                  value: input.value
                };

                switch (input.type) {
                  case 'date':
                    propPair.value = new Date(input.value).getTime() / 1000;
                    return propPair;

                  case 'checkbox':
                    propPair.value = !!input.checked;
                    return propPair;

                  default:
                    return propPair;
                }
              });
            }
          }]);

          return Utils;
        }();
        /***/

      },

      /***/
      "./src/lib/globals.js":
      /*!****************************!*\
        !*** ./src/lib/globals.js ***!
        \****************************/

      /*! exports provided: GLOBALS */

      /***/
      function srcLibGlobalsJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "GLOBALS", function () {
          return GLOBALS;
        });

        var GLOBALS = {
          BASE_URL: 'https://api.hsforms.com/submissions/v3/integration/submit',
          IP_URL: 'https://api.ipify.org?format=json'
        };
        /***/
      }
      /******/

    })
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/client-instance-test.js":
/*!*************************************!*\
  !*** ./src/client-instance-test.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_hubspot_ajax_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/hubspot-ajax-forms */ "./dist/hubspot-ajax-forms.js");
/* harmony import */ var _dist_hubspot_ajax_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_hubspot_ajax_forms__WEBPACK_IMPORTED_MODULE_0__);

var form = document.querySelector('#hs-test-form');
var hsAjaxForm = new _dist_hubspot_ajax_forms__WEBPACK_IMPORTED_MODULE_0__["HubspotAjaxForm"](form, {
  portalId: 510975,
  formId: '3f5c696e-313e-4349-8e9f-a12679bb9ece',
  fieldSelector: '.hs-ajax-input',
  withIpAddress: true,
  context: {
    hutk: '3aea3ab5985f7bc544e847d1f76b5857',
    pageName: document.title,
    pageUri: window.location.href
  },
  onSubmit: function onSubmit(payload) {
    return console.log(JSON.parse(payload));
  },
  onComplete: function onComplete(response) {
    return console.log(response);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=client-instance-test.build.js.map