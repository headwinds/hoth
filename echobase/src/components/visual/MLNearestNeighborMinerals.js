/* eslint-disable */
/* to do lint this file */

//http://burakkanber.com/blog/machine-learning-in-js-k-nearest-neighbor-part-1/

import * as d3 from 'd3';

class MLNearestNeighborMinerals {

	constructor(viewport){
		this.viewport = viewport;
		this.draw = this.draw.bind(this);
		this.clear = this.clear.bind(this);
	}

	draw(){

		console.log("drawBubbleChart");

		const width = 500; //window.innerWidth;
		const height = 500; //window.innerHeight; 
		const viewport = d3.select(this.viewport).append('svg').attr('width', width).attr('height', height).style("margin", "0 auto");

	}

	clear(){
		// clear any old work...
		d3.select(this.svg).selectAll(".node").remove();
	}

};

export default MLNearestNeighborMinerals;
	