/* eslint-disable */
/* to do lint this file */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {drawBubbleChart} from './BubbleChart';

class HothVisualize extends Component {

	constructor(props,context) {
	    super(props,context);
	    this.props = props; 

	    this.visualize = this.visualize.bind(this);
	    console.log("HothVisualize this.props: ", this.props);
	}

	componentWillMount(){

	}

	componentDidMount(){
		console.log("HothVisualize componentDidMount");
		this.visualize();
	}

	componentDidUpdate(){
		console.log("HothVisualize componentDidUpdate");
		//this.visualize();
	}

	visualize(){
		drawBubbleChart(); 
	}

	render () {
	    return (
	      <div id="viewport" />
	    );
  	}
}

const mapStateToProps = (state) => ({
   projectsRead: state.projectsRead,
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch:dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HothVisualize);
