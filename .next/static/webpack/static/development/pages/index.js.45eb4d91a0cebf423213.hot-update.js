webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");


var _this = undefined,
    _jsxFileName = "C:\\Coding\\MyProjects\\coders-jukebox-frontend\\context\\GlobalState.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query LoginQuery{\n        login(email: ", ", password: ", ") {\n          userId,\n          token\n        }\n      }\n    "]);

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
    var LOGIN_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject(), email, password);

    var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(LOGIN_QUERY),
        data = _useQuery.data;

    dispatch({
      type: 'LOGIN',
      payload: {
        data: data
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
      lineNumber: 44,
      columnNumber: 5
    }
  }, children);
};

/***/ })

})
//# sourceMappingURL=index.js.45eb4d91a0cebf423213.hot-update.js.map