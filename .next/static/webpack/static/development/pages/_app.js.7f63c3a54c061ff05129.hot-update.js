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
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query LoginQuery{\n        login(email: ", ", password: ", ") {\n          userId,\n          token\n        }\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

 // import
// Action creators

/* harmony default export */ __webpack_exports__["default"] = ({
  login: function login(email, password) {
    console.log('login function called from actions'); // Make a API query to get a token

    var LOGIN_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject(), email, password);

    var _useQuery = useQuery(LOGIN_QUERY),
        data = _useQuery.data; // dispatch({
    //   type: 'LOGIN',
    //   payload: {
    //     data
    //   }
    // });

  }
});

/***/ })

})
//# sourceMappingURL=_app.js.7f63c3a54c061ff05129.hot-update.js.map