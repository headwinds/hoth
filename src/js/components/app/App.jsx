import React, {Component} from 'react';
import { connect } from 'react-redux';
import EchoBase from 'components/echobase/EchoBase';

require('./app.scss');

class App extends Component {

  constructor(props,context) {
    super(props,context);
    this.name = 'App';
  }

  render() { 
    return (
      <EchoBase />
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