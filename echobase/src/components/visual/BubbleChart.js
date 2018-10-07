/* eslint-disable */
/* to do lint this file */

// http://blockbuilder.org/larsvers/5f8ab586c29faa8c2d0e3d2e4b424759
import * as d3 from 'd3';

export function drawBubbleChart(){

	console.log("drawBubbleChart");

	let width = 500; //window.innerWidth;
	let height = 500; //window.innerHeight;
	let viewport = d3.select('#viewport').append('svg').attr('width', width).attr('height', height).style("margin", "0 auto");

	var svg = viewport;

	d3.select("svg").selectAll(".node").remove();

	var format = d3.format(",d");

	var color = d3.scaleOrdinal(d3.schemePaired);

	var pack = d3.pack()
	    .size([width, width])
	    .padding(1.5);

	d3.csv("data/northern.csv", function(d) {

		console.log(d);

	  d.value = +d.value;
	  if (d.value) return d;
	}, function(error, classes) {
	  if (error) throw error;

	  var root = d3.hierarchy({children: classes})
	      .sum(function(d) { return d.value; })
	      .each(function(d) {
	        if (id = d.data.id) {
	          var id, i = id.lastIndexOf(".");
	          d.id = id;
	          d.package = id.slice(0, i);
	          d.class = id.slice(i + 1);
	        }
	      });

	  var node = svg.selectAll(".node")
	    .data(pack(root).leaves())
	    .enter().append("g")
	      .attr("class", "node")
	      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

	  let getColor = (i) => {
	  	if (i < 5) return "#FFAB35";
	  	else return "#CCC";
	  }

	  node.append("circle")
	      .attr("id", function(d) { return d.id; })
	      .attr("r", function(d) { return d.r; })
	      .style("fill", function(d, i) { return getColor(i); });

	  node.append("clipPath")
	      .attr("id", function(d) { return "clip-" + d.id; })
	    .append("use")
	      .attr("xlink:href", function(d) { return "#" + d.id; });

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
	});
};
