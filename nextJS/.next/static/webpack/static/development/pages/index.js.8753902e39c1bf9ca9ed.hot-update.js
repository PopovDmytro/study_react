webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\_react\\nextJS\\components\\User.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var User = function User(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.age));
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Router */ "./node_modules/next/Router.js");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/User */ "./components/User.js");
var _jsxFileName = "D:\\_react\\nextJS\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var IndexPage = function IndexPage(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "The Main index page"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "GO to ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/auth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Auth"))), __jsx("button", {
    onClick: function onClick() {
      return next_Router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/auth');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Go to Auth"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_components_User__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Name",
    age: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.8753902e39c1bf9ca9ed.hot-update.js.map