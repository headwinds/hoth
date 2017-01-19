import React, {Component} from 'react';
import { connect } from 'react-redux';
//import EchoBase from '../echobase/EchoBase';
import AppLayout from './AppSimple';

//require('./app.css');

class App extends Component {

  constructor(props,context) {
    super(props,context);
    this.name = 'App';
  }

  render() { 
    return (
      <AppLayout />
    ) 
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