webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ "./context/GlobalState.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");



var _this = undefined,
    _jsxFileName = "C:\\Coding\\MyProjects\\coders-jukebox-frontend\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // import { login } from '../context/Actions';


 // import gql from 'graphql-tag';

var App = function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    authenticated: false,
    authData: null
  }),
      authState = _useState[0],
      setAuthState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    user: null
  }),
      userState = _useState2[0],
      setUserState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    video: null
  }),
      videoState = _useState3[0],
      setVideoState = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    comment: null
  }),
      commentState = _useState4[0],
      setCommentState = _useState4[1]; // Auth actions


  var login = function login(email, password) {
    var requestBody, res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function login$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('login action called in _app.js'); // Make a API query to get a token

            requestBody = {
              query: "\n        query {\n          login(email: \"".concat(email, "\", password: \"").concat(password, "\") {\n            userId,\n            token\n          }\n        }\n      ")
            };
            _context.prev = 2;
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetch('http://localhost:5000/graphql', {
              method: 'POST',
              body: JSON.stringify(requestBody),
              headers: {
                'Content-Type': 'application/json'
              }
            }));

          case 5:
            res = _context.sent;
            console.log(res.status);

            if (!(res.status !== 200 || res.status !== 201)) {
              _context.next = 9;
              break;
            }

            throw new Error('Login failed!');

          case 9:
            _context.next = 11;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(res.json());

          case 11:
            data = _context.sent;
            console.log(data);
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 15]], Promise);
  };

  return __jsx(_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"].Provider, {
    value: {
      authState: authState,
      userState: userState,
      videoState: videoState,
      commentState: commentState,
      login: login
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=_app.js.f3bc2fde7eb02e3435b4.hot-update.js.map