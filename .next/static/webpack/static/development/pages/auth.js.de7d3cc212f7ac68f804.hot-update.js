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
    console.log('submit handler called'); // console.log(context);
    // const email = emailRef.current.value;
    // const password = passwordRef.current.value;
    // if (email.trim().length === 0 || password.trim().length === 0){
    //   return;
    // }
    // Call action creator to fetch a token from the API and change the global state using a reducer
    // context.login(email, password);
    // console.log(email, password);
  };

  return __jsx(_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"].Consumer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, function (context) {
    return __jsx("section", {
      id: "auth",
      className: "jsx-2603344331" + " " + "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }, __jsx("h1", {
      className: "jsx-2603344331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
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
        lineNumber: 43,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-2603344331" + " " + "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, __jsx("label", {
      htmlFor: "email",
      className: "jsx-2603344331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
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
        lineNumber: 46,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "jsx-2603344331" + " " + "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }, __jsx("label", {
      htmlFor: "password",
      className: "jsx-2603344331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
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
        lineNumber: 50,
        columnNumber: 13
      }
    })), __jsx("button", {
      type: "submit",
      className: "jsx-2603344331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, "Login")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2603344331",
      __self: _this
    }, "h1.jsx-2603344331{font-size:2rem;}.form-control.jsx-2603344331{margin:1.5rem 0;}input.jsx-2603344331{padding:0.2rem;}label.jsx-2603344331{display:block;font-size:1.2rem;}button.jsx-2603344331{color:white;padding:0.5rem 1rem;border-radius:5px;font-size:1rem;background-color:#3cbc3e;border:none;cursor:pointer;}button.jsx-2603344331:hover{background-color:#42af44;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94LWZyb250ZW5kXFxwYWdlc1xcYXV0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RG9CLEFBSTBCLEFBSUMsQUFJRCxBQUlELEFBS0YsQUFVYSxZQVRKLEVBTEosQ0FabkIsQUFRQSxDQUpBLFNBdUJBLE1BZEEsQ0FLb0Isa0JBQ0gsZUFDVSx5QkFDYixZQUNHLGVBQ2pCIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94LWZyb250ZW5kXFxwYWdlc1xcYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVmLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbFN0YXRlJztcclxuLy8gaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnbmV4dC13aXRoLWFwb2xsbyc7XHJcbi8vIGltcG9ydCB3aXRoQXBvbGxvIGZyb20gJy4uL2xpYi93aXRoQXBvbGxvJztcclxuXHJcblxyXG5cclxuY29uc3QgQXV0aCA9ICgpID0+IHtcclxuXHJcbiAgLy8gQ29ubmVjdCB0byBvdXIgZ2xvYmFsIHN0YXRlXHJcbiAgLy8gY29uc3QgeyBsb2dpbiB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICAvLyBjb25zb2xlLmxvZyhjb250ZXh0KVxyXG4gIFxyXG4gIC8vIENyZWF0ZSByZWZzXHJcbiAgY29uc3QgZW1haWxSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBwYXNzd29yZFJlZiA9IHVzZVJlZigpO1xyXG4gIFxyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSwgY29udGV4dCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdCBoYW5kbGVyIGNhbGxlZCcpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuICAgIFxyXG4gICAgLy8gY29uc3QgZW1haWwgPSBlbWFpbFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgLy8gY29uc3QgcGFzc3dvcmQgPSBwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIC8vIGlmIChlbWFpbC50cmltKCkubGVuZ3RoID09PSAwIHx8IHBhc3N3b3JkLnRyaW0oKS5sZW5ndGggPT09IDApe1xyXG4gICAgLy8gICByZXR1cm47XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gQ2FsbCBhY3Rpb24gY3JlYXRvciB0byBmZXRjaCBhIHRva2VuIGZyb20gdGhlIEFQSSBhbmQgY2hhbmdlIHRoZSBnbG9iYWwgc3RhdGUgdXNpbmcgYSByZWR1Y2VyXHJcbiAgICAvLyBjb250ZXh0LmxvZ2luKGVtYWlsLCBwYXNzd29yZCk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuXHJcbiAgfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPEdsb2JhbENvbnRleHQuQ29uc3VtZXI+XHJcbiAgICAgIHtjb250ZXh0ID0+IChcclxuXHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiYXV0aFwiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBzdWJtaXRIYW5kbGVyKGUsIGNvbnRleHQpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcmVmPXtlbWFpbFJlZn0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHJlZj17cGFzc3dvcmRSZWZ9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgIG1hcmdpbjogMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzY2JjM2U7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyYWY0NDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIFxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICl9XHJcblxyXG4gICAgPC9HbG9iYWxDb250ZXh0LkNvbnN1bWVyPlxyXG4gIClcclxufTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oQXV0aCk7XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGg7Il19 */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox-frontend\\\\pages\\\\auth.js */"));
  });
}; // export default withApollo(Auth);


/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ })

})
//# sourceMappingURL=auth.js.de7d3cc212f7ac68f804.hot-update.js.map