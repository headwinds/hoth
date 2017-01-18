import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import BasicReactDataGrid from 'components/table/BasicReactDataGrid';
import HothVisualize from 'components/visual/HothVisualize';
import HothHud from 'components/visual/HothHud';

class EchoBase extends Component {

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
       <div className="site-header-app-container">
        {/*
        <div className="site-header-container grid">
          <BasicReactDataGrid />
        </div>*/} 
        <div className="site-header-container hud">
            <HothHud />
        </div>  
        <div className="site-header-container hoth">
          <HothVisualize />
        </div>
    
      </div>
    )
  }

}

EchoBase.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EchoBase);