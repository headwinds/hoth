webpackHotUpdate(4,{

/***/ "./components/projects/1CCompany/RussianGamingGraph.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RussianGamingGraph; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("./node_modules/d3/index.js");
var _jsxFileName = "/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/components/projects/1CCompany/RussianGamingGraph.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* eslint-disable */

/* to do lint this file */



var data = '/static/northern.csv';

var RussianGamingGraph =
/*#__PURE__*/
function (_Component) {
  _inherits(RussianGamingGraph, _Component);

  function RussianGamingGraph(props, context) {
    var _this;

    _classCallCheck(this, RussianGamingGraph);

    _this = _possibleConstructorReturn(this, (RussianGamingGraph.__proto__ || Object.getPrototypeOf(RussianGamingGraph)).call(this, props, context));
    _this.props = props;
    _this.visualize = _this.visualize.bind(_assertThisInitialized(_this));
    console.log('HousingGraph constructor this.props: ', _this.props);
    return _this;
  }

  _createClass(RussianGamingGraph, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('HousingGraph componentDidMount');
      this.visualize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log('HousingGraph componentDidUpdate');
    }
  }, {
    key: "visualize",
    value: function visualize() {
      console.log('drawActivity');
      var tooltip = __WEBPACK_IMPORTED_MODULE_2_d3__["g" /* select */]('body').append('div').attr('id', 'tooltip').style('width', '150px').style('height', '40px').style('position', 'absolute').style('z-index', '10').style('visibility', 'hidden').style('padding', '10px').style('background-color', 'white').style('opacity', '0.9');
      var tooltipG = tooltip.append('svg').append('g');
      tooltipG.append('text').attr('x', 0).attr('y', 20).attr('class', 'tooltipFirstText').text('a simple tooltip');
      tooltipG.append('text').attr('x', 0).attr('y', 40).style('fill', '#999').attr('class', 'tooltipSecondText').style('font-size', '12px').text('a simple tooltip 2');
      /*
      tooltipG
        .append('rect')
        .attr('width', 100)
        .attr('height', 5)
        .attr('y', 60)
        .attr('class', 'tooltipBar')
        .style('fill', 'red');
        */

      var width = window.innerWidth;
      var height = window.innerHeight;
      var viewport = __WEBPACK_IMPORTED_MODULE_2_d3__["g" /* select */]('#viewport').append('svg').attr('width', width).attr('height', height).style('margin', '0 auto');
      var svg = viewport;
      __WEBPACK_IMPORTED_MODULE_2_d3__["g" /* select */]('svg').selectAll('.node').remove();
      var format = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* format */](',d');
      var color = __WEBPACK_IMPORTED_MODULE_2_d3__["e" /* scaleOrdinal */](__WEBPACK_IMPORTED_MODULE_2_d3__["schemeCategory20c"]);
      var pack = __WEBPACK_IMPORTED_MODULE_2_d3__["d" /* pack */]().size([width, width]).padding(1.5);
      __WEBPACK_IMPORTED_MODULE_2_d3__["a" /* csv */](data, function (d) {
        d.value = +d.value;
        if (d.value) return d;
      }, function (error, classes) {
        if (error) throw error;
        var buildings = [{
          title: 'Карты',
          total: 86,
          count: '3,925'
        }, {
          title: 'РостовНаДону',
          total: 128,
          count: '7,735'
        }, {
          title: 'Новосибирск ТЦ',
          total: 9,
          count: '834'
        }, {
          title: 'Цифровой склад 1С-Онлайн',
          total: 142,
          count: '9,234'
        }, {
          title: 'Выездная Торговля',
          total: 16,
          count: '1,016'
        }, {
          title: 'Якутск Орджоникидзе',
          total: 107,
          count: '5,331'
        }];
        var count = 0;
        var root = __WEBPACK_IMPORTED_MODULE_2_d3__["c" /* hierarchy */]({
          children: classes
        }).sum(function (d) {
          return d.value;
        }).each(function (d) {
          if (id = d.data.id) {
            var id,
                i = id.lastIndexOf('.');
            d.id = id;
            d.package = id.slice(0, i);
            d.class = id.slice(i + 1);
            d.title = buildings[count].title;
            d.count = buildings[count].count;
            d.total = buildings[count].total;
            count++;
          }
        });
        console.log('RussianGamingGraph root', root);
        var node = svg.selectAll('.node').data(pack(root).leaves()).enter().append('g').attr('class', 'node').attr('transform', function (d) {
          return 'translate(' + d.x + ',' + d.y + ')';
        });
        var aqua = 'rgba(51, 197, 197, 0.20)';

        var getColor = function getColor(i) {
          if (i < 5) return aqua;else return aqua;
        };

        var updateTooltip = function updateTooltip(title, subTitle) {
          var titleLen = title.length;
          var subTitleLen = subTitle.length;
          var useLen = titleLen > subTitleLen ? titleLen : subTitleLen;
          tooltip.style('top', event.pageY - 10 + 'px').style('left', event.pageX + 10 + 'px').style('width', useLen * 6 + 'px'); //tooltip.text(title);

          __WEBPACK_IMPORTED_MODULE_2_d3__["g" /* select */]('#tooltip').select('.tooltipFirstText').text(title);
          __WEBPACK_IMPORTED_MODULE_2_d3__["g" /* select */]('#tooltip').select('.tooltipSecondText').text(subTitle);
          /*
          d3
            .select('#tooltip')
            .select('.tooltipBar')
            .attr('width', title.length * 10 + 'px')
            .style('fill', 'blue')
            .transition()
            .duration(1000)
            .ease(d3.easeLinear)
            .style('fill', 'red')
            .transition()
            .duration(1000)
            .ease(d3.easeLinear)
            .style('fill', 'blue')
            .on('start', function repeat() {
              d3
                .active(this)
                .style('fill', 'red')
                .transition()
                .style('fill', 'green')
                .transition()
                .style('fill', 'blue')
                .transition()
                .on('start', repeat);
            });
            */

          return tooltip;
        };

        node.append('rect').attr('id', function (d) {
          return d.id;
        }).attr('width', function (d) {
          return d.r;
        }).attr('height', function (d) {
          return d.r;
        }).style('fill', function (d, i) {
          return getColor(i);
        }).style('cursor', 'pointer').on('mouseover', function () {
          return tooltip.style('visibility', 'visible');
        }).on('mousemove', function (d) {
          var subTitle = "".concat(d.total, " Shops which sold ").concat(d.count, " Items");
          var title = d.title;
          return updateTooltip(title, subTitle);
        }).on('mouseout', function () {
          return tooltip.style('visibility', 'hidden');
        }).on('click', function (d) {
          console.log(d);
        });
        node.append('clipPath').attr('id', function (d) {
          return 'clip-' + d.id;
        }).append('use').attr('xlink:href', function (d) {
          return '#' + d.id;
        });
        /*
        node.append("text")
         .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; })
         .attr("text-anchor", "middle")
        .selectAll("tspan")
        .data(function(d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
        .enter().append("tspan")
         .attr("x", 0)
         .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
         .text(function(d) { return d; });
        node.append("title")
         .text(function(d) { return d.id + "\n" + format(d.value); });
            */
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "viewport",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return RussianGamingGraph;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(data, "data", "/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/components/projects/1CCompany/RussianGamingGraph.js");
  reactHotLoader.register(RussianGamingGraph, "RussianGamingGraph", "/Users/brandon.flowers/Projects/headwinds/hoth/outpostdelta/components/projects/1CCompany/RussianGamingGraph.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__("./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__("./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__("./node_modules/react-redux/es/connect/selectorFactory.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__("./node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__("./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__("./node_modules/react-redux/es/connect/connect.js");
/* unused harmony reexport Provider */
/* unused harmony reexport createProvider */
/* unused harmony reexport connectAdvanced */
/* unused harmony reexport connect */






/***/ })

})
//# sourceMappingURL=4.81ec41c022cc7ccae6cf.hot-update.js.map