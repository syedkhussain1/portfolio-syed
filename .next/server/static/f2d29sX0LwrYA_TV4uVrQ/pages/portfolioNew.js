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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 3:
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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/layouts/BaseLayout.js + 1 modules
var BaseLayout = __webpack_require__(3);

// EXTERNAL MODULE: ./components/shared/BasePage.js
var BasePage = __webpack_require__(5);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(7);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/portfolioStuff/PortfolioAddForm.js
/////////////Fromik Implementation///////////
// Render Prop


 // const valiateInputs = (values) => {
//     let errors = {};
//     if (!values.title) {
//       errors.title = 'Required';
//     } 
//     return errors;
// }

var PortfolioAddForm_PortfolioAddForm = function PortfolioAddForm(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_formik_["Formik"], {
    initialValues: {
      title: '',
      description: '',
      stack: '',
      url: ''
    } //   validate={valiateInputs}
    ,
    onSubmit: props.onSubmit
  }, function (_ref) {
    var isSubmitting = _ref.isSubmitting;
    return external_react_default.a.createElement(external_formik_["Form"], null, external_react_default.a.createElement(external_reactstrap_["FormGroup"], null, external_react_default.a.createElement(external_reactstrap_["Label"], null, "Title: "), external_react_default.a.createElement(external_formik_["Field"], {
      className: "form-control",
      type: "text",
      name: "title"
    }), external_react_default.a.createElement(external_formik_["ErrorMessage"], {
      name: "title",
      component: "div"
    })), external_react_default.a.createElement(external_reactstrap_["FormGroup"], null, external_react_default.a.createElement(external_reactstrap_["Label"], null, "Description: "), external_react_default.a.createElement(external_formik_["Field"], {
      className: "form-control",
      type: "textarea",
      name: "description",
      component: "textarea"
    }), external_react_default.a.createElement(external_formik_["ErrorMessage"], {
      name: "description",
      component: "div"
    })), external_react_default.a.createElement(external_reactstrap_["FormGroup"], null, external_react_default.a.createElement(external_reactstrap_["Label"], null, "Stack used: "), external_react_default.a.createElement(external_formik_["Field"], {
      className: "form-control",
      type: "text",
      name: "stack"
    }), external_react_default.a.createElement(external_formik_["ErrorMessage"], {
      name: "stack",
      component: "div"
    })), external_react_default.a.createElement(external_reactstrap_["FormGroup"], null, external_react_default.a.createElement(external_reactstrap_["Label"], null, "URL: "), external_react_default.a.createElement(external_formik_["Field"], {
      className: "form-control",
      type: "text",
      name: "url"
    }), external_react_default.a.createElement(external_formik_["ErrorMessage"], {
      name: "url",
      component: "div"
    })), external_react_default.a.createElement(external_reactstrap_["Button"], {
      color: "info",
      type: "submit",
      disabled: isSubmitting
    }, "Add New Portfolio"));
  }));
};

/* harmony default export */ var portfolioStuff_PortfolioAddForm = (PortfolioAddForm_PortfolioAddForm); /////////////React form way to implement ////////////
// import React from 'react'
// class PortfolioAddForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//           title: '',
//           description: '',
//           stack: '',
//         };
//       this.TitleChangeHandler = this.TitleChangeHandler.bind(this);
//       this.DescriptionChangeHandler = this.DescriptionChangeHandler.bind(this);
//       this.StackChangeHandler = this.StackChangeHandler.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     TitleChangeHandler(event) {
//       this.setState({title: event.target.value});
//     }
//     DescriptionChangeHandler(event) {
//         this.setState({description: event.target.value});
//       }
//     StackChangeHandler(event) {
//       this.setState({stack: event.target.value});
//     }
//     handleSubmit(event) {
//       alert('Title: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.stack);
//       event.preventDefault();
//     }
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Title :
//             <input type="text" value={this.state.title} onChange={this.TitleChangeHandler} />
//           </label>
//           <label>
//             Description :
//             <input type="text" value={this.state.description} onChange={this.DescriptionChangeHandler} />
//           </label>
//           <label>
//           Programming Stack used :
//           <input type="text" value={this.state.stack} onChange={this.StackChangeHandler} />
//         </label>
//         <br/>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
//   export default PortfolioAddForm;
// CONCATENATED MODULE: ./pages/portfolioNew.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var portfolioNew_PortfolioNew =
/*#__PURE__*/
function (_Component) {
  _inherits(PortfolioNew, _Component);

  function PortfolioNew() {
    _classCallCheck(this, PortfolioNew);

    return _possibleConstructorReturn(this, _getPrototypeOf(PortfolioNew).apply(this, arguments));
  }

  _createClass(PortfolioNew, [{
    key: "submitPortfolio",
    value: function submitPortfolio(portfolioData) {
      alert(JSON.stringify(portfolioData, null, 2));
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(BaseLayout["a" /* default */], null, external_react_default.a.createElement(BasePage["a" /* default */], {
        className: "portfolio-create-page",
        title: "Create new portfolio"
      }, external_react_default.a.createElement(portfolioStuff_PortfolioAddForm, {
        onSubmit: this.submitPortfolio
      })));
    }
  }]);

  return PortfolioNew;
}(external_react_["Component"]);

/* harmony default export */ var portfolioNew = __webpack_exports__["default"] = (portfolioNew_PortfolioNew);

/***/ }),

/***/ 5:
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

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("next/dist/lib/link");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ })

/******/ });