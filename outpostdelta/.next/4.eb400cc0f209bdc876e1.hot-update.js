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
      var tooltip = __WEBPACK_IMPORTED_MODULE_2_d3__["e" /* select */]('body').append('div').attr('id', 'tooltip').style('width', '150px').style('height', '40px').style('position', 'absolute').style('z-index', '10').style('visibility', 'hidden').style('padding', '10px').style('background-color', 'white').style('opacity', '0.9');
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
      var viewport = __WEBPACK_IMPORTED_MODULE_2_d3__["e" /* select */]('#viewport').append('svg').attr('width', width).attr('height', height).style('margin', '0 auto');
      var svg = viewport;
      __WEBPACK_IMPORTED_MODULE_2_d3__["e" /* select */]('svg').selectAll('.node').remove();
      var format = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* format */](',d');
      var color = '#FF0'; //d3.scaleOrdinal(d3.schemeCategory20c);

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

          __WEBPACK_IMPORTED_MODULE_2_d3__["e" /* select */]('#tooltip').select('.tooltipFirstText').text(title);
          __WEBPACK_IMPORTED_MODULE_2_d3__["e" /* select */]('#tooltip').select('.tooltipSecondText').text(subTitle);
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

/***/ "./node_modules/d3-scale/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_band__ = __webpack_require__("./node_modules/d3-scale/src/band.js");
/* unused harmony reexport scaleBand */
/* unused harmony reexport scalePoint */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_identity__ = __webpack_require__("./node_modules/d3-scale/src/identity.js");
/* unused harmony reexport scaleIdentity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_linear__ = __webpack_require__("./node_modules/d3-scale/src/linear.js");
/* unused harmony reexport scaleLinear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_log__ = __webpack_require__("./node_modules/d3-scale/src/log.js");
/* unused harmony reexport scaleLog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_ordinal__ = __webpack_require__("./node_modules/d3-scale/src/ordinal.js");
/* unused harmony reexport scaleOrdinal */
/* unused harmony reexport scaleImplicit */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_pow__ = __webpack_require__("./node_modules/d3-scale/src/pow.js");
/* unused harmony reexport scalePow */
/* unused harmony reexport scaleSqrt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_quantile__ = __webpack_require__("./node_modules/d3-scale/src/quantile.js");
/* unused harmony reexport scaleQuantile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_quantize__ = __webpack_require__("./node_modules/d3-scale/src/quantize.js");
/* unused harmony reexport scaleQuantize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold__ = __webpack_require__("./node_modules/d3-scale/src/threshold.js");
/* unused harmony reexport scaleThreshold */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_time__ = __webpack_require__("./node_modules/d3-scale/src/time.js");
/* unused harmony reexport scaleTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcTime__ = __webpack_require__("./node_modules/d3-scale/src/utcTime.js");
/* unused harmony reexport scaleUtc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_sequential__ = __webpack_require__("./node_modules/d3-scale/src/sequential.js");
/* unused harmony reexport scaleSequential */

























/***/ }),

/***/ "./node_modules/d3/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_package__ = __webpack_require__("./node_modules/d3/dist/package.js");
/* unused harmony reexport version */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_axis__ = __webpack_require__("./node_modules/d3-axis/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_brush__ = __webpack_require__("./node_modules/d3-brush/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_chord__ = __webpack_require__("./node_modules/d3-chord/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3_collection__ = __webpack_require__("./node_modules/d3-collection/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3_color__ = __webpack_require__("./node_modules/d3-color/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_d3_contour__ = __webpack_require__("./node_modules/d3-contour/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_d3_dispatch__ = __webpack_require__("./node_modules/d3-dispatch/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_d3_drag__ = __webpack_require__("./node_modules/d3-drag/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_d3_dsv__ = __webpack_require__("./node_modules/d3-dsv/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_d3_ease__ = __webpack_require__("./node_modules/d3-ease/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_d3_fetch__ = __webpack_require__("./node_modules/d3-fetch/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_fetch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_d3_force__ = __webpack_require__("./node_modules/d3-force/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_d3_format__ = __webpack_require__("./node_modules/d3-format/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_format__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_d3_geo__ = __webpack_require__("./node_modules/d3-geo/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__ = __webpack_require__("./node_modules/d3-hierarchy/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__ = __webpack_require__("./node_modules/d3-interpolate/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_d3_path__ = __webpack_require__("./node_modules/d3-path/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_d3_polygon__ = __webpack_require__("./node_modules/d3-polygon/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_d3_quadtree__ = __webpack_require__("./node_modules/d3-quadtree/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_d3_random__ = __webpack_require__("./node_modules/d3-random/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_d3_scale__ = __webpack_require__("./node_modules/d3-scale/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__ = __webpack_require__("./node_modules/d3-scale-chromatic/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_d3_selection__ = __webpack_require__("./node_modules/d3-selection/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_d3_shape__ = __webpack_require__("./node_modules/d3-shape/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_d3_time__ = __webpack_require__("./node_modules/d3-time/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_d3_time_format__ = __webpack_require__("./node_modules/d3-time-format/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_d3_timer__ = __webpack_require__("./node_modules/d3-timer/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_d3_transition__ = __webpack_require__("./node_modules/d3-transition/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_d3_voronoi__ = __webpack_require__("./node_modules/d3-voronoi/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_d3_zoom__ = __webpack_require__("./node_modules/d3-zoom/index.js");
/* unused harmony namespace reexport */


































/***/ })

})
//# sourceMappingURL=4.eb400cc0f209bdc876e1.hot-update.js.map