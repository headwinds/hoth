import * as d3 from 'd3';
import React, {Component} from 'react';

export default class DragonDropship extends Component {

  componentDidMount(){
    this.draw();
  }


  draw() {
	const width = 75; //window.innerWidth;
	const height = 75; //window.innerHeight;
	const svg = d3.select(this.viewport).append('svg').attr('width', width).attr('height', height).style("margin", "0 auto");

	const triangleData = function(color, size, x, y,rotation){
		  return {
			  color: color,
			  size: size,
			  x: x,
			  y: y,
			  rotation: rotation
		  }
	  }

	  const centerX = Math.floor(width / 2);
	  const centerY = Math.floor(height / 2);
	  const rotation = 0;

	  const innerTriData = triangleData("grey", 600, centerX, centerY, rotation);
	  const outerTriData = triangleData("lightgrey", 1000, centerX, centerY, rotation);

	  const drawTriangle = triangleData => {
		  const triangle = d3.symbol()
			  .type(d3.symbolTriangle)
			  .size(triangleData.size);

		  const groupsEnter = svg.selectAll("g")
			  .data([triangleData]).enter();

		  groupsEnter
			  .append("path")
			  .attr("d", triangle)
			  .attr("stroke", function(d) { return d.color})
			  .attr("fill", function(d) { return d.color})
			  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ") rotate(" + d.rotation + ")"; });
	  }

	  drawTriangle(outerTriData);
	  drawTriangle(innerTriData);

  }

  render(){
    return (<div ref={ div => {this.viewport = div}}><p>{this.props.name}</p></div>)
  }

}