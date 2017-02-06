import React, { Component } from 'react';
import styles from './App.css';
import { connect } from 'react-redux';
import MedicalCentre from '../medicalcentre/MedicalCentre';
import LogMenu from '../logs/LogMenu';
import BuffaloLog from '../logs/buffalo/BuffaloLog';
import HothHeader from '../header/HothHeader';

class App extends Component {
  render() {
    const getContent = key => {

      console.log("App - key: ", key); 

      switch(key) { 
        case "main" :
          return (
            <div>
              <HothHeader />
              <MedicalCentre />
              <LogMenu />
              <HothHeader />
            </div>  
          )
        case "buffalo" :
          return (
             <BuffaloLog />
          )
        default :
          return (
             <BuffaloLog />
          )  
      }
    }

    return (
      <div className={styles.app}>
        { getContent("buffalo") }
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
