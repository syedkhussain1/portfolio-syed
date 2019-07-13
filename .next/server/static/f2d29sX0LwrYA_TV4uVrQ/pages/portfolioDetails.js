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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(1);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/shared/Header.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Header_HeaderNavLinks = function HeaderNavLinks(props) {
  return external_react_default.a.createElement(link_default.a, {
    href: props.route
  }, external_react_default.a.createElement("a", {
    className: "nav-link port-navbar-link"
  }, props.title));
};

var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_reactstrap_["Navbar"], {
        className: "port-navbar port-default absolute",
        color: "light",
        light: true,
        expand: "md"
      }, external_react_default.a.createElement(external_reactstrap_["NavbarBrand"], {
        className: "port-navbar-brand",
        href: "/"
      }, "Syed Hussain"), external_react_default.a.createElement(external_reactstrap_["NavbarToggler"], {
        onClick: this.toggle
      }), external_react_default.a.createElement(external_reactstrap_["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true
      }, external_react_default.a.createElement(external_reactstrap_["Nav"], {
        className: "ml-auto",
        navbar: true
      }, external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(Header_HeaderNavLinks, {
        route: "/",
        title: "Home"
      })), external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(Header_HeaderNavLinks, {
        route: "/portfolio",
        title: "Portfolio"
      })), external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(Header_HeaderNavLinks, {
        route: "/blogs",
        title: "Blog"
      })), external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(Header_HeaderNavLinks, {
        route: "/resume",
        title: "Resume"
      }))))));
    }
  }]);

  return Header;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/dist/lib/link"
var lib_link_ = __webpack_require__(6);

// CONCATENATED MODULE: ./components/layouts/BaseLayout.js





var BaseLayout_BaseLayout = function BaseLayout(props) {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, props.title), external_react_default.a.createElement("meta", {
    name: "description",
    content: "My name is Syed Hussain and I am an experienced software engineer and web developer. I have several years of experience working in very challenging and wide range  of technologies from software development, SQL development, developing test automation for web apps/API , android developer and  web applications development in React and django. Throughout my career, I have acquired advanced technical knowledge and challenged  myself to deliver solid products for client and in-house development. Please take a look around my website and connect with me."
  }), external_react_default.a.createElement("meta", {
    name: "keyword",
    content: "syed hussain, syed portfolio, syed software developer, syed profile"
  }), external_react_default.a.createElement("meta", {
    property: "og:title",
    content: "Syed Hussain - developer, programmer, traveller"
  }), external_react_default.a.createElement("meta", {
    property: "og:locale",
    content: "en_EU"
  }), external_react_default.a.createElement("meta", {
    property: "og:url",
    content: "http://localhost:3000"
  }), external_react_default.a.createElement("meta", {
    property: "og:type",
    content: "website"
  }), external_react_default.a.createElement("meta", {
    property: "og:description",
    content: "My name is Syed Hussain and I am an experienced software engineer and web developer."
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/ico",
    href: "/static/favicon.ico"
  }), external_react_default.a.createElement("script", {
    src: "https://kit.fontawesome.com/4759c905fd.js"
  })), external_react_default.a.createElement("div", {
    className: "layout-container"
  }, external_react_default.a.createElement(Header_Header, null), external_react_default.a.createElement("main", {
    className: "cover ".concat(props.className)
  }, external_react_default.a.createElement("div", {
    className: "wrapper"
  }, props.children))));
};

/* harmony default export */ var layouts_BaseLayout = __webpack_exports__["a"] = (BaseLayout_BaseLayout);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);



var BasePage = function BasePage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "base-page ".concat(props.className || "")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "page-header-title"
  }, props.title)), props.children));
};

/* harmony default export */ __webpack_exports__["a"] = (BasePage);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/dist/lib/link");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _components_shared_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var PortfolioDetails =
/*#__PURE__*/
function (_Component) {
  _inherits(PortfolioDetails, _Component);

  function PortfolioDetails() {
    _classCallCheck(this, PortfolioDetails);

    return _possibleConstructorReturn(this, _getPrototypeOf(PortfolioDetails).apply(this, arguments));
  }

  _createClass(PortfolioDetails, [{
    key: "render",
    value: function render() {
      var portfolioData = this.props.portfolioData;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_shared_BasePage__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "PROJECT #: ", portfolioData.id), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "TITLE: ", portfolioData.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "DESCRIPTION: ", portfolioData.body)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, portfolioId, portfolioData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                portfolioId = query.id;
                portfolioData = {};
                _context.prev = 3;
                _context.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("https://jsonplaceholder.typicode.com/posts/".concat(portfolioId));

              case 6:
                response = _context.sent;
                portfolioData = response.data;
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                console.error(_context.t0);

              case 13:
                return _context.abrupt("return", {
                  portfolioData: portfolioData
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 10]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return PortfolioDetails;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(PortfolioDetails));

/***/ })
/******/ ]);