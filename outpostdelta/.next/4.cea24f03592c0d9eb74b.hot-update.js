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
      var tooltip = __WEBPACK_IMPORTED_MODULE_2_d3__["d" /* select */]('body').append('div').attr('id', 'tooltip').style('width', '150px').style('height', '40px').style('position', 'absolute').style('z-index', '10').style('visibility', 'hidden').style('padding', '10px').style('background-color', 'white').style('opacity', '0.9');
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
      var viewport = __WEBPACK_IMPORTED_MODULE_2_d3__["d" /* select */]('#viewport').append('svg').attr('width', width).attr('height', height).style('margin', '0 auto');
      var svg = viewport;
      __WEBPACK_IMPORTED_MODULE_2_d3__["d" /* select */]('svg').selectAll('.node').remove();
      var format = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* format */](',d');
      var color = '#FF0'; //d3.scaleOrdinal(d3.schemeCategory20c);

      var pack = __WEBPACK_IMPORTED_MODULE_2_d3__["c" /* pack */]().size([width, width]).padding(1.5);
      __WEBPACK_IMPORTED_MODULE_2_d3__["a" /* csv */](data).then(function (d) {
        d.value = +d.value;
        if (d.value) return d;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "viewport",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
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

/***/ "./node_modules/d3-hierarchy/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_cluster__ = __webpack_require__("./node_modules/d3-hierarchy/src/cluster.js");
/* unused harmony reexport cluster */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_hierarchy_index__ = __webpack_require__("./node_modules/d3-hierarchy/src/hierarchy/index.js");
/* unused harmony reexport hierarchy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_pack_index__ = __webpack_require__("./node_modules/d3-hierarchy/src/pack/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_pack_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_pack_siblings__ = __webpack_require__("./node_modules/d3-hierarchy/src/pack/siblings.js");
/* unused harmony reexport packSiblings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_pack_enclose__ = __webpack_require__("./node_modules/d3-hierarchy/src/pack/enclose.js");
/* unused harmony reexport packEnclose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_partition__ = __webpack_require__("./node_modules/d3-hierarchy/src/partition.js");
/* unused harmony reexport partition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_stratify__ = __webpack_require__("./node_modules/d3-hierarchy/src/stratify.js");
/* unused harmony reexport stratify */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_tree__ = __webpack_require__("./node_modules/d3-hierarchy/src/tree.js");
/* unused harmony reexport tree */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_treemap_index__ = __webpack_require__("./node_modules/d3-hierarchy/src/treemap/index.js");
/* unused harmony reexport treemap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_treemap_binary__ = __webpack_require__("./node_modules/d3-hierarchy/src/treemap/binary.js");
/* unused harmony reexport treemapBinary */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_treemap_dice__ = __webpack_require__("./node_modules/d3-hierarchy/src/treemap/dice.js");
/* unused harmony reexport treemapDice */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_treemap_slice__ = __webpack_require__("./node_modules/d3-hierarchy/src/treemap/slice.js");
/* unused harmony reexport treemapSlice */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_treemap_sliceDice__ = __webpack_require__("./node_modules/d3-hierarchy/src/treemap/sliceDice.js");
/* unused harmony reexport treemapSliceDice */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_treemap_squarify__ = __webpack_require__("./node_modules/d3-hierarchy/src/treemap/squarify.js");
/* unused harmony reexport treemapSquarify */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_treemap_resquarify__ = __webpack_require__("./node_modules/d3-hierarchy/src/treemap/resquarify.js");
/* unused harmony reexport treemapResquarify */

















/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony export (immutable) */ __webpack_exports__["b"] = computeHeight;
/* harmony export (immutable) */ __webpack_exports__["a"] = Node;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__count__ = __webpack_require__("./node_modules/d3-hierarchy/src/hierarchy/count.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__each__ = __webpack_require__("./node_modules/d3-hierarchy/src/hierarchy/each.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eachBefore__ = __webpack_require__("./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eachAfter__ = __webpack_require__("./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sum__ = __webpack_require__("./node_modules/d3-hierarchy/src/hierarchy/sum.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sort__ = __webpack_require__("./node_modules/d3-hierarchy/src/hierarchy/sort.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__path__ = __webpack_require__("./node_modules/d3-hierarchy/src/hierarchy/path.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ancestors__ = __webpack_require__("./node_modules/d3-hierarchy/src/hierarchy/ancestors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__descendants__ = __webpack_require__("./node_modules/d3-hierarchy/src/hierarchy/descendants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__leaves__ = __webpack_require__("./node_modules/d3-hierarchy/src/hierarchy/leaves.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__links__ = __webpack_require__("./node_modules/d3-hierarchy/src/hierarchy/links.js");












function hierarchy(data, children) {
  var root = new Node(data),
      valued = +data.value && (root.value = data.value),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  if (children == null) children = defaultChildren;

  while (node = nodes.pop()) {
    if (valued) node.value = +node.data.value;
    if ((childs = children(node.data)) && (n = childs.length)) {
      node.children = new Array(n);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function defaultChildren(d) {
  return d.children;
}

function copyData(node) {
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height;
  while ((node = node.parent) && (node.height < ++height));
}

function Node(data) {
  this.data = data;
  this.depth =
  this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: __WEBPACK_IMPORTED_MODULE_0__count__["a" /* default */],
  each: __WEBPACK_IMPORTED_MODULE_1__each__["a" /* default */],
  eachAfter: __WEBPACK_IMPORTED_MODULE_3__eachAfter__["a" /* default */],
  eachBefore: __WEBPACK_IMPORTED_MODULE_2__eachBefore__["a" /* default */],
  sum: __WEBPACK_IMPORTED_MODULE_4__sum__["a" /* default */],
  sort: __WEBPACK_IMPORTED_MODULE_5__sort__["a" /* default */],
  path: __WEBPACK_IMPORTED_MODULE_6__path__["a" /* default */],
  ancestors: __WEBPACK_IMPORTED_MODULE_7__ancestors__["a" /* default */],
  descendants: __WEBPACK_IMPORTED_MODULE_8__descendants__["a" /* default */],
  leaves: __WEBPACK_IMPORTED_MODULE_9__leaves__["a" /* default */],
  links: __WEBPACK_IMPORTED_MODULE_10__links__["a" /* default */],
  copy: node_copy
};


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/stratify.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accessors__ = __webpack_require__("./node_modules/d3-hierarchy/src/accessors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hierarchy_index__ = __webpack_require__("./node_modules/d3-hierarchy/src/hierarchy/index.js");



var keyPrefix = "$", // Protect against keys like “__proto__”.
    preroot = {depth: -1},
    ambiguous = {};

function defaultId(d) {
  return d.id;
}

function defaultParentId(d) {
  return d.parentId;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var id = defaultId,
      parentId = defaultParentId;

  function stratify(data) {
    var d,
        i,
        n = data.length,
        root,
        parent,
        node,
        nodes = new Array(n),
        nodeId,
        nodeKey,
        nodeByKey = {};

    for (i = 0; i < n; ++i) {
      d = data[i], node = nodes[i] = new __WEBPACK_IMPORTED_MODULE_1__hierarchy_index__["a" /* Node */](d);
      if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
        nodeKey = keyPrefix + (node.id = nodeId);
        nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
      }
    }

    for (i = 0; i < n; ++i) {
      node = nodes[i], nodeId = parentId(data[i], i, data);
      if (nodeId == null || !(nodeId += "")) {
        if (root) throw new Error("multiple roots");
        root = node;
      } else {
        parent = nodeByKey[keyPrefix + nodeId];
        if (!parent) throw new Error("missing: " + nodeId);
        if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
        if (parent.children) parent.children.push(node);
        else parent.children = [node];
        node.parent = parent;
      }
    }

    if (!root) throw new Error("no root");
    root.parent = preroot;
    root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(__WEBPACK_IMPORTED_MODULE_1__hierarchy_index__["b" /* computeHeight */]);
    root.parent = null;
    if (n > 0) throw new Error("cycle");

    return root;
  }

  stratify.id = function(x) {
    return arguments.length ? (id = Object(__WEBPACK_IMPORTED_MODULE_0__accessors__["b" /* required */])(x), stratify) : id;
  };

  stratify.parentId = function(x) {
    return arguments.length ? (parentId = Object(__WEBPACK_IMPORTED_MODULE_0__accessors__["b" /* required */])(x), stratify) : parentId;
  };

  return stratify;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/tree.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hierarchy_index__ = __webpack_require__("./node_modules/d3-hierarchy/src/hierarchy/index.js");


function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }

// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function nextLeft(v) {
  var children = v.children;
  return children ? children[0] : v.t;
}

// This function works analogously to nextLeft.
function nextRight(v) {
  var children = v.children;
  return children ? children[children.length - 1] : v.t;
}

// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}

// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function executeShifts(v) {
  var shift = 0,
      change = 0,
      children = v.children,
      i = children.length,
      w;
  while (--i >= 0) {
    w = children[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}

// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}

function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null; // default ancestor
  this.a = this; // ancestor
  this.z = 0; // prelim
  this.m = 0; // mod
  this.c = 0; // change
  this.s = 0; // shift
  this.t = null; // thread
  this.i = i; // number
}

TreeNode.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_0__hierarchy_index__["a" /* Node */].prototype);

function treeRoot(root) {
  var tree = new TreeNode(root, 0),
      node,
      nodes = [tree],
      child,
      children,
      i,
      n;

  while (node = nodes.pop()) {
    if (children = node._.children) {
      node.children = new Array(n = children.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
        child.parent = node;
      }
    }
  }

  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}

// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = null;

  function tree(root) {
    var t = treeRoot(root);

    // Compute the layout using Buchheim et al.’s algorithm.
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);

    // If a fixed node size is specified, scale x and y.
    if (nodeSize) root.eachBefore(sizeNode);

    // If a fixed tree size is specified, scale x and y based on the extent.
    // Compute the left-most, right-most, and depth-most nodes for extents.
    else {
      var left = root,
          right = root,
          bottom = root;
      root.eachBefore(function(node) {
        if (node.x < left.x) left = node;
        if (node.x > right.x) right = node;
        if (node.depth > bottom.depth) bottom = node;
      });
      var s = left === right ? 1 : separation(left, right) / 2,
          tx = s - left.x,
          kx = dx / (right.x + s + tx),
          ky = dy / (bottom.depth || 1);
      root.eachBefore(function(node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }

    return root;
  }

  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
  // applied recursively to the children of v, as well as the function
  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
  // node v is placed to the midpoint of its outermost children.
  function firstWalk(v) {
    var children = v.children,
        siblings = v.parent.children,
        w = v.i ? siblings[v.i - 1] : null;
    if (children) {
      executeShifts(v);
      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }

  // Computes all real x-coordinates by summing up the modifiers recursively.
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }

  // The core of the algorithm. Here, a new subtree is combined with the
  // previous subtrees. Threads are used to traverse the inside and outside
  // contours of the left and right subtree up to the highest common level. The
  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
  // superscript o means outside and i means inside, the subscript - means left
  // subtree and + means right subtree. For summing up the modifiers along the
  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
  // nodes of the inside contours conflict, we compute the left one of the
  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
  // Finally, we add a new thread (if necessary).
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v,
          vop = v,
          vim = w,
          vom = vip.parent.children[0],
          sip = vip.m,
          sop = vop.m,
          sim = vim.m,
          som = vom.m,
          shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }

  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }

  tree.separation = function(x) {
    return arguments.length ? (separation = x, tree) : separation;
  };

  tree.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
  };

  tree.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
  };

  return tree;
});


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
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["f"]; });
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
//# sourceMappingURL=4.cea24f03592c0d9eb74b.hot-update.js.map