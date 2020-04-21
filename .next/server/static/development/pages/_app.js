module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
var _jsxFileName = "C:\\Coding\\MyProjects\\coders-jukebox-frontend\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Layout = props => __jsx("div", {
  className: "jsx-1710726789",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("title", {
  className: "jsx-1710726789",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, "CodeTunes"), __jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=Baloo+Thambi+2&display=swap",
  rel: "stylesheet",
  className: "jsx-1710726789",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  className: "jsx-1710726789",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
})), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1710726789",
  __self: undefined
}, "*{box-sizing:border-box;margin:0;padding:0;}body{font-family:'Baloo Thambi 2',sans-serif;font-size:16px;font-weight:400;line-height:1.8em;background-color:purple;}.container{max-width:1100px;margin:auto;overflow:hidden;}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94LWZyb250ZW5kXFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3VCLEFBSStCLEFBTW1CLEFBUXhCLEFBTUksaUJBTFQsS0FkSCxPQWVPLEVBZE4sU0FLSyxDQUpqQixJQWNBLEtBSUEsS0Fia0IsZ0JBQ0Usa0JBQ00sd0JBQzFCIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94LWZyb250ZW5kXFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPkNvZGVUdW5lczwvdGl0bGU+XHJcbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhbG9vK1RoYW1iaSsyJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPE5hdmJhci8+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICBcclxuXHJcbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgXHJcbiAgICAgICoge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gVGhhbWJpIDInLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgYH0gXHJcbiAgICA8L3N0eWxlPiBcclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox-frontend\\\\components\\\\Layout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ "./context/GlobalState.js");
var _jsxFileName = "C:\\Coding\\MyProjects\\coders-jukebox-frontend\\components\\Navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Navbar = () => {
  const {
    authenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]);
  return __jsx("nav", {
    id: "navbar",
    className: "jsx-3108381892",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "jsx-3108381892" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "nav-content",
    className: "jsx-3108381892",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "logo",
    className: "jsx-3108381892",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-3108381892",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-3108381892",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, "CodeTunes")))), __jsx("div", {
    id: "search",
    className: "jsx-3108381892",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "main-searchbar",
    className: "jsx-3108381892",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "search-input",
    className: "jsx-3108381892",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("svg", {
    id: "search-icon",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    className: "jsx-3108381892",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    className: "jsx-3108381892",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 80
    }
  }), __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    className: "jsx-3108381892",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 327
    }
  }))), __jsx("input", {
    type: "text",
    name: "search-input",
    placeholder: "Search User",
    className: "jsx-3108381892",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }))), __jsx("ul", {
    id: "nav-menu",
    className: "jsx-3108381892",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, !authenticated && __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/auth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-3108381892" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "Login")), !authenticated && __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/auth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-3108381892" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, "Register")), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-3108381892" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "About")), authenticated && __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-3108381892" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, "Logout"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3108381892",
    __self: undefined
  }, "#navbar.jsx-3108381892{padding:1.5rem 0;border-bottom:1px solid white;margin-bottom:2rem;}#nav-content.jsx-3108381892{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#logo.jsx-3108381892 h1.jsx-3108381892{color:white;font-size:2rem;text-transform:uppercase;}.nav-link.jsx-3108381892{color:white;margin:0 1rem;}#search.jsx-3108381892{width:50%;}#searchbar.jsx-3108381892{width:100%;}label.jsx-3108381892{position:absolute;top:10px;left:12px;}#main-searchbar.jsx-3108381892{margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;}#main-searchbar.jsx-3108381892 input.jsx-3108381892{width:100%;border-radius:23px;padding:0.6rem 0.5rem 0.5rem 2.3rem;font-size:1.1rem;border:none;}#main-searchbar.jsx-3108381892 input.jsx-3108381892:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94LWZyb250ZW5kXFxjb21wb25lbnRzXFxOYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RnQixBQUkwQixBQU1KLEFBTUQsQUFNQSxBQUtGLEFBSUMsQUFJTyxBQU1OLEFBTUQsQUFRRSxVQTNCZixDQUlBLEFBZ0JxQixDQS9CSixBQU1ELEFBbUJELENBY2YsSUFuRGdDLENBK0JyQixRQVpYLENBTjJCLEFBbUJmLEdBWTBCLE9BWHRDLFVBaENxQixLQWFyQixjQVpBLEFBMkNtQixRQXZDYSxTQXdDbEIsR0FSTSxTQVNwQixTQVJBLHFGQWhDcUIsNkZBQ3JCIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94LWZyb250ZW5kXFxjb21wb25lbnRzXFxOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbFN0YXRlJztcclxuXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgYXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICA8bmF2IGlkPVwibmF2YmFyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGlkPVwibmF2LWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibG9nb1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGgxPkNvZGVUdW5lczwvaDE+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cIm1haW4tc2VhcmNoYmFyXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgey8qIDxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAqL31cclxuICAgICAgICAgICAgICA8c3ZnIGlkPVwic2VhcmNoLWljb25cIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCI+PHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiIC8+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+PC9zdmc+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2gtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBVc2VyXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8dWwgaWQ9XCJuYXYtbWVudVwiPlxyXG4gICAgICAgICAgeyAhYXV0aGVudGljYXRlZCAmJiBcclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Mb2dpbjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgeyAhYXV0aGVudGljYXRlZCAmJiBcclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5SZWdpc3RlcjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BYm91dDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgeyBhdXRoZW50aWNhdGVkICYmIFxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+TG9nb3V0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICBcclxuICAgICAgI25hdmJhciB7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAjbmF2LWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNsb2dvIGgxIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjc2VhcmNoIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjc2VhcmNoYmFye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNnJlbSAwLjVyZW0gMC41cmVtIDIuM3JlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCA6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9uYXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox-frontend\\\\components\\\\Navbar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./context/GlobalState.js":
/*!********************************!*\
  !*** ./context/GlobalState.js ***!
  \********************************/
/*! exports provided: GlobalContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalContext", function() { return GlobalContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // import AppReducer from './AppReducer';
// import { useQuery } from '@apollo/react-hooks';
// Inital State

const initialState = {
  authenticated: false,
  authData: null,
  user: null,
  video: null,
  comment: null
}; // Create context

const GlobalContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(initialState); // Provider Component
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

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/GlobalState */ "./context/GlobalState.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Coding\\MyProjects\\coders-jukebox-frontend\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import { login } from '../context/Actions';


 // import gql from 'graphql-tag';

const App = ({
  Component,
  pageProps
}) => {
  const {
    0: authState,
    1: setAuthState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    authenticated: false,
    userId: null,
    token: null,
    tokenExpiration: null
  });
  const {
    0: userState,
    1: setUserState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    user: null
  });
  const {
    0: videoState,
    1: setVideoState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    video: null
  });
  const {
    0: commentState,
    1: setCommentState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    comment: null
  }); // Auth actions

  const login = async (email, password) => {
    console.log('login action called in _app.js'); // Make a API query to get a token

    const requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId,
            token
          }
        }
      `
    };

    try {
      const res = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status); // if(res.status != 200 || res.status != 201) {
      //   throw new Error('Login failed!');
      // } 
      // .json() is a method from fetch API that auto extracts & parses the res body

      const data = await res.json(); // Check for errors array in response

      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message);
        });
        return;
      } // Set state with returned auth data


      const {
        userId,
        token
      } = data.data.login;
      console.log(data.data.login);
      setAuthState(_objectSpread({}, authState, {
        authenticated: true,
        userId,
        token
      }));
      console.log(authState);
    } catch (err) {
      console.log(err);
    } // const LOGIN_QUERY = gql`
    //   query LoginQuery{
    //     login(email: ${email}, password: ${password}) {
    //       userId,
    //       token
    //     }
    //   }
    // `;
    // const { data } = useQuery(LOGIN_QUERY);

  };

  return __jsx(_context_GlobalState__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"].Provider, {
    value: {
      authState,
      userState,
      videoState,
      commentState,
      login
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map