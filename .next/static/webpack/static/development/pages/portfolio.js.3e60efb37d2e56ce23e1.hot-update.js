webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var _components_shared_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/BasePage */ "./components/shared/BasePage.js");
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







var Portfolio =
/*#__PURE__*/
function (_Component) {
  _inherits(Portfolio, _Component);

  function Portfolio() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Portfolio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Portfolio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      portfolios: [{
        applicationName: 'AaayMdb',
        applicationDesc: 'App pull movies from OMDB API and lets you make a custom movies list.',
        stack: 'Built in React.js | Python server | MongoDB',
        src: '../static/images/AayMDB.png',
        url: 'https://protected-retreat-68530.herokuapp.com/'
      }, {
        applicationName: 'Group Meet',
        applicationDesc: 'This application helps inprove diversity at work place by matching you with other users with similar interests.',
        stack: 'Built in Python | Django | SQLite',
        src: '../static/images/GroupMeet.png',
        url: 'https://polar-lake-85399.herokuapp.com/'
      }, {
        applicationName: 'Zeen Moi Andriod Application',
        applicationDesc: 'Your beauty needs on demand',
        stack: 'Built in Andriod | Java',
        src: '../static/images/zm_aa.jpg',
        url: 'https://github.com/syedkhussain1/ZeenMoi-Android-App'
      }]
    });

    return _this;
  }

  _createClass(Portfolio, [{
    key: "renderPosts",
    value: function renderPosts() {
      return this.state.portfolios.map(function (portfolio, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          md: "4"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          className: "portfolio-card"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
          className: "portfolio-card-header"
        }, portfolio.applicationName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
          variant: "top",
          src: portfolio.src
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "portfolio-card-city"
        }, " ", portfolio.applicationDesc, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
          className: "portfolio-card-text"
        }, portfolio.stack), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          variant: "primary",
          href: portfolio.url
        }, "Check it out!"))))));
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.posts);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shared_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "portfolio-page",
        title: "Check out my portfolio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, this.renderPosts(this.state.posts))));
    }
  }]);

  return Portfolio;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/portfolio")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=portfolio.js.3e60efb37d2e56ce23e1.hot-update.js.map