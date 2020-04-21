webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./context/Actions.js":
/*!****************************!*\
  !*** ./context/Actions.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query LoginQuery{\n        login(email: ", ", password: ", ") {\n          userId,\n          token\n        }\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Action creators
/* harmony default export */ __webpack_exports__["default"] = ({
  login: function login(email, password) {
    console.log('login function called from actions'); // Make a API query to get a token

    var LOGIN_QUERY = gql(_templateObject(), email, password);

    var _useQuery = useQuery(LOGIN_QUERY),
        data = _useQuery.data; // dispatch({
    //   type: 'LOGIN',
    //   payload: {
    //     data
    //   }
    // });

  }
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ })

})
//# sourceMappingURL=_app.js.e4a5ac96fa16991e19ee.hot-update.js.map