import React, {Component, PropTypes} from 'react';
import * as actions from 'state/actions/actions_projects';
import { connect } from 'react-redux';

class BoilerplateComponent extends Component {

	constructor(props,context){
		super(props,context);

	}

  componentWillMount(){

  }

	componentDidMount(){

	}

	componentDidUpdate(){

	}

	componentWillUpdate(){
		
	}
  
	componentWillUnmount() {
		
	}

  componentWillReceiveProps(nextProps) {
  
  }

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.state !== this.props.state; 
	}

	render(){
		return(
			<div></div>
		)
	}

}

BoilerplateComponent.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  boilerplateState: state.boilerplateState,
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch:dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoilerplateComponent);