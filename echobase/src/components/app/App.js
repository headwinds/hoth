import React, { Component } from 'react';
import styles from './App.css';
import { connect } from 'react-redux';
import Echobase from '../echobase/Echobase';
import LogMenu from '../logs/LogMenu';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Echobase />
        <LogMenu />
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
