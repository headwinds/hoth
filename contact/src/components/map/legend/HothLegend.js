import React, {Component, PropTypes} from 'react';
//import * as actions from 'state/actions/actions_projects';
import { connect } from 'react-redux';

import './HothLegend.css';

class HothLegend extends Component {

  constructor(props){
    super(props);
    this.props = props;
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
      <div className="legendContainer">
        <div><span className="legendLabel">email: </span><a href="mailto:brandonflowers@gmail.com" title="email">brandonflowers@gmail.com</a></div>
        <div><span className="legendLabel">twitter: </span><a href="https://twitter.com/intent/user?screen_name=headwinds">@headwinds</a></div>
        <div><span className="legendLabel">facebook: </span><a href="https://www.facebook.com/pages/Headwinds-Studio/139976779399865">headwinds studio</a></div>
        <div><span className="legendLabel">github: </span><a href="https://github.com/headwinds">headwinds</a></div>
      </div>
    )
  }

}

HothLegend.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  //boilerplateState: state.boilerplateState,
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch:dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HothLegend);