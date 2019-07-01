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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/////////////Fromik Implementation///////////
// Render Prop



var valiateInputs = function valiateInputs(validate) {
  var errors = {}; // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (
  //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  // ) {
  //   errors.email = 'Invalid email address';
  // }

  return errors;
};

var PortfolioAddForm = function PortfolioAddForm(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      title: '',
      description: '',
      stack: ''
    },
    validate: validateInputs,
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      setTimeout(function () {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }
  }, function (_ref2) {
    var isSubmitting = _ref2.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      type: "email",
      name: "email"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
      name: "email",
      component: "div"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      type: "password",
      name: "password"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
      name: "password",
      component: "div"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      disabled: isSubmitting
    }, "Submit"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioAddForm); /////////////React form way to implement ////////////
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

/***/ })

})
//# sourceMappingURL=portfolioNew.js.36da93ba53ebd372de8e.hot-update.js.map