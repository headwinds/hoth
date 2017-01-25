import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import HothVisualize from '../visual/HothVisualize';
import HothHud from '../visual/HothHud';
import classNames from 'classnames';
import styles from './Echobase';

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
    const hudClass = classNames('site_header_container','hud');
    const hothClass = classNames('site_header_container','hoth');
    return(
       <div className={styles.site_header_app_container} ref={ (div)=>{ this.viz = div} }>
        {/*
        <div className="site-header-container grid">
          <BasicReactDataGrid />
        </div>*/} 
        <div className={hudClass}>
            <HothHud />
        </div>  
        <div className={hothClass}>
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