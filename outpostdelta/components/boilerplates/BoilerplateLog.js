import React, {Component} from 'react';
import TweetEmbed from 'react-tweet-embed';
import styles from '../LogRead.css';

export default function BoilerplateLog() {
	 
	return (
			<div className={styles.log}>
				<article className={styles.log_article}> 
					<div id="main" className={styles.log_title_container}>
						<h1 className={styles.log_title}>Pushing Codepen Angular2 and Typescript to Build Component Playgrounds</h1>
						<h2 className={styles.log_date}>March 10, 2016</h2>	
					</div>
					<div className={styles.log_content}>
						<p>content here...</p>
					</div>
				</article>
			</div>		
  );
}

