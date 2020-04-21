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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/GlobalState */ "./context/GlobalState.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");




var _this = undefined,
    _jsxFileName = "C:\\Coding\\MyProjects\\coders-jukebox-frontend\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // import { login } from '../context/Actions';


 // import gql from 'graphql-tag';

var App = function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    authenticated: false,
    userId: null,
    token: null,
    tokenExpiration: null
  }),
      authState = _useState[0],
      setAuthState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    user: null
  }),
      userState = _useState2[0],
      setUserState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    video: null
  }),
      videoState = _useState3[0],
      setVideoState = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    comment: null
  }),
      commentState = _useState4[0],
      setCommentState = _useState4[1]; // Auth actions


  var login = function login(email, password) {
    var requestBody, res, data, _data$data$login, userId, token;

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
            console.log(res.status); // if(res.status != 200 || res.status != 201) {
            //   throw new Error('Login failed!');
            // } 
            // .json() is a method from fetch API that auto extracts & parses the res body

            _context.next = 9;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(res.json());

          case 9:
            data = _context.sent;

            if (!data.errors) {
              _context.next = 13;
              break;
            }

            data.errors.map(function (error) {
              console.log(error.message);
            });
            return _context.abrupt("return");

          case 13:
            // Set state with returned auth data
            _data$data$login = data.data.login, userId = _data$data$login.userId, token = _data$data$login.token; // console.log(data.data.login)

            setAuthState(_objectSpread({}, authState, {
              authenticated: true,
              userId: userId,
              token: token
            }));
            console.log(authState);
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 18]], Promise);
  };

  return __jsx(_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__["GlobalContext"].Provider, {
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
      lineNumber: 107,
      columnNumber: 5
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=_app.js.238014cd0e36705a600b.hot-update.js.map