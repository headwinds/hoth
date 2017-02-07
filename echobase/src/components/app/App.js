import React, { Component } from 'react';
import styles from './App.css';
import { connect } from 'react-redux';
import MedicalCentre from '../medicalcentre/MedicalCentre';
import LogMenu from '../logs/LogMenu';
import BuffaloLog from '../logs/buffalo/BuffaloLog';
import GridLog from '../logs/grid/GridLog';
import HothHeader from '../header/HothHeader';

class App extends Component {
  render() {
    const getContent = key => {

      console.log("App - key: ", key); 

      const getDefault = () => (
        <div>
          <MedicalCentre />
          <LogMenu />
        </div>  
      )

      switch(key) { 
        case "main" :
          return getDefault(); 
        case "buffalo" :
          return (
             <BuffaloLog />
          )
        case "grid" :
          return (
            <GridLog />
          )  
        default :
          return getDefault(); 
      }
    }

    return (
      <div className={styles.app}>
        <HothHeader />
        { getContent("main") }
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
