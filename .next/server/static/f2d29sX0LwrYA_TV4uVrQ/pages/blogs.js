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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 10 */
/***/ (function(module) {

module.exports = [{"id":1,"title":"How I started programming","desc":"How I Start Programming...learn about my journey.","fullDesc":"How I started programming","postedBy":"Syed Hussain"},{"id":2,"title":"Why React.js?","desc":"React.js framework the future of web development...My thoughts.","fullDesc":"Why React.js?","postedBy":"Syed Hussain"},{"id":3,"title":"Relocating to France, guide...","desc":"The good and a the bad, dos and don'ts.","fullDesc":"","postedBy":"Syed Hussain"},{"id":4,"title":"My journey in learning french","desc":"Here I share with you all the resources I learnt to learn one of the most difficult language.","fullDesc":"","postedBy":"Syed Hussain"},{"id":5,"title":"My journey in learning french","desc":"Here I share with you all the resources I learnt to learn one of the most difficult language.","fullDesc":"","postedBy":"Syed Hussain"},{"id":6,"title":"Getting better at Arabic","desc":"I have shared some of my go to resources for learning arabic.","fullDesc":"","postedBy":"Syed Hussain"}];

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _components_shared_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _jsonData_blogContent_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
var _jsonData_blogContent_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(10, 1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var BlogDetails =
/*#__PURE__*/
function (_Component) {
  _inherits(BlogDetails, _Component);

  function BlogDetails() {
    _classCallCheck(this, BlogDetails);

    return _possibleConstructorReturn(this, _getPrototypeOf(BlogDetails).apply(this, arguments));
  }

  _createClass(BlogDetails, [{
    key: "render",
    value: function render() {
      // const router = useRouter();
      console.log("props", this.props);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
        isOpen: "isOpen",
        toggle: "toggle",
        className: "",
        backdrop: "backdrop"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalHeader"], {
        toggle: "toggle"
      }, "Modal title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")) // <BaseLayout>
      // <BasePage >
      // {/* {this.props.router.query.title} */}
      // </BasePage>
      // </BaseLayout>
      ;
    }
  }]);

  return BlogDetails;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BlogDetails);

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _components_shared_BasePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _pages_blogDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _jsonData_blogContent_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
var _jsonData_blogContent_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(10, 1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Blogs =
/*#__PURE__*/
function (_Component) {
  _inherits(Blogs, _Component);

  function Blogs(props) {
    var _this;

    _classCallCheck(this, Blogs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Blogs).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggle", function (id) {
      _this.setState(function (prevState) {
        return {
          modal: !prevState.modal
        };
      });
    });

    _this.state = {
      modal: false,
      backdrop: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Blogs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        title: "Syed Hussain -  Follow My Journey",
        headerType: 'landing',
        className: "blog-listing-page"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "masthead",
        style: {
          "backgroundImage": "url('/static/images/home-bg.jpg')"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-8 col-md-10 mx-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "site-heading"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "subheading"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "**PAGE UNDER CONSTRUCTION**")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "My Blogs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "subheading"
      }, "Where I share my programming and travelling experience...")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shared_BasePage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        className: "blog-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        md: "10",
        lg: "8",
        className: "mx-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _jsonData_blogContent_json__WEBPACK_IMPORTED_MODULE_7__.map(function (blog, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: index,
          className: "post-preview"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          OnClick: _this2.NavToBlog,
          className: "post-title"
        }, blog.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
          className: "post-subtitle"
        }, blog.desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          outline: true,
          color: "info",
          onClick: function onClick() {
            return _this2.toggle(blog.id);
          }
        }, "Read More..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "post-meta"
        }, "Posted by ", blog.postedBy, " ", moment__WEBPACK_IMPORTED_MODULE_6___default()().format('LLLL')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
          isOpen: _this2.state.modal,
          toggle: _this2.toggle,
          className: _this2.props.className,
          backdrop: _this2.state.backdrop
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalHeader"], {
          toggle: _this2.toggle
        }, "Modal title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          color: "secondary",
          onClick: _this2.toggle
        }, "Cancel")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null));
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null))));
    }
  }]);

  return Blogs;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Blogs);

/***/ })
/******/ ]);