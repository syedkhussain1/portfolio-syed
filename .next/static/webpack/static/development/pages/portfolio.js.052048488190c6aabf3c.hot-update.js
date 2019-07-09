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
        src: '../static/images/AaayMDB.png',
        url: 'https://protected-retreat-68530.herokuapp.com/'
      }, {
        applicationName: 'Group Meet',
        applicationDesc: 'This application improve diversity at work place by matching users with similar interests.',
        stack: 'Built in Python | Django | SQLite',
        src: '../static/images/GroupMeet.png',
        url: 'https://polar-lake-85399.herokuapp.com/'
      }, {
        applicationName: 'Apartment Rentals',
        applicationDesc: 'Apartment Rental mockup website. Marking it easy to rent apartments.',
        stack: 'Built in React.js',
        src: '../static/images/apartment_rental.png',
        url: 'https://polar-lake-85399.herokuapp.com/'
      }, {
        applicationName: 'Fifa 2018 Stats',
        applicationDesc: 'Getting data back from football API and generating dynamic graps based on stats.',
        stack: 'Built in React.js',
        src: '../static/images/fifa_stats.png',
        url: 'https://stormy-shelf-17801.herokuapp.com/'
      }, {
        applicationName: 'Zeen Moi Landing Page',
        applicationDesc: 'Your beauty needs on demand. Get more info on how the application works.',
        stack: 'Built in HTML5 | CSS',
        src: '../static/images/zeenmoi.png',
        url: 'https://zeenmoi.com'
      }, {
        applicationName: 'Django boilerplate',
        applicationDesc: 'Django bolierplate for user authentication and admin portal. Basically a plug and chug for building apps.',
        stack: 'Built in Django | Python | SQLite',
        src: '../static/images/py_logo.jpg',
        url: 'https://github.com/syedkhussain1/Django_Authentication'
      }, {
        applicationName: 'Selenium Test Automation',
        applicationDesc: 'Selenium Test Automation framework built for testing browser based applications.',
        stack: 'Built in Java | Maven | Testng',
        src: '../static/images/selenium_logo.jpg',
        url: 'https://github.com/syedkhussain1/Selenium_Maven'
      }, {
        applicationName: 'Rest-Assured Test Automation',
        applicationDesc: 'Rest-Assured Test Automation framework built for testing rest Api.',
        stack: 'Built in Java | Maven | Testng',
        src: '../static/images/ra_logo.jpeg',
        url: 'https://github.com/syedkhussain1/Java_RestAssured_Automation_ForXML'
      }, {
        applicationName: 'Fifa Stats JS',
        applicationDesc: 'Fifa stats application built in vanilla JS',
        stack: 'Built in pure vanilla JS',
        src: '../static/images/fifa_stats.png',
        url: 'https://syedkhussain1.github.io/Data_Visualization_2'
      }, {
        applicationName: 'Android chat Application',
        applicationDesc: 'Whatsapp clone android chat application',
        stack: 'Built in Android | Java | Firebase',
        src: '../static/images/android_chat.png',
        url: 'https://github.com/syedkhussain1/Android_chatApp'
      }, {
        applicationName: 'Zeen Moi Android Application',
        applicationDesc: 'Your beauty needs on demand.',
        stack: 'Built in Android | Java',
        src: '../static/images/zm_aa.jpg',
        url: 'https://github.com/syedkhussain1/ZeenMoi-Android-App'
      }, {
        applicationName: 'Clima Android Application',
        applicationDesc: 'Personal Android weather application, that gets data from weather API.',
        stack: 'Built in Android | Java',
        src: '../static/images/clima.jpg',
        url: 'https://github.com/syedkhussain1/Climate_Android_App'
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
        }, portfolio.applicationName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
          variant: "top",
          src: portfolio.src
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
//# sourceMappingURL=portfolio.js.052048488190c6aabf3c.hot-update.js.map