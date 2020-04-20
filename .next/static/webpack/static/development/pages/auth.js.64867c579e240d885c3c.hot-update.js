webpackHotUpdate("static\\development\\pages\\auth.js",{

/***/ "./context/GlobalState.js":
/*!********************************!*\
  !*** ./context/GlobalState.js ***!
  \********************************/
/*! exports provided: GlobalContext, GlobalProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalContext", function() { return GlobalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalProvider", function() { return GlobalProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppReducer */ "./context/AppReducer.js");
var _this = undefined,
    _jsxFileName = "C:\\Coding\\MyProjects\\coders-jukebox-frontend\\context\\GlobalState.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Inital State

var initialState = {
  isLoggedIn: false,
  user: null,
  video: null,
  comment: null
}; // Create context

var GlobalContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(initialState); // Provider Component

var GlobalProvider = function GlobalProvider(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_AppReducer__WEBPACK_IMPORTED_MODULE_1__["default"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return __jsx(GlobalContext.Provider, {
    value: {
      isLoggedIn: state.isLoggedIn
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, children);
};

/***/ })

})
//# sourceMappingURL=auth.js.64867c579e240d885c3c.hot-update.js.map