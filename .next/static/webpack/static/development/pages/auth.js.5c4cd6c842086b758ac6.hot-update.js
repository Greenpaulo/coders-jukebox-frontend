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
  // Connect to our global state
  // const { login } = useContext(GlobalContext);
  // console.log(context)
  // Create refs
  var emailRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var passwordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var submitHandler = function submitHandler(e, context) {
    e.preventDefault();
    console.log('submit handler called');
    console.log(context); // console.log(context);
    // const email = emailRef.current.value;
    // const password = passwordRef.current.value;
    // if (email.trim().length === 0 || password.trim().length === 0){
    //   return;
    // }
    // Call action creator to fetch a token from the API and change the global state using a reducer

    context.login(email, password); // console.log(email, password);
  };

  return __jsx(_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"].Consumer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, function (context) {
    return __jsx("section", {
      id: "auth",
      className: "jsx-2603344331" + " " + "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }
    }, __jsx("h1", {
      className: "jsx-2603344331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
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
        lineNumber: 44,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-2603344331" + " " + "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, __jsx("label", {
      htmlFor: "email",
      className: "jsx-2603344331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
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
        lineNumber: 47,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "jsx-2603344331" + " " + "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, __jsx("label", {
      htmlFor: "password",
      className: "jsx-2603344331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
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
        lineNumber: 51,
        columnNumber: 13
      }
    })), __jsx("button", {
      type: "submit",
      className: "jsx-2603344331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, "Login")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2603344331",
      __self: _this
    }, "h1.jsx-2603344331{font-size:2rem;}.form-control.jsx-2603344331{margin:1.5rem 0;}input.jsx-2603344331{padding:0.2rem;}label.jsx-2603344331{display:block;font-size:1.2rem;}button.jsx-2603344331{color:white;padding:0.5rem 1rem;border-radius:5px;font-size:1rem;background-color:#3cbc3e;border:none;cursor:pointer;}button.jsx-2603344331:hover{background-color:#42af44;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94LWZyb250ZW5kXFxwYWdlc1xcYXV0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RG9CLEFBSTBCLEFBSUMsQUFJRCxBQUlELEFBS0YsQUFVYSxZQVRKLEVBTEosQ0FabkIsQUFRQSxDQUpBLFNBdUJBLE1BZEEsQ0FLb0Isa0JBQ0gsZUFDVSx5QkFDYixZQUNHLGVBQ2pCIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94LWZyb250ZW5kXFxwYWdlc1xcYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVmLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbFN0YXRlJztcclxuLy8gaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnbmV4dC13aXRoLWFwb2xsbyc7XHJcbi8vIGltcG9ydCB3aXRoQXBvbGxvIGZyb20gJy4uL2xpYi93aXRoQXBvbGxvJztcclxuXHJcblxyXG5cclxuY29uc3QgQXV0aCA9ICgpID0+IHtcclxuXHJcbiAgLy8gQ29ubmVjdCB0byBvdXIgZ2xvYmFsIHN0YXRlXHJcbiAgLy8gY29uc3QgeyBsb2dpbiB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICAvLyBjb25zb2xlLmxvZyhjb250ZXh0KVxyXG4gIFxyXG4gIC8vIENyZWF0ZSByZWZzXHJcbiAgY29uc3QgZW1haWxSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBwYXNzd29yZFJlZiA9IHVzZVJlZigpO1xyXG4gIFxyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSwgY29udGV4dCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdCBoYW5kbGVyIGNhbGxlZCcpXHJcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KVxyXG4gICAgLy8gY29uc29sZS5sb2coY29udGV4dCk7XHJcbiAgICBcclxuICAgIC8vIGNvbnN0IGVtYWlsID0gZW1haWxSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIC8vIGNvbnN0IHBhc3N3b3JkID0gcGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICAvLyBpZiAoZW1haWwudHJpbSgpLmxlbmd0aCA9PT0gMCB8fCBwYXNzd29yZC50cmltKCkubGVuZ3RoID09PSAwKXtcclxuICAgIC8vICAgcmV0dXJuO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIENhbGwgYWN0aW9uIGNyZWF0b3IgdG8gZmV0Y2ggYSB0b2tlbiBmcm9tIHRoZSBBUEkgYW5kIGNoYW5nZSB0aGUgZ2xvYmFsIHN0YXRlIHVzaW5nIGEgcmVkdWNlclxyXG4gICAgY29udGV4dC5sb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcblxyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxHbG9iYWxDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgICB7Y29udGV4dCA9PiAoXHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD1cImF1dGhcIiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+TG9naW48L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gc3VibWl0SGFuZGxlcihlLCBjb250ZXh0KX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHJlZj17ZW1haWxSZWZ9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiByZWY9e3Bhc3N3b3JkUmVmfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XHJcblxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICBtYXJnaW46IDEuNXJlbSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2NiYzNlO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MmFmNDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICBcclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApfVxyXG5cclxuICAgIDwvR2xvYmFsQ29udGV4dC5Db25zdW1lcj5cclxuICApXHJcbn07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKEF1dGgpO1xyXG5leHBvcnQgZGVmYXVsdCBBdXRoOyJdfQ== */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox-frontend\\\\pages\\\\auth.js */"));
  });
}; // export default withApollo(Auth);


/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ })

})
//# sourceMappingURL=auth.js.5c4cd6c842086b758ac6.hot-update.js.map