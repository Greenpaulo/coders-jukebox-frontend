webpackHotUpdate("static\\development\\pages\\auth.js",{

/***/ "./context/GlobalState.js":
/*!********************************!*\
  !*** ./context/GlobalState.js ***!
  \********************************/
/*! exports provided: GlobalContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalContext", function() { return GlobalContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppReducer */ "./context/AppReducer.js");
 // import gql from 'graphql-tag';

 // import { useQuery } from '@apollo/react-hooks';
// Inital State

var initialState = {
  authenticated: false,
  authData: null,
  user: null,
  video: null,
  comment: null
}; // Create context

var GlobalContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(initialState); // Provider Component
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState)
//   return (
//     <GlobalContext.Provider value={{
//       // authenticated: state.authenticated,
//       login: login
//     }}>
//       {children}
//     </GlobalContext.Provider>
//   )
// }

/***/ })

})
//# sourceMappingURL=auth.js.0451fd4dde99d07d7864.hot-update.js.map