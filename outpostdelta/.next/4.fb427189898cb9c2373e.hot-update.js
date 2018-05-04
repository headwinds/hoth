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
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__projects_1CCompany_RussianGamingGraph__["a" /* default */], {
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

/***/ })

})
//# sourceMappingURL=4.fb427189898cb9c2373e.hot-update.js.map