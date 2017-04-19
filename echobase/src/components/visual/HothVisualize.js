/* eslint-disable */
/* to do lint this file */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {drawBubbleChart} from './BubbleChart';
import {drawActivity} from './HothActivity';
import * as d3 from 'd3';

class HothVisualize extends Component {

	constructor(props,context) {
	    super(props,context);
	    this.props = props; 

	    this.visualize = this.visualize.bind(this);
	    console.log("HothVisualize constructor this.props: ", this.props);
	}

	componentWillMount(){

	}

	componentDidMount(){
		console.log("HothVisualize componentDidMount");
		this.visualize();
	}

	componentDidUpdate(){
		console.log("HothVisualize componentDidUpdate");
	}

	visualize(){
		//drawBubbleChart(); 
		drawActivity();
	}


	render () {
	    return (
	      <div id="viewport" />
	    );
  	}
}

const mapStateToProps = (state) => ({
   app: state.app,
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch:dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HothVisualize);
