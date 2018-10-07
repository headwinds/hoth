/* eslint-disable */
/* to do lint this file */


import * as d3 from 'd3';

export function drawActivity(){

	console.log("drawActivity");

	const tooltip = d3.select("body")
		.append("div")
		.style("position", "absolute")
		.style("z-index", "10")
		.style("visibility", "hidden")
		.text("a simple tooltip");

	const width = 500; //window.innerWidth;
	const height = 500; //window.innerHeight;
	const viewport = d3.select('#viewport').append('svg').attr('width', width).attr('height', height).style("margin", "0 auto");

	var svg = viewport;

	d3.select("svg").selectAll(".node").remove();

	var format = d3.format(",d");

	var color = d3.scaleOrdinal(d3.schemePaired);

	var pack = d3.pack()
	    .size([width, width])
	    .padding(1.5);



	d3.csv("data/northern.csv", function(d) {



	  d.value = +d.value;
	  if (d.value) return d;
	}, function(error, classes) {
	  if (error) throw error;

		const buildings = [
			{title: "Medical"},
			{title: "Barracks"},
			{title: "Hangar"},
			{title: "Barn"},
			{title: "Command"},
			{title: "Gym"}
		];
	  let count = 0;
	  let root = d3.hierarchy({children: classes})
	      .sum(function(d) { return d.value; })
	      .each(function(d) {
	        if (id = d.data.id) {
	          var id, i = id.lastIndexOf(".");
	          d.id = id;
	          d.package = id.slice(0, i);
	          d.class = id.slice(i + 1);
	          d.title = buildings[count].title;
	          count++;
	        }
	      });

	  console.log(root);


	  let node = svg.selectAll(".node")
	    .data(pack(root).leaves())
	    .enter().append("g")
	      .attr("class", "node")
	      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

	  let getColor = (i) => {
	  	if (i < 5) return "#FFAB35";
	  	else return "#CCC";
	  }

	  const updateTooltip = (title) => {
		  tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");
		  tooltip.text(title);
		  return tooltip;
	  }

	  node.append("rect")
		  .attr("id", function(d) { return d.id; })
		  .attr("width", function(d) { return d.r; })
		  .attr("height", function(d) { return d.r; })
		  .style("fill", function(d, i) { return getColor(i); })
		  .style("cursor", "pointer")
		  .on("mouseover", function(){return tooltip.style("visibility", "visible");})
		  .on("mousemove", function(d){ return updateTooltip(d.title)})
		  .on("mouseout", function(){return tooltip.style("visibility", "hidden");});

	  node.append("clipPath")
	      .attr("id", function(d) { return "clip-" + d.id; })
	    .append("use")
	      .attr("xlink:href", function(d) { return "#" + d.id; });

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
};
