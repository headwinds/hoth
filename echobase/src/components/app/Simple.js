import React, {Component} from 'react';
import styles from './SimpleStyle.css';

class Simple extends Component {
  
  render(){
  	return (
  		<div className={styles.simpleHothBg}>
  				<a href="http://www.google.com">hello hoth</a>
  		</div>
    );
  }
}

export default Simple
