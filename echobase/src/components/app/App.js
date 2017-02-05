import React, { Component } from 'react';
import styles from './App.css';
import { connect } from 'react-redux';
import Echobase from '../echobase/Echobase';
import LogMenu from '../logs/LogMenu';
import BuffaloLog from '../logs/buffalo/BuffaloLog';
import HothHeader from '../header/HothHeader';

const key = "buffalo1"

class App extends Component {
  render() {

    const getContent = () => {
      switch(key) { 
        default :
        case "main" :
          return (
            <div>
              <HothHeader />
              <Echobase />
              <LogMenu />
              <HothHeader />
            </div>  
          )
        case "buffalo" :
          return (
             <BuffaloLog />
          )
      }
    }

    return (
      <div className={styles.app}>
        { getContent() }
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
