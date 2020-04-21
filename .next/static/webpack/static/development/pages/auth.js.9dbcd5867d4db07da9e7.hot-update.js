webpackHotUpdate("static\\development\\pages\\auth.js",{

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ "./context/GlobalState.js");
var _this = undefined,
    _jsxFileName = "C:\\Coding\\MyProjects\\coders-jukebox-frontend\\pages\\auth.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import withApollo from 'next-with-apollo';
// import withApollo from '../lib/withApollo';

var Auth = function Auth() {
  // Create refs
  var emailRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var passwordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // Handle login form submit

  var submitHandler = function submitHandler(e, context) {
    e.preventDefault();
    console.log('submit handler called');
    console.log(context); // Get credentials from refs

    var email = emailRef.current.value;
    var password = passwordRef.current.value; // Check if email or password is empty

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    } // Call login action to fetch a token from the API and change the global state


    context.login(email, password);
  };

  return __jsx(_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"].Consumer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, function (context) {
    return __jsx("section", {
      id: "auth",
      className: "jsx-2603344331" + " " + "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, __jsx("h1", {
      className: "jsx-2603344331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, "Login"), __jsx("form", {
      onSubmit: function onSubmit(e) {
        return submitHandler(e, context);
      },
      className: "jsx-2603344331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-2603344331" + " " + "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, __jsx("label", {
      htmlFor: "email",
      className: "jsx-2603344331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, "Email"), __jsx("input", {
      type: "email",
      id: "email",
      ref: emailRef,
      className: "jsx-2603344331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "jsx-2603344331" + " " + "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }, __jsx("label", {
      htmlFor: "password",
      className: "jsx-2603344331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, "Password"), __jsx("input", {
      type: "password",
      id: "password",
      ref: passwordRef,
      className: "jsx-2603344331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    })), __jsx("button", {
      type: "submit",
      className: "jsx-2603344331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }, "Login")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2603344331",
      __self: _this
    }, "h1.jsx-2603344331{font-size:2rem;}.form-control.jsx-2603344331{margin:1.5rem 0;}input.jsx-2603344331{padding:0.2rem;}label.jsx-2603344331{display:block;font-size:1.2rem;}button.jsx-2603344331{color:white;padding:0.5rem 1rem;border-radius:5px;font-size:1rem;background-color:#3cbc3e;border:none;cursor:pointer;}button.jsx-2603344331:hover{background-color:#42af44;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94LWZyb250ZW5kXFxwYWdlc1xcYXV0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRG9CLEFBSTBCLEFBSUMsQUFJRCxBQUlELEFBS0YsQUFVYSxZQVRKLEVBTEosQ0FabkIsQUFRQSxDQUpBLFNBdUJBLE1BZEEsQ0FLb0Isa0JBQ0gsZUFDVSx5QkFDYixZQUNHLGVBQ2pCIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94LWZyb250ZW5kXFxwYWdlc1xcYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVmLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbFN0YXRlJztcclxuLy8gaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnbmV4dC13aXRoLWFwb2xsbyc7XHJcbi8vIGltcG9ydCB3aXRoQXBvbGxvIGZyb20gJy4uL2xpYi93aXRoQXBvbGxvJztcclxuXHJcbmNvbnN0IEF1dGggPSAoKSA9PiB7XHJcbiAgXHJcbiAgLy8gQ3JlYXRlIHJlZnNcclxuICBjb25zdCBlbWFpbFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHBhc3N3b3JkUmVmID0gdXNlUmVmKCk7XHJcbiAgXHJcbiAgLy8gSGFuZGxlIGxvZ2luIGZvcm0gc3VibWl0XHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlLCBjb250ZXh0KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZygnc3VibWl0IGhhbmRsZXIgY2FsbGVkJylcclxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpXHJcbiAgICBcclxuICAgIC8vIEdldCBjcmVkZW50aWFscyBmcm9tIHJlZnNcclxuICAgIGNvbnN0IGVtYWlsID0gZW1haWxSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gcGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBlbWFpbCBvciBwYXNzd29yZCBpcyBlbXB0eVxyXG4gICAgaWYgKGVtYWlsLnRyaW0oKS5sZW5ndGggPT09IDAgfHwgcGFzc3dvcmQudHJpbSgpLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxsIGxvZ2luIGFjdGlvbiB0byBmZXRjaCBhIHRva2VuIGZyb20gdGhlIEFQSSBhbmQgY2hhbmdlIHRoZSBnbG9iYWwgc3RhdGVcclxuICAgIGNvbnRleHQubG9naW4oZW1haWwsIHBhc3N3b3JkKTtcclxuICB9O1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8R2xvYmFsQ29udGV4dC5Db25zdW1lcj5cclxuICAgICAge2NvbnRleHQgPT4gKFxyXG5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJhdXRoXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPkxvZ2luPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHN1Ym1pdEhhbmRsZXIoZSwgY29udGV4dCl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiByZWY9e2VtYWlsUmVmfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgcmVmPXtwYXNzd29yZFJlZn0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgbWFyZ2luOiAxLjVyZW0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW0gO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNjYmMzZTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJhZjQ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgXHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgKX1cclxuXHJcbiAgICA8L0dsb2JhbENvbnRleHQuQ29uc3VtZXI+XHJcbiAgKVxyXG59O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhBdXRoKTtcclxuZXhwb3J0IGRlZmF1bHQgQXV0aDsiXX0= */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox-frontend\\\\pages\\\\auth.js */"));
  });
}; // export default withApollo(Auth);


/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ })

})
//# sourceMappingURL=auth.js.9dbcd5867d4db07da9e7.hot-update.js.map