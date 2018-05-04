webpackHotUpdate(4,{

/***/ "./components/main/Main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_1CCompany_RussianGamingGraph__ = __webpack_require__("./components/projects/1CCompany/RussianGamingGraph.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_1CCompany_RussianGamingGraph___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__projects_1CCompany_RussianGamingGraph__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_1CCompany_About__ = __webpack_require__("./components/projects/1CCompany/About.js");
var _jsxFileName = "/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/components/main/Main.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var linkStyle = {
  display: 'inline-block',
  background: 'transparent',
  borderBottom: '4px solid #33c5c596',
  color: 'black',
  padding: '0px'
};

var Main =
/*#__PURE__*/
function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-339081404" + " " + "main"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        href: "/statics/styles.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-339081404"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-339081404" + " " + "bio"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-339081404"
      }, "Brandon Flowers"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-339081404"
      }, "I'm a designer/developer and budding data scientist. As a hybrid, I primarily enjoy working on the data presentation layer collaborating with business and scientists to build products with Javascript (Angular/RxJS or React/Redux), Python, SQL and NoSQL, that convert big data into trends and insights through NLP and probability statistics."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-339081404"
      }, "I", "'", "m currently a frontend developer at", ' ', __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://qochealth.com",
        target: "_blank",
        rel: "noopener noreferrer",
        style: linkStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-339081404"
      }, "QoC Health."), ' ', "I write React/Redux against a Spring Java/MS SQL backend but, on my last project, I was able to do some fullstack work using Firebase to store the behavioral analytics for", ' ', __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://mythoughtspot.ca",
        target: "_blank",
        rel: "noopener noreferrer",
        style: linkStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-339081404"
      }, "Thoughtspot"), ", a responsive (desktop & mobile) web app for CAMH. It talks to both the Google Places and Mapbox APIs as well as performs full text and geolocation proximity search through the HIPAA-compliant QoC API."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-339081404"
      }, "Previously, I worked at 24-7 INC on an analytics and natural language processing app,", ' ', __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://www.youtube.com/watch?v=5KZofZX3XaY",
        target: "_blank",
        rel: "noopener noreferrer",
        style: linkStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-339081404"
      }, "Voices"), ' ', "that visualizes and tracks the customer journey across the omnichannel. I also contributed to a machine learning tool which enables custom service to rapidly bulk tag and classify chat conversations."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: "jsx-339081404"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/brandonflowers/",
        target: "_blank",
        rel: "noopener noreferrer",
        style: linkStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: "jsx-339081404"
      }, "Linkedin"), ' '), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: "jsx-339081404"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://github.com/headwinds",
        target: "_blank",
        rel: "noopener noreferrer",
        style: linkStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-339081404"
      }, "Github"), ' '), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-339081404"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://twitter.com/headwinds",
        target: "_blank",
        rel: "noopener noreferrer",
        style: linkStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-339081404"
      }, "Twitter"), ' ')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        className: "jsx-339081404" + " " + "about"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__projects_1CCompany_About__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        className: "jsx-339081404" + " " + "graph"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__projects_1CCompany_RussianGamingGraph__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "339081404",
        css: ".main.jsx-339081404{display:block;top:0;left:0;position:relative;width:100vw;height:100vh;padding:0px;margin:0px;color:#666;z-index:1;overflow:hidden;}.bio.jsx-339081404{display:inline-block;position:relative;top:0;left:0;max-width:300px;color:#666;z-index:2;font-size:14px;padding:20px;opacity:1;}.about.jsx-339081404{display:inline-block;position:relative;max-width:450px;color:#666;z-index:3;font-size:14px;padding:20px;opacity:1;}.graph.jsx-339081404{display:block;top:0;left:0;position:absolute;width:100vw;height:100vh;padding:0px;margin:0px;color:#666;z-index:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbi9NYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThHb0IsQUFHMkIsQUFjTyxBQWFBLEFBV1AsY0FyQ1IsQUFzQ0EsTUFyQ0MsQUFzQ0EsQ0F6QlcsQUFhQSxNQXpCQSxBQXNDQSxZQXpCWixBQWFVLE1BekJKLEFBYUwsQUF5QkssT0F4QkksR0FZTCxFQXpCRSxBQXNDQSxTQVpILEVBWkMsRUFiQyxBQXNDQSxNQVpHLEdBWkwsR0FiQyxBQXNDQSxPQXhCSSxFQVlGLEVBekJGLEFBc0NBLFdBckNELEFBYUcsQUFZSCxBQWFBLFVBckNNLEFBeUJsQixBQWFBLEdBekJZLFVBQ1osR0FiQSIsImZpbGUiOiJjb21wb25lbnRzL21haW4vTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJhbmRvbi5mbG93ZXJzL1Byb2plY3RzL2hlYWR3aW5kcy9ob3RoL291dHBvc3RkZWx0YSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJ1c3NpYW5HYW1pbmdHcmFwaCBmcm9tICcuLi9wcm9qZWN0cy8xQ0NvbXBhbnkvUnVzc2lhbkdhbWluZ0dyYXBoJztcbmltcG9ydCBBYm91dCBmcm9tICcuLi9wcm9qZWN0cy8xQ0NvbXBhbnkvQWJvdXQnO1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICBib3JkZXJCb3R0b206ICc0cHggc29saWQgIzMzYzVjNTk2JyxcbiAgY29sb3I6ICdibGFjaycsXG4gIHBhZGRpbmc6ICcwcHgnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWNzL3N0eWxlcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaW9cIj5cbiAgICAgICAgICA8aDE+QnJhbmRvbiBGbG93ZXJzPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEknbSBhIGRlc2lnbmVyL2RldmVsb3BlciBhbmQgYnVkZGluZyBkYXRhIHNjaWVudGlzdC4gQXMgYSBoeWJyaWQsIElcbiAgICAgICAgICAgIHByaW1hcmlseSBlbmpveSB3b3JraW5nIG9uIHRoZSBkYXRhIHByZXNlbnRhdGlvbiBsYXllciBjb2xsYWJvcmF0aW5nXG4gICAgICAgICAgICB3aXRoIGJ1c2luZXNzIGFuZCBzY2llbnRpc3RzIHRvIGJ1aWxkIHByb2R1Y3RzIHdpdGggSmF2YXNjcmlwdFxuICAgICAgICAgICAgKEFuZ3VsYXIvUnhKUyBvciBSZWFjdC9SZWR1eCksIFB5dGhvbiwgU1FMIGFuZCBOb1NRTCwgdGhhdCBjb252ZXJ0XG4gICAgICAgICAgICBiaWcgZGF0YSBpbnRvIHRyZW5kcyBhbmQgaW5zaWdodHMgdGhyb3VnaCBOTFAgYW5kIHByb2JhYmlsaXR5XG4gICAgICAgICAgICBzdGF0aXN0aWNzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEl7YCdgfW0gY3VycmVudGx5IGEgZnJvbnRlbmQgZGV2ZWxvcGVyIGF0eycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3FvY2hlYWx0aC5jb21cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgc3R5bGU9e2xpbmtTdHlsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUW9DIEhlYWx0aC5cbiAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgSSB3cml0ZSBSZWFjdC9SZWR1eCBhZ2FpbnN0IGEgU3ByaW5nIEphdmEvTVMgU1FMIGJhY2tlbmQgYnV0LCBvbiBteVxuICAgICAgICAgICAgbGFzdCBwcm9qZWN0LCBJIHdhcyBhYmxlIHRvIGRvIHNvbWUgZnVsbHN0YWNrIHdvcmsgdXNpbmcgRmlyZWJhc2UgdG9cbiAgICAgICAgICAgIHN0b3JlIHRoZSBiZWhhdmlvcmFsIGFuYWx5dGljcyBmb3J7JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbXl0aG91Z2h0c3BvdC5jYVwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBUaG91Z2h0c3BvdFxuICAgICAgICAgICAgPC9hPiwgYSByZXNwb25zaXZlIChkZXNrdG9wICYgbW9iaWxlKSB3ZWIgYXBwIGZvciBDQU1ILiBJdCB0YWxrcyB0b1xuICAgICAgICAgICAgYm90aCB0aGUgR29vZ2xlIFBsYWNlcyBhbmQgTWFwYm94IEFQSXMgYXMgd2VsbCBhcyBwZXJmb3JtcyBmdWxsIHRleHRcbiAgICAgICAgICAgIGFuZCBnZW9sb2NhdGlvbiBwcm94aW1pdHkgc2VhcmNoIHRocm91Z2ggdGhlIEhJUEFBLWNvbXBsaWFudCBRb0NcbiAgICAgICAgICAgIEFQSS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBQcmV2aW91c2x5LCBJIHdvcmtlZCBhdCAyNC03IElOQyBvbiBhbiBhbmFseXRpY3MgYW5kIG5hdHVyYWxcbiAgICAgICAgICAgIGxhbmd1YWdlIHByb2Nlc3NpbmcgYXBwLHsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj01S1pvZlpYM1hhWVwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBWb2ljZXNcbiAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgdGhhdCB2aXN1YWxpemVzIGFuZCB0cmFja3MgdGhlIGN1c3RvbWVyIGpvdXJuZXkgYWNyb3NzIHRoZVxuICAgICAgICAgICAgb21uaWNoYW5uZWwuIEkgYWxzbyBjb250cmlidXRlZCB0byBhIG1hY2hpbmUgbGVhcm5pbmcgdG9vbCB3aGljaFxuICAgICAgICAgICAgZW5hYmxlcyBjdXN0b20gc2VydmljZSB0byByYXBpZGx5IGJ1bGsgdGFnIGFuZCBjbGFzc2lmeSBjaGF0XG4gICAgICAgICAgICBjb252ZXJzYXRpb25zLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICB7Lyp9PHA+XG4gICAgICAgICAgICBJJ20gY29uc3RhbnRseSBsZWFybmluZyBhbmQgYW0gY3VycmVudGx5IHRpbmtlcmluZyB3aXRoIFB5dGhvbi4gVGhlIGdyYXBoIHlvdSBzZWUgb24gdGhpcyBwYWdlIGlzIG15IGxhdGVzdCBzdWJtaXNzaW9uIHRvIHRoZSBob3VzaW5nIHByaWNlcyBjb21wZXRpdGlvbiBhcHBseWluZyBSYW5kb20gRm9yZXN0IGFuZCBYYm9vc3QuIEkgaGF2ZSBhIHdheXMgdG8gZ28gdG8gbW92ZSB1cCB0aGUgbGVhZGVyYm9hcmQuXG4gICAgICAgICAgPC9wPiovfVxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2JyYW5kb25mbG93ZXJzL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMaW5rZWRpblxuICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oZWFkd2luZHNcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgc3R5bGU9e2xpbmtTdHlsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2l0aHViXG4gICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9oZWFkd2luZHNcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgc3R5bGU9e2xpbmtTdHlsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVHdpdHRlclxuICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPlxuICAgICAgICAgIDxBYm91dCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmFwaFwiPlxuICAgICAgICAgIDxSdXNzaWFuR2FtaW5nR3JhcGggLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5iaW8ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWJvdXQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ncmFwaCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/main/Main.js */"
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Main;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(linkStyle, "linkStyle", "/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/components/main/Main.js");
  reactHotLoader.register(Main, "Main", "/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/components/main/Main.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/projects/1CCompany/RussianGamingGraph.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/components/projects/1CCompany/RussianGamingGraph.js: Unexpected token, expected \",\" (254:4)\n\n  252 |     }\n  253 | \n> 254 |     });\n      |     ^\n  255 |   }\n  256 | \n  257 |   render() {\n    at _class.raise (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:2063:16)\n    at _class.expect (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:2051:28)\n    at _class.parseCallExpressionArguments (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:2913:14)\n    at _class.parseSubscript (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:2830:32)\n    at _class.parseSubscripts (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:2745:19)\n    at _class.parseExprSubscripts (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:2735:17)\n    at _class.parseMaybeUnary (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseExpression (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:2499:21)\n    at _class.parseStatementContent (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:4040:21)\n    at _class.parseStatement (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/node_modules/babylon/lib/index.js:4457:10)");

/***/ }),

/***/ "./node_modules/d3-array/index.js":
false,

/***/ "./node_modules/d3-array/src/array.js":
false,

/***/ "./node_modules/d3-array/src/ascending.js":
false,

/***/ "./node_modules/d3-array/src/bisect.js":
false,

/***/ "./node_modules/d3-array/src/bisector.js":
false,

/***/ "./node_modules/d3-array/src/constant.js":
false,

/***/ "./node_modules/d3-array/src/cross.js":
false,

/***/ "./node_modules/d3-array/src/descending.js":
false,

/***/ "./node_modules/d3-array/src/deviation.js":
false,

/***/ "./node_modules/d3-array/src/extent.js":
false,

/***/ "./node_modules/d3-array/src/histogram.js":
false,

/***/ "./node_modules/d3-array/src/identity.js":
false,

/***/ "./node_modules/d3-array/src/max.js":
false,

/***/ "./node_modules/d3-array/src/mean.js":
false,

/***/ "./node_modules/d3-array/src/median.js":
false,

/***/ "./node_modules/d3-array/src/merge.js":
false,

/***/ "./node_modules/d3-array/src/min.js":
false,

/***/ "./node_modules/d3-array/src/number.js":
false,

/***/ "./node_modules/d3-array/src/pairs.js":
false,

/***/ "./node_modules/d3-array/src/permute.js":
false,

/***/ "./node_modules/d3-array/src/quantile.js":
false,

/***/ "./node_modules/d3-array/src/range.js":
false,

/***/ "./node_modules/d3-array/src/scan.js":
false,

/***/ "./node_modules/d3-array/src/shuffle.js":
false,

/***/ "./node_modules/d3-array/src/sum.js":
false,

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
false,

/***/ "./node_modules/d3-array/src/threshold/scott.js":
false,

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
false,

/***/ "./node_modules/d3-array/src/ticks.js":
false,

/***/ "./node_modules/d3-array/src/transpose.js":
false,

/***/ "./node_modules/d3-array/src/variance.js":
false,

/***/ "./node_modules/d3-array/src/zip.js":
false,

/***/ "./node_modules/d3-axis/index.js":
false,

/***/ "./node_modules/d3-axis/src/array.js":
false,

/***/ "./node_modules/d3-axis/src/axis.js":
false,

/***/ "./node_modules/d3-axis/src/identity.js":
false,

/***/ "./node_modules/d3-brush/index.js":
false,

/***/ "./node_modules/d3-brush/src/brush.js":
false,

/***/ "./node_modules/d3-brush/src/constant.js":
false,

/***/ "./node_modules/d3-brush/src/event.js":
false,

/***/ "./node_modules/d3-brush/src/noevent.js":
false,

/***/ "./node_modules/d3-chord/index.js":
false,

/***/ "./node_modules/d3-chord/src/array.js":
false,

/***/ "./node_modules/d3-chord/src/chord.js":
false,

/***/ "./node_modules/d3-chord/src/constant.js":
false,

/***/ "./node_modules/d3-chord/src/math.js":
false,

/***/ "./node_modules/d3-chord/src/ribbon.js":
false,

/***/ "./node_modules/d3-collection/index.js":
false,

/***/ "./node_modules/d3-collection/src/entries.js":
false,

/***/ "./node_modules/d3-collection/src/keys.js":
false,

/***/ "./node_modules/d3-collection/src/map.js":
false,

/***/ "./node_modules/d3-collection/src/nest.js":
false,

/***/ "./node_modules/d3-collection/src/set.js":
false,

/***/ "./node_modules/d3-collection/src/values.js":
false,

/***/ "./node_modules/d3-color/index.js":
false,

/***/ "./node_modules/d3-color/src/color.js":
false,

/***/ "./node_modules/d3-color/src/cubehelix.js":
false,

/***/ "./node_modules/d3-color/src/define.js":
false,

/***/ "./node_modules/d3-color/src/lab.js":
false,

/***/ "./node_modules/d3-color/src/math.js":
false,

/***/ "./node_modules/d3-contour/index.js":
false,

/***/ "./node_modules/d3-contour/src/area.js":
false,

/***/ "./node_modules/d3-contour/src/array.js":
false,

/***/ "./node_modules/d3-contour/src/ascending.js":
false,

/***/ "./node_modules/d3-contour/src/blur.js":
false,

/***/ "./node_modules/d3-contour/src/constant.js":
false,

/***/ "./node_modules/d3-contour/src/contains.js":
false,

/***/ "./node_modules/d3-contour/src/contours.js":
false,

/***/ "./node_modules/d3-contour/src/density.js":
false,

/***/ "./node_modules/d3-contour/src/noop.js":
false,

/***/ "./node_modules/d3-dispatch/index.js":
false,

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
false,

/***/ "./node_modules/d3-drag/index.js":
false,

/***/ "./node_modules/d3-drag/src/constant.js":
false,

/***/ "./node_modules/d3-drag/src/drag.js":
false,

/***/ "./node_modules/d3-drag/src/event.js":
false,

/***/ "./node_modules/d3-drag/src/nodrag.js":
false,

/***/ "./node_modules/d3-drag/src/noevent.js":
false,

/***/ "./node_modules/d3-dsv/index.js":
false,

/***/ "./node_modules/d3-dsv/src/csv.js":
false,

/***/ "./node_modules/d3-dsv/src/dsv.js":
false,

/***/ "./node_modules/d3-dsv/src/tsv.js":
false,

/***/ "./node_modules/d3-ease/index.js":
false,

/***/ "./node_modules/d3-ease/src/back.js":
false,

/***/ "./node_modules/d3-ease/src/bounce.js":
false,

/***/ "./node_modules/d3-ease/src/circle.js":
false,

/***/ "./node_modules/d3-ease/src/cubic.js":
false,

/***/ "./node_modules/d3-ease/src/elastic.js":
false,

/***/ "./node_modules/d3-ease/src/exp.js":
false,

/***/ "./node_modules/d3-ease/src/linear.js":
false,

/***/ "./node_modules/d3-ease/src/poly.js":
false,

/***/ "./node_modules/d3-ease/src/quad.js":
false,

/***/ "./node_modules/d3-ease/src/sin.js":
false,

/***/ "./node_modules/d3-fetch/index.js":
false,

/***/ "./node_modules/d3-fetch/src/blob.js":
false,

/***/ "./node_modules/d3-fetch/src/buffer.js":
false,

/***/ "./node_modules/d3-fetch/src/dsv.js":
false,

/***/ "./node_modules/d3-fetch/src/image.js":
false,

/***/ "./node_modules/d3-fetch/src/json.js":
false,

/***/ "./node_modules/d3-fetch/src/text.js":
false,

/***/ "./node_modules/d3-fetch/src/xml.js":
false,

/***/ "./node_modules/d3-force/index.js":
false,

/***/ "./node_modules/d3-force/src/center.js":
false,

/***/ "./node_modules/d3-force/src/collide.js":
false,

/***/ "./node_modules/d3-force/src/constant.js":
false,

/***/ "./node_modules/d3-force/src/jiggle.js":
false,

/***/ "./node_modules/d3-force/src/link.js":
false,

/***/ "./node_modules/d3-force/src/manyBody.js":
false,

/***/ "./node_modules/d3-force/src/radial.js":
false,

/***/ "./node_modules/d3-force/src/simulation.js":
false,

/***/ "./node_modules/d3-force/src/x.js":
false,

/***/ "./node_modules/d3-force/src/y.js":
false,

/***/ "./node_modules/d3-format/index.js":
false,

/***/ "./node_modules/d3-format/src/defaultLocale.js":
false,

/***/ "./node_modules/d3-format/src/exponent.js":
false,

/***/ "./node_modules/d3-format/src/formatDecimal.js":
false,

/***/ "./node_modules/d3-format/src/formatDefault.js":
false,

/***/ "./node_modules/d3-format/src/formatGroup.js":
false,

/***/ "./node_modules/d3-format/src/formatNumerals.js":
false,

/***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
false,

/***/ "./node_modules/d3-format/src/formatRounded.js":
false,

/***/ "./node_modules/d3-format/src/formatSpecifier.js":
false,

/***/ "./node_modules/d3-format/src/formatTypes.js":
false,

/***/ "./node_modules/d3-format/src/identity.js":
false,

/***/ "./node_modules/d3-format/src/locale.js":
false,

/***/ "./node_modules/d3-format/src/precisionFixed.js":
false,

/***/ "./node_modules/d3-format/src/precisionPrefix.js":
false,

/***/ "./node_modules/d3-format/src/precisionRound.js":
false,

/***/ "./node_modules/d3-geo/index.js":
false,

/***/ "./node_modules/d3-geo/src/adder.js":
false,

/***/ "./node_modules/d3-geo/src/area.js":
false,

/***/ "./node_modules/d3-geo/src/bounds.js":
false,

/***/ "./node_modules/d3-geo/src/cartesian.js":
false,

/***/ "./node_modules/d3-geo/src/centroid.js":
false,

/***/ "./node_modules/d3-geo/src/circle.js":
false,

/***/ "./node_modules/d3-geo/src/clip/antimeridian.js":
false,

/***/ "./node_modules/d3-geo/src/clip/buffer.js":
false,

/***/ "./node_modules/d3-geo/src/clip/circle.js":
false,

/***/ "./node_modules/d3-geo/src/clip/extent.js":
false,

/***/ "./node_modules/d3-geo/src/clip/index.js":
false,

/***/ "./node_modules/d3-geo/src/clip/line.js":
false,

/***/ "./node_modules/d3-geo/src/clip/rectangle.js":
false,

/***/ "./node_modules/d3-geo/src/clip/rejoin.js":
false,

/***/ "./node_modules/d3-geo/src/compose.js":
false,

/***/ "./node_modules/d3-geo/src/constant.js":
false,

/***/ "./node_modules/d3-geo/src/contains.js":
false,

/***/ "./node_modules/d3-geo/src/distance.js":
false,

/***/ "./node_modules/d3-geo/src/graticule.js":
false,

/***/ "./node_modules/d3-geo/src/identity.js":
false,

/***/ "./node_modules/d3-geo/src/interpolate.js":
false,

/***/ "./node_modules/d3-geo/src/length.js":
false,

/***/ "./node_modules/d3-geo/src/math.js":
false,

/***/ "./node_modules/d3-geo/src/noop.js":
false,

/***/ "./node_modules/d3-geo/src/path/area.js":
false,

/***/ "./node_modules/d3-geo/src/path/bounds.js":
false,

/***/ "./node_modules/d3-geo/src/path/centroid.js":
false,

/***/ "./node_modules/d3-geo/src/path/context.js":
false,

/***/ "./node_modules/d3-geo/src/path/index.js":
false,

/***/ "./node_modules/d3-geo/src/path/measure.js":
false,

/***/ "./node_modules/d3-geo/src/path/string.js":
false,

/***/ "./node_modules/d3-geo/src/pointEqual.js":
false,

/***/ "./node_modules/d3-geo/src/polygonContains.js":
false,

/***/ "./node_modules/d3-geo/src/projection/albers.js":
false,

/***/ "./node_modules/d3-geo/src/projection/albersUsa.js":
false,

/***/ "./node_modules/d3-geo/src/projection/azimuthal.js":
false,

/***/ "./node_modules/d3-geo/src/projection/azimuthalEqualArea.js":
false,

/***/ "./node_modules/d3-geo/src/projection/azimuthalEquidistant.js":
false,

/***/ "./node_modules/d3-geo/src/projection/conic.js":
false,

/***/ "./node_modules/d3-geo/src/projection/conicConformal.js":
false,

/***/ "./node_modules/d3-geo/src/projection/conicEqualArea.js":
false,

/***/ "./node_modules/d3-geo/src/projection/conicEquidistant.js":
false,

/***/ "./node_modules/d3-geo/src/projection/cylindricalEqualArea.js":
false,

/***/ "./node_modules/d3-geo/src/projection/equirectangular.js":
false,

/***/ "./node_modules/d3-geo/src/projection/fit.js":
false,

/***/ "./node_modules/d3-geo/src/projection/gnomonic.js":
false,

/***/ "./node_modules/d3-geo/src/projection/identity.js":
false,

/***/ "./node_modules/d3-geo/src/projection/index.js":
false,

/***/ "./node_modules/d3-geo/src/projection/mercator.js":
false,

/***/ "./node_modules/d3-geo/src/projection/naturalEarth1.js":
false,

/***/ "./node_modules/d3-geo/src/projection/orthographic.js":
false,

/***/ "./node_modules/d3-geo/src/projection/resample.js":
false,

/***/ "./node_modules/d3-geo/src/projection/stereographic.js":
false,

/***/ "./node_modules/d3-geo/src/projection/transverseMercator.js":
false,

/***/ "./node_modules/d3-geo/src/rotation.js":
false,

/***/ "./node_modules/d3-geo/src/stream.js":
false,

/***/ "./node_modules/d3-geo/src/transform.js":
false,

/***/ "./node_modules/d3-hierarchy/index.js":
false,

/***/ "./node_modules/d3-hierarchy/src/accessors.js":
false,

/***/ "./node_modules/d3-hierarchy/src/array.js":
false,

/***/ "./node_modules/d3-hierarchy/src/cluster.js":
false,

/***/ "./node_modules/d3-hierarchy/src/constant.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/ancestors.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/count.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/descendants.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/each.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/index.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/leaves.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/links.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/path.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sort.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sum.js":
false,

/***/ "./node_modules/d3-hierarchy/src/pack/enclose.js":
false,

/***/ "./node_modules/d3-hierarchy/src/pack/index.js":
false,

/***/ "./node_modules/d3-hierarchy/src/pack/siblings.js":
false,

/***/ "./node_modules/d3-hierarchy/src/partition.js":
false,

/***/ "./node_modules/d3-hierarchy/src/stratify.js":
false,

/***/ "./node_modules/d3-hierarchy/src/tree.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/binary.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/dice.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/index.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/resquarify.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/round.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/slice.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/sliceDice.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/squarify.js":
false,

/***/ "./node_modules/d3-interpolate/index.js":
false,

/***/ "./node_modules/d3-interpolate/src/array.js":
false,

/***/ "./node_modules/d3-interpolate/src/basis.js":
false,

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
false,

/***/ "./node_modules/d3-interpolate/src/color.js":
false,

/***/ "./node_modules/d3-interpolate/src/constant.js":
false,

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
false,

/***/ "./node_modules/d3-interpolate/src/date.js":
false,

/***/ "./node_modules/d3-interpolate/src/hcl.js":
false,

/***/ "./node_modules/d3-interpolate/src/hsl.js":
false,

/***/ "./node_modules/d3-interpolate/src/lab.js":
false,

/***/ "./node_modules/d3-interpolate/src/number.js":
false,

/***/ "./node_modules/d3-interpolate/src/object.js":
false,

/***/ "./node_modules/d3-interpolate/src/quantize.js":
false,

/***/ "./node_modules/d3-interpolate/src/rgb.js":
false,

/***/ "./node_modules/d3-interpolate/src/round.js":
false,

/***/ "./node_modules/d3-interpolate/src/string.js":
false,

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
false,

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
false,

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
false,

/***/ "./node_modules/d3-interpolate/src/value.js":
false,

/***/ "./node_modules/d3-interpolate/src/zoom.js":
false,

/***/ "./node_modules/d3-path/index.js":
false,

/***/ "./node_modules/d3-path/src/path.js":
false,

/***/ "./node_modules/d3-polygon/index.js":
false,

/***/ "./node_modules/d3-polygon/src/area.js":
false,

/***/ "./node_modules/d3-polygon/src/centroid.js":
false,

/***/ "./node_modules/d3-polygon/src/contains.js":
false,

/***/ "./node_modules/d3-polygon/src/cross.js":
false,

/***/ "./node_modules/d3-polygon/src/hull.js":
false,

/***/ "./node_modules/d3-polygon/src/length.js":
false,

/***/ "./node_modules/d3-quadtree/index.js":
false,

/***/ "./node_modules/d3-quadtree/src/add.js":
false,

/***/ "./node_modules/d3-quadtree/src/cover.js":
false,

/***/ "./node_modules/d3-quadtree/src/data.js":
false,

/***/ "./node_modules/d3-quadtree/src/extent.js":
false,

/***/ "./node_modules/d3-quadtree/src/find.js":
false,

/***/ "./node_modules/d3-quadtree/src/quad.js":
false,

/***/ "./node_modules/d3-quadtree/src/quadtree.js":
false,

/***/ "./node_modules/d3-quadtree/src/remove.js":
false,

/***/ "./node_modules/d3-quadtree/src/root.js":
false,

/***/ "./node_modules/d3-quadtree/src/size.js":
false,

/***/ "./node_modules/d3-quadtree/src/visit.js":
false,

/***/ "./node_modules/d3-quadtree/src/visitAfter.js":
false,

/***/ "./node_modules/d3-quadtree/src/x.js":
false,

/***/ "./node_modules/d3-quadtree/src/y.js":
false,

/***/ "./node_modules/d3-random/index.js":
false,

/***/ "./node_modules/d3-random/src/bates.js":
false,

/***/ "./node_modules/d3-random/src/defaultSource.js":
false,

/***/ "./node_modules/d3-random/src/exponential.js":
false,

/***/ "./node_modules/d3-random/src/irwinHall.js":
false,

/***/ "./node_modules/d3-random/src/logNormal.js":
false,

/***/ "./node_modules/d3-random/src/normal.js":
false,

/***/ "./node_modules/d3-random/src/uniform.js":
false,

/***/ "./node_modules/d3-scale-chromatic/index.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Accent.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Dark2.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Paired.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Pastel1.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Pastel2.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Set1.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Set2.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Set3.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/category10.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/colors.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/BrBG.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/PRGn.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/PiYG.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/PuOr.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/RdBu.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/RdGy.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/Spectral.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/ramp.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Blues.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Greens.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Greys.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Purples.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Reds.js":
false,

/***/ "./node_modules/d3-scale/index.js":
false,

/***/ "./node_modules/d3-scale/src/array.js":
false,

/***/ "./node_modules/d3-scale/src/band.js":
false,

/***/ "./node_modules/d3-scale/src/constant.js":
false,

/***/ "./node_modules/d3-scale/src/continuous.js":
false,

/***/ "./node_modules/d3-scale/src/identity.js":
false,

/***/ "./node_modules/d3-scale/src/linear.js":
false,

/***/ "./node_modules/d3-scale/src/log.js":
false,

/***/ "./node_modules/d3-scale/src/nice.js":
false,

/***/ "./node_modules/d3-scale/src/number.js":
false,

/***/ "./node_modules/d3-scale/src/ordinal.js":
false,

/***/ "./node_modules/d3-scale/src/pow.js":
false,

/***/ "./node_modules/d3-scale/src/quantile.js":
false,

/***/ "./node_modules/d3-scale/src/quantize.js":
false,

/***/ "./node_modules/d3-scale/src/sequential.js":
false,

/***/ "./node_modules/d3-scale/src/threshold.js":
false,

/***/ "./node_modules/d3-scale/src/tickFormat.js":
false,

/***/ "./node_modules/d3-scale/src/time.js":
false,

/***/ "./node_modules/d3-scale/src/utcTime.js":
false,

/***/ "./node_modules/d3-selection/index.js":
false,

/***/ "./node_modules/d3-selection/src/constant.js":
false,

/***/ "./node_modules/d3-selection/src/create.js":
false,

/***/ "./node_modules/d3-selection/src/creator.js":
false,

/***/ "./node_modules/d3-selection/src/local.js":
false,

/***/ "./node_modules/d3-selection/src/matcher.js":
false,

/***/ "./node_modules/d3-selection/src/mouse.js":
false,

/***/ "./node_modules/d3-selection/src/namespace.js":
false,

/***/ "./node_modules/d3-selection/src/namespaces.js":
false,

/***/ "./node_modules/d3-selection/src/point.js":
false,

/***/ "./node_modules/d3-selection/src/select.js":
false,

/***/ "./node_modules/d3-selection/src/selectAll.js":
false,

/***/ "./node_modules/d3-selection/src/selection/append.js":
false,

/***/ "./node_modules/d3-selection/src/selection/attr.js":
false,

/***/ "./node_modules/d3-selection/src/selection/call.js":
false,

/***/ "./node_modules/d3-selection/src/selection/classed.js":
false,

/***/ "./node_modules/d3-selection/src/selection/clone.js":
false,

/***/ "./node_modules/d3-selection/src/selection/data.js":
false,

/***/ "./node_modules/d3-selection/src/selection/datum.js":
false,

/***/ "./node_modules/d3-selection/src/selection/dispatch.js":
false,

/***/ "./node_modules/d3-selection/src/selection/each.js":
false,

/***/ "./node_modules/d3-selection/src/selection/empty.js":
false,

/***/ "./node_modules/d3-selection/src/selection/enter.js":
false,

/***/ "./node_modules/d3-selection/src/selection/exit.js":
false,

/***/ "./node_modules/d3-selection/src/selection/filter.js":
false,

/***/ "./node_modules/d3-selection/src/selection/html.js":
false,

/***/ "./node_modules/d3-selection/src/selection/index.js":
false,

/***/ "./node_modules/d3-selection/src/selection/insert.js":
false,

/***/ "./node_modules/d3-selection/src/selection/lower.js":
false,

/***/ "./node_modules/d3-selection/src/selection/merge.js":
false,

/***/ "./node_modules/d3-selection/src/selection/node.js":
false,

/***/ "./node_modules/d3-selection/src/selection/nodes.js":
false,

/***/ "./node_modules/d3-selection/src/selection/on.js":
false,

/***/ "./node_modules/d3-selection/src/selection/order.js":
false,

/***/ "./node_modules/d3-selection/src/selection/property.js":
false,

/***/ "./node_modules/d3-selection/src/selection/raise.js":
false,

/***/ "./node_modules/d3-selection/src/selection/remove.js":
false,

/***/ "./node_modules/d3-selection/src/selection/select.js":
false,

/***/ "./node_modules/d3-selection/src/selection/selectAll.js":
false,

/***/ "./node_modules/d3-selection/src/selection/size.js":
false,

/***/ "./node_modules/d3-selection/src/selection/sort.js":
false,

/***/ "./node_modules/d3-selection/src/selection/sparse.js":
false,

/***/ "./node_modules/d3-selection/src/selection/style.js":
false,

/***/ "./node_modules/d3-selection/src/selection/text.js":
false,

/***/ "./node_modules/d3-selection/src/selector.js":
false,

/***/ "./node_modules/d3-selection/src/selectorAll.js":
false,

/***/ "./node_modules/d3-selection/src/sourceEvent.js":
false,

/***/ "./node_modules/d3-selection/src/touch.js":
false,

/***/ "./node_modules/d3-selection/src/touches.js":
false,

/***/ "./node_modules/d3-selection/src/window.js":
false,

/***/ "./node_modules/d3-shape/index.js":
false,

/***/ "./node_modules/d3-shape/src/arc.js":
false,

/***/ "./node_modules/d3-shape/src/area.js":
false,

/***/ "./node_modules/d3-shape/src/areaRadial.js":
false,

/***/ "./node_modules/d3-shape/src/array.js":
false,

/***/ "./node_modules/d3-shape/src/constant.js":
false,

/***/ "./node_modules/d3-shape/src/curve/basis.js":
false,

/***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
false,

/***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
false,

/***/ "./node_modules/d3-shape/src/curve/bundle.js":
false,

/***/ "./node_modules/d3-shape/src/curve/cardinal.js":
false,

/***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
false,

/***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
false,

/***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
false,

/***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
false,

/***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
false,

/***/ "./node_modules/d3-shape/src/curve/linear.js":
false,

/***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
false,

/***/ "./node_modules/d3-shape/src/curve/monotone.js":
false,

/***/ "./node_modules/d3-shape/src/curve/natural.js":
false,

/***/ "./node_modules/d3-shape/src/curve/radial.js":
false,

/***/ "./node_modules/d3-shape/src/curve/step.js":
false,

/***/ "./node_modules/d3-shape/src/descending.js":
false,

/***/ "./node_modules/d3-shape/src/identity.js":
false,

/***/ "./node_modules/d3-shape/src/line.js":
false,

/***/ "./node_modules/d3-shape/src/lineRadial.js":
false,

/***/ "./node_modules/d3-shape/src/link/index.js":
false,

/***/ "./node_modules/d3-shape/src/math.js":
false,

/***/ "./node_modules/d3-shape/src/noop.js":
false,

/***/ "./node_modules/d3-shape/src/offset/diverging.js":
false,

/***/ "./node_modules/d3-shape/src/offset/expand.js":
false,

/***/ "./node_modules/d3-shape/src/offset/none.js":
false,

/***/ "./node_modules/d3-shape/src/offset/silhouette.js":
false,

/***/ "./node_modules/d3-shape/src/offset/wiggle.js":
false,

/***/ "./node_modules/d3-shape/src/order/ascending.js":
false,

/***/ "./node_modules/d3-shape/src/order/descending.js":
false,

/***/ "./node_modules/d3-shape/src/order/insideOut.js":
false,

/***/ "./node_modules/d3-shape/src/order/none.js":
false,

/***/ "./node_modules/d3-shape/src/order/reverse.js":
false,

/***/ "./node_modules/d3-shape/src/pie.js":
false,

/***/ "./node_modules/d3-shape/src/point.js":
false,

/***/ "./node_modules/d3-shape/src/pointRadial.js":
false,

/***/ "./node_modules/d3-shape/src/stack.js":
false,

/***/ "./node_modules/d3-shape/src/symbol.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/circle.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/cross.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/diamond.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/square.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/star.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/triangle.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/wye.js":
false,

/***/ "./node_modules/d3-time-format/index.js":
false,

/***/ "./node_modules/d3-time-format/src/defaultLocale.js":
false,

/***/ "./node_modules/d3-time-format/src/isoFormat.js":
false,

/***/ "./node_modules/d3-time-format/src/isoParse.js":
false,

/***/ "./node_modules/d3-time-format/src/locale.js":
false,

/***/ "./node_modules/d3-time/index.js":
false,

/***/ "./node_modules/d3-time/src/day.js":
false,

/***/ "./node_modules/d3-time/src/duration.js":
false,

/***/ "./node_modules/d3-time/src/hour.js":
false,

/***/ "./node_modules/d3-time/src/interval.js":
false,

/***/ "./node_modules/d3-time/src/millisecond.js":
false,

/***/ "./node_modules/d3-time/src/minute.js":
false,

/***/ "./node_modules/d3-time/src/month.js":
false,

/***/ "./node_modules/d3-time/src/second.js":
false,

/***/ "./node_modules/d3-time/src/utcDay.js":
false,

/***/ "./node_modules/d3-time/src/utcHour.js":
false,

/***/ "./node_modules/d3-time/src/utcMinute.js":
false,

/***/ "./node_modules/d3-time/src/utcMonth.js":
false,

/***/ "./node_modules/d3-time/src/utcWeek.js":
false,

/***/ "./node_modules/d3-time/src/utcYear.js":
false,

/***/ "./node_modules/d3-time/src/week.js":
false,

/***/ "./node_modules/d3-time/src/year.js":
false,

/***/ "./node_modules/d3-timer/index.js":
false,

/***/ "./node_modules/d3-timer/src/interval.js":
false,

/***/ "./node_modules/d3-timer/src/timeout.js":
false,

/***/ "./node_modules/d3-timer/src/timer.js":
false,

/***/ "./node_modules/d3-transition/index.js":
false,

/***/ "./node_modules/d3-transition/src/active.js":
false,

/***/ "./node_modules/d3-transition/src/interrupt.js":
false,

/***/ "./node_modules/d3-transition/src/selection/index.js":
false,

/***/ "./node_modules/d3-transition/src/selection/interrupt.js":
false,

/***/ "./node_modules/d3-transition/src/selection/transition.js":
false,

/***/ "./node_modules/d3-transition/src/transition/attr.js":
false,

/***/ "./node_modules/d3-transition/src/transition/attrTween.js":
false,

/***/ "./node_modules/d3-transition/src/transition/delay.js":
false,

/***/ "./node_modules/d3-transition/src/transition/duration.js":
false,

/***/ "./node_modules/d3-transition/src/transition/ease.js":
false,

/***/ "./node_modules/d3-transition/src/transition/filter.js":
false,

/***/ "./node_modules/d3-transition/src/transition/index.js":
false,

/***/ "./node_modules/d3-transition/src/transition/interpolate.js":
false,

/***/ "./node_modules/d3-transition/src/transition/merge.js":
false,

/***/ "./node_modules/d3-transition/src/transition/on.js":
false,

/***/ "./node_modules/d3-transition/src/transition/remove.js":
false,

/***/ "./node_modules/d3-transition/src/transition/schedule.js":
false,

/***/ "./node_modules/d3-transition/src/transition/select.js":
false,

/***/ "./node_modules/d3-transition/src/transition/selectAll.js":
false,

/***/ "./node_modules/d3-transition/src/transition/selection.js":
false,

/***/ "./node_modules/d3-transition/src/transition/style.js":
false,

/***/ "./node_modules/d3-transition/src/transition/styleTween.js":
false,

/***/ "./node_modules/d3-transition/src/transition/text.js":
false,

/***/ "./node_modules/d3-transition/src/transition/transition.js":
false,

/***/ "./node_modules/d3-transition/src/transition/tween.js":
false,

/***/ "./node_modules/d3-voronoi/index.js":
false,

/***/ "./node_modules/d3-voronoi/src/Beach.js":
false,

/***/ "./node_modules/d3-voronoi/src/Cell.js":
false,

/***/ "./node_modules/d3-voronoi/src/Circle.js":
false,

/***/ "./node_modules/d3-voronoi/src/Diagram.js":
false,

/***/ "./node_modules/d3-voronoi/src/Edge.js":
false,

/***/ "./node_modules/d3-voronoi/src/RedBlackTree.js":
false,

/***/ "./node_modules/d3-voronoi/src/constant.js":
false,

/***/ "./node_modules/d3-voronoi/src/point.js":
false,

/***/ "./node_modules/d3-voronoi/src/voronoi.js":
false,

/***/ "./node_modules/d3-zoom/index.js":
false,

/***/ "./node_modules/d3-zoom/src/constant.js":
false,

/***/ "./node_modules/d3-zoom/src/event.js":
false,

/***/ "./node_modules/d3-zoom/src/noevent.js":
false,

/***/ "./node_modules/d3-zoom/src/transform.js":
false,

/***/ "./node_modules/d3-zoom/src/zoom.js":
false,

/***/ "./node_modules/d3/dist/package.js":
false,

/***/ "./node_modules/d3/index.js":
false

})
//# sourceMappingURL=4.0b03534002b21a0625e5.hot-update.js.map