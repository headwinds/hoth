import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import { connect } from 'react-redux';
import Simple from './Simple';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Simple />
        <div className={styles.header}>
          <img src={logo} className={styles.logo} />
          <h2>PostCSS + CSS Modules Rocks!</h2>
        </div>
        <p className={styles.intro}>
          This repo will explain how to setup and use PostCSS with your react project
        </p>
        <div className={styles.localExample}>
          Local classname example. Inspect this node
        </div>
        <div className="global-class-name">
          Global classname example. Inspect this node
        </div>
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
