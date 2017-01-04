import React, {Component} from 'react';
import { connect } from 'react-redux';
import BasicReactDataGrid from 'components/BasicReactDataGrid';
import HothVisualize from 'components/HothVisualize';

require('./hoth.scss');

class App extends Component {

	constructor(props,context) {
	    super(props,context);
	}

	render() {
	    return (
		     <div className="site-header-app-container">
		     	<div className="site-header-container grid">
		     		<BasicReactDataGrid />
		     	</div> 
		     	<div className="site-header-container hoth">
		     		<HothVisualize />
		     	</div>
		     </div>
	    );
  	}
}


const mapStateToProps = (state) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);