webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ "./context/GlobalState.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");

var _jsxFileName = "C:\\Coding\\MyProjects\\coders-jukebox-frontend\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import { login } from '../context/Actions';


 // import gql from 'graphql-tag';

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    authenticated: false,
    authData: null
  }),
      authState = _useState[0],
      setAuthState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    user: null
  }),
      userState = _useState2[0],
      setUserState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    video: null
  }),
      videoState = _useState3[0],
      setVideoState = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    comment: null
  }),
      commentState = _useState4[0],
      setCommentState = _useState4[1]; // Auth actions


  var login = function login(email, password) {
    console.log('login function called from actions'); // setState({...state, authenticated: !state.authenticated});

    console.log(state.authenticated); // Make a API query to get a token
    // const LOGIN_QUERY = gql`
    //   query LoginQuery{
    //     login(email: ${email}, password: ${password}) {
    //       userId,
    //       token
    //     }
    //   }
    // `;
    // const { data } = useQuery(LOGIN_QUERY);
  };

  return __jsx(_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"].Provider, {
    value: {
      // login: actions.login
      login: login
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.0ee5f80925b3ad55217f.hot-update.js.map