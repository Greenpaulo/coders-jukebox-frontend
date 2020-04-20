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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AppReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppReducer */ "./context/AppReducer.js");


var _this = undefined,
    _jsxFileName = "C:\\Coding\\MyProjects\\coders-jukebox-frontend\\context\\GlobalState.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // Inital State

var initialState = {
  authenticated: false,
  user: null,
  video: null,
  comment: null
}; // Create context

var GlobalContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(initialState); // Provider Component

var GlobalProvider = function GlobalProvider(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_AppReducer__WEBPACK_IMPORTED_MODULE_3__["default"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1]; // Actions


  var login = function login(email, password) {
    // Make a API query to get a token
    var loginQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
    dispatch({
      type: 'LOGIN',
      payload: {
        user: user
      }
    });
  };

  return __jsx(GlobalContext.Provider, {
    value: {
      isLoggedIn: state.isLoggedIn
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, children);
};

/***/ })

})
//# sourceMappingURL=auth.js.62a187113c473f2b8cdd.hot-update.js.map