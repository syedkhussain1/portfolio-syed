webpackHotUpdate("static/development/pages/portfolioNew.js",{

/***/ "./components/portfolioStuff/PortfolioAddForm.js":
/*!*******************************************************!*\
  !*** ./components/portfolioStuff/PortfolioAddForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PortfolioAddForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PortfolioAddForm, _React$Component);

  function PortfolioAddForm(props) {
    var _this;

    _classCallCheck(this, PortfolioAddForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PortfolioAddForm).call(this, props));
    _this.state = {
      title: '',
      description: '',
      stack: ''
    };
    _this.TitleChangeHandler = _this.TitleChangeHandler.bind(_assertThisInitialized(_this));
    _this.DescriptionChangeHandler = _this.DescriptionChangeHandler.bind(_assertThisInitialized(_this));
    _this.StackChangeHandler = _this.StackChangeHandler.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PortfolioAddForm, [{
    key: "TitleChangeHandler",
    value: function TitleChangeHandler(event) {
      this.setState({
        title: event.target.value
      });
    }
  }, {
    key: "DescriptionChangeHandler",
    value: function DescriptionChangeHandler(event) {
      this.setState({
        description: event.target.value
      });
    }
  }, {
    key: "StackChangeHandler",
    value: function StackChangeHandler(event) {
      this.setState({
        stack: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      alert('Title: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.stack);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Title :", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.title,
        onChange: this.TitleChangeHandler
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Description :", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.description,
        onChange: this.DescriptionChangeHandler
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Programming Stack used :", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.stack,
        onChange: this.StackChangeHandler
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        value: "Submit"
      }));
    }
  }]);

  return PortfolioAddForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PortfolioAddForm);

/***/ })

})
//# sourceMappingURL=portfolioNew.js.67bc2b0b16545aef1779.hot-update.js.map