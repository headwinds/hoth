import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import HothVisualize from '../visual/HothVisualize';
import HothHud from '../visual/HothHud';

class EchoBase extends Component {

  constructor(props,context){
    super(props,context);

    this.viz = null; 
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

  showGame() {
    // 600px will open it enough...
  }

  hideGame() {

  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.state !== this.props.state; 
  }

  render(){
    return(
       <div className="site-header-app-container" ref={ (div)=>{ this.viz = div} }>
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