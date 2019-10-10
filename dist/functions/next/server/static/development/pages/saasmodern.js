module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!**************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!***************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!*************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!*************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!************************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!*************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!******************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!***************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
/*!*************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/construct.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/reflect/construct */ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!***************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!************************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!****************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "../../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!**********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!*******************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css":
/*!********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/@glidejs/glide/dist/css/glide.core.min.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/common/src/assets/css/flaticon.css":
/*!************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/css/flaticon.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/common/src/assets/css/style.js":
/*!********************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/css/style.js ***!
  \********************************************************************************************/
/*! exports provided: ResetCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetCSS", function() { return ResetCSS; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flaticon.css */ "../../node_modules/common/src/assets/css/flaticon.css");
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_flaticon_css__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ::selection {\n    background: #333333;\n    color: #ffffff;\n  }\n\n  html {\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  *:focus {\n    outline: none;\n  }\n\n  html,\n  html a,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  a,\n  p,\n  li,\n  dl,\n  th,\n  dt,\n  input,\n  textarea,\n  span,\n  div {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n\n  .reuseModalHolder {\n    padding: 0 !important;\n    &.demo_switcher_modal {\n      border: 0 !important;\n      background-color: rgba(16, 30, 77, 0.9) !important;\n      .innerRndComponent {\n        border-radius: 8px !important;\n      }\n    }\n  }\n\n  button.modalCloseBtn {\n    position: fixed !important;\n    z-index: 999991 !important;\n    background-color: transparent !important;\n    top: 10px !important;\n    right: 10px !important;\n    min-width: 34px !important;\n    min-height: 34px !important;\n    padding: 0 !important;\n    span.btn-icon {\n      font-size: 22px !important;\n      transform: rotate(45deg) !important;\n    }\n\n    &.alt {\n      border-radius: 50% !important;\n      z-index: 999999 !important;\n      padding: 0 !important;\n      transition: all 0.3s ease !important;\n      top: 25px !important;\n      right: 30px !important;\n      min-width: 40px !important;\n      min-height: 40px !important;\n\n      span.btn-icon {\n        font-size: 20px !important;\n      }\n\n      &:hover {\n        opacity: 0.88 !important;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ResetCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/footer-bg.png":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/hosting/footer-bg.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footer-bg-61e61976e8a4ea1e4ff698142517ef3a.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/author-1.jpg":
/*!*************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/author-1.jpg ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA7ADsBAREA/8QAGwABAAICAwAAAAAAAAAAAAAAAAQFAgcDBgj/xAAkEAABBQACAgICAwAAAAAAAAABAAIDBAUGERIhByMxURMVIv/aAAgBAQAAPwD1AiIiIiIiIiIiIiIiIo+haFGhZuuMYFeF8pMsgjYPFpP+nH00evZPoLQ2TzT5PzcV2FyPkuhc22swb1/RzhS0Gx0bjpmPkpRw1I/KQvrv7jcyfpha5hkPatcP5y2qWbxensYZv2uSa+lj0rVmyylI41tJ1aOWzF4fUHwhri5o6MxbEGNMsYVc/nXydmN3DY3f7C3rZ+tqYApWqNupXq178cR6ayvG/wDmjisRBgdNM2R7Xh3TumrYHxNyjV5HHyepo2tK5BibYoUrmnRFO3YhNOtOTLEI4/FwknkaPrYfFrex32T31EQgEdEdgqhg4BwSrlWcKtwrBhzbkjZbNOPNhbBM9vRa58Yb4uI8W9EjsdD9LnfxDiUkDar+L5DoW1WUmxmlEWiuxwcyEDx68GuAcG/gEdgLGHhfDq8mlLX4njRP2WubpOZQiabrXElwmIb9gJc7vy778j+1NycfIwaLMzDyqedTiLiyvUgbDE0k9nprQAOyST6/JUxERERERERERERERERF/9k="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/author-2.jpg":
/*!*************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/author-2.jpg ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA6ADoBAREA/8QAGAABAAMBAAAAAAAAAAAAAAAAAAYHCAT/xAAlEAABBQABAwMFAAAAAAAAAAADAAECBAUGBxIiERQhEyMyQXH/2gAIAQEAAD8A1AiIiIiIiIiIiIiIiIufQPOtn2bIvzEGc4/bkT5aLu3jFnlL+Mzu/wCvlZNDyfWz6efxmn1GFuVPo1LNrkZuWaedRsnlSts9U1shjTrHgSATOMbQYjEi0xj7W9bIyesPKg6HFMAxqpaulg59u7pXs48bNa4SoQjVDiFJ4tZO8GnCMX8WjOLxlKYe+HZXJdPK4Vcx6XPJchHCfHJWOTQ39AVWblNP3NaxYMc0qUuwPrOYex29yJnFHxZ7s6Lad/X6b5lzTvFuHY1wLnmeR2JAdosIOM0vI4uyMew0vIsO0jszydlN0RERERERERERERERERERERF//9k="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/author-3.jpg":
/*!*************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/author-3.jpg ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA3ADcBAREA/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMFBgcI/8QAJxAAAQQBAwQCAgMAAAAAAAAAAQACAwQFBhESBxMUIRUiIzEXMkH/2gAIAQEAAD8A9QIiIiIiIiIihu3aeNpz5HI24atSrE+eeeeQMjijaCXPc4+mtABJJ9ABZN3Wjo6zHwZZ/VjRraNmaStBZOdqiKWZgaXxtfz2c5okjJaDuA9u/wCwtZdu08bTnyORtw1alWJ88888gZHFG0Eue5x9NaACST6ACzX8tdKjgDqsdTNKfCC14JyXzNbxfJ48uz3efDucftx33297LSUb1LKUq+SxtyC3TtxMnr2IJBJHNG4BzXsc3cOaQQQR6IKnRZjqbjosv091DirGMyWRguY+aCepjXtZanhc3aRkRPrmWlwA/wB/Q9lcHy2Lzck2byuMo9VXSwwX6+gLhfkO9HLJDTcYrTZB3hE63G4tN38RYx3L6iNXOp8drPLan1hjs9i9b5HRuQx12pWp0ZZWmW6YIRcDA8biB0fcFYP+hkFnj/eBSSYyO5VFrUNDqfZ0tS1JNPp+eB+TGVqsdjRGXyNA88xGaS2xhd7HIcvxFq7JoIagGhdODVplOcGJp/J97hz8vst73Lh9d+fLfj63/XpXyIiIiIiIiIiIiIi//9k="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/banner-image.png":
/*!*****************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/banner-image.png ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/banner-texture.png":
/*!*******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/banner-texture.png ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-texture-bbd8b16f6fedd2a04de59b17f6868b24.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/dash-1.png":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/dash-1.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/dash-2.png":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/dash-2.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/dash-3.png":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/dash-3.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dash-3-93904cff96748d03ca5773879ff6bb96.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/dash-4.png":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/dash-4.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dash-4-93904cff96748d03ca5773879ff6bb96.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/dash-bg.png":
/*!************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/dash-bg.png ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dash-bg-afcfdf67764813472be185c43c6e7e39.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/icon-1.png":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/icon-1.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/icon-2.png":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/icon-2.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/icon-3.png":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/icon-3.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/icon-4.png":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/icon-4.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/icon-5.png":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/icon-5.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/icon-6.png":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/icon-6.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/logo-white.png":
/*!***************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/logo-white.png ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-white-876c9a8284bfdf03fa414489643b9a2c.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/logo.png":
/*!*********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/logo.png ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-b73048211d7a9a05b4c449061f130c5f.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/map.png":
/*!********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/map.png ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-40ffdb360205f038eec59b94bd1010ed.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/partner.png":
/*!************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/partner.png ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjAAAAHwCAMAAACPL6V0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACOlBMVEW8vLyvr699fX1NTU0tLS0UFBQJCQkDAwMPDw8dHR0xMTFdXV2Li4u4uLiqqqp1dXVJSUkkJCQVFRUHBwcEBAQiIiJCQkJubm6np6eAgIBAQECEhIRTU1MuLi4ICAgODg4bGxs4ODhhYWGSkpIXFxcAAACZmZkFBQUTExNmZmaysrJDQ0MBAQE5OTmTk5OkpKQKCgoCAgKrq6tWVlYMDAxnZ2e1tbWwsLCxsbFHR0cSEhKMjIxLS0u0tLS7u7ssLCxqamp6enqOjo6Xl5cWFhZiYmKzs7MjIyM3NzdERERra2toaGgqKiqWlpatra2urq5ISEhjY2N2dnZkZGQ+Pj4wMDBYWFhycnJcXFwpKSm5ubkcHBwoKChVVVVpaWlfX18/Pz8mJiZQUFCsrKxSUlKfn59aWlpFRUU6OjoGBgaIiIiHh4dvb2+goKCCgoJ+fn4hISGcnJyKioo8PDwaGholJSWFhYV0dHQ2NjY1NTV3d3cLCwumpqY0NDReXl6enp5OTk5sbGwrKytbW1s7OzsyMjINDQ2dnZ1gYGCpqakRERGBgYFlZWWioqJ8fHyampqhoaGNjY09PT0YGBioqKilpaUfHx+2trYvLy8zMzO6urpUVFSYmJh5eXmUlJRMTExGRkaGhoajo6N7e3tPT08QEBBzc3MZGRmPj48nJyceHh5xcXGVlZVKSkqQkJB/f39XV1d4eHibm5tZWVmRkZGDg4O3t7cgICBRUVFtbW1wcHBBQUGJiYn+/v7L78+rAAAAAWJLR0S9PdXSeQAADv9JREFUeNrt3f1/1EQewPEtTy3SVm0LFJVn0kJZaAtSsQd7ggI+UERQeaggT1WLRRQKKg9CeegBelhFW6meoIgcCqjooR7+cWf3+80mmcx0s7av++nz/gUymc1mspNkZvKdNJUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAsCoaMXLU6DHFJWPvGVdaNki+8nvvu7+isqpk/ISJ1cP49ZMe+NME19qyBx+aXDGleOq06TNmDlM5YJrludTEM9dMqA1lmD2nzrHRmrlVQbb0vPnDtbP1DQMbbLSvXLDw4dDOjV3U5N5O0nIg5hEveYVZ/GjayNL8N9s2y8YVR7Ollywdlp3N/N1zVpjMYw3GzlUsc2wmaTlgsTx5hXn8iXie9Ir4JldOjudbNSz3pRmes8IsftJSgqesF5mk5YDN04krTOkYa65nzC3WrbZlm7Zg6PvaUuysMGvut+7cqmfjWZOWA1Zrk1aYFv84V01/bt269fMq/XNzkrHF5/0VL7w4ccPGyf7Vf9Pmoe5qU6vnqjBNL+X2+v4tWze8vG2KLm2PtU4SlwNW2xNWmKLZelx37JSER3bp+d4c/U0m6qe31cty23RNeGWou7rE37F4hXnVX/VamyQ0bdUWzZNGzsTlgNXm9uzBmlhjEWkAbJOj2rA7SHpdT+Nd4XwL5AROdwRJc/SM3jO0XX3Dc1YYf1Xl3iCt+k1J64hmTVoO2L0lx6o8X77depwjV519cruZsjKUNlIyPhfOpzVm/5D2tLzEWWHKOnXvlodTi+TiOSVStsTlgN0yuRrny5Y5INeNg9FkvUm8HaRUy/X9nWg+Oa3TbUPZ03c9Z4U5pOlGK6T+cOzCkbgccFhovdHHvC5HdIeRfEROzaNBynvygxyL5iuX+9TxIexol1wZrBXmhOzdSPMzG7LJ7aFLTOJywOFo9kidzJftlKNZeDqb3p1bzsgQx7tmvh2S76+Pwf8j25kZfcZWYc7Kz125xvxQWXN2xfrCywGXc9kj9X6eXDvlRvNBbIWc994//eX5snzezPehpD/4V3ezbFX2wrWvy1Zh7nVcYFKpk9kVqwovBxzK5UAdyZPtbbkfxPudPZOfH7mxa1nu3JYrQFU84yzXb5rMQm2NWCuMtrM/in+sVNacLbgccJBOQ0m+bB9ns03Iv71R2Yyr4ytkfPCCLNT1iJ2xbJ/Iik+N5NLsTae3z15hPssm1vbFv7WpOHrBS1wOOHyQPYIX8+TKdGezjci7uX4Z1fk8vqZDznWpImvkRuiVmAP3j+sz7vXR5KKK7HXri5S9wkinertth5oj+5O4HHCZkD2CL+bJ1SM/Y1Heze2RjIfia7Rxo93Zg9oPnhvN1DRWkk9nounSKx8Y2rFWmKn2hvaA3sgJkbgccOlNdMr9K5trVv7NvS+/yJfxNWuil45LXqQCKW2MlBjDiDLMcmKgFlkrTKWt8olN4Tth8nLAoa8x6Bwc69hy+dSEXV0t/bFsL2Zzncq/vefcp3BDpNW7dJrkrAi3P/W6k/4q+kkJmhrz9cD/rRWmwd0ykUtWcX+B5YBDS/YIHs6kqk82e76SHT1GNnn+vFAW6q6sPVBS1d48amFpxtzeN9mMlbavkifNuaGxL/WJ36Ugx86rkvRQ9IP9Miwno7DWCtPsbohpY6m8wHLA4dvsEXyhaEk0Qq5xSfQaIbEmWwf+Wz+yMsj3RJcxEie/yDXbV0n/KRgSeU8vJ8HjH42AOmBs80z4smCtMLJ7Yy1fWqexFR8WWA44yADsmyWeafa/w9mm+i2d/hmV0Xy90eaK1Irrtq+SMdYncsubpXnhTfOfiWtYxJie6OfkUnROR0isFUY6y54lQksfNXrLCywHHEZ5LlVXglyZtB71oovxfJEHdt9l0+6xfdVT2VUNQUKPBhXoHaJNf0Kjh6WNHX+I2FphVsgn18W/dKHu5cECywGHw84K46WDrpP2cL5cfMCWcWtoezKeaw1j0B5QqLnwvaQ03hhYKNMQS7OvczObusRftFaYW/LRN2NNkaZu3ccfCiwH7OqDw7V66/yizUVtk25e9VNqb/jZdHSl5jNdc/XAxe3ngpoVuhZJ89PaX3lIcocbCxqKt2ogdvNH+X+nMWov/fRpuTkH1grTr7fUn8zvnOPv4/kCywG79/2DdT2Y9rV0hR/z2um3LmpkWQb5xrwisUe3T/phs5VBmIuc0a/avkvvDuHpJjv1h/4glVoud4uqluiHJGiqMZjWZK0wqS2ynQYj3qYmN/doWYHlgJ32VLyfI0Mvt/2pbeM04Ubowr0/GFQr9yd2BI+OpB2y1vZdMgbiPRJO08jKyiMrL8j/5kQ/k5Hgi41Bir3C1OsThQuRn3xPMEXvSoHlgN1++927XMdkxuiv+0twnH8MtxP679PUXCTtIBXmZ0uF0RaK97EO/B41WiGPZVO3h6Yb2CuMf7/zun8I0g5ODXZ7b4HlgN3r62+e7qy6GUu/pcMyOlUnmOt2OZov84Le0fyEw3lvSdGZZSs7Qye9d87oGL/VHrtTOCrMymv+Nk5cWTyQsHSSdIS0x/2fAsuBQWTijwL8yUovyVLuzPzOnEhYrnM5dGAsJY2SwRq9xjVkZmNQX9K7o+vujM8md4XTHBUmVRNMTivuPDGqVVsvrTvl39ICy4EC7ZE2aFoGfFv8Ax0LpPObm2d0cbSc1rZNHpdf00zeGFSYhcaqzy23KVeFSe02RuKyKj7VnvSNAsuBQl2XAyiPAXUqinch/szliKw5rYu/ym9s26JMNWswkzdf93/F68bwvMz96D4bSXRWmNTy+HD1qmo/oOHrAsuBQmmLQ5rD1XqgL1kyyjNFP3paZuGfsG1RHg3EHzPt0UtDrRFPWyRXKyPywl1hUkdOR6tL45am3EWlrsByoFDn5dDKg+M+PdC2ka214V9Eu122x4Bal+I91z4NdDCrhjzHNNvPg1SYVGrSgVCD6PnbA0lfha9rycuBQmn0tHagdGjrF0tGfQGH9mS+cZ+nEpkSj0X5zf+JozefZyWxYWqU7oku3TE3VnPm6IXKxsOt27p0mEXGentTBZYDhdJB0cuy1Os+mhqr+7gsLZKlO5aM0g85bibvC17tczHctFjjJWAJ+zbMzeZ7LVVgOVColsjd/jVZqrdk/ElWfSFLk2TpWDyfVoAuI1lbKuLpeP6hVhhphfsxy4nLgUJpIIm+oUObwJZ33qV+l1XaYm2TpTfi+TQI3Hwz2APh378yVNGGp8IslRFIv3mUuBxwulPdY0vWE05flaFNYNsbd/TerxF6GbnxWIYzItNMciQq2xv7jPwbCrYbngqjUcL+NKfE5YDVq5s6//yBr9pWSSie3zzUMAjbDGzpXeS2IZED81z5LkQTj8ijhPTMzKjIFS01XBXmePRbk5cDNifct/TsVGavyh9Cl+e+mywZpfOTi7GT598Px99OJo+jl0TS/Ec4W1KpPTIDrtHWgQmzd6tLf5qzZe498fZHRqJdjucSEpcDNhoE99/4mp509PhJdzkdv8OflU3M8JcdTZXUbS/SmBCLJDEb1bte/n8tzzt97BVG6sGiWG4NnyjNJSQuB2xkzoBtYFZfsLPBX9ZhmfgU2JNGMzIjkRGxSWW7sslTIuNit+UJYfrWwEK/vmtv7eC7bK8wMl4YfyIhN7rWoLueuBywKaqNtFQCbXKDCN5ykJHh2HbzZbt18gCnN0iRUMsq4xxe0BCvDWXj5dt/k8UPNQjK0sMKsVeYFZJqvndNLzChrnzycsBGo0W2GwEOfeNjjUMJZYqOraVyL68MvXdQn3MboVASFelF3iCvfdxrftDmOFkuGfR9vvYK05ZrC4V9KhFUU8N3ucTlgI0fURR9bcsdDcRrXhxK03DH6KxE7SuPDoeXbLP0RPTl0ZEX32kUbzrX3CmTQTZv+mB77HiWJHOcqm6H01bqTe77SNkSlwM2d/0aEwotWOMH1UcCFnUM11sbOqg6ehKN1m/TaL33gqTftW68FcpWNytWV29oMJWlEZ7jqDA6bFQR6vC1yRwp73r0YpK4HLAp9ycmrfJfo9D0mP8XQYwgAA2/9TrP6w2szZ8NZtx+9NbivdMjy9V+rYwESOlNYFb4fqE3qSk97h12VJiMvq2+e5126Pv8v1TxsPly4MTlgM1HuZkYnSMnjnh7xf5c4NpRYyylz7/weM03O0Z8+94mf7HCeM9Xmb+m8eL6KyMWzfP/Ds7q8Ab3auIf4U82aaTDpv6UizNE0y9HxZKOEcsW3fX/sEnjH2bOxOWA1RvGH6rxnY4NiNRNtmacHXv2u7PTlq81HL1wVqckGvHnt/TR9cvO3XXGw0xqtH1pu+XNN4nLAavd3bbDd9PyOoOyRy0Zv+uJZywfH8/XG+7z6nyj6NthBugTieIbKQd3ANWh2viXllgHjhOXA1afnIodvVmO17DunW1kTB+3diyaLpl/wOpS5A9s6UtOjfdP/cmf0Nbq6q8MEnFXM9bcuUddN5mk5YDdzI+rwkfv19/vuHI2LQrfbmrvHnNlbJkXnj8yPfI3AHIvargc/9w+/Yjr/ayDhWj2dUwL7Vz7U4O8wSNxOWBXdH7H5FlT0rUl47c9M/jcnMz8GfNaDxe3N2+/eWjxYBk/6bg7vruqvfnXCR31qf+TzC8zjo4tKW64sGnHsjyBConLAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN//AJbRva6EpOv/AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAyLTI2VDAxOjQ0OjE4LTA2OjAwT9gamAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMi0yNlQwMTo0NDoxOC0wNjowMD6FoiQAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/process-1.svg":
/*!**************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/process-1.svg ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODciIGhlaWdodD0iODciIHZpZXdCb3g9IjAgMCA4NyA4NyI+DQogIDxnIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MDQgLTEzNzkpIj4NCiAgICA8aW1hZ2UgaWQ9Il9QYXRoX1BhdGhfIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7IiB3aWR0aD0iODciIGhlaWdodD0iODciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwNCAxMzc5KSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGY0FBQUJYQ0FZQUFBQnh5TmxzQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQTJSSlJFRlVlSnp0M1U5SWsyRWN3UEh2ODh5eHZVNmJPbWVtVUoyNkZOMkNEcEZVRXBRV25qcEYwQ1VJdkJSRmh6cDFLWWlnb0tJL3R5QVVpZFFnT3RpcFM3Y3VVY2NJclZCTFZEQVZ3VDBkWHVlZk9lZXIrWFA1N3ZjQllXeDc1Y2VYbDJkNzNzTmVZOTdmWnhYMXdIR2dHZGdQMUFHeDFRN2FzbHdHOXV6OFNEUnlocW1aVWY1TWd3RWNFSTFBUE9vL0RxQ3N3R3Yxd0ZYZ0xIN1EwdUFNeEtMTlZDWjZtQjVwd2JrSmpGblh2N0lyUE44R2ZBQXVVMHBoc3h4UUZqMU1WV1VIMXBUakFwNnFPZkxGdlExMEE3di9ZYndRY0pEd1dtbE12OGFhcXZVRXpvMTdCN2kySWJOdFpmT3JnSU9FZDR5R2RNOTZBaStPZXc2NHNrSGpoWWlEaE5kRVkyMFAxbXdMK21FR0MzSFQrTXVCeXN0Qm9yeUo3VFV2Y0M0VzlBek94cjBCN0JDYkxSUWNsSHV0MUZhOXdwaGtrTUFXYUFET2k4OFdDZzdpc1pPa2t0MUJBbHZnRkZDNUtiT0Znb040N01oYzRJSnJzTVhmZmFrMW1RdGNrK3lFbGRkZ0MremIzTUhDd29FWE8wR3Fxc3MvZzVjSHRrRHQ1Zy8yUDNPUXlRUi9yeGM3VFNyWmsyOE5YbW43VzdveURpYW0xbkRBa2pVNHVYZ04xcmk1cklYaGNjak1ydUdnK2NBdmdYajJETmE0dWF5QmlVbjROb2lmSitnVk1RZnhXRE9wWkFmR1ZPQTBibjVsRWVnZmdxL2ZZWFlXUDFPUVB3T2UxMFpkZFM5bGtXU2g2N21sTFdLaGZ4aEd4aUZkRFJXZS8xd1F4aHdGdWpSdUlSRUxrek56U3dTczZhSzVjWWMwN21xc0lmaTZ1NWlaMWpWWGtNWVZwSEVGYVZ4QkdsZVF4aFdrY1FWcFhFRWFWNURHRmFSeEJXbGNRUnBYa01ZVnBIRUZhVnhCR2xlUXhoV2tjUVZwWEVFYVY1REdGYVJ4QldsY1FScFhrTVlWcEhFRmFWeEJHbGVReGhXa2NRVnBYRUVhVjVER0ZhUnhCV2xjUVJwWGtNWVZwSEVGYVZ4QkdsZVF4aFdrY1FWcFhFRWFWNURHRmFSeEJXbGNRUnBYa01ZVnBIRUZhVnhCR2xlUXhwVmpOSzZjR1F1TUZudUtrQnEyd09kaVR4RlNueXpRVit3cFFxclBBcjNBUkxFbkNaa3g0SzBGQm9ET0lnOFROcytCb2V5M2hadkE3eUlPRXlZL2dWdXc4RDEzQUxoZXRISENwUjBZaEtXYmlLZkFvNktNRXg1MzhXOTNCaXpmb2JVRER6ZDFuUEM0Ujg1ZHVYTGpPdnpBRjVrN3RkV3FmZ0FYZ0V1NUw2eTAvWDBNSEFTZUFPTnljMjFwWThBRDRBRHdMTjhiVElDN3ArNENXdkR2bnJvWFNMRyszNW5lNmh6d0MvZ0N2QVBlQVAyRkR2Z0xUSTZkb09VazlZVUFBQUFBU1VWT1JLNUNZSUk9Ii8+DQogICAgPGltYWdlIGlkPSJfUGF0aF8iIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiB3aWR0aD0iMTAiIGhlaWdodD0iOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDgxIDEzOTcpIiBvcGFjaXR5PSIwLjIiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQW9BQUFBSkNBWUFBQUFMcHIwVEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFIVkpSRUZVR0pXRnpLRUtBa0VVaHRIaklCYWpQb2FQWVRBSmluVzZyeWVZZHNHZ1JidlJaclNzaTdZRkxSTkVkblp2K2o4NDNFR01jWVlkcG1pMDMyMklLN2JZWTVTQms1QkdpVGtlR2RpRW56aGhpYnBOaHI4K1k0Vm5INFJEK3Z6dWczREVHbFhxVHc1Q2dRVmVHSGRCdUdDRCt4ZlNmUlgxY1VURjNRQUFBQUJKUlU1RXJrSmdnZz09Ii8+DQogICAgPGltYWdlIGlkPSJfUGF0aF9QYXRoX1BhdGhfUGF0aF9QYXRoX1BhdGhfUGF0aF9QYXRoX1BhdGhfUGF0aF9QYXRoX1BhdGhfUGF0aF9QYXRoX1BhdGhfUGF0aF9QYXRoXyIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0OyIgd2lkdGg9IjU1IiBoZWlnaHQ9IjM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjEgMTQwNykiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBbkNBWUFBQUNyRGREZEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUJ5aEpSRUZVYUlITm1XdU1KRlVWeDMvblZsVjNkVmUvcHJ0WFlHQUR1RzlaOW9PdVJoSFUrUHFDbTVoTmZJUWxDK3dtS0loS1NJd2tHeFA5SXNwSGlmckYrTWdxK1BxQVJDUkUxMmpVUkpTRW9QZ0lxTVFsZ1Izc2NmbzVYZS9qaCs0ZTV6MDkwNzJyLzZUU1hWWDNubnYrZGM0OTU5eDdwZGxzTWtJY3h3RFl0czI0aUtJSVZVVkVFQkdxMVNvaVVnZHVBTjROdkI3WURSU0dYUktnQWZ3ZCtBM3dNK0Rwc1FmY0JtUmE1QUNNTWRWcXRYcWZpSndDcnRpR0hyOEN2Z2c4dm8wK1c4Sk1ROGpRY3U4ckZvdFBpY2dadGtjTTRDYmd4OEMzZ05vMGRJSUp5WW5JeUdxZktwZkxqMlV5bWIwVDZuTVMrRGt3cVJ4Z0UzSnBtbTU1SlVsQ21xWm55dVh5ZzQ3anlEUVVBbzRBUHdJdW0xVFFtam1ucXVUemVYcTlIbW1hYnR4UmhEaU9QMUF1bDcvdmVkNmtlcXlIWHdQdkJmbzdGYkN1NVd6YnBsUXFrU1RKeURwcnJpaUtyckp0K3l2NWZINm5ZMitGRzRFemt3aFlsNXlxa3MxbUtaZkxpQWpHbURXWHFuNjJXQ3pXUmFibGpldmlQbURmVm8xRzBYbzFOZzBvbnVlUnkrVUlnb0FvaXBhdU1BejNXWloxd25YZG5hazhQbkxBSnpkNnFhb2JFb014b21XbFVxRlVLZzBhRDYwRzNPRzZybnVSclRiQ2gxZ25QWXlteTJZWUt4VlVLaFh5K1R4UkZKRWtpYVdxTjJlejJaMnB1bjNVR2VUQkpTUkpRaHpIYlBWeHg4NXpNek16ZUo1SG1xWlhBdnVHZ1dWam41Z3Uzakw2TTVvYTQzak4ySFdXaUZDcjFVaVNaSS92KzduNStYbHROcHRrczFrdEZBcmtjcmtOUjF0TUl4cFJCeGcyVWVVMW1SS3VHWHY0L1FCaEdOTHY5eG5YYThhUnZwZUJXeHdWa1lQMWVuMVBITWVxcWtSUlJCQUVMQ3dzMEdxMXRGZ3M0bm5lQ3BMbm1zOXoxL01QODByVUFSazZTcHB5alZ2bGtVT25PT3lOVmFtVmZkK24yV3lTeitmSHN0cFc1UFlEOXdNZkJKYXl0R1ZaV0pZRmdPdTZGSXRGVkpYRnhVWHRkRHJxKzc1V3ExVXpVdUFMTC8yVUY3b3ZnYjB5SHo3WCtodmYrZGZUUE9BZDIxQUJWZFdoRys1dU5wdDNEKzhYakRFdk9vN3pKeEhwTGlzQnh5YjNDZUJ6UUdVVDhrc1FFVHpQRTgvenBObHM2dno4dk5hcU5SRWpCQnFEeVNDeWNucXJjVWgwL1dnWFJaRjJ1MTM2L2Y1bzFiRlhSTDRNME8xMjZmVjZXSmIxejF3dTkyU2hVUGg2SnBONWFrdHlxdW9BWDNVYzUvUTRwTlpEcFZLUlhxK243WFk3TFZmS3hyQ3hDOG1xZDJtYWFydmRwdFZxb2FyaU9JN21jamxzMjFiTHNnVFFORTJKNDFqQ01MeTYzVzdmMmVsMFRwZEtwYlBsY3ZuVHhwaFhOeVFYUmRGRGxVcmw5RENYN1JpZTUwbmcrMmlVcFArZGFKc2ppaUp0TkJxRVlVaWhVTUR6UE0xa01oaGpsbitCcGY5cG1tb1lodlI2UGF2VDZkenUrLzZiZHUzYWRZdHQyOCtPMnBpUnYvcStmNjlsV1IvSjVYSVRFUnNoNjdvaWxoSFlPbHNFUWFCemMzTmtNaGxtWjJlcDFXcml1cTZzSXJZQ3hoaHhYVmRxdFJxenM3UHFPTTdyNXVibXpvVmhlT05TbXlBSThIMy9vTy83bjU5NkVXeTJDR3NDS0xxd3NFQ2xVcUZXcThsT2xrNjJiVXU5WHFkVUt0WG01K2UvbHlUSmJnQVR4ekZoR0g1R1JIS1pUT1pTSldWZ01PZVNqcS9GWXBGQ29UQnhMVmNzRmltVlNyT3RWdXRMQUxhSXZGWlZqMXVXdGEyOWs0a2hRdC92cTdFTlh0NmRXcEU2cktMZTcvditlNHlxSGxkVjE3WnRuVFNRYkJjaWd1UXpVeCswVUNpUUpNbTlSbFhmT1h4MlNWMFNWZHpzOUN5MkhDS0M0emhIelRCQkFwc2twRWtHMnV6bFJmeWNtVXpHc1lFWkdDd2pScHVyazhCUEkyNzk2MW5PK3cyTXNmbkw0Z1hFT0d2YWlaWGw3S3UvNHhldEYwalRtTXV5RlI0NWVCc0ZhMnBMS2JVQlMwU1cxa2lPczFhUjdjQVNnMjBNdi8vM244SEpnVGpyZnpBeHZCd3M4TExmZ0tqUHNTdHV3QkZyb3JGWHd6RGNYVXJUVk1Jd25GaWdJeGJmUG5DU0QxLzVEa2czWDFDS1dKREUzSHo1bS9uQm9WTmt4MThDalFVRHZESzY2ZmQzdkl1MkFyWVl2bm5nVm83dE9vckdHOHZVdU04YlovWno5dURKcVJPREFibG5ZYkEvTXF6Q3B6TE5zOGJtNFVPMzgvYnFkV2k4dU9hOXhqNkhpMWZ6NkhWM01tTmZsTzFCTWNCUFJuZHBta3FyMVpxYTlJS1Y1YnVIN3VCSTZWbzA5cGVlYXhKd29IQVZqeDMrS0xPWjh0VEdXd1Uxd0JQQWl6Q3dYcS9YazA2bk03VWdmWG1teEJQWDM4UDFwV3ZRcUl0R1hmWjdzeng1NUdOYzYwN3R6R005UENmbno1OEh1QWQ0YVBSVVZiVmVyNVBQNTZlVys4NEhDOXovajBmcEp5RVA3am5PdnR5dWFZbmVDQ2RHNUxJTURnTGZBRXRIVWxxcjFhWks4QkxpdDhCTm83b3VBRTRCYlZnNm1wSkdvMEdyMWRKTHVJVTNNYUlvNnNWeGZIY2N4L0h5b3ZVUHdBbUdlVzk0REN6TlpsTXVYTGhBdTkzV09JNy9YMGxxRUFRMEdvMmcyKzNlWWxuV003WnRNM0xMNVhnWDhBMEc1OWlEbnNNOWVjdXlOSnZOa3MxbUdhNGlSQzdSbnZwcXFLb21TVUlVUlJJRUFXRVl6b3ZJYmNWaThmRnllUkNCMTh1YzU0QzNBZzh3c09UU1liNnFTci9mWjNGeGtmOFZxV1dRWldmeHY3UXM2K01pOHNjVkRkYXgzSEs4RGJocitIdlJqM1MyaVJSNHhoanpOV1BNRDRmMzVQTjVScGI3RHlpRklkNGRtSm1HQUFBQUFFbEZUa1N1UW1DQyIvPg0KICAgIDxpbWFnZSBpZD0iX1BhdGhfMiIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDQ0IDE0MjYpIiBvcGFjaXR5PSIwLjEwMiIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBd0FBQUFPQ0FZQUFBQWJ2ZjNzQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQU1sSlJFRlVLSkdOMEtGT0EwRVFnT0h2THBpS2FreUQ0UjJxRVFpd1RjR2Rxa09jb3haRFVrTkNFRlVWYmNJNUVnemhMUkJWSUREWWlpcFVnemhFNzVMTjVySXd5U1k3cy84L081bXNLQXFKNkdHQXo3YVFwMmhVT0E4TEtXR09FYjcvSTVTNDZucm9FaVo0Q1BJNkpWeGlFZFd5TURrSTdxZFl4UUJtdUc2YXY3WENFTS8yYTR6anNEbFE1VGpHRS9vZGNCaDN1TTF4ajZNLzRDV21tcmxLZkNUZ1Ivdk4xYTN3aFRFMkhmQkxDTGNDdk9Nc2tsNXhnWit3UTdqV05VNmFXYmU0d1M3KzhoZkh0Q0JMVm05ZlNRQUFBQUJKUlU1RXJrSmdnZz09Ii8+DQogIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/process-2.svg":
/*!**************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/process-2.svg ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODMiIGhlaWdodD0iODciIHZpZXdCb3g9IjAgMCA4MyA4NyI+DQogIDxnIGlkPSJDYXBhXzEiIGRhdGEtbmFtZT0iQ2FwYSAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODE1IC0xMzc5KSI+DQogICAgPGcgaWQ9Il9HcnVwb18iIGRhdGEtbmFtZT0iJmx0O0dydXBvJmd0OyI+DQogICAgICA8ZyBpZD0iX0dydXBvXzIiIGRhdGEtbmFtZT0iJmx0O0dydXBvJmd0OyI+DQogICAgICAgIDxpbWFnZSBpZD0iX1RyYXphZG9fIiBkYXRhLW5hbWU9IiZsdDtUcmF6YWRvJmd0OyIgd2lkdGg9IjY4IiBoZWlnaHQ9Ijg3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MTUgMTM3OSkiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVFBQUFCWENBWUFBQUM5VWVPSEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFhQkpSRUZVZUp6dDNFc3lBMUVZUi9Famd0M1lGNUtnV0FWS0tZL3QyWUNCTXNCQWVReHVoK1JmOFVxNkt2UTl2MG5QdmtwTzNmNjZZMkRsOXViNmxmL3JBamdBbnRvYTJBTWUyaHEyQkVQZ2xQSTlXdEhhb0NVYUFKZkFSaHZEdWhBRVlBczRBbFlYSGRTVklBQWo0QnhZVzJSSWw0SUFiRk4yeXZxOEEvcnRmWlkvWTlCY1I4Q3ZuNkJkT3lGakErQ0tPVTVLVjRQQW5JdTJ5MEVBZGltTDlzZXJvZXRCb0N6YU0zNTQrM1J4cWM2eUE3d0FlODMxVXpXY2tMRWg1WTMyeTVOU1V4QW9pL2FZTDE3ZWFnc0M1ZjNrakUrZVBqVUdnYkpvejVueGc3Q1dwVHJMTnZBTTdEZFhvTjRUTWphay9KSHBmYWZVSGdUS29qMmhlZnJVZk10TUdsR1c3S0ZCUHV3QWQ5NHkwellOTXUzSklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnb1lkUkp2WDZ3RDNmL0R1OGlqeStBZFpWSkVpdm8wWm1BQUFBQUVsRlRrU3VRbUNDIi8+DQogICAgICAgIDxpbWFnZSBpZD0iX0dydXBvXzMiIGRhdGEtbmFtZT0iJmx0O0dydXBvJmd0OyIgd2lkdGg9IjQxIiBoZWlnaHQ9IjUxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MjkgMTM5OCkiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2tBQUFBekNBWUFBQUFLTFNFTEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFYTkpSRUZVYUlIdDJiRnFGRUVZd1BIZjdRMkJWSGFwSW1wSzBVNnhzaER5QUxZMkZqWVdkalkraEE4Z0NCWnFtenFGZVlLZ3hLUklJU2hZUkFpQ2lFS0lJUUV0ZHRMdG5jSjlNck13UHhnTzdtRDRzd3Z6M2Q1TjluZTMzdUNLeFR6Rjh3WDNtR215djd2MU8yQ2ZkN2dac00rZ0R0OEM5dGtPMkdPbWhGdTR0TUFleDlpSnlSbVc4Q212YW5XbEEvNUZpNHpTSXFPTUlqSmhpcFhTSVFNNmZNVnB3bXRjelI5RWpNZ281MmY0dzRSN2hXUG11WVpYSFg2V0xwbmpCejRuckdPMWNNd3NCOWhKZUp0WHRVWnhCTFhJS0MweXlpZ2lVMzVkS2xveGJJSVQrc2dYdUlFemRjM3VKZjJqOHBPRUI0Vmo1cm1PemFTZmo4dnF1b3IwdC9zWUJ3bDNjRkYvdTJzeXhSZDVkci9QcTFxak9JSmFaSlFXR2FWRlJrbDRpY3VsUTJZNHhLT0UrNlZML21LancxSHBpamxPNU5sOUcydjV6WnErWkV6eEVYdHRka2Rwa1ZGYVpKUlJSSjQvZDE4b1dqR3N3M2Y2eUdmNlI4ZmFKSHpBNDZqL3UvK251NTM4VTBhbGZ1SHdEOVRJUG8rakJFQ1FBQUFBQUVsRlRrU3VRbUNDIi8+DQogICAgICAgIDxpbWFnZSBpZD0iX1RyYXphZG9fMiIgZGF0YS1uYW1lPSImbHQ7VHJhemFkbyZndDsiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODYyIDEzNzkpIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJZQUFBQVZDQVlBQUFCQ0lCNlZBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBTDlKUkVGVU9JMnQxTTFwQW1FUWdPRm5ROGcxTVpvY3JTYnhwd094TnlFaVJzekp1NlFITDFaaEV4NEdXUkYxZDkzNUNuajRtSGVZWXIvYmJqSEZRZUo3d2hjV2VNdUdZWWcvZkdiRDhJMGZkTE5oR09NWG5Xd1lCbGhwT1pack1ESHp1UlkvdndYRENHdDhaTU5FMERsNjJUQVJkSW5YYkpnSTJtalA2OEludkhiUUpqQmwwTXFaTjRXSm9Bc1YyL0lJVFB6ODd1RjZGS2JpY0xXQktRL1hlelpNN1BucUVzK0FpVlZjT2d1YUJSTkJOK2lqZU1aL0VsemdCUlBNanRzekdVWnFjUVIvQUFBQUFFbEZUa1N1UW1DQyIvPg0KICAgICAgPC9nPg0KICAgICAgPGltYWdlIGlkPSJfR3J1cG9fNCIgZGF0YS1uYW1lPSImbHQ7R3J1cG8mZ3Q7IiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg2MiAxNDMwKSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDUUFBQUFrQ0FZQUFBRGhBSmlZQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQkx0SlJFRlVXSVc5Mkg5c2xWY2R4L0hYOHp6M1h0cENoNVE2bEc2TXpWRkdCdEZ0aGJsQ0dNbFlRcVl6eGwrWmY1Qm9vaWFHUktiVGZ6QXVNekZtaTVycGlESHVuem16R0pjWWs4MWt1T2tmOGdlUXNiV2kyN0FybEFHamt5RXJCUXJsOXQ3bmVmemphUy9RM3Q1N3FhMmZQOC81UHVlOHovbCt6L2M1M3hOMHZ2eHIxNkJPck1jNmRHRU41azJ5dVlDRDJJODkySXRqalU0UU5BaTBCdC9DZmJpNTBjSEgxWWMvNHhjNFdzODRyTk8vR0QrWHJmUnJNNENCMi9Bd2V2RW9Gc3dVcUJ1dllEdGFad0F5V1l2d1Evd0pxNjRWNkNHOGlEdG5BV1N5TnVFdjJOd28wRVA0cmN4ZGM2VU9QSStOOVlBMjRtbms1eEJtUW0xNERxdW5BMnFYbllUWmlKZXFTdEowY3RPTmVCS0Zha0NQNGhOekFWSk1ZaVBsTVZFUUNLWjJiNWFkd3F1QTF1RHJjd0V6R3BkdFdYS0xaN3MrN2JtMUQycUo4dFYyYWp1V1RRQUYrRGFhWmh1bW1KVGQzdHJ1eDdmZmEvUDF5M1V0K3FnYlc2NlRtQUswRkYrZEFGcUIrMmNicHBRbTV1Y0t2bjlidDdaQ3R0WlNrb2pUbEtrN0JKOURlNGg3Y2NOc3dxU3l1Tm02YkxVTjdaZUhmdWJZUHgwOGQxb1VSdFUrVzRPdUVCdG1Fd1l1eFdVYkZuZDQ1TmExbGJhOUh3emFPZEFEMVFKN29yazd4QjJ6Q1ZOS1l1MkZaanRXM2lNL3ZoTm5TMFUvTy9TcTRWSlJJYXo1KzF5WHc4cDZreFNUV0RsSkJBSE5VWDY2RlVxa3ltbHEyOGZ1OHZHRlN5cnR2enpTNjdVei85WVM1YWVHODlXNkkrZUtwRFJaYVpyS2g1SE82OXAwTkxlNkVJL1pjM3BRR0FTaVlDcFdNUzY3Ny9xYmJWMTJPZm4rN2ZSeHp4NTdvN0piZGRTU3E5a2RCTTZYaXg2K3Rjdkc5bVdLU2RuVDd4eXdjNkJIa2dieVYyei9XSkpZMnRUcXNWWHJLMjRaSEIzeG83NjlMc1d4cHFnaG9MU21Rd09NSmJHRitYbnlZV2hCcnVBN0s5WjVZdlVtcmJtQ1Mwa000alFWQm55M2M1MmJXaFptSTJQbndHdjZ6cDF1RkFiMUwyaWFvcnpmSEgvVDJWS3gwdmFsRzFiNTFaMWJMRzlaYURRdUc0MUxQdCt4MG1lWGRsWnMvampZNy9rVGZlYm5wbzJJYWdwQ0ZHdFp6QXNqTDd6WDd4dTl1N3g5ZnFqUzN0MjIxRE4zUGFEclF4L1J1YUROOTFiY0xSZGs2enQ4NFl3bkQrK3ZGOERWTkJJdDN2cmdaMlQzazJtVkN5TkhMZ3piTTNUQ0xmTVhXVDd1bGtXRkp2Y3ZXVzdUaDIrcXVLcVV4SGE4dFZ2UDhFbk5VZTBRcmFMZElmNWV6eXJBZ2x6ZXNZdm5iRHZ3c3QrOWU3RFMxMVpvdHFyMThsM3U5eWYrNVpWVFI3VkVNN3BTN1EreHJ4SExWT2EraStXeUhXL3Q5dmpiKzF5S3kxZlpIQmcrNWFlSDlsZE5DUTBveHQ0UXUxMUQzWlFQUTRVdzh0UkFqKzMvK0t2QjBmUGdnN0ZSai9mdk16UTJLaC9VUFN2VmRBQTlPYnlEbC9ETlJyL01YRmp3MHZ0SDlJOE02Vjdjb1hmNGZZZEhoalRQekZYd0I1eVpLQlJYeU9xbW1qVlROWTBsc1hRY01oOUcwLzVXNnVnbzdzSEppYjA5aEowekdha1FSdWFGa2NMTVllQW5PTW5WaWZFSkRRYjRMT3NGVk9yNUs0SE9ZaHRPL1I5aCt2R0k3SVJOQVNMTFNWK1J2V0RNdGQ3RGx6RndaV08xODdrTFg4Uzdjd2pUSjd0RDkwN3VtQzVoN01LblpEbHF0dlVpdHVEVmFwMjFNdGdiZUFDUEdUOEIvNk9PeStxdkw2aVJpT3VsMUl1eUo1VDFzbFA0NWd4QVhzY1BzQlpQb1ZUTHVORVh0QWwxeUo3eVBvbTdaYVYzdFNlOTEyVlBldnRrY2ZLZlJpZjRMNnN1WHl3a1ZseUVBQUFBQUVsRlRrU3VRbUNDIi8+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/process-3.svg":
/*!**************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/process-3.svg ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODciIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA4NyA4NiI+DQogIDxnIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjE2IC0xMzgwKSI+DQogICAgPGltYWdlIGlkPSJfUGF0aF8iIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiB3aWR0aD0iNzkiIGhlaWdodD0iNTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMjAgMTQwNykiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRThBQUFBN0NBWUFBQUE2aDlkUkFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFMOUpSRUZVZUp6dDNMRk5BZ0FBUk5FRGNXQVhzWElVVmlJaG9iV1hnZ1hVWHhDUzl5YTQvQUh1c1BQWDU3YWY4UmZIYmJmVHRvOW5MM2xSMStPekY3eXdiL0VDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkgrNy8yMDdickhvNDlYbjk5NzIzYTVBMjMrQ2x5SmEzZG1BQUFBQUVsRlRrU3VRbUNDIi8+DQogICAgPGltYWdlIGlkPSJfR3JvdXBfIiBkYXRhLW5hbWU9IiZsdDtHcm91cCZndDsiIHdpZHRoPSI3OSIgaGVpZ2h0PSI1OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIyMCAxNDA3KSIgb3BhY2l0eT0iMC4xMDIiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRThBQUFBN0NBWUFBQUE2aDlkUkFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFQQkpSRUZVZUp6dDNMRUp3bEFVUnVFL0pxNGp1SUc2a1lWck9JVzlpN2lHa001R3NMRFFRaXNUOHlBSEFvSHp3YXR1Y3puYytsWGJ6ZTZZNUpXdU9za2x5YWxucGlSTmt2M0EvQnpqL2JVb3pCK1RiREZUcFhnYVlEekFlSUR4QU9NQnhnT01CeGdQTUI1Z1BNQjRnUEVBNHdIR0E0d0hHQTh3SG1BOHdIaUE4UURqQWNZRGpBY1lEekFlWUR6QWVJRHhBT01CeGdPTUJ4Z1BNQjVnUE1CNGdQRUE0d0hHQTR3SEdBOHdIbUE4d0hpQThRRGpBY1lEakFlVTRqMG4yV0ttbXNKOGxlUVFML1JYbGVSV2lyZitQblcxWHRSNGQrTUJ4Z09NQnhodnZHV1RwTTNuUjUrK1gzM1VyMDV5ZlFQUit3K2RaQmo5N0FBQUFBQkpSVTVFcmtKZ2dnPT0iLz4NCiAgICA8aW1hZ2UgaWQ9Il9Hcm91cF8yIiBkYXRhLW5hbWU9IiZsdDtHcm91cCZndDsiIHdpZHRoPSI3MSIgaGVpZ2h0PSI0NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIyNCAxNDE2KSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFY0FBQUF1Q0FZQUFBQjZTd1NOQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQmVsSlJFRlVhSUh0MjF1TW5WVWRCZkRmbkRQVGxsNFo3UVduV0Nxa1ZCRXJqYWdsbU5ZTFhtdTlZazI4UlRDaU1TRStnTkVZUW9LR3hFdmlMVm9VWXJ4VnZCWGJVZ1dqWWxRa29ROXFncGdnTVNBMldDcllpaWhTMmxvZjFuZkNwSm56N2YxcHFENmNsVXd5RCt2OHovOWJaNS9aYTYvL25qRmZ1QXhlaFgzWXJRNmI4ZHZtcHhidnhSWWNxdUF1d0FYNFRHWHRLWG1HejNmbzV6dzhpcDhQSS9Ud1dud2QxK0tjaXFKdncxWjhBMnNyK0l2d1dYd0tYOFRpQXYva3B2Nm5jUVZPS1BCUGxmNjM0QkpNVlBUMENubmViNHBJTTJLOGVmTUp6TWFjaXNKenByMXVkZ1cvaC9uTjcvUFFML0Q3bU52OFBoZGpCZjdFTk42OENqN3BlM2JUMjlCbkhtdStWcHV4RnpkWEZDYXI1M2I4cXBJUDc1ZlY4RWdGZHhJWDRhT1Z0VmZnOWZoa2gzNDJ5dGZxUjhNSUEzRkdtQUc5LzNVRC84OFlpZE9Da1RndEtJbnpuNGhYczF2OE56aHU5VXNQL3ptczcxQjRKYjdxc2EyN2hEUHhaWFhlQkY0cGZxa0xyc1NiTy9BL0lUN0krQkRDWEhHbjc4RHI4QVl0VHJMQmFtekgwN0FjYjhKOUxmeXpHdjVLbkNpTytFQUwvNlZpRGhmaGlGaUROcmM5SmlieWd6Z28yL1ozV3ZnVCtMZzQrUXV3ZWRqS09ZaHY0Yy9ZZ1R0YWlnNndGMS9EUTdKNi9scmczeU1POWNIbWRmOG84Ry9ERC9BblhJZkRCZjVSN01KZHVFbjVhSFFZMjNBdnZvL2JTajduWFB3R2Z5c1VubzROK0ZrbGQwS09MS1ZWT2NCaW5LYitEQWhyOElDSVdvT3pSZEQ5SXhQWWd0Rlczb0tST0MwNG51S1VUdVBIbTEvRVFKd3JjR0dIMTMxTVRzRzFXQ1E3MlBKSy9sUHhGY3lxNUsvRE5SMzZnVXR4Y1J0aEhCL0E1ZUlaSHBFUWFCaDZZcXJlSjF2dklWeGZhR0s1MklKejhYU2NqOSszOE5mZ3U3SXJ6VmYyUCtjMC9KTms5YnhIMlJaY0xKNkcySmFyWnlMMWNDUHVsTzMzbGtMUmY0a1llL0JEL0xMQWgvMzRrdGlCcmRxTklmeFJVc1lIRy83ZkMvdzd4ZmM4SUIvc3dZcWVic0t2Y1N0K09vdzAyTXJQYkpyWlUxR1l4S1AzaWttc3hZdTFCRXZIb0k4WDRNZVYvSGw0dHBZSG5RR3J4UGpkUFl3dzhqa3RHRzNsTFJpSjA0S1JPQzBvaWZNazNjM1YxT1BJbjRWbEhldFBxaHM1RGJCRWt5OE5FMmRNaG1zNzhHN0RjNS9wNk9IbHNzV3ZWVTdzK25panhCQ25WL0FueExodHc5S0tmdUFKWWdzK3BFNmdwV0lMTHNWRTM2WVpnNzQ1dUFvdndRdnhDL3loVVBoME1XT255ckYvaDNZenRoYmZ4aWw0aGdSZmJSNWxvNWkxVTJRMTNDQ1pUUnMrakxlS0FiMUQ0cGRoNkV2SytCcXhFYnVIaVhOWU1wWjFNbGpiVWRISUFSbnlyV2thdXFmQTM0ZmZpUk4raTdJNXZFdkU3dU9kZUxqQUp5YnZERWtBcnhJVE93eEhaYWo1TEJrdFgxdnlPVXZ3bDBMUlk3RlVOM080QlBkWGNpZXdzT21wRmd2bFdQUm9KWDlTMHN6RHBiOGx0VTFQUnhkaHVyN0hJZDJFb1Z1S3liUnozR2dyYjhGSW5CWU14RG5SWTljK2FqQ3BQbXNaWU1YanlPK0o5ZWlDK1FyUDNCTmh0dUlqeWhlRnlBUmdHeTVUZnovbk9lSm56bE4zUCtkODJhcFhxL05MRjJLbmJQTTFFOUVGRW81dDBUS0E3TnUwL3ZLbStIUEZ5N1RkdWVsTFNMUlpSakMzSzE5OWU3TDRtVE9hMTl3bzJjc3duQzNHYmFYNG4xMzRad3QvZzh5OVZvakgycVc4TTEwaXc3dXptbDV1blluVXQybjliakZ3Tjhnb3RPUUZic0V6SmNhOHBzQW51OFhOSXY1RkVqSzE0VDRSZkxWTVRmY1crSHVhbjJYaXIvWVgrR1FCVElrb1Z4b3lJQno0bkFXaWRrMktSakxoaDlWZGZoeGdTdjFnclN0L1RNUXBHY25wT0VFKzdLRTN6UVkrNTZFT1JVbHEyQlZkaE9uS1A2cWJNTFIvVlRIYXlsc3hFcWNGSTNGYVVCSm5nL3p4N1lLaGw1NW53Q3k4cUFOL0taN1hyUjFyMVE4VFNSS3htT0hpak1zdHF1dms3bkJOK3JaUVFxWHI4UzVsUXprcHhuT25iTmtseDcxQ1lvZHRrakdWUHRneEdmaHRsMm5yYVFWK3I2bTdYZjVONE9SaGI5RER5L0JFV1FsUEtSUW1hbThVVVY2dGZCeVprdXRsOHhwK3lXMnZraEJxbWN6QWFwenc4OFUxcnhNVDJvYXhwdTVKOG8xWk5TenNPaUttY0ZKR3hUTTZ5R053QU4rVEZmUjJaWHR3dnd6NXh1VjZYZWxtKzkxaUlQZkpsYmRTK0VZU3pDT1NJTzRzY0kvS0pIU08zQVg0eWI4Qm9vb3oxakxhL1hZQUFBQUFTVVZPUks1Q1lJST0iLz4NCiAgICA8aW1hZ2UgaWQ9Il9QYXRoX1BhdGhfIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7IiB3aWR0aD0iODciIGhlaWdodD0iNzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMTYgMTM5NikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmNBQUFCR0NBWUFBQUM1UWdoU0FBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUF5NUpSRUZVZUp6dG5MRnVFMEVRaHI4ZEgwcEVRNGRFUVFGZGhDaEJpaE1xSkdTSUtCQlZDcWg0QkNRUUQ0SkV4d3NnZWlnaHZFWWtKRVNCb0VBUUFvbnZLT3h6TmhjbnZuaDNkbTFudnRLeTl1WStqZWIrUGEzdHZqOTY4QVI0Q1p6RGlNVU84RmlBNTVqWTJKd0huZ2x3SVhjbEM0b0lVT2F1WWtFcEpYY0ZpNHpKVmNUa0ttSnlGVEc1aXBoY1JVeXVJaVpYRVpPcmlNbFZSRERCV25RRStKcTdpZ1hsVndFOEJWNERsN0tWVVFGN2tkWnl6TUlMMU0vQWl3SjRCOXdBYmpJb3EwcGFSZ24wS2VXMlBPU2kyNlFmc0ZZQmJGZXZ5cTN5UFVzSUxsS043WEhBUDJBTCtGWU1QL3dDdkUxZVNnbnNnOXdUM0xwY3BjOW04Sm9yN3BOenZLaytsTEFNR1FTUEtDWi9SWW1SMkE2dTYyQ0hwU2pyT3BhbEo1UkE5YkdFSmJJSnpwTVUvSTd0T3ZnYmNlM2gvSmFlSU9zeVdEdnRvQnVSWHU0aHNVbzNQeFRzZW9KYnl5YzRyVnhmN0pyQUxubzNYUTJ2ZFZkd21UbzRuZHloV09lTFRYSE52WHlDMDhqMU9sYldCUDZRN2lhOUdUd1NuQWo5dEZDTDNSRGNhcUtPUGE2R25sQUJaYUlVb2R1NTQ4Um1lbktQeGxMZHdRbHEwWk03MkhraEc1MThIZHVrbnNFOXdkM1NuOEU2Y3V1T3ZTdTQxY2c1TnBTRU9UaSszQlE1TmhRL0J5c0tqaXZYbjdIYU9UYVVPZ2NyQ280bnQzNWdiQXc3ZGhabTdDVDhHYXl3azRzajE4K3gzY1E1TnBSeE83bEloTXR0enRoNTZOZ21YZzZXaURFdFRPNDRzZlBTc1UwVWN2RDBjdXNjTzg4ZDJ5UnlEcDVPcnA5anUybjM2K3BFek1Hbmx6c1BPVGFVU0RuNGRISlR2by9OVFlRYzNGN3VQT2JZVUx3VU1ZM2dkbkw5SEp2NzdWWnF4Z2x1eVdTNTQyYnNXV1BLSEh5eTNFWEtzYUUwYzNDTEVYRzgzRVhNc2FINE9iaUY0UEZ5bXpuV3hCNXdpaHg4Vks3TjJNbTB6TUdINVo2bEhCdEtpeHg4SU5jL1YyQ2pvQjBUY3JBYytsSjlyc0E2dGowbkNDN1lCVHFXQ29JWWR5NENLTnlxNEZZYzdvb3pzU0hVWS9XT0lKY2QxWFpGSWZjRitzUTdObitXS1lFSzNEV0h1KzZHWThHSVI4WGc0RDcyTXlsVlRLNGlKbGNSazZ1SXlWWEU1Q3BpY2hVeHVZcVlYRVZNcmlJbVZ4R1RxNGpKVmNUa0ttSnlGWmtsdVoxSTY4ek1QZVg3cDVDai9BUitBUHNCYTNTQTMzSEtDZWMveTJBK0VyV1NCZGNBQUFBQVNVVk9SSzVDWUlJPSIvPg0KICAgIDxpbWFnZSBpZD0iX0dyb3VwXzMiIGRhdGEtbmFtZT0iJmx0O0dyb3VwJmd0OyIgd2lkdGg9IjExIiBoZWlnaHQ9IjE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjE2IDEzOTYpIiBvcGFjaXR5PSIwLjEwMiIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBc0FBQUFSQ0FZQUFBQUw0VmJiQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUdkSlJFRlVLSkh0MHJFTmdsQVloZEhEZTZFekRHSHJFdUFnTml4QVl1Y1VkcTdETGlTRWh0Wk9ZMEVvOWJlazRLdlA3VzdSMU9jV0Q1UysxK09TY0F2Z0N4MkdoT29IaENkbVNIZ0hHUEtLLzI3SEc4VTVNSVhsVEJMR0FCOXdYUEVWVXpDNDQvUUJXRGtNN3RRUkM2d0FBQUFBU1VWT1JLNUNZSUk9Ii8+DQogICAgPGltYWdlIGlkPSJfQ29tcG91bmRfUGF0aF8iIGRhdGEtbmFtZT0iJmx0O0NvbXBvdW5kIFBhdGgmZ3Q7IiB3aWR0aD0iNjciIGhlaWdodD0iMzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMjYgMTM4MCkiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRU1BQUFBaENBWUFBQUNDOWhZaUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUE1aEpSRUZVYUlIdDJHbUkxVlVZeC9IUHZVNVM2VmhUMWtSb1ZFUkNZRUVoVmtTMm1VczZKU1pGQzlVTHlTaElhQ0VvN0ZVUVJxRlFCTkZtK0NLRGlJS3dvT0lXbFVRTGdaazBsTVlNaFMyME1MVG5UQytlYzczSDJ6amVGUkgrWC9qRFBmdHpmdWM4NXpubmxnWXJBOGJoTEN6RGhUZ1pVekdLWDdBRFcxREJPL2h6dkE0T0VFZmlJcHlIdVRnUnZhbnNWd3ppVGJ5SUwrb2JsK3JFT0FrUFlBVjZHaGg4T3piZ0dYemZrdm1kNFJTc3hOVTRvWUg2ditGcHJCRUxqTDNGbUllTm1KRTFHc0pYK0ZHSWMyd2FiR1pkNTkvZ1lUeUd2NXViUjFzY2hidXdTdXlLbkIwWUZyWVR0cCtLL3F6T3A3aEs3Smc5WXB5R3R6RTlWZnBFVE81VnNiMXlqc0RadUJ4WDRwaXM3RjJzeHNldHpLeEpGbUE5Wm1WNVE5aUVWOFFjZnE5cjB5OXN2a040QWJHNzUrR0gwbUJsb0VmNDBmbXBjQU51RlZ0cGY4ekFiZW1ia3ZKR2NDZWVhSFJXTGJBRzk2T2MwdC9pRWJIMWYyNmcvWEZpbnBlbTlGTzR1VFJZR1ZpSXpTbnpyVlJoZDVQR3pjWmFMTXp5MW9rVkdHMnlyNG5vRllhdnlQS2V4WDNDVlp1aFR3U0NXY0sxRjVWeFdTb2NFNGRuczBMQVZpeE9SbFhicnhicUg5SkNmK054dE5qK1ZTRkdjRlA2bWhXQzJFRVBwZCtUc2JTTTQxUEdkOExQV3FVcTVncTFFL282UEpjR2E0ZnBRb2dMVW5vbjVvdGQwUTViMUJadlpobWxsQmpUbVMzOUVwWUljWWx3OXlRbXRkaGZyN2dYbkp2UzI0UTdmdENHalZYRzh0OWw3RXFKZnB6ZWdRSGdQU3hWRStSNkVaMmFwVWVFKytyaC9qa1dTYUd3QTV5cHRraTd5bmc5SmNxNHUwT0R3SWRZcnVZeXQrT1dySHdTcmhVUjREVThMZ1RNV1l2cVJlanI5SHU0US9ZZHJqYmZVV3d1RFZZR0pvdjd3WnhVc0U1Y1pQN3QwS0JMaE92MDRDOXh4ZjlNYlAzNTQ5VGZpQnR4alRodjRLZFV0NTB6TFdlYU9HK1dwZlFtM0ZDOWRNMFJZWFZxS3F6Z1FYRVI2OFRiWXlVZUZRZnBOdUdhRjA5US8yV2NJMjZOSTdnaTJkY3UwOFJsN1Y2Y2tmS0d4RnRtT0wrT0x4YXIwcGMxM282UHhNcU1xUjIyalZJOW9FWkZDT3lib082KzJJbm5jVmhLdDJKRFdRZzdWKzNtU2JqZWNtbkgxVC9VWm92WXU2QnBrdzh1ZGd2WHVFZDJCdFcvVExlS3NIVkorc3IyRGorTjhvOTR2MHprQ3EzeUFyN1UyS3U2bmpMK0VHK3UvNFhtZlhYNFJ2cmFZWlh1aUxFZTczZWgzejBQblc1d2FKZjZuYkwvS3EzUlRURU9PZ294TWdveE1nb3hNZ294TWdveE1nb3hNZ294TWdveE1nb3hNZ294TWdveE1nb3hNcm9wUnJQL1NCMXd1aWxHdC9ydW1zMy9BVWk3eEJRWnBDTEVBQUFBQUVsRlRrU3VRbUNDIi8+DQogIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasModern/vendor-logos.png":
/*!*****************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saasModern/vendor-logos.png ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/components/Accordion/accordion.style.js":
/*!****************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/Accordion/accordion.style.js ***!
  \****************************************************************************************************************/
/*! exports provided: AccordionWrapper, AccordionItemWrapper, OpenIcon, CloseIcon, AccordionTitleWrapper, AccordionItemButtonWrapper, AccordionBodyWrapper, IconWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionWrapper", function() { return AccordionWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemWrapper", function() { return AccordionItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenIcon", function() { return OpenIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionTitleWrapper", function() { return AccordionTitleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemButtonWrapper", function() { return AccordionItemButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionBodyWrapper", function() { return AccordionBodyWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-accessible-accordion */ "react-accessible-accordion");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__);


var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{opacity:0;}100%{opacity:1;}"]);
var AccordionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"]).withConfig({
  displayName: "accordionstyle__AccordionWrapper",
  componentId: "sc-1inv165-0"
})([""]);
var AccordionItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"]).withConfig({
  displayName: "accordionstyle__AccordionItemWrapper",
  componentId: "sc-1inv165-1"
})([""]);
var OpenIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "accordionstyle__OpenIcon",
  componentId: "sc-1inv165-2"
})([""]);
var CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "accordionstyle__CloseIcon",
  componentId: "sc-1inv165-3"
})(["opacity:0;"]);
var AccordionTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"]).withConfig({
  displayName: "accordionstyle__AccordionTitleWrapper",
  componentId: "sc-1inv165-4"
})(["> div{display:flex;align-items:center;cursor:pointer;position:relative;&[aria-expanded='false']{", "{opacity:0;}", "{opacity:1;}}}&:focus{outline:none;}*{flex-grow:1;}"], OpenIcon, CloseIcon);
var AccordionItemButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"]).withConfig({
  displayName: "accordionstyle__AccordionItemButtonWrapper",
  componentId: "sc-1inv165-5"
})([""]);
var AccordionBodyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"]).withConfig({
  displayName: "accordionstyle__AccordionBodyWrapper",
  componentId: "sc-1inv165-6"
})(["animation:0.35s ", " ease-in;&.accordion__body--hidden{animation:0.35s ", " ease-in;}"], fadeIn, fadeIn);
var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "accordionstyle__IconWrapper",
  componentId: "sc-1inv165-7"
})(["margin-left:30px;width:40px;position:relative;", ",", "{position:absolute;top:50%;right:0;transform:translateY(-50%);transition:0.25s ease-in-out;}"], OpenIcon, CloseIcon);

/***/ }),

/***/ "../../node_modules/common/src/components/Accordion/index.js":
/*!******************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/Accordion/index.js ***!
  \******************************************************************************************************/
/*! exports provided: Accordion, AccordionItem, AccordionTitle, AccordionBody, IconWrapper, OpenIcon, CloseIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionTitle", function() { return AccordionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionBody", function() { return AccordionBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "../../node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _accordion_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion.style */ "../../node_modules/common/src/components/Accordion/accordion.style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return _accordion_style__WEBPACK_IMPORTED_MODULE_3__["IconWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenIcon", function() { return _accordion_style__WEBPACK_IMPORTED_MODULE_3__["OpenIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return _accordion_style__WEBPACK_IMPORTED_MODULE_3__["CloseIcon"]; });

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/Accordion/index.js";





var Accordion = function Accordion(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$allowZeroExpande = _ref.allowZeroExpanded,
      allowZeroExpanded = _ref$allowZeroExpande === void 0 ? true : _ref$allowZeroExpande;
  // Add all classs to an array
  var addAllClasses = ['reusecore__accordion']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_accordion_style__WEBPACK_IMPORTED_MODULE_3__["AccordionWrapper"], {
    allowZeroExpanded: allowZeroExpanded,
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, children);
};

var AccordionItem = function AccordionItem(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      expanded = _ref2.expanded;
  // Add all classs to an array
  var addAllClasses = ['accordion__item']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_accordion_style__WEBPACK_IMPORTED_MODULE_3__["AccordionItemWrapper"], {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, children);
};

var AccordionTitle = function AccordionTitle(_ref3) {
  var className = _ref3.className,
      children = _ref3.children;
  // Add all classs to an array
  var addAllClasses = ['accordion__header']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_accordion_style__WEBPACK_IMPORTED_MODULE_3__["AccordionTitleWrapper"], {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_accordion_style__WEBPACK_IMPORTED_MODULE_3__["AccordionItemButtonWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, children));
};

var AccordionBody = function AccordionBody(_ref4) {
  var className = _ref4.className,
      children = _ref4.children;
  // Add all classs to an array
  var addAllClasses = ['accordion__body']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_accordion_style__WEBPACK_IMPORTED_MODULE_3__["AccordionBodyWrapper"], {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, children);
};

Accordion.propTypes = {
  /** ClassName of the Accordion. Default class is reusecore__accordion*/
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Used to render any component */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
AccordionItem.propTypes = {
  /** ClassName of the AccordionItem. Default class is accordion__item */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Used to render any component */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
AccordionTitle.propTypes = {
  /** ClassName of the AccordionTitle. Default class is accordion__header */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Used to render any component */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
AccordionBody.propTypes = {
  /** ClassName of the AccordionBody. Default class is accordion__body */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Used to render any component */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};


/***/ }),

/***/ "../../node_modules/common/src/components/FeatureBlock/featureBlock.style.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/FeatureBlock/featureBlock.style.js ***!
  \**********************************************************************************************************************/
/*! exports provided: IconWrapper, ContentWrapper, ButtonWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);

 // FeatureBlock wrapper style

var FeatureBlockWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "featureBlockstyle__FeatureBlockWrapper",
  componentId: "sc-1pllarm-0"
})(["&.icon_left{display:flex;.icon__wrapper{flex-shrink:0;}}&.icon_right{display:flex;flex-direction:row-reverse;.content__wrapper{text-align:right;}.icon__wrapper{flex-shrink:0;}}", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_1__["overflow"]); // Icon wrapper style

var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "featureBlockstyle__IconWrapper",
  componentId: "sc-1pllarm-1"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_1__["overflow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"]); // Content wrapper style

var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "featureBlockstyle__ContentWrapper",
  componentId: "sc-1pllarm-2"
})(["", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["textAlign"]); // Button wrapper style

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "featureBlockstyle__ButtonWrapper",
  componentId: "sc-1pllarm-3"
})(["", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"]);

/* harmony default export */ __webpack_exports__["default"] = (FeatureBlockWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/FeatureBlock/index.js":
/*!*********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/FeatureBlock/index.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _featureBlock_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./featureBlock.style */ "../../node_modules/common/src/components/FeatureBlock/featureBlock.style.js");


var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/FeatureBlock/index.js";




var FeatureBlock = function FeatureBlock(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      title = _ref.title,
      button = _ref.button,
      description = _ref.description,
      iconPosition = _ref.iconPosition,
      additionalContent = _ref.additionalContent,
      wrapperStyle = _ref.wrapperStyle,
      iconStyle = _ref.iconStyle,
      contentStyle = _ref.contentStyle,
      btnWrapperStyle = _ref.btnWrapperStyle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "icon", "title", "button", "description", "iconPosition", "additionalContent", "wrapperStyle", "iconStyle", "contentStyle", "btnWrapperStyle"]);

  // Add all classs to an array
  var addAllClasses = ['feature__block']; // Add icon position class

  if (iconPosition) {
    addAllClasses.push("icon_".concat(iconPosition));
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // check icon value and add


  var Icon = icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["IconWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "icon__wrapper"
  }, iconStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), icon);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, wrapperStyle, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), Icon, title || description || button ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["ContentWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "content__wrapper"
  }, contentStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), title, description, button && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "button__wrapper"
  }, btnWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), button)), additionalContent) : '');
};

FeatureBlock.propTypes = {
  /** ClassName of the FeatureBlock */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** title prop contain a react component. You can use our Heading component from reusecore */
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** description prop contain a react component. You can use our Text component from reusecore */
  description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** button prop contain a react component. You can use our Button component from reusecore */
  button: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** Set icon position of the FeatureBlock */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['top', 'left', 'right']),

  /** wrapperStyle prop contain these style system props:  display, flexWrap, width, height, alignItems,
   * justifyContent, position, overflow, space, color, borders, borderColor, boxShadow and borderRadius. */
  wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** iconStyle prop contain these style system props: display, width, height, alignItems, justifyContent,
   * position, space, fontSize, color, borders, overflow, borderColor, boxShadow and borderRadius. */
  iconStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** contentStyle prop contain these style system props: width, textAlign and space. */
  contentStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** btnWrapperStyle prop contain these style system props: display, space, alignItems,
   * flexDirection and justifyContent. */
  btnWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
FeatureBlock.defaultProps = {
  iconPosition: 'top'
};
/* harmony default export */ __webpack_exports__["default"] = (FeatureBlock);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/glide.style.js":
/*!****************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/GlideCarousel/glide.style.js ***!
  \****************************************************************************************************************/
/*! exports provided: GlideSlideWrapper, ButtonControlWrapper, ButtonWrapper, BulletControlWrapper, BulletButton, DefaultBtn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlideSlideWrapper", function() { return GlideSlideWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonControlWrapper", function() { return ButtonControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletControlWrapper", function() { return BulletControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletButton", function() { return BulletButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultBtn", function() { return DefaultBtn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);

 // Glide wrapper style

var GlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__GlideWrapper",
  componentId: "sc-1df9bf1-0"
})(["", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]); // Glide slide wrapper style

var GlideSlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "glidestyle__GlideSlideWrapper",
  componentId: "sc-1df9bf1-1"
})(["", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"]); // Button wrapper style

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__ButtonWrapper",
  componentId: "sc-1df9bf1-2"
})(["display:inline-block;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["top"], styled_system__WEBPACK_IMPORTED_MODULE_1__["left"], styled_system__WEBPACK_IMPORTED_MODULE_1__["right"], styled_system__WEBPACK_IMPORTED_MODULE_1__["bottom"]); // ButtonControlWrapper style

var ButtonControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__ButtonControlWrapper",
  componentId: "sc-1df9bf1-3"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["top"], styled_system__WEBPACK_IMPORTED_MODULE_1__["left"], styled_system__WEBPACK_IMPORTED_MODULE_1__["right"], styled_system__WEBPACK_IMPORTED_MODULE_1__["bottom"]); // BulletControlWrapper style

var BulletControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__BulletControlWrapper",
  componentId: "sc-1df9bf1-4"
})(["", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexWrap"]); // BulletButton style

var BulletButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "glidestyle__BulletButton",
  componentId: "sc-1df9bf1-5"
})(["cursor:pointer;width:10px;height:10px;margin:4px;border:0;padding:0;outline:none;border-radius:50%;background-color:#D6D6D6;&:hover,&.glide__bullet--active{background-color:#869791;}", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"]); // default button style

var DefaultBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "glidestyle__DefaultBtn",
  componentId: "sc-1df9bf1-6"
})(["cursor:pointer;margin:10px 3px;"]);

/* harmony default export */ __webpack_exports__["default"] = (GlideWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js":
/*!***************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/GlideCarousel/glideSlide.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glide.style */ "../../node_modules/common/src/components/GlideCarousel/glide.style.js");
var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/GlideCarousel/glideSlide.js";


 // Glide Slide wrapper component

var GlideSlide = function GlideSlide(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_2__["GlideSlideWrapper"], {
    className: "glide__slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children);
};

GlideSlide.propTypes = {
  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (GlideSlide);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/index.js":
/*!**********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/GlideCarousel/index.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glidejs/glide */ "@glidejs/glide");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @glidejs/glide/dist/css/glide.core.min.css */ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css");
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glide.style */ "../../node_modules/common/src/components/GlideCarousel/glide.style.js");


var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/GlideCarousel/index.js";






var GlideCarousel = function GlideCarousel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      options = _ref.options,
      controls = _ref.controls,
      prevButton = _ref.prevButton,
      nextButton = _ref.nextButton,
      prevWrapper = _ref.prevWrapper,
      nextWrapper = _ref.nextWrapper,
      bullets = _ref.bullets,
      numberOfBullets = _ref.numberOfBullets,
      buttonWrapperStyle = _ref.buttonWrapperStyle,
      bulletWrapperStyle = _ref.bulletWrapperStyle,
      bulletButtonStyle = _ref.bulletButtonStyle,
      carouselSelector = _ref.carouselSelector;
  // Add all classs to an array
  var addAllClasses = ['glide']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // number of bullets loop


  var totalBullets = [];

  for (var i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  } // Load glide


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4___default.a(carouselSelector ? "#".concat(carouselSelector) : '#glide', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options));
    glide.mount();
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: addAllClasses.join(' '),
    id: carouselSelector || 'glide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "glide__track",
    "data-glide-el": "track",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "glide__slides",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, children)), controls && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonControlWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "glide__controls",
    "data-glide-el": "controls"
  }, buttonWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevWrapper, {
    className: "glide__prev--area",
    "data-glide-dir": "<",
    "aria-label": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), prevButton ? prevButton : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["DefaultBtn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Prev")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, nextWrapper, {
    className: "glide__next--area",
    "data-glide-dir": ">",
    "aria-label": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), nextButton ? nextButton : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["DefaultBtn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Next"))), bullets && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["BulletControlWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "glide__bullets",
    "data-glide-el": "controls[nav]"
  }, bulletWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, totalBullets.map(function (index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["BulletButton"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index,
      className: "glide__bullet",
      "data-glide-dir": "=".concat(index),
      "aria-label": "bullet".concat(index + 1)
    }, bulletButtonStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }));
  }))));
};

GlideCarousel.propTypes = {
  /** className of the GlideCarousel. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** You can add your custom glid options using this prop. */
  options: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Hide || show controls nav. */
  controls: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Hide || show bullets nav. */
  bullets: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** This prop only take your slider / carousel / testimonials data length. */
  numberOfBullets: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** bulletWrapperStyle is a bullet control wrapper style object prop.
   * It's contain display, space, alignItems,
   * justifyContent and flexWrap style-system prop.
   */
  bulletWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** buttonWrapperStyle is a button control wrapper style object prop.
   * It's contain same as buttonWrapperStyle style-system prop and
   * position, left, right, top and bottom.
   */
  buttonWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** prevWrapper is a previous button wrapper style object prop.
   * It's contain display, space, bg, borders, boxShadow, borderRadius,
   * position, top, left, right and bottom style-system prop.
   */
  prevWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** nextWrapper is a next button wrapper style object prop.
   * It's contain same as prevWrapper style-system prop.
   */
  nextWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Set previous button for glide carousel. */
  prevButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /** Set next button for glide carousel. */
  nextButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /** bulletButtonStyle is a bullet button style object prop.
   * It's contain  display, width, height, space,
   * bg, borders, boxShadow and borderRadius style-system prop.
   */
  bulletButtonStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
}; // GlideCarousel default props

GlideCarousel.defaultProps = {
  controls: true,
  bullets: false
};
/* harmony default export */ __webpack_exports__["default"] = (GlideCarousel);

/***/ }),

/***/ "../../node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js":
/*!********************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var HamburgMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "hamburgMenustyle__HamburgMenuWrapper",
  componentId: "sc-12m1tps-0"
})(["border:0;background:transparent;width:44px;height:30px;cursor:pointer;", " ", " ", " ", " ", " ", " ", " > span{display:block;width:100%;height:2px;margin:4px 0;float:right;background-color:", ";transition:all 0.3s ease;&:first-child{margin-top:0;}&:last-child{width:calc(100% - 10px);margin-bottom:0;}}&:focus,&:hover{outline:none;> span{&:last-child{width:100%;}}}&:focus,&.active{> span{&:first-child{transform:rotate(45deg);transform-origin:8px 50%;}&:nth-child(2){display:none;}&:last-child{width:100%;transform:rotate(-45deg);transform-origin:9px 50%;}}}"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["border"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], function (props) {
  return props.barColor ? props.barColor : '#10ac84';
});
HamburgMenuWrapper.displayName = 'HamburgMenuWrapper';
/* harmony default export */ __webpack_exports__["default"] = (HamburgMenuWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/HamburgMenu/index.js":
/*!********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/HamburgMenu/index.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hamburgMenu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hamburgMenu.style */ "../../node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js");


var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/HamburgMenu/index.js";




var HamburgMenu = function HamburgMenu(_ref) {
  var className = _ref.className,
      wrapperStyle = _ref.wrapperStyle,
      barColor = _ref.barColor,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "wrapperStyle", "barColor"]);

  // Add all classs to an array
  var addAllClasses = ['hamburgMenu__bar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_hamburgMenu_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, wrapperStyle, {
    barColor: barColor,
    "aria-label": "hamburgMenu"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

HamburgMenu.propTypes = {
  /** ClassName of the Hamburg menu. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** barColor allow to change hambrug menu's bar color. */
  barColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** wrapperStyle prop allow to change Hamburg menu bg color, width, height, space, boxShadow, border and borderRadius.*/
  wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (HamburgMenu);

/***/ }),

/***/ "../../node_modules/common/src/components/ScrollSpyMenu/index.js":
/*!**********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/ScrollSpyMenu/index.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollspy */ "react-scrollspy");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");


var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/ScrollSpyMenu/index.js";






var ScrollSpyMenu = function ScrollSpyMenu(_ref) {
  var className = _ref.className,
      menuItems = _ref.menuItems,
      drawerClose = _ref.drawerClose,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "menuItems", "drawerClose"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_6__["DrawerContext"]),
      dispatch = _useContext.dispatch; // empty array for scrollspy items


  var scrollItems = []; // convert menu path to scrollspy items

  menuItems.forEach(function (item) {
    scrollItems.push(item.path.slice(1));
  }); // Add all classs to an array

  var addAllClasses = ['scrollspy__menu']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Close drawer when click on menu item


  var toggleDrawer = function toggleDrawer() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: scrollItems,
    className: addAllClasses.join(' '),
    drawerClose: drawerClose
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), menuItems.map(function (menu, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: "menu-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, menu.staticLink ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: menu.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, menu.label) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, drawerClose ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: menu.path,
      offset: menu.offset,
      onClick: toggleDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, menu.label) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: menu.path,
      offset: menu.offset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, menu.label)));
  }));
};

ScrollSpyMenu.propTypes = {
  /** className of the ScrollSpyMenu. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** menuItems is an array of object prop which contain your menu
   * data.
   */
  menuItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Function to be executed when the active item has been updated [optional].
   */
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current'
};
/* harmony default export */ __webpack_exports__["default"] = (ScrollSpyMenu);

/***/ }),

/***/ "../../node_modules/common/src/components/UI/Container/index.js":
/*!*********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/UI/Container/index.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "../../node_modules/common/src/components/UI/Container/style.js");
var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/UI/Container/index.js";



var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      fullWidth = _ref.fullWidth,
      mobileGutter = _ref.mobileGutter,
      noGutter = _ref.noGutter,
      width = _ref.width,
      id = _ref.id;
  var addAllClasses = ['container'];

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: id,
    className: addAllClasses.join(' '),
    fullWidth: fullWidth,
    noGutter: noGutter,
    mobileGutter: mobileGutter,
    width: width,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "../../node_modules/common/src/components/UI/Container/style.js":
/*!*********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/components/UI/Container/style.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ContainerWrapper",
  componentId: "sc-1gre7ok-0"
})(["margin-left:auto;margin-right:auto;", ";", ";@media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1220px){max-width:", ";width:100%;}@media (max-width:767px){", "}"], function (props) {
  return props.fullWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100%;max-width:none !important;"]);
}, function (props) {
  return props.noGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:0;padding-right:0;"]) || Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:30px;padding-right:30px;"]);
}, function (props) {
  return props.width || '1170px';
}, function (props) {
  return props.mobileGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:20px;padding-right:20px;"]);
});
/* harmony default export */ __webpack_exports__["default"] = (ContainerWrapper);

/***/ }),

/***/ "../../node_modules/common/src/contexts/DrawerContext.js":
/*!**************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/contexts/DrawerContext.js ***!
  \**************************************************************************************************/
/*! exports provided: DrawerContext, DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/common/src/contexts/DrawerContext.js";

var initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

var DrawerContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
var DrawerProvider = function DrawerProvider(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DrawerContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, children);
};

/***/ }),

/***/ "../../node_modules/common/src/data/SaasModern/index.js":
/*!*************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/data/SaasModern/index.js ***!
  \*************************************************************************************************/
/*! exports provided: MENU_ITEMS, PROCESS_ITEMS, MONTHLY_PRICING_TABLE, YEARLY_PRICING_TABLE, FAQ_DATA, FOOTER_WIDGET, FEATURES, SCREENSHOTS, TESTIMONIALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROCESS_ITEMS", function() { return PROCESS_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHLY_PRICING_TABLE", function() { return MONTHLY_PRICING_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEARLY_PRICING_TABLE", function() { return YEARLY_PRICING_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQ_DATA", function() { return FAQ_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOTER_WIDGET", function() { return FOOTER_WIDGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURES", function() { return FEATURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREENSHOTS", function() { return SCREENSHOTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTIMONIALS", function() { return TESTIMONIALS; });
/* harmony import */ var _assets_image_saasModern_process_1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/image/saasModern/process-1.svg */ "../../node_modules/common/src/assets/image/saasModern/process-1.svg");
/* harmony import */ var _assets_image_saasModern_process_1_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_process_1_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_saasModern_process_2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image/saasModern/process-2.svg */ "../../node_modules/common/src/assets/image/saasModern/process-2.svg");
/* harmony import */ var _assets_image_saasModern_process_2_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_process_2_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_saasModern_process_3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/saasModern/process-3.svg */ "../../node_modules/common/src/assets/image/saasModern/process-3.svg");
/* harmony import */ var _assets_image_saasModern_process_3_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_process_3_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_saasModern_icon_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/saasModern/icon-1.png */ "../../node_modules/common/src/assets/image/saasModern/icon-1.png");
/* harmony import */ var _assets_image_saasModern_icon_1_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_icon_1_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_saasModern_icon_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image/saasModern/icon-2.png */ "../../node_modules/common/src/assets/image/saasModern/icon-2.png");
/* harmony import */ var _assets_image_saasModern_icon_2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_icon_2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_saasModern_icon_3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/saasModern/icon-3.png */ "../../node_modules/common/src/assets/image/saasModern/icon-3.png");
/* harmony import */ var _assets_image_saasModern_icon_3_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_icon_3_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_saasModern_icon_4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/saasModern/icon-4.png */ "../../node_modules/common/src/assets/image/saasModern/icon-4.png");
/* harmony import */ var _assets_image_saasModern_icon_4_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_icon_4_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_saasModern_icon_5_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/saasModern/icon-5.png */ "../../node_modules/common/src/assets/image/saasModern/icon-5.png");
/* harmony import */ var _assets_image_saasModern_icon_5_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_icon_5_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_image_saasModern_icon_6_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/image/saasModern/icon-6.png */ "../../node_modules/common/src/assets/image/saasModern/icon-6.png");
/* harmony import */ var _assets_image_saasModern_icon_6_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_icon_6_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_image_saasModern_dash_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/image/saasModern/dash-3.png */ "../../node_modules/common/src/assets/image/saasModern/dash-3.png");
/* harmony import */ var _assets_image_saasModern_dash_3_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_dash_3_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_image_saasModern_dash_4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/image/saasModern/dash-4.png */ "../../node_modules/common/src/assets/image/saasModern/dash-4.png");
/* harmony import */ var _assets_image_saasModern_dash_4_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_dash_4_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_image_saasModern_author_1_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/image/saasModern/author-1.jpg */ "../../node_modules/common/src/assets/image/saasModern/author-1.jpg");
/* harmony import */ var _assets_image_saasModern_author_1_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_author_1_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_image_saasModern_author_2_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/image/saasModern/author-2.jpg */ "../../node_modules/common/src/assets/image/saasModern/author-2.jpg");
/* harmony import */ var _assets_image_saasModern_author_2_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_author_2_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_image_saasModern_author_3_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/image/saasModern/author-3.jpg */ "../../node_modules/common/src/assets/image/saasModern/author-3.jpg");
/* harmony import */ var _assets_image_saasModern_author_3_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_author_3_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_icons_kit_md_ic_monetization_on__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons-kit/md/ic_monetization_on */ "react-icons-kit/md/ic_monetization_on");
/* harmony import */ var react_icons_kit_md_ic_monetization_on__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_monetization_on__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_icons_kit_md_ic_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons-kit/md/ic_settings */ "react-icons-kit/md/ic_settings");
/* harmony import */ var react_icons_kit_md_ic_settings__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_settings__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_icons_kit_icomoon_pieChart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons-kit/icomoon/pieChart */ "react-icons-kit/icomoon/pieChart");
/* harmony import */ var react_icons_kit_icomoon_pieChart__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_pieChart__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons-kit/fa/briefcase */ "react-icons-kit/fa/briefcase");
/* harmony import */ var react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_17__);


















var MENU_ITEMS = [{
  label: 'Home',
  path: '#banner_section',
  offset: '0'
}, {
  label: 'Feature',
  path: '#feature_section',
  offset: '0'
}, {
  label: 'Pricing',
  path: '#pricing_section',
  offset: '0'
}, {
  label: 'Testimonial',
  path: '#testimonial_section',
  offset: '0'
}, {
  label: 'FAQ',
  path: '#faq_section',
  offset: '0'
}];
var PROCESS_ITEMS = [{
  image: _assets_image_saasModern_process_1_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
  title: 'Download our app',
  description: 'Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.'
}, {
  image: _assets_image_saasModern_process_2_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  title: 'Create a free account',
  description: 'Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.'
}, {
  image: _assets_image_saasModern_process_3_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  title: 'Now Start your journey',
  description: 'Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.'
}];
var MONTHLY_PRICING_TABLE = [{
  freePlan: true,
  name: 'Basic Account',
  description: 'For Small teams or group who need to build website ',
  price: '$0',
  priceLabel: 'Only for first month',
  buttonLabel: 'CREATE FREE ACCOUNT',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Business Account',
  description: 'For Mediums teams or group who need to build website ',
  price: '$9.87',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Premium Account',
  description: 'For Large teams or group who need to build website ',
  price: '$12.98',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}];
var YEARLY_PRICING_TABLE = [{
  freePlan: true,
  name: 'Basic Account',
  description: 'For a single client or team who need to build website ',
  price: '$0',
  priceLabel: 'Only for first month',
  buttonLabel: 'CREATE FREE ACCOUNT',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Business Account',
  description: 'For Small teams or group who need to build website ',
  price: '$6.00',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Unlimited secure storage'
  }, {
    content: '2,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: '24/7 phone support'
  }, {
    content: '50+ Webmaster Tools'
  }]
}, {
  name: 'Premium Account',
  description: 'For Large teams or group who need to build website ',
  price: '$9.99',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '3,000s of Templates Ready'
  }, {
    content: 'Advanced branding'
  }, {
    content: 'Knowledge base support'
  }, {
    content: '80+ Webmaster Tools'
  }]
}];
var FAQ_DATA = [{
  expend: true,
  title: 'How to contact with Customer Service?',
  description: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. '
}, {
  title: 'App installation failed, how to update system information?',
  description: 'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . '
}, {
  title: 'Website reponse taking time, how to improve?',
  description: 'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .'
}, {
  title: 'New update fixed all bug and issues?',
  description: 'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .'
}];
var FOOTER_WIDGET = [{
  title: 'About Us',
  menuItems: [{
    url: '#',
    text: 'Support Center'
  }, {
    url: '#',
    text: 'Customer Support'
  }, {
    url: '#',
    text: 'About Us'
  }, {
    url: '#',
    text: 'Copyright'
  }, {
    url: '#',
    text: 'Popular Campaign'
  }]
}, {
  title: 'Our Information',
  menuItems: [{
    url: '#',
    text: 'Return Policy'
  }, {
    url: '#',
    text: 'Privacy Policy'
  }, {
    url: '#',
    text: 'Terms & Conditions'
  }, {
    url: '#',
    text: 'Site Map'
  }, {
    url: '#',
    text: 'Store Hours'
  }]
}, {
  title: 'My Account',
  menuItems: [{
    url: '#',
    text: 'Press inquiries'
  }, {
    url: '#',
    text: 'Social media directories'
  }, {
    url: '#',
    text: 'Images & B-roll'
  }, {
    url: '#',
    text: 'Permissions'
  }, {
    url: '#',
    text: 'Speaker requests'
  }]
}, {
  title: 'Policy',
  menuItems: [{
    url: '#',
    text: 'Application security'
  }, {
    url: '#',
    text: 'Software principles'
  }, {
    url: '#',
    text: 'Unwanted software policy'
  }, {
    url: '#',
    text: 'Responsible supply chain'
  }]
}];
var FEATURES = [{
  icon: _assets_image_saasModern_icon_1_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  title: 'App Development',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}, {
  icon: _assets_image_saasModern_icon_2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  title: '10 Times Award',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}, {
  icon: _assets_image_saasModern_icon_3_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'Cloud Storage',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}, {
  icon: _assets_image_saasModern_icon_4_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Customization',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}, {
  icon: _assets_image_saasModern_icon_5_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'UX Planning',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}, {
  icon: _assets_image_saasModern_icon_6_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  title: 'Customer Support',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}];
var SCREENSHOTS = [{
  icon: react_icons_kit_md_ic_monetization_on__WEBPACK_IMPORTED_MODULE_14__["ic_monetization_on"],
  title: 'Budget Overview',
  image: _assets_image_saasModern_dash_4_png__WEBPACK_IMPORTED_MODULE_10___default.a
}, {
  icon: react_icons_kit_md_ic_settings__WEBPACK_IMPORTED_MODULE_15__["ic_settings"],
  title: 'Create & Adjust',
  image: _assets_image_saasModern_dash_3_png__WEBPACK_IMPORTED_MODULE_9___default.a
}, {
  icon: react_icons_kit_icomoon_pieChart__WEBPACK_IMPORTED_MODULE_16__["pieChart"],
  title: 'View Reports',
  image: _assets_image_saasModern_dash_4_png__WEBPACK_IMPORTED_MODULE_10___default.a
}, {
  icon: react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_17__["briefcase"],
  title: 'Integrations',
  image: _assets_image_saasModern_dash_3_png__WEBPACK_IMPORTED_MODULE_9___default.a
}];
var TESTIMONIALS = [{
  title: 'Modern look & trending design',
  review: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  name: 'Jon Doe',
  designation: 'CEO of Dell Co.',
  avatar: "".concat(_assets_image_saasModern_author_1_jpg__WEBPACK_IMPORTED_MODULE_11___default.a)
}, {
  title: 'Modern look & trending design',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur.',
  name: 'Jon Doe',
  designation: 'Co Founder of IBM',
  avatar: "".concat(_assets_image_saasModern_author_2_jpg__WEBPACK_IMPORTED_MODULE_12___default.a)
}, {
  title: 'Modern look & trending design',
  review: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  name: 'Jeny Doe',
  designation: 'Manager of Hp co.',
  avatar: "".concat(_assets_image_saasModern_author_3_jpg__WEBPACK_IMPORTED_MODULE_13___default.a)
}];

/***/ }),

/***/ "../../node_modules/common/src/theme/saasModern/colors.js":
/*!***************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/theme/saasModern/colors.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var colors = {
  transparent: 'transparent',
  // 0
  black: '#000000',
  // 1
  white: '#ffffff',
  // 2
  headingColor: '#302b4e',
  textColor: '#43414e',
  // 3
  labelColor: '#767676',
  // 4
  inactiveField: '#f2f2f2',
  // 5
  inactiveButton: '#b7dbdd',
  // 6
  inactiveIcon: '#EBEBEB',
  // 7
  primary: '#2aa275',
  // 8
  primaryHover: '#2aa275',
  // 9
  secondary: '#edcd37',
  // 10
  secondaryHover: '#edcd37',
  // 11
  yellow: '#fdb32a',
  // 12
  yellowHover: '#F29E02',
  // 13
  borderColor: '#1b1e25',
  //14
  primaryBoxShadow: '0px 8px 20px -6px rgba(42, 162, 117, 0.57)',
  secondaryBoxShadow: '0px 8px 20px -6px rgba(237, 205, 55, 0.5)'
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "../../node_modules/common/src/theme/saasModern/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/theme/saasModern/index.js ***!
  \**************************************************************************************************/
/*! exports provided: saasModernTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saasModernTheme", function() { return saasModernTheme; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "../../node_modules/common/src/theme/saasModern/colors.js");

var saasModernTheme = {
  breakpoints: [576, 768, 991, 1220],
  space: [0, 5, 8, 10, 15, 20, 25, 30, 33, 35, 40, 50, 60, 70, 80, 85, 90, 100],
  fontSizes: [10, 12, 14, 15, 16, 18, 20, 22, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  borders: [0, '1px solid', '2px solid', '3px solid', '4px solid', '5px solid', '6px solid'],
  radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
  widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: _colors__WEBPACK_IMPORTED_MODULE_0__["default"],
  colorStyles: {
    primary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
      }
    },
    secondary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
      }
    },
    warning: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    error: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    },
    primaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      border: '1px solid',
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        boxShadow: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryBoxShadow
      }
    },
    secondaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].black,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].black,
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        boxShadow: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryBoxShadow
      }
    },
    warningWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    errorWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    },
    transparentBg: {
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      padding: 0,
      height: 'auto',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  } // FlexBox: {
  //   backgroundColor: 'green'
  // }

};

/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!**************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/next/dist/client/link.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "../../node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../../node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.cleanUpListeners = function () {};
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!****************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/next/dist/client/router.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/construct */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/construct.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2["default"];

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!*********************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/next/dist/client/with-router.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "../../node_modules/next/link.js":
/*!**************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/next/link.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../node_modules/rc-drawer/assets/index.css":
/*!****************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/rc-drawer/assets/index.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/rc-tabs/assets/index.css":
/*!**************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/rc-tabs/assets/index.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!***************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Animation/index.js":
/*!*******************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Animation/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: AnimSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimSpinner", function() { return AnimSpinner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var spinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:rotate(0deg);}50%{transform:rotate(180deg);opacity:0.5;}100%{transform:rotate(360deg);}"]);
var AnimSpinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " 1s linear infinite;"], spinner);


/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Box/index.js":
/*!*************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Box/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");


var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Box/index.js";





var BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('div').withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "m50ttq-0"
})(_base__WEBPACK_IMPORTED_MODULE_6__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('Box'), function (props) {
  return props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])({
    display: 'flex'
  }, styled_system__WEBPACK_IMPORTED_MODULE_5__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_5__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_5__["justifyContent"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('FlexBox'));
});

var Box = function Box(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BoxWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Box);
Box.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,

  /** Using this props we can convert our Box Component to a Flex Container or Component */
  flexBox: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['div', 'article', 'section', 'address', 'header', 'footer', 'nav', 'main']),
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  flex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  order: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  alignSelf: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  border: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderTop: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderRight: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderBottom: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderLeft: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))])
};
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/button.style.js":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Button/button.style.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");





var ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "buttonstyle__ButtonStyle",
  componentId: "ntq24p-0"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:", ";background-color:", ";min-height:", "px;min-width:", "px;border-radius:", "px;font-family:inherit;font-size:", "px;font-weight:", ";text-decoration:none;text-transform:capitalize;padding-top:", "px;padding-bottom:", "px;padding-left:", "px;padding-right:", "px;border:0;transition:all 0.3s ease;span.btn-text{padding-left:", "px;padding-right:", "px;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:", "px;padding-right:", "px;}}", " ", " ", " ", " ", " ", ""], Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('heights.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('widths.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radius.0', '3'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["buttonStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["sizeStyle"], _base__WEBPACK_IMPORTED_MODULE_4__["base"]); // prop types can also be added from the style functions

ButtonStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["variant"].propTypes);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ __webpack_exports__["default"] = (ButtonStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/index.js":
/*!****************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Button/index.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.style */ "../../node_modules/reusecore/src/elements/Button/button.style.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "../../node_modules/reusecore/src/elements/Loader/index.js");


var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Button/index.js";





var Button = function Button(_ref) {
  var type = _ref.type,
      title = _ref.title,
      icon = _ref.icon,
      disabled = _ref.disabled,
      iconPosition = _ref.iconPosition,
      onClick = _ref.onClick,
      loader = _ref.loader,
      loaderColor = _ref.loaderColor,
      isMaterial = _ref.isMaterial,
      isLoading = _ref.isLoading,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__button']; // isLoading prop checking

  if (isLoading) {
    addAllClasses.push('is-loading');
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // Checking button loading state


  var buttonIcon = isLoading !== false ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, loader ? loader : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loaderColor: loaderColor || '#30C56D',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })) : icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "btn-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, icon); // set icon position

  var position = iconPosition || 'right';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), position === 'left' && buttonIcon, title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "btn-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, title), position === 'right' && buttonIcon);
};

Button.propTypes = {
  /** ClassName of the button */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Add icon */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['button', 'submit', 'reset']),

  /** Add icon */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add loader */
  loader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add Material effect */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** If true button will be disabled */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Adjust your icon and loader position [if you use loader] */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right']),

  /** Variant change button shape */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['textButton', 'outlined', 'fab', 'extendedFab']),

  /** primary || secondary || warning || error  change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
  colors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary', 'warning', 'error', 'primaryWithBg', 'secondaryWithBg', 'warningWithBg', 'errorWithBg']),

  /**
   * Gets called when the user clicks on the button
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Card/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Card/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Card/index.js";






var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('div').withConfig({
  displayName: "Card__CardWrapper",
  componentId: "sc-1tufk6z-0"
})(_base__WEBPACK_IMPORTED_MODULE_8__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_6__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_6__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_6__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundImage"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundSize"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundPosition"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundRepeat"], styled_system__WEBPACK_IMPORTED_MODULE_6__["opacity"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_7__["cards"], Object(_base__WEBPACK_IMPORTED_MODULE_8__["themed"])('Card'));

var Card = function Card(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), children);
};

Card.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
}, styled_system__WEBPACK_IMPORTED_MODULE_6__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["borderRadius"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["boxShadow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundImage"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundPosition"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundRepeat"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["opacity"].propTypes, _theme_customVariant__WEBPACK_IMPORTED_MODULE_7__["cards"].propTypes);
Card.defaultProps = {
  boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.05)'
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Drawer/index.js":
/*!****************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Drawer/index.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-drawer/assets/index.css */ "../../node_modules/rc-drawer/assets/index.css");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Drawer/index.js";





var Drawer = function Drawer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      closeButton = _ref.closeButton,
      closeButtonStyle = _ref.closeButtonStyle,
      drawerHandler = _ref.drawerHandler,
      toggleHandler = _ref.toggleHandler,
      open = _ref.open,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__drawer']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_drawer__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    open: open,
    onMaskClick: toggleHandler,
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "reusecore-drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, closeButton), children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "reusecore-drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, drawerHandler));
};

Drawer.propTypes = {
  /** ClassName of the Drawer */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Used to render icon, button, text or any elements inside the closeButton prop. */
  closeButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** Set drawer width. Default value is 300px. */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set drawer position left || right || top || bottom. */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right', 'top', 'bottom']),

  /** drawerHandler could be button, icon, string or any component */
  drawerHandler: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element.isRequired
};
Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Heading/index.js":
/*!*****************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Heading/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Heading/index.js";





var HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p').withConfig({
  displayName: "Heading__HeadingWrapper",
  componentId: "vaqy1n-0"
})(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Heading'));

var Heading = function Heading(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(HeadingWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);
Heading.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: 'bold'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Image/index.js":
/*!***************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Image/index.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");


var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Image/index.js";




var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('img').withConfig({
  displayName: "Image__ImageWrapper",
  componentId: "xwdy9p-0"
})({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _base__WEBPACK_IMPORTED_MODULE_5__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_5__["themed"])('Image'));

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["src", "alt"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: src,
    alt: alt
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);
Image.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
Image.defaultProps = {
  m: 0
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Link/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Link/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Link/index.js";




var LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('a').withConfig({
  displayName: "Link__LinkWrapper",
  componentId: "efswp7-0"
})({
  textDecoration: 'none'
}, _base__WEBPACK_IMPORTED_MODULE_6__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('Link'));

var Link = function Link(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LinkWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Link);
Link.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired
}, _base__WEBPACK_IMPORTED_MODULE_6__["base"].propTypes);
Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-block'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/index.js":
/*!****************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Loader/index.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.style */ "../../node_modules/reusecore/src/elements/Loader/loader.style.js");


var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Loader/index.js";




var Loader = function Loader(_ref) {
  var loaderColor = _ref.loaderColor,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["loaderColor", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_loader_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

Loader.propTypes = {
  /** ClassName of the Loader */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set loader width in number || string */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set loader height in number || string */
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set color for loader */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
Loader.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/loader.style.js":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Loader/loader.style.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Animation */ "../../node_modules/reusecore/src/elements/Animation/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");






var LoaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "loaderstyle__LoaderStyle",
  componentId: "sc-6byg9m-0"
})(["display:inline-flex;width:14px;height:14px;border-radius:50%;overflow:hidden;border-width:2px;border-style:solid;border-color:", ";border-top-color:transparent !important;", " ", " ", ""], function (props) {
  return props.loaderColor ? props.loaderColor : '#000000';
}, _Animation__WEBPACK_IMPORTED_MODULE_4__["AnimSpinner"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], _base__WEBPACK_IMPORTED_MODULE_5__["base"]); // prop types can also be added from the style functions

LoaderStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["variant"].propTypes);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ __webpack_exports__["default"] = (LoaderStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Navbar/index.js":
/*!****************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Navbar/index.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.style */ "../../node_modules/reusecore/src/elements/Navbar/navbar.style.js");


var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Navbar/index.js";




var Navbar = function Navbar(_ref) {
  var className = _ref.className,
      children = _ref.children,
      navbarStyle = _ref.navbarStyle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "navbarStyle"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__navbar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_navbar_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), children);
};

Navbar.propTypes = {
  /** ClassName of the Navbar. Default class is reusecore__navbar*/
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Used to render menu, logo, button or any component that
   * you want to show in navbar. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  space: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderRadius: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  boxShadow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  justifyContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  flexDirection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  flexWrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/** Navbar default proptype */

Navbar.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Navbar/navbar.style.js":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Navbar/navbar.style.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var NavbarStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "navbarstyle__NavbarStyle",
  componentId: "i4x6b2-0"
})(["display:flex;align-items:center;min-height:56px;padding:10px 16px;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"]);
NavbarStyle.displayName = 'NavbarStyle';
/* harmony default export */ __webpack_exports__["default"] = (NavbarStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Text/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Text/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/Text/index.js";





var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p').withConfig({
  displayName: "Text__TextWrapper",
  componentId: "sc-15lufec-0"
})(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Text'));

var Text = function Text(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TextWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);
Text.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/UI/Logo/index.js":
/*!*****************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/UI/Logo/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Link */ "../../node_modules/reusecore/src/elements/Link/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Image */ "../../node_modules/reusecore/src/elements/Image/index.js");


var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/UI/Logo/index.js";






var Logo = function Logo(_ref) {
  var logoWrapperStyle = _ref.logoWrapperStyle,
      logoStyle = _ref.logoStyle,
      titleStyle = _ref.titleStyle,
      withAchor = _ref.withAchor,
      anchorProps = _ref.anchorProps,
      logoSrc = _ref.logoSrc,
      title = _ref.title,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["logoWrapperStyle", "logoStyle", "titleStyle", "withAchor", "anchorProps", "logoSrc", "title"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, logoWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), withAchor ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, anchorProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), logoSrc ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: logoSrc,
    alt: title
  }, logoStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: title
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, logoSrc ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: logoSrc,
    alt: title
  }, logoStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: title
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
};

Logo.propTypes = {
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  logoWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  withAchor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  anchorProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-block',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none'
    }
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/base.js":
/*!********************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/elements/base.js ***!
  \********************************************************************************************/
/*! exports provided: themed, base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themed", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


/** this is our Base Component every components must be Extend it */

var themed = function themed(key) {
  return function (props) {
    return props.theme[key];
  };
};
var base = Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(function () {
  return {
    boxSizing: 'border-box'
  };
}, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_1__["order"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"]);
base.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_1__["display"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["width"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["height"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["order"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"].propTypes);

/***/ }),

/***/ "../../node_modules/reusecore/src/theme/customVariant.js":
/*!**************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/reusecore/src/theme/customVariant.js ***!
  \**************************************************************************************************/
/*! exports provided: cards, buttonStyle, colorStyle, sizeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeStyle", function() { return sizeStyle; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);

var buttonStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'buttonStyles'
});
var colorStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
var sizeStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'sizeStyles',
  prop: 'size'
});
var cards = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'cards'
});


/***/ }),

/***/ "./containers/SaasModern/Banner/banner.style.js":
/*!******************************************************!*\
  !*** ./containers/SaasModern/Banner/banner.style.js ***!
  \******************************************************/
/*! exports provided: BannerWrapper, DiscountWrapper, DiscountLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerWrapper", function() { return BannerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountWrapper", function() { return DiscountWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountLabel", function() { return DiscountLabel; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_src_assets_image_saasModern_banner_texture_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/src/assets/image/saasModern/banner-texture.png */ "../../node_modules/common/src/assets/image/saasModern/banner-texture.png");
/* harmony import */ var common_src_assets_image_saasModern_banner_texture_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saasModern_banner_texture_png__WEBPACK_IMPORTED_MODULE_1__);


var BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "bannerstyle__BannerWrapper",
  componentId: "sc-1ig8j7l-0"
})(["padding:150px 0 50px 0;background-image:url(", "),linear-gradient(35deg,rgb(147,249,185) 0%,rgb(29,151,108) 100%);background-size:cover;background-position:top center;@media (max-width:575px){padding:120px 0 0 0;}img{max-width:100%;height:auto;display:block;}"], common_src_assets_image_saasModern_banner_texture_png__WEBPACK_IMPORTED_MODULE_1___default.a);
var DiscountWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerstyle__DiscountWrapper",
  componentId: "sc-1ig8j7l-1"
})(["text-align:center;"]);
var DiscountLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerstyle__DiscountLabel",
  componentId: "sc-1ig8j7l-2"
})(["font-family:'Open Sans',sans-serif;display:inline-block;border-radius:4em;padding:9px 22px;margin-bottom:22px;background-color:rgba(255,255,255,0.15);@media (max-width:575px){padding:7px 10px;}"]);

/***/ }),

/***/ "./containers/SaasModern/Banner/index.js":
/*!***********************************************!*\
  !*** ./containers/SaasModern/Banner/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _TiltShape__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../TiltShape */ "./containers/SaasModern/TiltShape/index.js");
/* harmony import */ var _banner_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./banner.style */ "./containers/SaasModern/Banner/banner.style.js");
/* harmony import */ var common_src_assets_image_saasModern_banner_image_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/src/assets/image/saasModern/banner-image.png */ "../../node_modules/common/src/assets/image/saasModern/banner-image.png");
/* harmony import */ var common_src_assets_image_saasModern_banner_image_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saasModern_banner_image_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_icons_kit_md_ic_play_circle_filled__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons-kit/md/ic_play_circle_filled */ "react-icons-kit/md/ic_play_circle_filled");
/* harmony import */ var react_icons_kit_md_ic_play_circle_filled__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_play_circle_filled__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/SaasModern/Banner/index.js";
















var BannerSection = function BannerSection(_ref) {
  var row = _ref.row,
      contentWrapper = _ref.contentWrapper,
      discountAmount = _ref.discountAmount,
      discountText = _ref.discountText,
      title = _ref.title,
      description = _ref.description,
      imageWrapper = _ref.imageWrapper,
      buttonWrapper = _ref.buttonWrapper,
      button = _ref.button,
      fillButton = _ref.fillButton;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_13__["BannerWrapper"], {
    id: "banner_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TiltShape__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_13__["DiscountWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_13__["DiscountLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, discountAmount, {
    content: "25% Save",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, discountText, {
    content: "for first month trail version",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
    content: "Ultimate Platform to monitor your best workflow.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, description, {
    content: "For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fillButton, {
    title: "FREE TRIAL",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "WATCH VIDEO",
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_4___default.a, {
      icon: react_icons_kit_md_ic_play_circle_filled__WEBPACK_IMPORTED_MODULE_15__["ic_play_circle_filled"],
      size: 30,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }),
    iconPosition: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__["default"], {
    src: common_src_assets_image_saasModern_banner_image_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "banner image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))))));
};

BannerSection.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  contentWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  discountAmount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  discountText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  fillButton: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '50%'],
    mb: '40px'
  },
  title: {
    fontSize: ['24px', '32px', '40px', '42px', '46px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.2',
    textAlign: 'center'
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center'
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#00865b',
    mb: 0,
    as: 'span',
    mr: '0.4em'
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span'
  },
  fillButton: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'secondaryWithBg',
    minWidth: ['auto', '150px'],
    height: ['40px', '46px'],
    minHeight: 'auto'
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '35px'
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BannerSection);

/***/ }),

/***/ "./containers/SaasModern/Faq/faq.style.js":
/*!************************************************!*\
  !*** ./containers/SaasModern/Faq/faq.style.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var FaqWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "faqstyle__FaqWrapper",
  componentId: "sc-1cqpwx6-0"
})([".accordion_item{border:1px solid #eff2f5;border-radius:5px;margin-bottom:5px;}.accordion_title{padding:23px 30px;@media (max-width:575px){padding:15px 20px;}}.accordion_body{padding:0 30px 23px 30px;@media (max-width:575px){padding:0 20px 15px 20px;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (FaqWrapper);

/***/ }),

/***/ "./containers/SaasModern/Faq/index.js":
/*!********************************************!*\
  !*** ./containers/SaasModern/Faq/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/components/Accordion */ "../../node_modules/common/src/components/Accordion/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons-kit/entypo/plus */ "react-icons-kit/entypo/plus");
/* harmony import */ var react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons-kit/entypo/minus */ "react-icons-kit/entypo/minus");
/* harmony import */ var react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _faq_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./faq.style */ "./containers/SaasModern/Faq/faq.style.js");
/* harmony import */ var common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/src/data/SaasModern */ "../../node_modules/common/src/data/SaasModern/index.js");

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/SaasModern/Faq/index.js";















var FaqSection = function FaqSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      row = _ref.row,
      col = _ref.col,
      secTitleWrapper = _ref.secTitleWrapper,
      secHeading = _ref.secHeading,
      secText = _ref.secText,
      title = _ref.title,
      description = _ref.description,
      buttonWrapper = _ref.buttonWrapper,
      button = _ref.button;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    id: "faq_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secText, {
    content: "FREQUENTLY ASK QUESTION",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secHeading, {
    content: "Want to ask something from us?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_faq_style__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_8__["Accordion"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_14__["FAQ_DATA"].map(function (accordionItem, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionItem"], {
      className: "accordion_item",
      key: "accordion-".concat(index),
      expanded: accordionItem.expend,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionTitle"], {
      className: "accordion_title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
      content: accordionItem.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_8__["IconWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_8__["OpenIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
      icon: react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_12__["minus"],
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_8__["CloseIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
      icon: react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_11__["plus"],
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionBody"], {
      className: "accordion_body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, description, {
      content: accordionItem.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })))));
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "EXPLORE FORUM",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })))))))));
};

FaqSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secHeading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
FaqSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['20px', '30px', '50px', '50px'],
    pb: ['60px', '80px', '80px', '80px']
  },
  secTitleWrapper: {
    mb: ['55px', '65px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  col: {
    width: ['100%', '100%', '75%', '75%']
  },
  title: {
    fontSize: ['16px', '19px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: 0
  },
  description: {
    fontSize: '15px',
    color: 'textColor',
    lineHeight: '1.75',
    mb: 0
  },
  buttonWrapper: {
    mt: '50px',
    flexBox: true,
    justifyContent: 'center'
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: ['22px'],
    pr: ['22px'],
    colors: 'secondaryWithBg',
    minWidth: '150px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FaqSection);

/***/ }),

/***/ "./containers/SaasModern/Feature/index.js":
/*!************************************************!*\
  !*** ./containers/SaasModern/Feature/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var common_src_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/src/components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/data/SaasModern */ "../../node_modules/common/src/data/SaasModern/index.js");

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/SaasModern/Feature/index.js";










var FeatureSection = function FeatureSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      secTitleWrapper = _ref.secTitleWrapper,
      secText = _ref.secText,
      secHeading = _ref.secHeading,
      row = _ref.row,
      col = _ref.col,
      FeatureItemStyle = _ref.FeatureItemStyle,
      iconStyle = _ref.iconStyle,
      contentStyle = _ref.contentStyle,
      featureTitle = _ref.featureTitle,
      featureDescription = _ref.featureDescription;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    as: "section",
    id: "feature_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secText, {
    content: "FEATURES",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secHeading, {
    content: "Why you choose Our Plugin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_9__["FEATURES"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, {
      key: "feature-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__["default"], {
        src: item.icon,
        alt: "feature-item-icon-".concat(index + 1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }),
      wrapperStyle: FeatureItemStyle,
      iconStyle: iconStyle,
      contentStyle: contentStyle,
      iconPosition: "left",
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: item.title
      }, featureTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })),
      description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: item.description
      }, featureDescription, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }));
  }))));
};

FeatureSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secHeading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  FeatureItemStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  iconStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  contentStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
FeatureSection.defaultProps = {
  sectionWrapper: {
    pt: ['50px', '50px', '50px', '50px', '50px'],
    pb: ['20px', '50px', '60px', '70px', '100px']
  },
  secTitleWrapper: {
    mb: ['60px', '100px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-30px', '-30px', '-30px', '-30px', '-30px'],
    mr: ['-30px', '-30px', '-30px', '-30px', '-45px']
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pl: ['30px', '30px', '30px', '30px', '45px'],
    pr: ['30px', '30px', '30px', '30px', '45px'],
    mb: ['50px', '70px']
  },
  FeatureItemStyle: {
    alignItems: 'center'
  },
  iconStyle: {
    width: ['90px', '90px', '90px', '75px', '90px'],
    pr: '20px'
  },
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    lineHeight: '1.5',
    mb: ['10px', '15px']
  },
  featureDescription: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#5d646d',
    letterSpacing: '-0.025em',
    lineHeight: '1.88',
    mb: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FeatureSection);

/***/ }),

/***/ "./containers/SaasModern/Footer/footer.style.js":
/*!******************************************************!*\
  !*** ./containers/SaasModern/Footer/footer.style.js ***!
  \******************************************************/
/*! exports provided: List, ListItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_src_assets_image_hosting_footer_bg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/src/assets/image/hosting/footer-bg.png */ "../../node_modules/common/src/assets/image/hosting/footer-bg.png");
/* harmony import */ var common_src_assets_image_hosting_footer_bg_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_hosting_footer_bg_png__WEBPACK_IMPORTED_MODULE_1__);


var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "footerstyle__FooterWrapper",
  componentId: "ls4s86-0"
})(["position:relative;background:linear-gradient(to bottom,#ffffff 0%,#fcfcfd 5%,#fcfcfd 100%);overflow:hidden;@media (min-width:576px){padding-top:150px;&:before{content:'';position:absolute;width:104%;padding-bottom:104%;border-top-right-radius:11%;top:18%;left:0;pointer-events:none;background-color:#fff;transform:rotate(-6deg);@media (max-width:767px){padding-bottom:150%;}}}.footer_container{background-repeat:no-repeat;background-position:center 50px;padding-top:80px;padding-bottom:80px;position:relative;@media (min-width:576px){background-image:url(", ");}@media (max-width:990px){padding-bottom:40px;}@media (max-width:767px){padding-bottom:0px;}}"], common_src_assets_image_hosting_footer_bg_png__WEBPACK_IMPORTED_MODULE_1___default.a);
var List = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "footerstyle__List",
  componentId: "ls4s86-1"
})([""]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "footerstyle__ListItem",
  componentId: "ls4s86-2"
})(["a{color:rgba(52,61,72,0.8);font-size:14px;line-height:36px;transition:all 0.2s ease;&:hover,&:focus{outline:0;text-decoration:none;color:#343d48;}}"]);

/* harmony default export */ __webpack_exports__["default"] = (FooterWrapper);

/***/ }),

/***/ "./containers/SaasModern/Footer/index.js":
/*!***********************************************!*\
  !*** ./containers/SaasModern/Footer/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer.style */ "./containers/SaasModern/Footer/footer.style.js");
/* harmony import */ var common_src_assets_image_saasModern_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/assets/image/saasModern/logo.png */ "../../node_modules/common/src/assets/image/saasModern/logo.png");
/* harmony import */ var common_src_assets_image_saasModern_logo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saasModern_logo_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/data/SaasModern */ "../../node_modules/common/src/data/SaasModern/index.js");

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/SaasModern/Footer/index.js";












var Footer = function Footer(_ref) {
  var row = _ref.row,
      col = _ref.col,
      colOne = _ref.colOne,
      colTwo = _ref.colTwo,
      titleStyle = _ref.titleStyle,
      logoStyle = _ref.logoStyle,
      textStyle = _ref.textStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "footer_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, colOne, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "#",
    logoSrc: common_src_assets_image_saasModern_logo_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    title: "Hosting",
    logoStyle: logoStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "hello@redq.io"
  }, textStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "+479-443-9334"
  }, textStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, colTwo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_11__["FOOTER_WIDGET"].map(function (widget, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "col"
    }, col, {
      key: "footer-widget-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: widget.title
    }, titleStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_9__["List"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, widget.menuItems.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_9__["ListItem"], {
        key: "footer-list-item-".concat(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: item.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "ListItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, item.text)));
    })));
  })))));
}; // Footer style props


Footer.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  colOne: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  colTwo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // Footer default style

Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0]
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px'
  },
  // Default logo size
  logoStyle: {
    width: '130px',
    mb: '15px'
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./containers/SaasModern/Info/index.js":
/*!*********************************************!*\
  !*** ./containers/SaasModern/Info/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Card */ "../../node_modules/reusecore/src/elements/Card/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _info_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./info.style */ "./containers/SaasModern/Info/info.style.js");
/* harmony import */ var common_src_assets_image_saasModern_dash_1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/src/assets/image/saasModern/dash-1.png */ "../../node_modules/common/src/assets/image/saasModern/dash-1.png");
/* harmony import */ var common_src_assets_image_saasModern_dash_1_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saasModern_dash_1_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var common_src_assets_image_saasModern_dash_2_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/src/assets/image/saasModern/dash-2.png */ "../../node_modules/common/src/assets/image/saasModern/dash-2.png");
/* harmony import */ var common_src_assets_image_saasModern_dash_2_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saasModern_dash_2_png__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/SaasModern/Info/index.js";















var InfoSection = function InfoSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      title = _ref.title,
      description = _ref.description,
      button = _ref.button,
      textArea = _ref.textArea,
      imageArea = _ref.imageArea,
      imageAreaRow = _ref.imageAreaRow,
      imageWrapper = _ref.imageWrapper,
      imageWrapperOne = _ref.imageWrapperOne,
      imageWrapperTwo = _ref.imageWrapperTwo,
      textAreaRow = _ref.textAreaRow;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_info_style__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    fullWidth: true,
    noGutter: true,
    className: "info-sec-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, imageAreaRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, imageArea, {
    className: "image_area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageWrapper, imageWrapperOne, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__["default"], {
    src: common_src_assets_image_saasModern_dash_1_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "Info Image One",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageWrapper, imageWrapperTwo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__["default"], {
    src: common_src_assets_image_saasModern_dash_2_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "Info Image Two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, textAreaRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
    content: "Make your website growth with next level visitors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, description, {
    content: "For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "HOW IT WORKS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })))))))));
};

InfoSection.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageAreaRow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageWrapperOne: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageWrapperTwo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textAreaRow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
InfoSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  textAreaRow: {
    flexDirection: 'row-reverse'
  },
  col: {
    pr: '15px',
    pl: '15px'
  },
  textArea: {
    width: ['100%', '100%', '50%', '50%', '42%']
  },
  imageArea: {
    width: ['100%', '100%', '50%', '50%', '55%'],
    flexBox: true
  },
  imageWrapper: {
    boxShadow: 'none'
  },
  imageWrapperOne: {
    mr: ['-250px', '-250px', '-200px', '-250px', '-400px']
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px'
  },
  title: {
    fontSize: ['26px', '32px', '36px', '40px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
    lineHeight: '1.25'
  },
  description: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '2',
    mb: '33px'
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (InfoSection);

/***/ }),

/***/ "./containers/SaasModern/Info/info.style.js":
/*!**************************************************!*\
  !*** ./containers/SaasModern/Info/info.style.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_src_assets_image_saasModern_dash_bg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/src/assets/image/saasModern/dash-bg.png */ "../../node_modules/common/src/assets/image/saasModern/dash-bg.png");
/* harmony import */ var common_src_assets_image_saasModern_dash_bg_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saasModern_dash_bg_png__WEBPACK_IMPORTED_MODULE_1__);


var InfoSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "infostyle__InfoSectionWrapper",
  componentId: "heupe5-0"
})(["padding:380px 0 250px 0;@media (max-width:1600px){padding:280px 0 200px 0;}@media (max-width:1400px){padding:180px 0 180px 0;}@media (max-width:1300px){padding:150px 0 150px 0;}@media (max-width:1199px){padding:100px 0 100px 0;}@media (max-width:767px){padding:30px 0 60px 0;}.info-sec-container{@media (min-width:768px){position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:-1;}@media (max-width:768px) and (min-width:768px){top:40%;}@media (max-width:767px){padding-bottom:40px;}.image_area{background-image:url(", ");background-position:bottom left;background-size:contain;background-repeat:no-repeat;padding:50px 0 60px 0;@media (max-width:767px){padding-top:0;}}}"], common_src_assets_image_saasModern_dash_bg_png__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = (InfoSectionWrapper);

/***/ }),

/***/ "./containers/SaasModern/Navbar/index.js":
/*!***********************************************!*\
  !*** ./containers/SaasModern/Navbar/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Navbar */ "../../node_modules/reusecore/src/elements/Navbar/index.js");
/* harmony import */ var reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Drawer */ "../../node_modules/reusecore/src/elements/Drawer/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js");
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var common_src_components_HamburgMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/components/HamburgMenu */ "../../node_modules/common/src/components/HamburgMenu/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/data/SaasModern */ "../../node_modules/common/src/data/SaasModern/index.js");
/* harmony import */ var common_src_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/src/components/ScrollSpyMenu */ "../../node_modules/common/src/components/ScrollSpyMenu/index.js");
/* harmony import */ var common_src_assets_image_saasModern_logo_white_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/src/assets/image/saasModern/logo-white.png */ "../../node_modules/common/src/assets/image/saasModern/logo-white.png");
/* harmony import */ var common_src_assets_image_saasModern_logo_white_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saasModern_logo_white_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var common_src_assets_image_saasModern_logo_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! common/src/assets/image/saasModern/logo.png */ "../../node_modules/common/src/assets/image/saasModern/logo.png");
/* harmony import */ var common_src_assets_image_saasModern_logo_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saasModern_logo_png__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/SaasModern/Navbar/index.js";
















var Navbar = function Navbar(_ref) {
  var navbarStyle = _ref.navbarStyle,
      logoStyle = _ref.logoStyle,
      button = _ref.button,
      row = _ref.row,
      menuWrapper = _ref.menuWrapper;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_11__["DrawerContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch; // Toggle drawer


  var toggleHandler = function toggleHandler() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, navbarStyle, {
    className: "saas_navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "#",
    logoSrc: common_src_assets_image_saasModern_logo_white_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    title: "Portfolio",
    logoStyle: logoStyle,
    className: "main-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "#",
    logoSrc: common_src_assets_image_saasModern_logo_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    title: "Portfolio",
    logoStyle: logoStyle,
    className: "logo-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, menuWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "main_menu",
    menuItems: common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_12__["MENU_ITEMS"],
    offset: -70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "navbar_button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "GET STARTED",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: "420px",
    placement: "right",
    drawerHandler: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_HamburgMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
      barColor: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "mobile_menu",
    menuItems: common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_12__["MENU_ITEMS"],
    drawerClose: true,
    offset: -100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "navbar_drawer_button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "GET STARTED",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })))))))));
};

Navbar.propTypes = {
  navbarStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  menuWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block'
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  logoStyle: {
    maxWidth: ['120px', '130px']
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'secondaryWithBg',
    minHeight: 'auto',
    height: '40px'
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./containers/SaasModern/Partner/index.js":
/*!************************************************!*\
  !*** ./containers/SaasModern/Partner/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _partner_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partner.style */ "./containers/SaasModern/Partner/partner.style.js");
/* harmony import */ var common_src_assets_image_saasModern_partner_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/assets/image/saasModern/partner.png */ "../../node_modules/common/src/assets/image/saasModern/partner.png");
/* harmony import */ var common_src_assets_image_saasModern_partner_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saasModern_partner_png__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/SaasModern/Partner/index.js";












var PartnerSection = function PartnerSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      title = _ref.title,
      description = _ref.description,
      button = _ref.button,
      textArea = _ref.textArea,
      imageArea = _ref.imageArea;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_partner_style__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, imageArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: common_src_assets_image_saasModern_partner_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "Domain Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
    content: "Meet our business partner who work behind the scene",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, description, {
    content: "You can trust us for any kind of services and some of the world class companies have also trusted us.So have faith and keep in touch with us .",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "LEARN MORE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })))))))));
};

PartnerSection.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
PartnerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center'
  },
  imageAreaRow: {
    flexDirection: 'row-reverse'
  },
  col: {
    pr: '15px',
    pl: '15px'
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%']
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '58%'],
    mb: ['40px', '40px', '0', '0', '0']
  },
  title: {
    fontSize: ['26px', '30px', '30px', '48px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '15px',
    lineHeight: '1.25'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px'
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg',
    minWidth: '150px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PartnerSection);

/***/ }),

/***/ "./containers/SaasModern/Partner/partner.style.js":
/*!********************************************************!*\
  !*** ./containers/SaasModern/Partner/partner.style.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_src_assets_image_saasModern_map_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/src/assets/image/saasModern/map.png */ "../../node_modules/common/src/assets/image/saasModern/map.png");
/* harmony import */ var common_src_assets_image_saasModern_map_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saasModern_map_png__WEBPACK_IMPORTED_MODULE_1__);


var PartnerSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "partnerstyle__PartnerSectionWrapper",
  componentId: "u4toeo-0"
})(["padding:120px 0;background-color:#f6fbf9;background-image:url(", ");background-repeat:no-repeat;background-position:25% center;@media (max-width:990px){padding:100px 0;}@media (max-width:767px){padding:80px 0;}@media (max-width:575px){padding:60px 0;}"], common_src_assets_image_saasModern_map_png__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = (PartnerSectionWrapper);

/***/ }),

/***/ "./containers/SaasModern/Pricing/index.js":
/*!************************************************!*\
  !*** ./containers/SaasModern/Pricing/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/src/data/SaasModern */ "../../node_modules/common/src/data/SaasModern/index.js");
/* harmony import */ var _pricing_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pricing.style */ "./containers/SaasModern/Pricing/pricing.style.js");
/* harmony import */ var react_icons_kit_icomoon_checkmark__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons-kit/icomoon/checkmark */ "react-icons-kit/icomoon/checkmark");
/* harmony import */ var react_icons_kit_icomoon_checkmark__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_checkmark__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/SaasModern/Pricing/index.js";















var PricingSection = function PricingSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      row = _ref.row,
      secTitleWrapper = _ref.secTitleWrapper,
      secHeading = _ref.secHeading,
      secText = _ref.secText,
      nameStyle = _ref.nameStyle,
      descriptionStyle = _ref.descriptionStyle,
      priceStyle = _ref.priceStyle,
      priceLabelStyle = _ref.priceLabelStyle,
      buttonStyle = _ref.buttonStyle,
      buttonFillStyle = _ref.buttonFillStyle,
      listContentStyle = _ref.listContentStyle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    data: common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_13__["MONTHLY_PRICING_TABLE"],
    active: true
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTimeout(function () {
      setLoading(true);
    }, 500);
  });
  var data = state.data;
  var activeStatus = state.active;
  var pricingCarouselOptions = {
    type: 'slider',
    perView: 3,
    gap: 30,
    bound: true,
    breakpoints: {
      1199: {
        perView: 2,
        type: 'carousel',
        peek: {
          before: 100,
          after: 100
        }
      },
      990: {
        type: 'carousel',
        perView: 1,
        peek: {
          before: 160,
          after: 160
        }
      },
      767: {
        type: 'carousel',
        perView: 1,
        peek: {
          before: 80,
          after: 80
        }
      },
      575: {
        type: 'carousel',
        perView: 1,
        gap: 15,
        peek: {
          before: 20,
          after: 20
        }
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    id: "pricing_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secText, {
    content: "PRICING PLAN",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secHeading, {
    content: "What\u2019s our monthly pricing subscription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["PricingButtonWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Monthly Plan",
    className: activeStatus ? 'active-item' : '',
    onClick: function onClick() {
      return setState({
        data: common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_13__["MONTHLY_PRICING_TABLE"],
        active: true
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Annual Plan",
    className: activeStatus === false ? 'active-item' : '',
    onClick: function onClick() {
      return setState({
        data: common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_13__["YEARLY_PRICING_TABLE"],
        active: false
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_11__["default"], {
    carouselSelector: "pricing-carousel",
    options: pricingCarouselOptions,
    controls: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, data.map(function (pricingTable, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: "pricing-table-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["default"], {
      freePlan: pricingTable.freePlan,
      className: "pricing_table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["PricingHead"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.name
    }, nameStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.description
    }, descriptionStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["PricingPrice"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.price
    }, priceStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.priceLabel
    }, priceLabelStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["PricingButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: pricingTable.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, pricingTable.freePlan ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: pricingTable.buttonLabel
    }, buttonStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: pricingTable.buttonLabel
    }, buttonFillStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["PricingList"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, pricingTable.listItems.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["ListItem"], {
        key: "pricing-table-list-".concat(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_5___default.a, {
        icon: react_icons_kit_icomoon_checkmark__WEBPACK_IMPORTED_MODULE_15__["checkmark"],
        className: "price_list_icon",
        size: 13,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: item.content
      }, listContentStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      })));
    }))));
  }))))));
};

PricingSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  secHeading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  secText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  nameStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  descriptionStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  priceStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  priceLabelStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  listContentStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
PricingSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['100px', '100px', '100px', '140px', '160px'],
    pb: ['60px', '80px', '80px', '100px']
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center'
  },
  secTitleWrapper: {
    mb: ['50px', '75px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67'
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pr: '15px',
    pl: '15px'
  },
  nameStyle: {
    fontSize: ['20px', '20px', '22px', '22px', '22px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    mb: '12px'
  },
  descriptionStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0'
  },
  priceStyle: {
    as: 'span',
    display: 'block',
    fontSize: ['36px', '36px', '40px', '40px', '40px'],
    color: 'headingColor',
    textAlign: 'center',
    mb: '5px',
    letterSpacing: '-0.025em'
  },
  priceLabelStyle: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    color: 'textColor',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0'
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    bg: '#fff',
    color: '#2aa275',
    colors: 'primaryWithBg',
    width: '222px',
    maxWidth: '100%'
  },
  buttonFillStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primaryWithBg',
    width: '200px',
    maxWidth: '100%'
  },
  listContentStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    mb: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PricingSection);

/***/ }),

/***/ "./containers/SaasModern/Pricing/pricing.style.js":
/*!********************************************************!*\
  !*** ./containers/SaasModern/Pricing/pricing.style.js ***!
  \********************************************************/
/*! exports provided: PricingHead, PricingPrice, PricingButton, PricingList, ListItem, SwitchWrapper, PricingButtonWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingHead", function() { return PricingHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingPrice", function() { return PricingPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingButton", function() { return PricingButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingList", function() { return PricingList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchWrapper", function() { return SwitchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingButtonWrapper", function() { return PricingButtonWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var PricingTable = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pricingstyle__PricingTable",
  componentId: "sc-1bjb5jx-0"
})(["border:1px solid #f2f4f7;border-radius:5px;padding:60px 45px;border-radius:5px;@media (max-width:767px){padding:45px 35px;}"]);
var PricingHead = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pricingstyle__PricingHead",
  componentId: "sc-1bjb5jx-1"
})(["margin-bottom:40px;"]);
var PricingPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pricingstyle__PricingPrice",
  componentId: "sc-1bjb5jx-2"
})(["margin-bottom:30px;"]);
var PricingButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pricingstyle__PricingButton",
  componentId: "sc-1bjb5jx-3"
})(["text-align:center;margin-bottom:55px;"]);
var PricingList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pricingstyle__PricingList",
  componentId: "sc-1bjb5jx-4"
})([""]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pricingstyle__ListItem",
  componentId: "sc-1bjb5jx-5"
})(["display:flex;margin-bottom:19px;&:last-child{margin-bottom:0;}.price_list_icon{color:#18d379;margin-right:10px;}"]);
var SwitchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pricingstyle__SwitchWrapper",
  componentId: "sc-1bjb5jx-6"
})(["text-align:center;margin-top:20px;.reusecore__switch{.reusecore__field-label{font-size:16px;font-weight:400;color:#5c636c;cursor:pointer;}input[type='checkbox']{&:checked{+ div{width:40px !important;background-color:", ";> div{left:17px !important;}}}+ div{background-color:#f0f0f0;background-color:#f0f0f0;border:0;width:40px;height:25px;> div{background-color:#fff;box-shadow:0px 2px 3px 0.24px rgba(31,64,104,0.25);width:21px;height:21px;top:2px;left:2px;}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary'));
var PricingButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pricingstyle__PricingButtonWrapper",
  componentId: "sc-1bjb5jx-7"
})(["text-align:center;margin-top:30px;.reusecore__button{font-size:16px;font-weight:400;color:#6f7a87;background:#fff;height:50px;width:165px;border:1px solid #e4e9ee;&:nth-child(1){border-top-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:5px;border-right-color:transparent;}&:nth-child(2){border-top-left-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px;border-bottom-left-radius:0;border-left-color:transparent;}&.active-item{color:#2aa275;border-color:#2aa275;}@media (max-width:575px){font-size:14px;height:44px;width:120px;padding:0 5px;}}"]);

/* harmony default export */ __webpack_exports__["default"] = (PricingTable);

/***/ }),

/***/ "./containers/SaasModern/Testimonial/index.js":
/*!****************************************************!*\
  !*** ./containers/SaasModern/Testimonial/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/data/SaasModern */ "../../node_modules/common/src/data/SaasModern/index.js");
/* harmony import */ var _testimonial_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./testimonial.style */ "./containers/SaasModern/Testimonial/testimonial.style.js");

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/SaasModern/Testimonial/index.js";












var TestimonialSection = function TestimonialSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      secTitleWrapper = _ref.secTitleWrapper,
      secText = _ref.secText,
      secHeading = _ref.secHeading,
      reviewTitle = _ref.reviewTitle,
      review = _ref.review,
      name = _ref.name,
      designation = _ref.designation;
  var carouselOptions = {
    type: 'carousel',
    autoplay: 6000,
    perView: 2,
    gap: 30,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 1
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    as: "section",
    id: "testimonial_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secText, {
    content: "TESTIMONIAL",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secHeading, {
    content: "What our client say about us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_11__["TestimonialSlideWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    options: carouselOptions,
    carouselSelector: "testimonial__slider",
    controls: false,
    bullets: true,
    numberOfBullets: common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_10__["TESTIMONIALS"].length,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_10__["TESTIMONIALS"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: "testimonial-slide-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_11__["TestimonialItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "h3",
      content: item.title
    }, reviewTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.review
    }, review, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_11__["TestimonialMeta"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_11__["AuthorInfo"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_11__["AuthorImage"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
      src: item.avatar,
      alt: "reviewer-image-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "h3",
      content: item.name
    }, name, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.designation
    }, designation, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })))))));
  }))))));
};

TestimonialSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
TestimonialSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '90px', '100px', '100px'],
    pb: ['60px', '80px', '90px', '100px', '100px']
  },
  secTitleWrapper: {
    mb: ['40px', '60px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67'
  },
  reviewTitle: {
    fontSize: ['15px', '16px'],
    fontWeight: '500',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '13px'
  },
  review: {
    fontSize: ['16px', '19px'],
    fontWeight: '300',
    color: '#343d48',
    lineHeight: '1.7',
    mb: 0
  },
  name: {
    fontSize: ['14px', '16px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '8px'
  },
  designation: {
    fontSize: ['12px', '14px'],
    color: '#6f7a87',
    mb: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TestimonialSection);

/***/ }),

/***/ "./containers/SaasModern/Testimonial/testimonial.style.js":
/*!****************************************************************!*\
  !*** ./containers/SaasModern/Testimonial/testimonial.style.js ***!
  \****************************************************************/
/*! exports provided: TestimonialSlideWrapper, TestimonialItem, TestimonialMeta, AuthorInfo, AuthorImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialSlideWrapper", function() { return TestimonialSlideWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialItem", function() { return TestimonialItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialMeta", function() { return TestimonialMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorInfo", function() { return AuthorInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorImage", function() { return AuthorImage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var TestimonialSlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "testimonialstyle__TestimonialSlideWrapper",
  componentId: "sc-36b6lp-0"
})([".glide__bullets{margin-top:45px;text-align:center;@media (max-width:575px){margin-top:30px;}.glide__bullet{width:12px;height:12px;background:#e7f1ed;margin:5px;transition:0.15s ease-in-out;&:hover{background:#d8e2de;}&.glide__bullet--active{background:#c9cecc;}}}"]);
var TestimonialItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "testimonialstyle__TestimonialItem",
  componentId: "sc-36b6lp-1"
})(["position:relative;display:block;background:#fff;border:1px solid #f2f4f7;border-radius:5px;padding:40px;@media (max-width:575px){padding:30px;}"]);
var TestimonialMeta = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "testimonialstyle__TestimonialMeta",
  componentId: "sc-36b6lp-2"
})(["display:flex;align-items:center;margin-top:30px;"]);
var AuthorInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "testimonialstyle__AuthorInfo",
  componentId: "sc-36b6lp-3"
})(["display:flex;align-items:center;"]);
var AuthorImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "testimonialstyle__AuthorImage",
  componentId: "sc-36b6lp-4"
})(["width:50px;height:50px;flex-basis:50px;display:block;border-radius:50%;overflow:hidden;box-shadow:0px 6px 30px 0px rgba(39,79,117,0.2);margin-right:15px;@media (max-width:575px){width:40px;height:40px;flex-basis:40px;}"]);

/***/ }),

/***/ "./containers/SaasModern/TiltShape/index.js":
/*!**************************************************!*\
  !*** ./containers/SaasModern/TiltShape/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tiltShape_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiltShape.style */ "./containers/SaasModern/TiltShape/tiltShape.style.js");
var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/SaasModern/TiltShape/index.js";



var TiltShape = function TiltShape(_ref) {
  var className = _ref.className,
      color = _ref.color;
  // Add all classs to an array
  var addAllClasses = ['tilt_shape']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tiltShape_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "1920",
    height: "500",
    viewBox: "0 0 1920 500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "1920",
    height: "500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "2356",
    height: "781",
    transform: "translate(-136.868 401.948) rotate(-11)",
    fill: color || '#fff',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (TiltShape);

/***/ }),

/***/ "./containers/SaasModern/TiltShape/tiltShape.style.js":
/*!************************************************************!*\
  !*** ./containers/SaasModern/TiltShape/tiltShape.style.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ShapeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "tiltShapestyle__ShapeWrapper",
  componentId: "sc-12vvaea-0"
})(["position:absolute;width:100%;bottom:0;left:0;z-index:0;pointer-events:none;svg{width:100%;height:auto;display:block;}& ~ div{z-index:1;position:relative;}"]);
/* harmony default export */ __webpack_exports__["default"] = (ShapeWrapper);

/***/ }),

/***/ "./containers/SaasModern/Trial/index.js":
/*!**********************************************!*\
  !*** ./containers/SaasModern/Trial/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var common_src_assets_image_saasModern_vendor_logos_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/assets/image/saasModern/vendor-logos.png */ "../../node_modules/common/src/assets/image/saasModern/vendor-logos.png");
/* harmony import */ var common_src_assets_image_saasModern_vendor_logos_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saasModern_vendor_logos_png__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/SaasModern/Trial/index.js";










var TrialSection = function TrialSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      row = _ref.row,
      title = _ref.title,
      description = _ref.description,
      textArea = _ref.textArea,
      imageArea = _ref.imageArea,
      ImageOne = _ref.ImageOne,
      btnStyle = _ref.btnStyle,
      outlineBtnStyle = _ref.outlineBtnStyle,
      buttonWrapper = _ref.buttonWrapper;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ImageOne, {
    src: common_src_assets_image_saasModern_vendor_logos_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "VendorLogos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
    content: "Start your 30 days free trials today!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, description, {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "JOIN WITH SLACK"
  }, btnStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "Login with Email",
    variant: "textButton"
  }, outlineBtnStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })))))));
};

TrialSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  ImageOne: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
TrialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    className: 'trial-section',
    pt: ['20px', '40px', '60px', '80px'],
    pb: ['0px', '0px', '0px', '80px']
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textArea: {
    width: ['100%', '100%', '80%', '43%']
  },
  imageArea: {
    width: ['100%', '100%', '43%'],
    mb: ['35px', '35px', '40px', '40px']
  },
  title: {
    fontSize: ['28px', '32px', '36px', '42px', '48px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25'
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: '#5c636c',
    lineHeight: '2.1',
    textAlign: 'center',
    mb: ['35px', '35px', '40px', '60px']
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto'
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center'
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'secondaryWithBg',
    pl: ['15px', '30px'],
    pr: ['15px', '30px']
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    colors: 'secondary'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TrialSection);

/***/ }),

/***/ "./containers/SaasModern/UpdateScreen/index.js":
/*!*****************************************************!*\
  !*** ./containers/SaasModern/UpdateScreen/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-tabs */ "rc-tabs");
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-tabs/lib/TabContent */ "rc-tabs/lib/TabContent");
/* harmony import */ var rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-tabs/lib/ScrollableInkTabBar */ "rc-tabs/lib/ScrollableInkTabBar");
/* harmony import */ var rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-tabs/assets/index.css */ "../../node_modules/rc-tabs/assets/index.css");
/* harmony import */ var rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _TiltShape__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../TiltShape */ "./containers/SaasModern/TiltShape/index.js");
/* harmony import */ var _updateScreen_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./updateScreen.style */ "./containers/SaasModern/UpdateScreen/updateScreen.style.js");
/* harmony import */ var common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! common/src/data/SaasModern */ "../../node_modules/common/src/data/SaasModern/index.js");

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/SaasModern/UpdateScreen/index.js";
















var UpdateScreen = function UpdateScreen(_ref) {
  var secTitleWrapper = _ref.secTitleWrapper,
      secText = _ref.secText,
      secHeading = _ref.secHeading;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_updateScreen_style__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TiltShape__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secText, {
    content: "UPDATE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secHeading, {
    content: "Meet our new updated screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_4___default.a, {
    renderTabBar: function renderTabBar() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      });
    },
    renderTabContent: function renderTabContent() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
        animated: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      });
    },
    className: "update-screen-tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_15__["SCREENSHOTS"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_4__["TabPane"], {
      forceRender: true,
      tab: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default.a, {
        icon: item.icon,
        size: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), item.title),
      key: index + 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_11__["default"], {
      src: item.image,
      alt: "screenshot-".concat(index + 1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }));
  }))));
};

UpdateScreen.propTypes = {
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secHeading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
UpdateScreen.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#fff',
    mb: '5px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (UpdateScreen);

/***/ }),

/***/ "./containers/SaasModern/UpdateScreen/updateScreen.style.js":
/*!******************************************************************!*\
  !*** ./containers/SaasModern/UpdateScreen/updateScreen.style.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "updateScreenstyle__SectionWrapper",
  componentId: "fdq2be-0"
})(["padding:100px 0 0 0;background:linear-gradient( 35deg,rgb(147,249,185) 0%,rgb(29,151,108) 100% );@media (max-width:990px){padding:80px 0 0 0;}@media (max-width:575px){padding:60px 0 0 0;}@keyframes ScaleInUp{from{opacity:0;transform:translateY(30px) scale(0.97);}to{opacity:1;transform:translateY(0) scale(1);}}.update-screen-tab{border:0;overflow:initial;.rc-tabs-ink-bar{display:none !important;}.rc-tabs-bar{border:0;}.rc-tabs-nav-container{margin-bottom:40px;&:not(.rc-tabs-nav-container-scrolling){.rc-tabs-nav-scroll{width:100%;text-align:center;.rc-tabs-nav{float:none;display:block;.rc-tabs-tab{display:inline-block;float:none;}}}}.rc-tabs-tab{font-size:18px;color:#dcf4e8;font-weight:400;min-width:230px;padding:0 0 27px 0;text-align:center;margin-right:20px;transition:0.25s ease-in-out;&:hover{color:#fff;}&:last-child{margin-right:0;}&:before,&:after{content:'';position:absolute;width:100%;height:2px;bottom:0;left:0;display:block;@media (max-width:767px){display:none;}}&:before{background:rgba(0,0,0,0.08);}&:after{background:#fff;transform:scaleX(0);transform-origin:right center 0;transition:transform 0.7s cubic-bezier(0.19,1,0.22,1) 0s;}&.rc-tabs-tab-active{color:#fff;&:after{transform:scaleX(1);transform-origin:left center 0;transition:transform 0.35s cubic-bezier(0.43,0.49,0.51,0.68);}}> div{margin-right:8px;}@media (max-width:1199px){font-size:16px;padding:0 0 20px 0;min-width:170px;}@media (max-width:990px){min-width:auto;padding:0 10px 15px 10px;}@media (max-width:767px){font-size:14px;padding:0;svg{width:20px;}}}}.rc-tabs-content{.rc-tabs-tabpane{border-radius:10px;overflow:hidden;box-shadow:0px 5px 60px 0px rgba(27,67,111,0.15);&.rc-tabs-tabpane-active{animation:0.7s ScaleInUp;}> img{max-width:100%;height:auto;display:block;}}}}.rc-tabs-tab-prev-icon,.rc-tabs-tab-next-icon{font-size:20px;color:#fff;line-height:1;display:block;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SectionWrapper);

/***/ }),

/***/ "./containers/SaasModern/WorkingProcess/index.js":
/*!*******************************************************!*\
  !*** ./containers/SaasModern/WorkingProcess/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _workingProcess_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./workingProcess.style */ "./containers/SaasModern/WorkingProcess/workingProcess.style.js");
/* harmony import */ var common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/data/SaasModern */ "../../node_modules/common/src/data/SaasModern/index.js");

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/SaasModern/WorkingProcess/index.js";










var WorkingProcessSection = function WorkingProcessSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      secTitleWrapper = _ref.secTitleWrapper,
      secText = _ref.secText,
      secHeading = _ref.secHeading,
      processRow = _ref.processRow,
      processCol = _ref.processCol,
      processImageStyle = _ref.processImageStyle,
      processTitleStyle = _ref.processTitleStyle,
      processDescriptionStyle = _ref.processDescriptionStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    as: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secText, {
    content: "WORKING PROCESS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secHeading, {
    content: "Our Featured Service that We Provide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, processRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), common_src_data_SaasModern__WEBPACK_IMPORTED_MODULE_9__["PROCESS_ITEMS"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, processCol, {
      key: "process-item-".concat(index),
      className: "process_item_col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_workingProcess_style__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "process_item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_workingProcess_style__WEBPACK_IMPORTED_MODULE_8__["ProcessIndex"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, item.index || index + 1), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      src: item.image,
      alt: "process-image-".concat(index + 1)
    }, processImageStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "h3",
      content: item.title
    }, processTitleStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.description
    }, processDescriptionStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }))));
  }))));
};

WorkingProcessSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  processRow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  processCol: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  processImageStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  processTitleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  processDescriptionStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
WorkingProcessSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '15px', '15px', '15px', '15px'],
    pb: 0
  },
  secTitleWrapper: {
    mb: ['60px', '100px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67'
  },
  processRow: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['0', '-15px', '-20px', '-35px', '-45px'],
    mr: ['0', '-15px', '-20px', '-35px', '-45px']
  },
  processCol: {
    width: [1, 1 / 3],
    pl: ['0', '15px', '20px', '35px', '45px'],
    pr: ['0', '15px', '20px', '35px', '45px'],
    mb: '40px'
  },
  processImageStyle: {
    mb: '35px',
    width: ['60px', '60px', '70px', 'auto']
  },
  processTitleStyle: {
    fontSize: ['20px', '18px', '20px', '20px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.02em',
    mb: ['20px', '20px', '22px', '22px', '22px']
  },
  processDescriptionStyle: {
    fontSize: ['15px', '15px', '15px', '15px'],
    fontWeight: '400',
    color: '#343d48',
    lineHeight: '1.87'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (WorkingProcessSection);

/***/ }),

/***/ "./containers/SaasModern/WorkingProcess/workingProcess.style.js":
/*!**********************************************************************!*\
  !*** ./containers/SaasModern/WorkingProcess/workingProcess.style.js ***!
  \**********************************************************************/
/*! exports provided: ProcessIndex, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessIndex", function() { return ProcessIndex; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ProcessItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "workingProcessstyle__ProcessItem",
  componentId: "sc-1u1bf8d-0"
})(["position:relative;"]);
var ProcessIndex = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "workingProcessstyle__ProcessIndex",
  componentId: "sc-1u1bf8d-1"
})(["width:45px;height:45px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#fff;color:#343d48;font-size:24px;font-weight:700;box-shadow:0px 6px 10.34px 0.66px rgba(42,96,151,0.25);position:absolute;top:-15px;left:-15px;z-index:1;@media (max-width:990px){width:40px;height:40px;font-size:20px;top:-13px;left:-13px;}"]);
/* harmony default export */ __webpack_exports__["default"] = (ProcessItem);

/***/ }),

/***/ "./containers/SaasModern/sassModern.style.js":
/*!***************************************************!*\
  !*** ./containers/SaasModern/sassModern.style.js ***!
  \***************************************************/
/*! exports provided: GlobalStyle, ContentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Roboto', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;    \n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #343d48;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: #2aa275;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: #2aa275;\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: #2aa275;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #2aa275;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n"], ["\n  body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Roboto', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;    \n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #343d48;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: #2aa275;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: #2aa275;\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: #2aa275;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #2aa275;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "sassModernstyle__ContentWrapper",
  componentId: "sc-45xbw9-0"
})(["overflow:hidden;.sticky-nav-active{.saas_navbar{background:#fff;box-shadow:0px 3px 8px 0px rgba(43,83,135,0.08);padding:15px 0;.main-logo{display:none;}.logo-alt{display:block;}.main_menu{li{a{color:#000;&:hover{color:#2aa275;}}&.is-current{a{color:#2aa275;}}}}}.hamburgMenu__bar{> span{background:#2aa275;}}}.saas_navbar{position:fixed;top:0;left:0;width:100%;transition:0.35s ease-in-out;padding:30px 0;.logo-alt{display:none;}.main_menu{margin-right:40px;li{display:inline-block;padding-left:13px;padding-right:13px;&:first-child{padding-left:0;}&:last-child{padding-right:0;}&.is-current{a{color:#edcd37;}}a{padding:5px;font-size:16px;font-weight:400;color:#fff;transition:0.15s ease-in-out;&:hover{color:#edcd37;}}}@media (max-width:990px){display:none;}}.navbar_button{@media (max-width:990px){display:none;}}.reusecore-drawer__handler{@media (min-width:991px){display:none !important;}.hamburgMenu__bar{> span{}}}}"]);

/***/ }),

/***/ "./pages/saasmodern.js":
/*!*****************************!*\
  !*** ./pages/saasmodern.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/src/contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var common_src_theme_saasModern__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/src/theme/saasModern */ "../../node_modules/common/src/theme/saasModern/index.js");
/* harmony import */ var common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/src/assets/css/style */ "../../node_modules/common/src/assets/css/style.js");
/* harmony import */ var _containers_SaasModern_sassModern_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/SaasModern/sassModern.style */ "./containers/SaasModern/sassModern.style.js");
/* harmony import */ var _containers_SaasModern_Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../containers/SaasModern/Banner */ "./containers/SaasModern/Banner/index.js");
/* harmony import */ var _containers_SaasModern_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../containers/SaasModern/Navbar */ "./containers/SaasModern/Navbar/index.js");
/* harmony import */ var _containers_SaasModern_WorkingProcess__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../containers/SaasModern/WorkingProcess */ "./containers/SaasModern/WorkingProcess/index.js");
/* harmony import */ var _containers_SaasModern_Pricing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../containers/SaasModern/Pricing */ "./containers/SaasModern/Pricing/index.js");
/* harmony import */ var _containers_SaasModern_Partner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../containers/SaasModern/Partner */ "./containers/SaasModern/Partner/index.js");
/* harmony import */ var _containers_SaasModern_Faq__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../containers/SaasModern/Faq */ "./containers/SaasModern/Faq/index.js");
/* harmony import */ var _containers_SaasModern_Trial__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../containers/SaasModern/Trial */ "./containers/SaasModern/Trial/index.js");
/* harmony import */ var _containers_SaasModern_Info__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../containers/SaasModern/Info */ "./containers/SaasModern/Info/index.js");
/* harmony import */ var _containers_SaasModern_Feature__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../containers/SaasModern/Feature */ "./containers/SaasModern/Feature/index.js");
/* harmony import */ var _containers_SaasModern_UpdateScreen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../containers/SaasModern/UpdateScreen */ "./containers/SaasModern/UpdateScreen/index.js");
/* harmony import */ var _containers_SaasModern_Testimonial__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../containers/SaasModern/Testimonial */ "./containers/SaasModern/Testimonial/index.js");
/* harmony import */ var _containers_SaasModern_Footer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../containers/SaasModern/Footer */ "./containers/SaasModern/Footer/index.js");
var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/pages/saasmodern.js";




















/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: common_src_theme_saasModern__WEBPACK_IMPORTED_MODULE_5__["saasModernTheme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "SaaS | A react next landing page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "Description",
    content: "React next landing page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#ec5555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_6__["ResetCSS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SaasModern_sassModern_style__WEBPACK_IMPORTED_MODULE_7__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SaasModern_sassModern_style__WEBPACK_IMPORTED_MODULE_7__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_4__["DrawerProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SaasModern_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SaasModern_Banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SaasModern_WorkingProcess__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SaasModern_Info__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SaasModern_Feature__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SaasModern_UpdateScreen__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SaasModern_Pricing__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SaasModern_Partner__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SaasModern_Testimonial__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SaasModern_Faq__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SaasModern_Trial__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SaasModern_Footer__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))));
});

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/saasmodern.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/trupsys/Personal/iammer-marketing/packages/landing/pages/saasmodern.js */"./pages/saasmodern.js");


/***/ }),

/***/ "@glidejs/glide":
/*!*********************************!*\
  !*** external "@glidejs/glide" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "rc-tabs":
/*!**************************!*\
  !*** external "rc-tabs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs");

/***/ }),

/***/ "rc-tabs/lib/ScrollableInkTabBar":
/*!**************************************************!*\
  !*** external "rc-tabs/lib/ScrollableInkTabBar" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs/lib/ScrollableInkTabBar");

/***/ }),

/***/ "rc-tabs/lib/TabContent":
/*!*****************************************!*\
  !*** external "rc-tabs/lib/TabContent" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs/lib/TabContent");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-accessible-accordion":
/*!*********************************************!*\
  !*** external "react-accessible-accordion" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "react-icons-kit/entypo/minus":
/*!***********************************************!*\
  !*** external "react-icons-kit/entypo/minus" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/minus");

/***/ }),

/***/ "react-icons-kit/entypo/plus":
/*!**********************************************!*\
  !*** external "react-icons-kit/entypo/plus" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/plus");

/***/ }),

/***/ "react-icons-kit/fa/briefcase":
/*!***********************************************!*\
  !*** external "react-icons-kit/fa/briefcase" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/briefcase");

/***/ }),

/***/ "react-icons-kit/icomoon/checkmark":
/*!****************************************************!*\
  !*** external "react-icons-kit/icomoon/checkmark" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/checkmark");

/***/ }),

/***/ "react-icons-kit/icomoon/pieChart":
/*!***************************************************!*\
  !*** external "react-icons-kit/icomoon/pieChart" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/pieChart");

/***/ }),

/***/ "react-icons-kit/md/ic_monetization_on":
/*!********************************************************!*\
  !*** external "react-icons-kit/md/ic_monetization_on" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_monetization_on");

/***/ }),

/***/ "react-icons-kit/md/ic_play_circle_filled":
/*!***********************************************************!*\
  !*** external "react-icons-kit/md/ic_play_circle_filled" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_play_circle_filled");

/***/ }),

/***/ "react-icons-kit/md/ic_settings":
/*!*************************************************!*\
  !*** external "react-icons-kit/md/ic_settings" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_settings");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-scrollspy":
/*!**********************************!*\
  !*** external "react-scrollspy" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=saasmodern.js.map