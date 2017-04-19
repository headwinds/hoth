import React from 'react';
import styles from './Log.css';
import classNames from 'classnames';
import BuffaloLog from './buffalo/BuffaloLog';

export default function LogRead () {

  const pageClassNames = classNames('hfeed', 'site');

 	const log = () => {
		return (<BuffaloLog />); 
	}; 

	return (
		<div id="page" className={pageClassNames}>
			<div id="content" className={styles.site_content} role="main">
				{log()}
			</div>
		</div>
  );
}

