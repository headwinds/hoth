import React, { Component } from 'react';
import HothHeader from "./components/header/HothHeader"; 
import HothMap from "./components/map/HothMap"; 

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         {/*
        <div className="App-header">
         <HothHeader />
        </div>
        */}
        <HothMap />
      </div>
    );
  }
}

export default App;
