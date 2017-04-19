import React, { Component } from 'react';
import styles from './App.css';
import { connect } from 'react-redux';

import HothNav from '../nav/HothNav';

class App extends Component {
  
  constructor(props){
    super(props)
    console.log('App - props: ', props);
  }

  render() {
    return (
      <div className={styles.app}>
        <HothNav showLogo={true} />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  app: state.app,
  location: ownProps.location
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
