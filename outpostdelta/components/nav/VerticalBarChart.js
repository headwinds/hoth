import * as d3 from 'd3';
import React, {Component} from 'react';

export default class DragonDropship extends Component {

	componentDidMount(){
		this.draw();
	}


	draw() {
		const width = 100; //window.innerWidth;
		const height = 100; //window.innerHeight;
		this.svg = d3.select(this.viewport).append('svg').attr('width', width).attr('height', height).style("margin", "0 auto");

		let data = [{person:"henrik", credits:545},
			{person:"marcia", credits:345}]

		const x = d3.scaleBand()
			.range([0, width])
			.padding(0.1);
		const y = d3.scaleLinear()
			.range([height, 0]);

		// format the data
		data.forEach(function(d) {
			d.credits = +d.credits;
		});

		console.log("Henrik data: ", data);

		// Scale the range of the data in the domains
		x.domain(data.map(function(d) { return d.person; }));
		y.domain([0, d3.max(data, function(d) { return d.credits; })]);

		const dragonDropShip = this.svg.selectAll(".bar")
			.data(data)
			.enter().append("rect")
			.attr("class", "bar")
			.attr("x", function(d) { return x(d.person); })
			.attr("width", x.bandwidth())
			.attr("y", function(d) { return y(d.credits); })
			.attr("height", function(d) { return height - y(d.credits); });

		return dragonDropShip;

	}

	render(){
		return (<div ref={ div => {this.viewport = div}}></div>)
	}

}