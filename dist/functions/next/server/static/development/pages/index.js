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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "../../node_modules/common/src/assets/image/saas/banner/bannerObject1.png":
/*!*******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/banner/bannerObject1.png ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bannerObject1-7b4f73bff849e81f64abc3ef3ece17b7.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/banner/bannerObject2.png":
/*!*******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/banner/bannerObject2.png ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/footer-bg.png":
/*!********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/footer-bg.png ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footer-bg-61e61976e8a4ea1e4ff698142517ef3a.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/illustration.png":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/illustration.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/logo.png":
/*!***************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/logo.png ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-b73048211d7a9a05b4c449061f130c5f.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/map.png":
/*!**************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/map.png ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-40ffdb360205f038eec59b94bd1010ed.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/particles/particle-1.png":
/*!*******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/particles/particle-1.png ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDEtMTBUMTM6MDA6MDcrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDEtMTBUMTM6MDA6MDcrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTEwVDEzOjAwOjA3KzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVmNmNkZTQyLTlmY2EtNGZhMC04ZGUxLWEyMTg1NGQ3NDcyYiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRhNzE2MzE3LTNhNjItZjM0Yi05OGJkLTkwOGRlZDcwNjI0MyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjZhNTM4NGRiLTU2NmEtNDc0Zi05NzI1LTg5NjEyNjYzMzY5OSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NmE1Mzg0ZGItNTY2YS00NzRmLTk3MjUtODk2MTI2NjMzNjk5IiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAwOjA3KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWY2Y2RlNDItOWZjYS00ZmEwLThkZTEtYTIxODU0ZDc0NzJiIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAwOjA3KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Rn/yhAAACM0lEQVRIiZ3Vu2tUQRQG8F8uV4sIPmIhBgTRgBo1UfG9orZi658g2Fhc/xIXa21sFTuxjeJbfFwIi4oGq0QLI4KmSJbVYua6s5vdmM0HA3PPzPnOOXPnfDO0NHFdH+zEOezAAj7gGebTTXlZ9POX97GP4xKy+L0Rx3AUDTzBbF/WFcjX4WJCnGII++OYiUE+D0J+CBvi/CduYitqGIsBYBd2NSfrX/EYjbwsWh2ZdJ15hqsYid8P8CJZ3xaDHOhR2Q88xbu8LJb02DCeEC/gTdf6N9zDjRh0MVnbIhxn0Zys7++V+RVsj/OpOFbCMI7HMZzYW7idZr47IV7Ey/8Qw0JeFlO4Lhzhz2jPcDYlryXzt8KxrAp5WSzlZfECtxLzaEU+Kvx9QklPV0vchZFkvliRp1lPa5c3KFKe91mMNh4Nf4TGGBjNyfo2oQ8qnucZTmk3xifhuq0FtYSnkZfFfIY9yYa1Zr1JaKwOngzrE2OH4g2A09oNOZOXxWxFnqrbZZzoCrgimpP1YRxOTP+qz/BIuH4Eab2AAud1dl0/HE+SmcvL4p9KZviCu/iVOAxH8msx2OY+xOsi+bKsaUtuAx+F8k4LIlQ5nxAeimmhub4m/ke0q5uPPMvIoYlXeC3c+5q21mSYwEHhcXiC7zGRCs+69bzXY9GKWU4LknBGWxqGhEYZ6/L5jXfdRP3e0AozcYzGSvZZ/ga0cL96IAYhrzCLO4JUnMRe4YbM4WFeFl96Of0FkzOGScuEADsAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/particles/particle-2.png":
/*!*******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/particles/particle-2.png ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDEtMTBUMTM6MDA6NTYrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDEtMTBUMTM6MDA6NTYrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTEwVDEzOjAwOjU2KzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY4YTA5YTUyLTY3ZDEtNGNlZC1hMWMxLWNjMzcxMjhlYTE5OSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjkwYjk2NDM0LTk4ZjgtZjE0Mi04YjdiLWZiYzI5OGM3YWU4NyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmVkM2RlMjc2LWU0NTEtNDhhMy1iZGI1LTNjY2EzMTI5MThiMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWQzZGUyNzYtZTQ1MS00OGEzLWJkYjUtM2NjYTMxMjkxOGIxIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAwOjU2KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjhhMDlhNTItNjdkMS00Y2VkLWExYzEtY2MzNzEyOGVhMTk5IiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAwOjU2KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4SIEDCAAACI0lEQVRIia3WTUtVURQG4MdzFbqYRVkYlGVNoshw0CSMwAJHBRX0EwoqamiNmlbTiIL6ETVoEGIfRB/TMFGaaGFBQRpxCwU/arD38Wzl6i29LxxYZ5113nfvtTZr7Yau63+sgEbsRRf2oBVlTGECo3iHD5hdiaQaMnTjJDZW+V7GjvgcRQVP8KKaWDWRNpyPBP+KFpzFYTzA15VEOnAFzYlvAm8wEu1fWI+t6MQhIY3iwq7iNsZygoakJttwTUgFzOARnmNuhV2U0INTaIq+KdzMd5QlgecSgQpuYaCGgPh9IMZXoq8spLyUihxX1GAWdzFeg3wpxuN/eeG3R16ZsMXeJPihcDRXg9H4f45eNGVC8Vqic1KowVrwLPKIvAdzkRyv1a5BLcxHnhwHMuxKHCNrFMgxnNgdGTYnju91EvmW2JsyxbGF33USSXnKGaYTR7P6IOWZzhQnAbbUSaQtsX9k+Jg49tVJZH9ij2UYShzdii6wWuRjIsdQhkFFz9mMY2sU6VGc2AoGM6Hb9idBp4UpuBrsxpnkvR8zeWqe4nO0G3ER7f8p0I5Lihn1JfIu5H9OmGhT8b0FfUIXLdUgL8W4PkUPnML9yLtoaBFazOUkmGIyDgtDaBobVJ+MhDrckZzapSKEol3Azho7qIZx3IsLW0C1i8QkbuAITqh+W1mKn3iMV0IXXoTlrkTzeIm3Qko6hVS2Yp2Qsgl8wvv4zCy3gr/TBXWxkywiXgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/particles/particle-3.png":
/*!*******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/particles/particle-3.png ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDEtMTBUMTM6MDE6NDIrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDEtMTBUMTM6MDE6NDIrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTEwVDEzOjAxOjQyKzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEwYThhZjdiLWUxOGYtNDRmOS1hNzg0LWFkMzk5OTMwZWVjOCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmIyODhmNDdjLTAzZmEtNTY0Ni05NGNkLTMwYTQyYzU1NTk3ZCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjgwNmZlYzM0LWQ2ZTEtNDcyNi05MjJkLWVkOWE1YzEzZjBiNyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODA2ZmVjMzQtZDZlMS00NzI2LTkyMmQtZWQ5YTVjMTNmMGI3IiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAxOjQyKzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTBhOGFmN2ItZTE4Zi00NGY5LWE3ODQtYWQzOTk5MzBlZWM4IiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAxOjQyKzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ljSKRAAABS0lEQVQ4ja3Tv0pcURDH8U+uq5ZiuIWxSSEYIVWqLTaglSjiC9jl5XyAy8UUa9YHCCYs2sRGERExneAiFrsWO4vHy/5xYae5v5n5zZfDmXM//N/fO8C62cW/DCszBMKnDK0ZQ1s1tPENn6N4gcMpIOn1XaOdoYef6EZj3fvv+Evi7eIoL8peFoU7nCbmHdQmAGvhG8RpXpR3kCXFE3RCf0RjArSB5dCdmFeFdnCc5N+xNAK4FP1B/MqLcnCgN1D4i9vQ89geAd2NvvD/SZtVaA9H8YWvWKt41rCR+vOi7KWGKhRu9J9Zeqq50HORD6KdF+VNFTAMCk08hc5RD12PXPSbw4ZHQR8l28QmVrGV1E7C924o/MZ96EX8wELk99EfGuOgXW+XNp/00j9wKihc4bxSO8PluKFJUPrLeA79bMRypoU+eH0NzcjHxgsLtUxOm5qSqgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/particles/particle-4.png":
/*!*******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/particles/particle-4.png ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDEtMTBUMTM6MDI6MjQrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDEtMTBUMTM6MDI6MjQrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTEwVDEzOjAyOjI0KzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmJiODg1MTE5LTUxNGItNGQ0YS04M2Q4LTNkNWMwMzE4MGFhYyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjA4ZWQyYjJmLTZlZjktYzg0Yi04NDJlLTJmMzRlNWZlYzY3MSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY3MGFiOTU2LTI1ODktNDNiZi1iMDI5LWUxZjdjZjAzMDRlZCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjcwYWI5NTYtMjU4OS00M2JmLWIwMjktZTFmN2NmMDMwNGVkIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAyOjI0KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YmI4ODUxMTktNTE0Yi00ZDRhLTgzZDgtM2Q1YzAzMTgwYWFjIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAyOjI0KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7iscQUAAAC10lEQVRYhb3XW4jUdRQH8M9uq4Y3DImQ9UFIuqBdMCSFHqQiehAEyQdpC0IkrVRCRbogUT74kFoaTUX4oAWB5IMGPXSBgrDAxMva2hIRUoj2kC5rgrnawznLTNvOzv8/jnNg+H/nzPmf8/2f/+9cpqOnd8AoMg67MRHPYFSjVkhXHf396El8Bi/cKAKddfTH0J94Fea3m8BlPJf4JryX17YRgK/wceJ5eL7dBGA9zid+A90tijseCzC+EYGzeCnxVOxoQfBHcAKHUGlEAD7AD4mX4fEmA9+GvfgSd6RuahECV0UlXMnv7+DmEoE78SxOqZb2EHZiRRECcBS7Et+OVwvedx++E1U0LXWH8SDWYaAoAdiM3xNvwF1j2E7G9gy2IHUXsDaD/zhsWIbAoGANE1BBxyh2S9GHF1U77Se4W2Txaq1xGQKwH58lXqT6TmEWDuJTzEzdL3gMy0VL/5+UJQBr8HfibeJ0b8JJLE79ZbyOe/HFWM7qDaOx5Ld0vhW3iqecXPP716KN/1zEWTMZgD24mHg4+Dk8jUeLBm+GQAdWiE42qUZ/EfeIRnOtjMMyBObiW3yI6akbzOsksbiUliIEJor3fQQP1QTeiNn4M3WbRSW0lMBicbo3iTUNDmAO3hTDamMN0V0jHTRLoBv7RF3PSt1pLMnP6RrbPfimhvDS6yHQJbpdH55I3RXxtHPE04+Ua1gtah/e9t+yLExgvhi7b2FK6g7hAZHmQfWlL0kSXfC1MgSmiBH7vVi9iC1olTh0xwv62oJfE68Tk7AQgYrY94az8ZGYdO8bMTgayCXV9b0r/Tassk7VjtYvuthT4nQ3I5+LwwsLsbLRDR09vQPjRLqOqx6k65Fu/CR2yL9ENs/VM+7EP2JxaEVw+AOvJL5FTMy60uwwaiQV1a3nSTzcbgJDYhEdEgPsXfFfoG0EiAxUEt+pTlk2s5CUkZcxQzSxo6MZ/Av4qY3UFBHrKQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/particles/particle-5.png":
/*!*******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/particles/particle-5.png ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDEtMTBUMTM6MDMrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDEtMTBUMTM6MDMrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTEwVDEzOjAzKzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0N2I3NmExLWZkZTgtNDI3MC04ODRhLTFhMmYxOTZiYmZhNiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmYxMjU1NGU4LTE4YjEtZGQ0Ni1hNThjLWUzYjk0NmEwMTU1YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjcwYjk5MjM2LTQyNmEtNDk5ZC1iMTYyLTlmYjQxNDJjOWE0YiIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzBiOTkyMzYtNDI2YS00OTlkLWIxNjItOWZiNDE0MmM5YTRiIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAzKzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDQ3Yjc2YTEtZmRlOC00MjcwLTg4NGEtMWEyZjE5NmJiZmE2IiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAzKzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6djlKbAAABaElEQVQ4jZ3UT0tWQRTH8c8d2gjGQy/gEQIJX4K4KfyzbBe6Eqqdyyjc2DIXgeHS5SNom2gj7VKjiODBVyBtggq38mAgtuhpMefq5XoFr7/NzDlzznfm3jNnimF/ToOmsRDjWPh+4hPeYb+eUNRAE9jAgyZ6RZ+xhMPScauyeB8fcDvsP9jDj7DvYhajsdEBHuJLFTSBnYD8wxusYlA7SQcreB6xO5jEYUKBXgQN8RjLDRDhW46YYeT0UCTMBBXWsdUAqGsLazGfxEzCfDhO8eoakFKrkQPzSS4xuaTHLUADF9dgOqEbxvcWkFJlTjfh7AaAS0o4ivm9G+SPx/g7yReLXL07LSAdlG3xLeFtGCN42QK0EjmwnfAR/XA8w+I1IIt4EfM+dpN8Q5/I5Sywiddx9Lo6sbYZsQM8xbDa/W2aFk5UmrbpGem5aJmr1I+vaHxGxMKUXI1HciW7+Itf+Ir32JV/ybn+A++eUzAelEAkAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/particles/particle-6.png":
/*!*******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/particles/particle-6.png ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDEtMTBUMTM6MDM6NDQrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDEtMTBUMTM6MDM6NDQrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTEwVDEzOjAzOjQ0KzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1Mjk3Y2IxLTk2MGEtNDEzNC1iMzNkLTRlYjgwZWJjNjAzNiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdiYjMzYWRkLTY4N2EtNmM0YS04ZmFmLTRlYzhiMThmMzY3NCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjZlYzUwNGZmLTUzMGQtNDMwMi05ZjJkLTYyMDk3NTQ3OGRkZSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NmVjNTA0ZmYtNTMwZC00MzAyLTlmMmQtNjIwOTc1NDc4ZGRlIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAzOjQ0KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDUyOTdjYjEtOTYwYS00MTM0LWIzM2QtNGViODBlYmM2MDM2IiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAzOjQ0KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IbxF+AAACV0lEQVRIibWWPWgUQRTHf6tnIgaJnhEdsQinkLOJ8btx7cTCQuwEbcRO0mihoIagGLCxEgSxsbCxEcHWytEuGsTicgG/lQXRwfMIISB3FjPLvWz2dm7vkgcLb/8z83579+bNm2D7y99k2AAw7vwHwJ/khCgsZq1fZgXP+EngqPN3AteAei5CwtZ4xg8IfxiYBDasFnAjUE5oI8B1oH81gGNivA40nT8KXMWfjtxA+Xc+Ax6J90PAZc/6XMAgAXwDPAWeCC0ExpU2wUoAS8Am5xvgo/MfA8/FvOPAhZUAHhT+DK38ATwEXoj3U0qbs70C9wt/OjHWBO4Br4R2RmlzulugLIcG8C5lTgO4m/iY80qbE90A9wp9lvYnyz/gDvDevQfARaXNsbxAmb+3WYuBRWAKqIp4l5Q2RzoFBmTnb5lFYXEeuAV8dlIBuKK0Ge0EWAI2O79Gqxx80L/YczZyUh8wobQZ8QFlsU+ztBx8UAPcAH45aT1wU2kz3CnQl7806E8HrTlpALittNmRBkyWw0xeoIP+ACaAeScNAlNKm61JoCyHKj002igsfsLmdNFJQw46KFtMnnJINaXNNmzPLAN7WNrCFHAuFgJgnxj0lgOwDtittImDl2nt8HZWj4ElIL4N1YAPKZO3iMBlYBf+JtwAvgEV7In0Ol6Q7H1rXcCyeIY8wcFulFnxVKOwuCAnpAHHsI22zxO8CXx3gSvAHPA1CouZtVvA1oq8LLW7aC5gd++c+AX1bu6l/dhNk7RIBK4AX7A56ckK2CvEfeCwCxpDahnrurb/7GOVLT6LtEwAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/partner.png":
/*!******************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/partner.png ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/saas-banner.jpg":
/*!**********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/saas-banner.jpg ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/saas-banner-86cc97d93fd238ea62407d1a850a7467.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/saasvisitor1.png":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/saasvisitor1.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/testimonial/client-1.jpg":
/*!*******************************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/testimonial/client-1.jpg ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/vendor-logos.png":
/*!***********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/vendor-logos.png ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/visitor_bg.png":
/*!*********************************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/assets/image/saas/visitor_bg.png ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/visitor_bg-9288fa7e875e8850b7e0b31eb3a6ffc3.png";

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

/***/ "../../node_modules/common/src/data/Saas/index.js":
/*!*******************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/data/Saas/index.js ***!
  \*******************************************************************************************/
/*! exports provided: Faq, Features, Footer_Data, Service, Timeline, Testimonial, MENU_ITEMS, MONTHLY_PRICING_TABLE, YEARLY_PRICING_TABLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Faq", function() { return Faq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Features", function() { return Features; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer_Data", function() { return Footer_Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Testimonial", function() { return Testimonial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHLY_PRICING_TABLE", function() { return MONTHLY_PRICING_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEARLY_PRICING_TABLE", function() { return YEARLY_PRICING_TABLE; });
/* harmony import */ var _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/image/saas/testimonial/client-1.jpg */ "../../node_modules/common/src/assets/image/saas/testimonial/client-1.jpg");
/* harmony import */ var _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0__);

var Faq = [{
  id: 1,
  expend: true,
  title: 'How to contact with Customer Service?',
  description: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. '
}, {
  id: 2,
  title: 'App installation failed, how to update system information?',
  description: 'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . '
}, {
  id: 3,
  title: 'Website reponse taking time, how to improve?',
  description: 'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .'
}, {
  id: 4,
  title: 'New update fixed all bug and issues?',
  description: 'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .'
}, {
  id: 4,
  title: 'New update fixed all bug and issues?',
  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
}];
var Features = [{
  id: 1,
  icon: 'flaticon-creative',
  title: 'Powerful Features',
  description: 'Automate time consuming tasks like organising expenses ,tracking your time and following up with clients '
}, {
  id: 2,
  icon: 'flaticon-briefing',
  title: 'Easy Invoicing',
  description: 'Want to surprice your clients with professional looking invoices ? Then you are some clicks behind .'
}, {
  id: 3,
  icon: 'flaticon-flask',
  title: 'Easy To Use',
  description: 'Very Simple and intuitive. So you have to spend less time in paperwork and impress your customer with looks'
}];
var Footer_Data = [{
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
var Service = [{
  id: 1,
  icon: 'flaticon-briefing',
  title: 'App Development',
  description: 'We are specialized at custom Saas Application Development and special features .'
}, {
  id: 2,
  icon: 'flaticon-trophy',
  title: '10 Times Award',
  description: 'We are globally recognised for our services and won a lot of prices around the world .'
}, {
  id: 3,
  icon: 'flaticon-atom',
  title: 'Cloud Stroage',
  description: 'LiteSpeed Web Server known for its high performance and low resource consumption.'
}, {
  id: 4,
  icon: 'flaticon-ruler',
  title: 'Client Satisfaction',
  description: 'Client Satisfaction is our first priority and We are best at it .Keep In Touch.'
}, {
  id: 5,
  icon: 'flaticon-creative',
  title: 'UX Planning',
  description: 'We provide the best UI/UX Design by following the latest trends of the market  .'
}, {
  id: 6,
  icon: 'flaticon-conversation',
  title: 'Customer Support',
  description: 'A Dedicated support team is always ready to provide best support to our customers.'
}];
var Timeline = [{
  title: 'Wireframing for project',
  description: 'We respect our customer opinions and deals with them with perfect wireframing.'
}, {
  title: 'UI/UX for project',
  description: 'We provide the best UI/UX Design by following the latest trends of the market .'
}, {
  title: 'Negotiation about project',
  description: 'After the negotiation is done , We start to build the project with latest technology .'
}];
var Testimonial = [{
  id: 1,
  name: 'Jon Doe',
  designation: 'Ceo of Invission Co.',
  comment: 'Love to work with this designer in every our future project to ensure we are going to build best prototyping features.',
  avatar_url: _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  social_icon: 'flaticon-instagram'
}, {
  id: 2,
  name: 'Roman Ul Oman',
  designation: 'Co-founder of QatarDiaries',
  comment: 'Impressed with master class support of the team and really look forward for the future. A true passionate team.',
  avatar_url: _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  social_icon: 'flaticon-twitter-logo-silhouette'
}];
var MENU_ITEMS = [{
  label: 'Home',
  path: '#banner_section',
  offset: '70'
}, {
  label: 'Service',
  path: '#service_section',
  offset: '70'
}, {
  label: 'Feature',
  path: '#feature_section',
  offset: '70'
}, {
  label: 'Pricing',
  path: '#pricing_section',
  offset: '70'
}, {
  label: 'Testimonial',
  path: '#testimonial_section',
  offset: '70'
}, {
  label: 'FAQ',
  path: '#faq_section',
  offset: '70'
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

/***/ }),

/***/ "../../node_modules/common/src/theme/saas/colors.js":
/*!*********************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/theme/saas/colors.js ***!
  \*********************************************************************************************/
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
  headingColor: '#0f2137',
  textColor: '#5d646d',
  // 3
  labelColor: '#767676',
  // 4
  inactiveField: '#f2f2f2',
  // 5
  inactiveButton: '#b7dbdd',
  // 6
  inactiveIcon: '#EBEBEB',
  // 7
  primary: '#5268db',
  // 8
  primaryHover: '#5268db',
  // 9
  secondary: '#ff5b60',
  // 10
  secondaryHover: '#FF282F',
  // 11
  yellow: '#fdb32a',
  // 12
  yellowHover: '#F29E02',
  // 13
  primaryBoxShadow: ' 0px 9px 19.74px 1.26px rgba(82, 104, 219, 0.57) '
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "../../node_modules/common/src/theme/saas/index.js":
/*!********************************************************************************************!*\
  !*** /Users/trupsys/Personal/iammer-marketing/node_modules/common/src/theme/saas/index.js ***!
  \********************************************************************************************/
/*! exports provided: saasTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saasTheme", function() { return saasTheme; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "../../node_modules/common/src/theme/saas/colors.js");

var saasTheme = {
  breakpoints: [575, 768, 990, 1440],
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
      border: '1px solid',
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
        boxShadow: '0px 9px 20px -5px rgba(82, 104, 219, 0.57)',
        backgroundImage: 'linear-gradient( 31deg, rgba(215,178,233, 0.4) 0%, rgba(83,105,220, 0.4) 100%)'
      }
    },
    secondary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
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
      backgroundImage: 'linear-gradient( 31deg, rgba(215,178,233, 0.4) 0%, rgba(83,105,220, 0.4) 100%)',
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        boxShadow: '0px 9px 20px -5px rgba(82, 104, 219, 0.57)'
      }
    },
    secondaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
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
      lineNumber: 42
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

/***/ "./containers/Saas/BannerSection/bannerSection.style.js":
/*!**************************************************************!*\
  !*** ./containers/Saas/BannerSection/bannerSection.style.js ***!
  \**************************************************************/
/*! exports provided: DiscountLabel, BannerObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountLabel", function() { return DiscountLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerObject", function() { return BannerObject; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_src_assets_image_saas_saas_banner_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/src/assets/image/saas/saas-banner.jpg */ "../../node_modules/common/src/assets/image/saas/saas-banner.jpg");
/* harmony import */ var common_src_assets_image_saas_saas_banner_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_saas_banner_jpg__WEBPACK_IMPORTED_MODULE_2__);



var BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "bannerSectionstyle__BannerWrapper",
  componentId: "sc-1uczega-0"
})(["padding-top:210px;padding-bottom:160px;background-image:url(", ");background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed;min-height:100vh;position:relative;overflow:hidden;@media (max-width:990px){padding-top:180px;padding-bottom:60px;min-height:auto;}@media (max-width:767px){padding-top:130px;padding-bottom:20px;min-height:auto;}@media only screen and (max-width:480px){background:none;}.particle{position:absolute;width:50%;height:100%;top:0;left:0;overflow:hidden;@media (max-width:767px){display:none;}@media only screen and (max-width:480px){width:100%;}}.row{position:relative;z-index:1;}.button__wrapper{margin-top:40px;@media (max-width:767px){margin-bottom:30px;}.reusecore__button{&.outlined{border-color:rgba(82,104,219,0.2);}}}"], common_src_assets_image_saas_saas_banner_jpg__WEBPACK_IMPORTED_MODULE_2___default.a);
var BannerObject = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerSectionstyle__BannerObject",
  componentId: "sc-1uczega-1"
})(["position:absolute;width:50%;height:100%;top:0;right:0;display:flex;align-items:center;@media (max-width:767px){display:none;}.objectWrapper{margin-left:auto;position:relative;.dashboardWrapper{position:absolute;top:0;right:0;.chatObject{position:absolute;top:20px;left:120px;}}}"]);
var DiscountLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerSectionstyle__DiscountLabel",
  componentId: "sc-1uczega-2"
})(["display:inline-block;border-radius:4em;border:1px solid ", ";padding:7px 25px;box-shadow:0px 7px 25px 0px rgba(22,53,76,0.05);margin-bottom:30px;background-color:", ";@media (max-width:767px){padding:7px 15px;}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightBorder', '#f1f4f6'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));

/* harmony default export */ __webpack_exports__["default"] = (BannerWrapper);

/***/ }),

/***/ "./containers/Saas/BannerSection/index.js":
/*!************************************************!*\
  !*** ./containers/Saas/BannerSection/index.js ***!
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
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var common_src_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Particle */ "./containers/Saas/Particle/index.js");
/* harmony import */ var _bannerSection_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bannerSection.style */ "./containers/Saas/BannerSection/bannerSection.style.js");
/* harmony import */ var common_src_assets_image_saas_banner_bannerObject1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/assets/image/saas/banner/bannerObject1.png */ "../../node_modules/common/src/assets/image/saas/banner/bannerObject1.png");
/* harmony import */ var common_src_assets_image_saas_banner_bannerObject1_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_banner_bannerObject1_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_src_assets_image_saas_banner_bannerObject2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/src/assets/image/saas/banner/bannerObject2.png */ "../../node_modules/common/src/assets/image/saas/banner/bannerObject2.png");
/* harmony import */ var common_src_assets_image_saas_banner_bannerObject2_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_banner_bannerObject2_png__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/Saas/BannerSection/index.js";














var BannerSection = function BannerSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      title = _ref.title,
      btnStyle = _ref.btnStyle,
      description = _ref.description,
      discountText = _ref.discountText,
      discountAmount = _ref.discountAmount,
      outlineBtnStyle = _ref.outlineBtnStyle;

  var ButtonGroup = function ButtonGroup() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: "FREE TRAIL"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "outlined",
      title: "EXPLORE MORE",
      variant: "outlined"
    }, outlineBtnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bannerSection_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "banner_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Particle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "col"
  }, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bannerSection_style__WEBPACK_IMPORTED_MODULE_11__["DiscountLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "25% Discount"
  }, discountAmount, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "on every first project "
  }, discountText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: "Ultimate Platform\r to monitor your best\r workflow."
    }, title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })),
    description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: "We help to create SaaS product that are innovative, differentiated with a superb User Experience, fully accessible through mobile devices. SaaS products are changing the world ."
    }, description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })),
    button: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bannerSection_style__WEBPACK_IMPORTED_MODULE_11__["BannerObject"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "objectWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: common_src_assets_image_saas_banner_bannerObject1_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "BannerObject1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dashboardWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: common_src_assets_image_saas_banner_bannerObject2_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "BannerObject2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })))));
};

BannerSection.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  btnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  contentStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  discountText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  discountAmount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  outlineBtnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center'
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, '70%', '50%', '45%']
  },
  title: {
    fontSize: ['22px', '34px', '30px', '55px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.5'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0'
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg'
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#5167db',
    ml: '18px'
  },
  discountAmount: {
    fontSize: '14px',
    color: '#eb4d4b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    fontWeight: 700
  },
  discountText: {
    fontSize: ['13px', '14px'],
    color: '#0f2137',
    mb: 0,
    as: 'span',
    fontWeight: 500
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BannerSection);

/***/ }),

/***/ "./containers/Saas/FaqSection/faqSection.style.js":
/*!********************************************************!*\
  !*** ./containers/Saas/FaqSection/faqSection.style.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var FaqSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "faqSectionstyle__FaqSectionWrapper",
  componentId: "sc-1bu8i5x-0"
})(["padding:80px 0;background:#fafbff;.reusecore__accordion{max-width:820px;margin:0 auto;border-bottom:1px solid #ebebeb;.accordion__item{border-top:0;border-bottom:1px solid #ebebeb;&:last-child{border-bottom:0;}.accordion__header{padding:20px 30px;}.accordion__body{padding:5px 30px 20px;}}}"]);
/* harmony default export */ __webpack_exports__["default"] = (FaqSectionWrapper);

/***/ }),

/***/ "./containers/Saas/FaqSection/index.js":
/*!*********************************************!*\
  !*** ./containers/Saas/FaqSection/index.js ***!
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
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/components/Accordion */ "../../node_modules/common/src/components/Accordion/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons-kit/entypo/plus */ "react-icons-kit/entypo/plus");
/* harmony import */ var react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons-kit/entypo/minus */ "react-icons-kit/entypo/minus");
/* harmony import */ var react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _faqSection_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./faqSection.style */ "./containers/Saas/FaqSection/faqSection.style.js");
/* harmony import */ var common_src_data_Saas__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/src/data/Saas */ "../../node_modules/common/src/data/Saas/index.js");

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/Saas/FaqSection/index.js";















var FaqSection = function FaqSection(_ref) {
  var sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionSubTitle = _ref.sectionSubTitle,
      titleStyle = _ref.titleStyle,
      descriptionStyle = _ref.descriptionStyle,
      buttonWrapper = _ref.buttonWrapper,
      button = _ref.button;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_faqSection_style__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "faq_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_9__["Accordion"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, common_src_data_Saas__WEBPACK_IMPORTED_MODULE_14__["Faq"].map(function (faqItem, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionItem"], {
      key: index,
      expanded: faqItem.expend,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionTitle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: faqItem.title
    }, titleStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_9__["IconWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_9__["OpenIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
      icon: react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_12__["minus"],
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_9__["CloseIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
      icon: react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_11__["plus"],
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_Accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: faqItem.description
    }, descriptionStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })))));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))))))));
}; // FaqSection style props


FaqSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // FaqSection default style

FaqSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px'
  },
  // sub section default style
  sectionSubTitle: {
    content: 'FREQUENTLY ASKED QUESTIONS',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '5px'
  },
  // section title default style
  sectionTitle: {
    content: 'Want to ask something about us ?',
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // accordion title default style
  titleStyle: {
    fontSize: ['16px', '19px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // accordion description default style
  descriptionStyle: {
    fontSize: '15px',
    color: '#5d646d',
    lineHeight: '1.75',
    mb: '0',
    fontWeight: '400'
  },
  buttonWrapper: {
    mt: "".concat(11),
    flexBox: true,
    justifyContent: 'center'
  },
  button: {
    title: 'EXPLORE FORUM',
    type: 'button',
    fontSize: "".concat(2),
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primary',
    height: "".concat(4)
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FaqSection);

/***/ }),

/***/ "./containers/Saas/FeatureSection/featureSection.style.js":
/*!****************************************************************!*\
  !*** ./containers/Saas/FeatureSection/featureSection.style.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var FeatureSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "featureSectionstyle__FeatureSectionWrapper",
  componentId: "sc-1s8fnmh-0"
})(["padding:80px 0 180px 0;@media (max-width:990px){padding:60px 0 60px 0;}@media (max-width:767px){padding:60px 0 30px 0;}.feature__block{position:relative;height:100%;transition:box-shadow 0.3s ease;@media (max-width:500px){padding:30px 0;}.icon__wrapper{position:relative;border-bottom-left-radius:6px;overflow:hidden;background:linear-gradient( -60deg,rgba(241,39,17,0.7),rgba(245,175,25,0.7) );.flaticon-flask{&:before{margin-left:8px;}}&:before,&:after{content:'';width:28px;height:calc(100% + 30px);position:absolute;}&:before{transform:rotate(45deg);background-color:rgba(255,255,255,0.15);}&:after{transform:rotate(-45deg);background-color:rgba(0,0,0,0.05);}}&:hover{", "}}.row{> .col{&:nth-child(-n + 3){}&:nth-child(3n + 3),&:last-child{}&:nth-child(1){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(236,0,140,0.75),rgba(255,103,103,0.75) );}}}&:nth-child(2){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(110,72,170,0.75),rgba(192,91,210,0.75) );}}}&:nth-child(3){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(241,39,17,0.7),rgba(245,175,25,0.7) );}}}&:nth-child(4){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(47,128,237,0.75),rgba(86,204,242,0.75) );}}}&:nth-child(5){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(50,207,167,0.75),rgba(150,201,61,0.75) );}}}}}"], ''
/* box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2); */
);
/* harmony default export */ __webpack_exports__["default"] = (FeatureSectionWrapper);

/***/ }),

/***/ "./containers/Saas/FeatureSection/index.js":
/*!*************************************************!*\
  !*** ./containers/Saas/FeatureSection/index.js ***!
  \*************************************************/
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
/* harmony import */ var common_src_data_Saas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/data/Saas */ "../../node_modules/common/src/data/Saas/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _featureSection_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./featureSection.style */ "./containers/Saas/FeatureSection/featureSection.style.js");

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/Saas/FeatureSection/index.js";










var FeatureSection = function FeatureSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionSubTitle = _ref.sectionSubTitle,
      featureTitle = _ref.featureTitle,
      featureDescription = _ref.featureDescription,
      iconStyle = _ref.iconStyle,
      contentStyle = _ref.contentStyle,
      blockWrapperStyle = _ref.blockWrapperStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_featureSection_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "service_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "OUR SERVICES"
  }, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Featured Service that We Provide"
  }, sectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), common_src_data_Saas__WEBPACK_IMPORTED_MODULE_7__["Features"].map(function (feature, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "col"
    }, col, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: feature.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }),
      wrapperStyle: blockWrapperStyle,
      iconStyle: iconStyle,
      contentStyle: contentStyle,
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: feature.title
      }, featureTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })),
      description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: feature.description
      }, featureDescription, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })),
      className: "saasFeature",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }));
  }))));
}; // FeatureSection style props


FeatureSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // FeatureSection default style

FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '40px', '40px', '80px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 3]
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px']
  },
  // feature icon default style
  iconStyle: {
    width: ['70px', '75px', '75px', '84px'],
    height: ['70px', '75px', '75px', '84px'],
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: ['32px', '36px'],
    color: '#ffffff',
    overflow: 'hidden',
    mb: ['20px', '20px', '20px', '30px'],
    borderBottomLeftRadius: '50%'
  },
  // feature content default style
  contentStyle: {
    textAlign: 'left'
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '20px'],
    letterSpacing: '-0.020em'
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343d4ccc'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FeatureSection);

/***/ }),

/***/ "./containers/Saas/Footer/footer.style.js":
/*!************************************************!*\
  !*** ./containers/Saas/Footer/footer.style.js ***!
  \************************************************/
/*! exports provided: List, ListItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_src_assets_image_saas_footer_bg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/src/assets/image/saas/footer-bg.png */ "../../node_modules/common/src/assets/image/saas/footer-bg.png");
/* harmony import */ var common_src_assets_image_saas_footer_bg_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_footer_bg_png__WEBPACK_IMPORTED_MODULE_1__);


var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "footerstyle__FooterWrapper",
  componentId: "sc-69qp6n-0"
})(["position:relative;background-color:#f9fbfd;overflow:hidden;background:linear-gradient(to bottom,#f7f8fd 0%,#fafbff 100%);@media (min-width:576px){padding-top:130px;&:before{content:'';position:absolute;width:104%;padding-bottom:104%;border-top-right-radius:11%;top:14%;left:0;pointer-events:none;background-color:#fff;transform:rotate(-6deg);@media (max-width:767px){padding-bottom:150%;}}}.footer_container{background-repeat:no-repeat;background-position:center 50px;padding-top:80px;padding-bottom:80px;position:relative;@media (min-width:576px){background-image:url(", ");}@media (max-width:990px){padding-bottom:20px;}}"], common_src_assets_image_saas_footer_bg_png__WEBPACK_IMPORTED_MODULE_1___default.a);
var List = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "footerstyle__List",
  componentId: "sc-69qp6n-1"
})([""]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "footerstyle__ListItem",
  componentId: "sc-69qp6n-2"
})(["a{color:rgba(52,61,72,0.8);font-size:14px;line-height:36px;transition:all 0.2s ease;&:hover,&:focus{outline:0;text-decoration:none;color:#343d48;}}"]);

/* harmony default export */ __webpack_exports__["default"] = (FooterWrapper);

/***/ }),

/***/ "./containers/Saas/Footer/index.js":
/*!*****************************************!*\
  !*** ./containers/Saas/Footer/index.js ***!
  \*****************************************/
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
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer.style */ "./containers/Saas/Footer/footer.style.js");
/* harmony import */ var common_src_assets_image_saas_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/assets/image/saas/logo.png */ "../../node_modules/common/src/assets/image/saas/logo.png");
/* harmony import */ var common_src_assets_image_saas_logo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_logo_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var common_src_data_Saas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/data/Saas */ "../../node_modules/common/src/data/Saas/index.js");

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/Saas/Footer/index.js";












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
    logoSrc: common_src_assets_image_saas_logo_png__WEBPACK_IMPORTED_MODULE_10___default.a,
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
  }), common_src_data_Saas__WEBPACK_IMPORTED_MODULE_11__["Footer_Data"].map(function (widget, index) {
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
    width: '100px',
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

/***/ "./containers/Saas/Navbar/index.js":
/*!*****************************************!*\
  !*** ./containers/Saas/Navbar/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Navbar */ "../../node_modules/reusecore/src/elements/Navbar/index.js");
/* harmony import */ var reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Drawer */ "../../node_modules/reusecore/src/elements/Drawer/index.js");
/* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js");
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var common_src_components_HamburgMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/components/HamburgMenu */ "../../node_modules/common/src/components/HamburgMenu/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var common_src_data_Saas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/data/Saas */ "../../node_modules/common/src/data/Saas/index.js");
/* harmony import */ var common_src_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/components/ScrollSpyMenu */ "../../node_modules/common/src/components/ScrollSpyMenu/index.js");
/* harmony import */ var common_src_assets_image_saas_logo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/assets/image/saas/logo.png */ "../../node_modules/common/src/assets/image/saas/logo.png");
/* harmony import */ var common_src_assets_image_saas_logo_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_logo_png__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/Saas/Navbar/index.js";













var Navbar = function Navbar(_ref) {
  var navbarStyle = _ref.navbarStyle,
      logoStyle = _ref.logoStyle,
      row = _ref.row,
      menuWrapper = _ref.menuWrapper;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_9__["DrawerContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch; // Toggle drawer


  var toggleHandler = function toggleHandler() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, navbarStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "#",
    logoSrc: common_src_assets_image_saas_logo_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    title: "Agency",
    logoStyle: logoStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, menuWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "main_menu",
    menuItems: common_src_data_Saas__WEBPACK_IMPORTED_MODULE_10__["MENU_ITEMS"],
    offset: -70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "420px",
    placement: "right",
    drawerHandler: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_HamburgMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
      barColor: "#eb4d4b",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "mobile_menu",
    menuItems: common_src_data_Saas__WEBPACK_IMPORTED_MODULE_10__["MENU_ITEMS"],
    drawerClose: true,
    offset: -100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))))));
};

Navbar.propTypes = {
  navbarStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  menuWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
Navbar.defaultProps = {
  navbarStyle: {
    className: 'hosting_navbar',
    minHeight: '70px',
    display: 'block'
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: ['space-between', 'space-between', 'space-between', 'flex-start'],
    width: '100%'
  },
  logoStyle: {
    maxWidth: '130px',
    mr: [0, 0, 0, '166px']
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'primaryWithBg',
    minHeight: 'auto',
    height: "".concat(1)
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./containers/Saas/Particle/index.js":
/*!*******************************************!*\
  !*** ./containers/Saas/Particle/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_src_assets_image_saas_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/src/assets/image/saas/particles/particle-1.png */ "../../node_modules/common/src/assets/image/saas/particles/particle-1.png");
/* harmony import */ var common_src_assets_image_saas_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_src_assets_image_saas_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/src/assets/image/saas/particles/particle-2.png */ "../../node_modules/common/src/assets/image/saas/particles/particle-2.png");
/* harmony import */ var common_src_assets_image_saas_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_src_assets_image_saas_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/src/assets/image/saas/particles/particle-3.png */ "../../node_modules/common/src/assets/image/saas/particles/particle-3.png");
/* harmony import */ var common_src_assets_image_saas_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_src_assets_image_saas_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/src/assets/image/saas/particles/particle-4.png */ "../../node_modules/common/src/assets/image/saas/particles/particle-4.png");
/* harmony import */ var common_src_assets_image_saas_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var common_src_assets_image_saas_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/src/assets/image/saas/particles/particle-5.png */ "../../node_modules/common/src/assets/image/saas/particles/particle-5.png");
/* harmony import */ var common_src_assets_image_saas_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var common_src_assets_image_saas_particles_particle_6_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/assets/image/saas/particles/particle-6.png */ "../../node_modules/common/src/assets/image/saas/particles/particle-6.png");
/* harmony import */ var common_src_assets_image_saas_particles_particle_6_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_particles_particle_6_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/Saas/Particle/index.js";









var ParticlesComponent = function ParticlesComponent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "particle",
    params: {
      particles: {
        number: {
          value: 6,
          density: {
            enable: true,
            value_area: 800
          }
        },
        shape: {
          type: ['images'],
          images: [{
            src: "".concat(common_src_assets_image_saas_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2___default.a),
            width: 25,
            height: 25
          }, {
            src: "".concat(common_src_assets_image_saas_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3___default.a),
            width: 18,
            height: 18
          }, {
            src: "".concat(common_src_assets_image_saas_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4___default.a),
            width: 32,
            height: 32
          }, {
            src: "".concat(common_src_assets_image_saas_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5___default.a),
            width: 41,
            height: 41
          }, {
            src: "".concat(common_src_assets_image_saas_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6___default.a),
            width: 22,
            height: 22
          }, {
            src: "".concat(common_src_assets_image_saas_particles_particle_6_png__WEBPACK_IMPORTED_MODULE_7___default.a),
            width: 22,
            height: 22
          }]
        },
        opacity: {
          value: 0.17626369048095938,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 10,
          random: false
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          random: false,
          straight: false,
          bounce: true,
          attract: {
            enable: true,
            rotateX: 100,
            rotateY: 400
          }
        }
      },
      retina_detect: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ParticlesComponent);

/***/ }),

/***/ "./containers/Saas/PartnerSection/index.js":
/*!*************************************************!*\
  !*** ./containers/Saas/PartnerSection/index.js ***!
  \*************************************************/
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
/* harmony import */ var _partner_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partner.style */ "./containers/Saas/PartnerSection/partner.style.js");
/* harmony import */ var common_src_assets_image_saas_partner_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/assets/image/saas/partner.png */ "../../node_modules/common/src/assets/image/saas/partner.png");
/* harmony import */ var common_src_assets_image_saas_partner_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_partner_png__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/Saas/PartnerSection/index.js";












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
    src: common_src_assets_image_saas_partner_png__WEBPACK_IMPORTED_MODULE_11___default.a,
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
    lineHeight: '1.5'
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
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PartnerSection);

/***/ }),

/***/ "./containers/Saas/PartnerSection/partner.style.js":
/*!*********************************************************!*\
  !*** ./containers/Saas/PartnerSection/partner.style.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_src_assets_image_saas_map_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/src/assets/image/saas/map.png */ "../../node_modules/common/src/assets/image/saas/map.png");
/* harmony import */ var common_src_assets_image_saas_map_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_map_png__WEBPACK_IMPORTED_MODULE_1__);


var PartnerSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "partnerstyle__PartnerSectionWrapper",
  componentId: "sc-195aylg-0"
})(["padding:120px 0;background-color:#fafbff;background-image:url(", ");background-repeat:no-repeat;background-position:25% center;@media (max-width:990px){padding:100px 0;}@media (max-width:767px){padding:80px 0;}@media (max-width:575px){padding:60px 0;}"], common_src_assets_image_saas_map_png__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = (PartnerSectionWrapper);

/***/ }),

/***/ "./containers/Saas/PricingSection/index.js":
/*!*************************************************!*\
  !*** ./containers/Saas/PricingSection/index.js ***!
  \*************************************************/
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
/* harmony import */ var common_src_data_Saas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/src/data/Saas */ "../../node_modules/common/src/data/Saas/index.js");
/* harmony import */ var _pricing_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pricing.style */ "./containers/Saas/PricingSection/pricing.style.js");
/* harmony import */ var react_icons_kit_icomoon_checkmark__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons-kit/icomoon/checkmark */ "react-icons-kit/icomoon/checkmark");
/* harmony import */ var react_icons_kit_icomoon_checkmark__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_checkmark__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/Saas/PricingSection/index.js";















var PricingSection = function PricingSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      row = _ref.row,
      col = _ref.col,
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
    data: common_src_data_Saas__WEBPACK_IMPORTED_MODULE_13__["MONTHLY_PRICING_TABLE"],
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
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secHeading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["PricingButtonWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Monthly Plan",
    className: activeStatus ? 'active-item' : '',
    onClick: function onClick() {
      return setState({
        data: common_src_data_Saas__WEBPACK_IMPORTED_MODULE_13__["MONTHLY_PRICING_TABLE"],
        active: true
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Annual Plan",
    className: activeStatus === false ? 'active-item' : '',
    onClick: function onClick() {
      return setState({
        data: common_src_data_Saas__WEBPACK_IMPORTED_MODULE_13__["YEARLY_PRICING_TABLE"],
        active: false
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_11__["default"], {
    carouselSelector: "pricing-carousel",
    options: pricingCarouselOptions,
    controls: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, data.map(function (pricingTable, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: "pricing-table-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["default"], {
      freePlan: pricingTable.freePlan,
      className: "pricing_table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["PricingHead"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.name
    }, nameStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.description
    }, descriptionStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["PricingPrice"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.price
    }, priceStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.priceLabel
    }, priceLabelStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["PricingButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: pricingTable.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, pricingTable.freePlan ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: pricingTable.buttonLabel
    }, buttonStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: pricingTable.buttonLabel
    }, buttonFillStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["PricingList"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, pricingTable.listItems.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["ListItem"], {
        key: "pricing-table-list-".concat(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_5___default.a, {
        icon: react_icons_kit_icomoon_checkmark__WEBPACK_IMPORTED_MODULE_15__["checkmark"],
        className: "price_list_icon",
        size: 13,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: item.content
      }, listContentStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      })));
    }))));
  }))))));
};

PricingSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
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
    pt: ['60px', '80px', '80px', '80px', '120px'],
    pb: ['20px', '20px', '20px', '80px']
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
    content: 'PRICING PLAN',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px'
  },
  secHeading: {
    content: 'What’s our monthly pricing subscription',
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '0'
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
    colors: 'primary',
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

/***/ "./containers/Saas/PricingSection/pricing.style.js":
/*!*********************************************************!*\
  !*** ./containers/Saas/PricingSection/pricing.style.js ***!
  \*********************************************************/
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
  componentId: "sc-1y3vvuu-0"
})(["border:1px solid #f2f4f7;border-radius:5px;padding:60px 45px;border-radius:5px;margin-bottom:30px;@media (max-width:767px){padding:45px 35px;}"]);
var PricingHead = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pricingstyle__PricingHead",
  componentId: "sc-1y3vvuu-1"
})(["margin-bottom:40px;"]);
var PricingPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pricingstyle__PricingPrice",
  componentId: "sc-1y3vvuu-2"
})(["margin-bottom:30px;"]);
var PricingButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pricingstyle__PricingButton",
  componentId: "sc-1y3vvuu-3"
})(["text-align:center;margin-bottom:55px;"]);
var PricingList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pricingstyle__PricingList",
  componentId: "sc-1y3vvuu-4"
})([""]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pricingstyle__ListItem",
  componentId: "sc-1y3vvuu-5"
})(["display:flex;margin-bottom:19px;&:last-child{margin-bottom:0;}.price_list_icon{color:#18d379;margin-right:10px;}"]);
var SwitchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pricingstyle__SwitchWrapper",
  componentId: "sc-1y3vvuu-6"
})(["text-align:center;margin-top:20px;.reusecore__switch{.reusecore__field-label{font-size:16px;font-weight:400;color:#5c636c;cursor:pointer;}input[type='checkbox']{&:checked{+ div{width:40px !important;background-color:", ";> div{left:17px !important;}}}+ div{background-color:#f0f0f0;background-color:#f0f0f0;border:0;width:40px;height:25px;> div{background-color:#fff;box-shadow:0px 2px 3px 0.24px rgba(31,64,104,0.25);width:21px;height:21px;top:2px;left:2px;}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary'));
var PricingButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pricingstyle__PricingButtonWrapper",
  componentId: "sc-1y3vvuu-7"
})(["text-align:center;margin-top:30px;.reusecore__button{font-size:16px;font-weight:400;color:#6f7a87;background:#fff;height:50px;width:165px;border:1px solid #e4e9ee;&:nth-child(1){border-top-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:5px;border-right-color:transparent;}&:nth-child(2){border-top-left-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px;border-bottom-left-radius:0;border-left-color:transparent;}&.active-item{color:#5167db;border-color:#5167db;}@media (max-width:575px){font-size:14px;height:44px;width:120px;padding:0 5px;}}"]);

/* harmony default export */ __webpack_exports__["default"] = (PricingTable);

/***/ }),

/***/ "./containers/Saas/ServiceSection/index.js":
/*!*************************************************!*\
  !*** ./containers/Saas/ServiceSection/index.js ***!
  \*************************************************/
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
/* harmony import */ var common_src_data_Saas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/data/Saas */ "../../node_modules/common/src/data/Saas/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _service_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service.style */ "./containers/Saas/ServiceSection/service.style.js");

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/Saas/ServiceSection/index.js";










var ServiceSection = function ServiceSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionSubTitle = _ref.sectionSubTitle,
      featureTitle = _ref.featureTitle,
      featureDescription = _ref.featureDescription,
      iconStyle = _ref.iconStyle,
      contentStyle = _ref.contentStyle,
      blockWrapperStyle = _ref.blockWrapperStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_service_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "feature_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "OUR FEATURES"
  }, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Why you should choose our Saas"
  }, sectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), common_src_data_Saas__WEBPACK_IMPORTED_MODULE_7__["Service"].map(function (feature, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "col"
    }, col, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: feature.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }),
      wrapperStyle: blockWrapperStyle,
      iconStyle: iconStyle,
      contentStyle: contentStyle,
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: feature.title
      }, featureTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })),
      description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: feature.description
      }, featureDescription, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })),
      className: "saasService",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }));
  }))));
}; // ServiceSection style props


ServiceSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // ServiceSection default style

ServiceSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['50px', '50px', '50px', '80px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3]
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px']
  },
  // feature icon default style
  iconStyle: {
    width: ['70px', '80px'],
    height: ['70px', '80px'],
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: ['32px', '36px'],
    color: '#ffffff',
    overflow: 'hidden',
    mb: '30px',
    borderBottomLeftRadius: '50%'
  },
  // feature content default style
  contentStyle: {
    textAlign: 'left',
    mt: '-5px'
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    letterSpacing: '-0.020em',
    mb: '10px'
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343d4ccc'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ServiceSection);

/***/ }),

/***/ "./containers/Saas/ServiceSection/service.style.js":
/*!*********************************************************!*\
  !*** ./containers/Saas/ServiceSection/service.style.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ServiceSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "servicestyle__ServiceSectionWrapper",
  componentId: "sc-1nshczp-0"
})(["padding:80px 0 40px;@media (max-width:990px){padding:60px 0 0 0;}.feature__block{position:relative;height:100%;transition:box-shadow 0.3s ease;display:flex;@media (max-width:500px){padding:30px 0;}.icon__wrapper{position:relative;border-bottom-right-radius:6px;flex-shrink:0;margin-right:22px;background:#fff5f6;.flaticon-flask{&:before{margin-left:8px;}}}&:hover{", "}}.row{> .col{&:nth-child(-n + 3){}&:nth-child(3n + 3),&:last-child{}&:nth-child(1){.feature__block{.icon__wrapper{background:#fff5f6;color:#f55767;}}}&:nth-child(2){.feature__block{.icon__wrapper{background:#ebfff2;color:#29c05e;}}}&:nth-child(3){.feature__block{.icon__wrapper{background:#f1faff;color:#2595d4;}}}&:nth-child(4){.feature__block{.icon__wrapper{background:#fffae8;color:#e9b600;}}}&:nth-child(5){.feature__block{.icon__wrapper{background:#f5eeff;color:#a55cef;}}}&:nth-child(6){.feature__block{.icon__wrapper{background:#ffecfa;color:#e764a5;}}}}}"], ''
/* box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2); */
);
/* harmony default export */ __webpack_exports__["default"] = (ServiceSectionWrapper);

/***/ }),

/***/ "./containers/Saas/TestimonialSection/index.js":
/*!*****************************************************!*\
  !*** ./containers/Saas/TestimonialSection/index.js ***!
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
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_data_Saas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/data/Saas */ "../../node_modules/common/src/data/Saas/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var _testimonialSection_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./testimonialSection.style */ "./containers/Saas/TestimonialSection/testimonialSection.style.js");

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/Saas/TestimonialSection/index.js";












var TestimonialSection = function TestimonialSection(_ref) {
  var sectionSubTitle = _ref.sectionSubTitle,
      btnWrapperStyle = _ref.btnWrapperStyle,
      commentStyle = _ref.commentStyle,
      nameStyle = _ref.nameStyle,
      btnStyle = _ref.btnStyle,
      designationStyle = _ref.designationStyle;
  // Glide js options
  var glideOptions = {
    type: 'carousel',
    autoplay: 4000,
    perView: 1
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonialSection_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "testimonial_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "CLIENT COMMENTS"
  }, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    options: glideOptions,
    buttonWrapperStyle: btnWrapperStyle,
    nextButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "flaticon-next",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }),
      variant: "textButton",
      "aria-label": "next"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })),
    prevButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "flaticon-left-arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }),
      variant: "textButton",
      "aria-label": "prev"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, common_src_data_Saas__WEBPACK_IMPORTED_MODULE_7__["Testimonial"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonialSection_style__WEBPACK_IMPORTED_MODULE_11__["TextWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-quotes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.comment
    }, commentStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonialSection_style__WEBPACK_IMPORTED_MODULE_11__["ClientName"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.name
    }, nameStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.designation
    }, designationStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonialSection_style__WEBPACK_IMPORTED_MODULE_11__["ImageWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonialSection_style__WEBPACK_IMPORTED_MODULE_11__["RoundWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
      src: item.avatar_url,
      alt: "Client Image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "fab",
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: item.social_icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }),
      "aria-label": "social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }))));
  })))));
}; // TestimonialSection style props


TestimonialSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  btnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  btnWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  nameStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  commentStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  designationStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // TestimonialSection default style

TestimonialSection.defaultProps = {
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '20px',
    ml: 'auto',
    mr: 'auto',
    pl: '12px',
    maxWidth: '954px'
  },
  // client comment style
  commentStyle: {
    color: '#0f2137',
    fontWeight: '400',
    fontSize: ['22px', '22px', '22px', '30px'],
    lineHeight: '1.72',
    mb: '47px'
  },
  // client name style
  nameStyle: {
    as: 'h3',
    color: '#343d48',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '30px',
    mb: 0
  },
  // client designation style
  designationStyle: {
    as: 'h5',
    color: 'rgba(52, 61, 72, 0.8)',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '30px',
    mb: 0,
    ml: ['0', '10px']
  },
  // glide slider nav controls style
  btnWrapperStyle: {
    position: 'absolute',
    bottom: '62px',
    left: '12px'
  },
  // next / prev btn style
  btnStyle: {
    minWidth: 'auto',
    minHeight: 'auto',
    mr: '13px',
    fontSize: '16px',
    color: '#343d484d'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TestimonialSection);

/***/ }),

/***/ "./containers/Saas/TestimonialSection/testimonialSection.style.js":
/*!************************************************************************!*\
  !*** ./containers/Saas/TestimonialSection/testimonialSection.style.js ***!
  \************************************************************************/
/*! exports provided: TextWrapper, ImageWrapper, ClientName, RoundWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWrapper", function() { return TextWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientName", function() { return ClientName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundWrapper", function() { return RoundWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var TestimonialSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "testimonialSectionstyle__TestimonialSectionWrapper",
  componentId: "d5eg1p-0"
})(["padding:80px 0 120px;overflow:hidden;@media (max-width:990px){padding-bottom:80px;}@media (max-width:767px){padding-top:40px;}.glide{max-width:954px;margin:0 auto;.glide__slide{display:flex;margin-bottom:40px;@media only screen and (max-width:991px){padding-top:30px;}@media only screen and (max-width:680px){flex-direction:column-reverse;}}.glide__controls{position:relative;bottom:0;.reusecore__button{&:hover{color:", ";}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.quoteText', '#343d48'));
var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "testimonialSectionstyle__TextWrapper",
  componentId: "d5eg1p-1"
})(["max-width:540px;margin-right:auto;position:relative;padding-left:12px;margin-right:30px;p{text-indent:27px;margin-bottom:25px;}i{color:rgba(52,61,72,0.2);font-size:20px;position:absolute;top:0;left:12px;z-index:-1;}"]);
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "testimonialSectionstyle__ImageWrapper",
  componentId: "d5eg1p-2"
})(["width:256px;height:256px;position:relative;@media only screen and (max-width:680px){margin-bottom:40px;}.reusecore__button{position:absolute;z-index:2;bottom:0;left:20px;width:65px;height:65px;font-size:26px;background-color:rgb(220,57,95);box-shadow:0px 10px 28.2px 1.8px rgba(23,65,104,0.2);}"]);
var RoundWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "testimonialSectionstyle__RoundWrapper",
  componentId: "d5eg1p-3"
})(["width:256px;height:256px;border-radius:50%;box-sizing:border-box;border-bottom-right-radius:10px;background:rgb(232,230,192);background:radial-gradient( circle,rgba(232,230,192,1) 0%,rgba(199,195,134,1) 100% );overflow:hidden;"]);
var ClientName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "testimonialSectionstyle__ClientName",
  componentId: "d5eg1p-4"
})(["display:flex;align-items:center;@media (max-width:575px){flex-direction:column;align-items:inherit;}"]);

/* harmony default export */ __webpack_exports__["default"] = (TestimonialSectionWrapper);

/***/ }),

/***/ "./containers/Saas/TimelineSection/index.js":
/*!**************************************************!*\
  !*** ./containers/Saas/TimelineSection/index.js ***!
  \**************************************************/
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
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Slide */ "react-reveal/Slide");
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _timeline_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timeline.style */ "./containers/Saas/TimelineSection/timeline.style.js");
/* harmony import */ var common_src_data_Saas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/src/data/Saas */ "../../node_modules/common/src/data/Saas/index.js");
/* harmony import */ var common_src_assets_image_saas_illustration_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/src/assets/image/saas/illustration.png */ "../../node_modules/common/src/assets/image/saas/illustration.png");
/* harmony import */ var common_src_assets_image_saas_illustration_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_illustration_png__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/Saas/TimelineSection/index.js";















var TimelineSection = function TimelineSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionSubTitle = _ref.sectionSubTitle,
      row = _ref.row,
      col = _ref.col,
      button = _ref.button,
      textArea = _ref.textArea,
      imageArea = _ref.imageArea,
      imageTwo = _ref.imageTwo,
      buttonWrapper = _ref.buttonWrapper,
      indexStyle = _ref.indexStyle,
      timelineTitle = _ref.timelineTitle,
      timelineDescription = _ref.timelineDescription;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionSubTitle, {
    content: "WORKING STEP",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionTitle, {
    content: "How Pestro work behind the scenes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, imageArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageTwo, {
    src: common_src_assets_image_saas_illustration_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "Illustration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["TimelineWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, common_src_data_Saas__WEBPACK_IMPORTED_MODULE_13__["Timeline"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["TimelineItem"], {
      key: "timeline-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["TimelineIndex"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["Hidden"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default.a, {
      bottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "span",
      content: item.index || "0".concat(index + 1)
    }, indexStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["TimelineContent"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["Hidden"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default.a, {
      bottom: true,
      delay: 100,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "h2",
      content: item.title
    }, timelineTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["Hidden"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default.a, {
      bottom: true,
      delay: 200,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.description
    }, timelineDescription, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["TimelineDot"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }));
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "HIRE FOR PROJECT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })))))));
};

TimelineSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageTwo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  indexStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  timelineTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  timelineDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
TimelineSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '80px']
  },
  // section header default style
  sectionHeader: {
    mb: '56px'
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
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
    width: ['100%', '100%', '55%', '50%', '55%'],
    mb: ['40px', '40px', '0', '0', '0']
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '45%'],
    mb: ['30px', '40px', '40px', '0', '0']
  },
  title: {
    fontSize: ['30px', '38px', '38px', '48px', '48px'],
    fontWeight: '300',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '15px'
  },
  description: {
    fontSize: '16px',
    color: 'textColor',
    lineHeight: '1.75',
    mb: '33px'
  },
  buttonWrapper: {
    mt: ['25px', '50px'],
    flexBox: true,
    justifyContent: 'center'
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: '46px'
  },
  imageOne: {
    mb: '40px',
    ml: 'auto',
    mr: 'auto'
  },
  imageTwo: {
    ml: 'auto',
    mr: 'auto'
  },
  indexStyle: {
    fontSize: ['36px', '42px', '52px', '56px', '72px'],
    fontWeight: '300',
    color: '#eaebec',
    display: 'block',
    lineHeight: '1',
    mb: '0'
  },
  timelineTitle: {
    fontSize: ['16px', '17px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '13px'
  },
  timelineDescription: {
    fontSize: ['14px', '15px', '15px', '15px', '16px'],
    lineHeight: '2',
    color: '#5d646d',
    mb: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TimelineSection);

/***/ }),

/***/ "./containers/Saas/TimelineSection/timeline.style.js":
/*!***********************************************************!*\
  !*** ./containers/Saas/TimelineSection/timeline.style.js ***!
  \***********************************************************/
/*! exports provided: TimelineWrapper, TimelineDot, TimelineItem, TimelineIndex, TimelineContent, Hidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineWrapper", function() { return TimelineWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineDot", function() { return TimelineDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineItem", function() { return TimelineItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineIndex", function() { return TimelineIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineContent", function() { return TimelineContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hidden", function() { return Hidden; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var TimelineWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "timelinestyle__TimelineWrapper",
  componentId: "sc-12jhrhj-0"
})([""]);
var TimelineDot = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "timelinestyle__TimelineDot",
  componentId: "sc-12jhrhj-1"
})(["width:20px;height:20px;border-radius:50%;position:absolute;top:50%;left:0;box-shadow:0px 3px 8.46px 0.54px rgba(23,65,104,0.2);z-index:1;background:#fff;transform:translateY(-50%);&:after{content:'';position:absolute;width:12px;height:12px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);background:#ebedf5;transition:0.25s ease-in-out;}@media (max-width:480px){width:16px;height:16px;&:after{width:10px;height:10px;}}"]);
var TimelineItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "timelinestyle__TimelineItem",
  componentId: "sc-12jhrhj-2"
})(["position:relative;display:flex;align-items:center;margin-bottom:90px;padding-left:50px;&:first-child{&:before{display:none;}}&:last-child{margin-bottom:0;&:after{display:none;}}&:hover{", "{&:after{background:#5268db;}}}&:after,&:before{content:'';position:absolute;height:calc(50% + 45px);width:2px;background:#f0f0f1;left:9px;@media (max-width:480px){left:7px;}}&:before{bottom:50%;}&:after{top:50%;}@media (max-width:990px){margin-bottom:60px;}@media (max-width:480px){padding-left:30px;}"], TimelineDot);
var TimelineIndex = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "timelinestyle__TimelineIndex",
  componentId: "sc-12jhrhj-3"
})([""]);
var TimelineContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "timelinestyle__TimelineContent",
  componentId: "sc-12jhrhj-4"
})(["margin-left:30px;@media (max-width:480px){margin-left:20px;}"]);
var Hidden = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "timelinestyle__Hidden",
  componentId: "sc-12jhrhj-5"
})(["overflow:hidden;"]);

/***/ }),

/***/ "./containers/Saas/TrialSection/index.js":
/*!***********************************************!*\
  !*** ./containers/Saas/TrialSection/index.js ***!
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
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _saas_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../saas.style */ "./containers/Saas/saas.style.js");
/* harmony import */ var common_src_assets_image_saas_vendor_logos_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/assets/image/saas/vendor-logos.png */ "../../node_modules/common/src/assets/image/saas/vendor-logos.png");
/* harmony import */ var common_src_assets_image_saas_vendor_logos_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_vendor_logos_png__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/Saas/TrialSection/index.js";











var TrialSection = function TrialSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      row = _ref.row,
      title = _ref.title,
      description = _ref.description,
      textArea = _ref.textArea,
      imageArea = _ref.imageArea,
      ImageOne = _ref.ImageOne,
      btnStyle = _ref.btnStyle,
      outlineBtnStyle = _ref.outlineBtnStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ImageOne, {
    src: common_src_assets_image_saas_vendor_logos_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "VendorLogos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
    content: "Start your 30 days free trials today!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, description, {
    content: "We have provided 30 Days Money Back Guarantee in case of dissatisfaction with our product. We care for our customers and their values.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_saas_style__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], {
    className: "button_group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "WORK HISTORY"
  }, btnStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "Login with Email",
    variant: "textButton"
  }, outlineBtnStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
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
    fontSize: ['32px', '32px', '36px', '42px', '48px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25'
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '2.1',
    textAlign: 'center',
    mb: ['35px', '35px', '40px', '60px']
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto'
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    colors: 'primaryWithBg'
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TrialSection);

/***/ }),

/***/ "./containers/Saas/VisitorSection/index.js":
/*!*************************************************!*\
  !*** ./containers/Saas/VisitorSection/index.js ***!
  \*************************************************/
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
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Zoom */ "react-reveal/Zoom");
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Card */ "../../node_modules/reusecore/src/elements/Card/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _visitor_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./visitor.style */ "./containers/Saas/VisitorSection/visitor.style.js");
/* harmony import */ var common_src_assets_image_saas_saasvisitor1_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! common/src/assets/image/saas/saasvisitor1.png */ "../../node_modules/common/src/assets/image/saas/saasvisitor1.png");
/* harmony import */ var common_src_assets_image_saas_saasvisitor1_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_saasvisitor1_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var common_src_assets_image_saas_visitor_bg_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! common/src/assets/image/saas/visitor_bg.png */ "../../node_modules/common/src/assets/image/saas/visitor_bg.png");
/* harmony import */ var common_src_assets_image_saas_visitor_bg_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_saas_visitor_bg_png__WEBPACK_IMPORTED_MODULE_16__);

var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/containers/Saas/VisitorSection/index.js";

















var VisitorSection = function VisitorSection(_ref) {
  var title = _ref.title,
      description = _ref.description,
      textArea = _ref.textArea,
      imageWrapper = _ref.imageWrapper,
      btnStyle = _ref.btnStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_visitor_style__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "visitorSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_visitor_style__WEBPACK_IMPORTED_MODULE_14__["SectionObject"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "objectWrapper"
  }, imageWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_11__["default"], {
    src: common_src_assets_image_saas_visitor_bg_png__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: "BgImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "dashboardWrapper"
  }, imageWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_11__["default"], {
    src: common_src_assets_image_saas_saasvisitor1_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "VisitorDashboard1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: "Make your website growth with next level visitors"
    }, title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })),
    description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: "For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!."
    }, description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })),
    button: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: "HOW IT WORKS"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }))));
};

VisitorSection.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  btnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
VisitorSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%']
  },
  imageWrapper: {
    boxShadow: 'none'
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px']
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VisitorSection);

/***/ }),

/***/ "./containers/Saas/VisitorSection/visitor.style.js":
/*!*********************************************************!*\
  !*** ./containers/Saas/VisitorSection/visitor.style.js ***!
  \*********************************************************/
/*! exports provided: SectionObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionObject", function() { return SectionObject; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var VisitorSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "visitorstyle__VisitorSectionWrapper",
  componentId: "atm1oi-0"
})(["min-height:630px;display:flex;align-items:center;margin-bottom:40px;position:relative;@media only screen and (max-width:1200px){min-height:500px;margin-bottom:45px;}@media only screen and (max-width:991px){min-height:370px;margin-bottom:40px;}@media (max-width:767px){min-height:auto;display:block;}"]);
var SectionObject = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "visitorstyle__SectionObject",
  componentId: "atm1oi-1"
})(["position:absolute;width:55%;height:100%;top:0;left:0;display:flex;align-items:center;justify-content:flex-end;@media (max-width:767px){width:100%;position:relative;height:auto;top:auto;left:auto;}img{max-width:93%;height:auto;}.objectWrapper{margin-right:auto;position:relative;.dashboardWrapper{position:absolute;top:4vw;left:0;}}"]);

/* harmony default export */ __webpack_exports__["default"] = (VisitorSectionWrapper);

/***/ }),

/***/ "./containers/Saas/saas.style.js":
/*!***************************************!*\
  !*** ./containers/Saas/saas.style.js ***!
  \***************************************/
/*! exports provided: GlobalStyle, ContentWrapper, ButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Roboto', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;    \n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #343d48;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: #eb4d4b;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: #eb4d4b;\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: #eb4d4b;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #eb4d4b;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n\n  /* Modal default style */\n  button.modalCloseBtn {\n    color: ", " !important;\n\n    &.alt {\n      background-color: ", " !important;\n      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57) !important;\n    }   \n  }\n"], ["\n  body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Roboto', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;    \n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #343d48;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: #eb4d4b;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: #eb4d4b;\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: #eb4d4b;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #eb4d4b;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n\n  /* Modal default style */\n  button.modalCloseBtn {\n    color: ", " !important;\n\n    &.alt {\n      background-color: ", " !important;\n      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57) !important;\n    }   \n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#5268db'));
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "saasstyle__ContentWrapper",
  componentId: "wjkbat-0"
})(["position:relative;overflow:hidden;a:-webkit-any-link{text-decoration:none;}.sticky-nav-active{.hosting_navbar{background:#fff;box-shadow:0 0 20px rgba(0,0,0,0.15);padding:15px 0;}}.hosting_navbar{position:fixed;top:0;left:0;width:100%;transition:0.35s ease-in-out;padding:30px 0;.main_menu{margin-right:40px;li{display:inline-block;padding-left:13px;padding-right:13px;&:first-child{padding-left:0;}&:last-child{padding-right:0;}&.is-current{a{color:#eb4d4b;}}a{padding:5px;font-size:16px;font-weight:400;color:#343d48;transition:0.15s ease-in-out;&:hover{color:#eb4d4b;}}}@media (max-width:990px){display:none;}}.navbar_button{@media (max-width:990px){display:none;}}.reusecore-drawer__handler{@media (min-width:991px){display:none !important;}.hamburgMenu__bar{> span{}}}}.trial-section{background:linear-gradient(to bottom,#fafbff 0%,#f7f8fd 100%);.button_group{text-align:center;}}@media (max-width:990px){.glide__slide--active .pricing_table{box-shadow:0px 0px 30px rgba(0,0,0,0.05);border:0;}}"]);
var ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "saasstyle__ButtonGroup",
  componentId: "wjkbat-1"
})([""]);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_src_theme_saas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/src/theme/saas */ "../../node_modules/common/src/theme/saas/index.js");
/* harmony import */ var common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/src/assets/css/style */ "../../node_modules/common/src/assets/css/style.js");
/* harmony import */ var _containers_Saas_saas_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/Saas/saas.style */ "./containers/Saas/saas.style.js");
/* harmony import */ var _containers_Saas_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/Saas/Navbar */ "./containers/Saas/Navbar/index.js");
/* harmony import */ var _containers_Saas_BannerSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../containers/Saas/BannerSection */ "./containers/Saas/BannerSection/index.js");
/* harmony import */ var _containers_Saas_FeatureSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../containers/Saas/FeatureSection */ "./containers/Saas/FeatureSection/index.js");
/* harmony import */ var _containers_Saas_VisitorSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../containers/Saas/VisitorSection */ "./containers/Saas/VisitorSection/index.js");
/* harmony import */ var _containers_Saas_ServiceSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../containers/Saas/ServiceSection */ "./containers/Saas/ServiceSection/index.js");
/* harmony import */ var _containers_Saas_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../containers/Saas/Footer */ "./containers/Saas/Footer/index.js");
/* harmony import */ var _containers_Saas_PricingSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../containers/Saas/PricingSection */ "./containers/Saas/PricingSection/index.js");
/* harmony import */ var _containers_Saas_TrialSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../containers/Saas/TrialSection */ "./containers/Saas/TrialSection/index.js");
/* harmony import */ var _containers_Saas_TimelineSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../containers/Saas/TimelineSection */ "./containers/Saas/TimelineSection/index.js");
/* harmony import */ var _containers_Saas_TestimonialSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../containers/Saas/TestimonialSection */ "./containers/Saas/TestimonialSection/index.js");
/* harmony import */ var _containers_Saas_PartnerSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../containers/Saas/PartnerSection */ "./containers/Saas/PartnerSection/index.js");
/* harmony import */ var common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! common/src/contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var _containers_Saas_FaqSection__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../containers/Saas/FaqSection */ "./containers/Saas/FaqSection/index.js");
var _jsxFileName = "/Users/trupsys/Personal/iammer-marketing/packages/landing/pages/index.jsx";




















/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: common_src_theme_saas__WEBPACK_IMPORTED_MODULE_4__["saasTheme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Saas | A react next landing page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "Description",
    content: "React next landing page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#ec5555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_5__["ResetCSS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Saas_saas_style__WEBPACK_IMPORTED_MODULE_6__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Saas_saas_style__WEBPACK_IMPORTED_MODULE_6__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_18__["DrawerProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Saas_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Saas_BannerSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Saas_FeatureSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Saas_VisitorSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Saas_ServiceSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Saas_PricingSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Saas_TestimonialSection__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Saas_PartnerSection__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Saas_TimelineSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Saas_FaqSection__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Saas_TrialSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Saas_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))));
});

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/trupsys/Personal/iammer-marketing/packages/landing/pages/index.jsx */"./pages/index.jsx");


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

/***/ "react-icons-kit/icomoon/checkmark":
/*!****************************************************!*\
  !*** external "react-icons-kit/icomoon/checkmark" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/checkmark");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-reveal/Slide":
/*!*************************************!*\
  !*** external "react-reveal/Slide" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Slide");

/***/ }),

/***/ "react-reveal/Zoom":
/*!************************************!*\
  !*** external "react-reveal/Zoom" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Zoom");

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
//# sourceMappingURL=index.js.map