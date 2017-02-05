import React from 'react';
import styles from './Log.css';
import LogMenuItem from './LogMenuItem';
import LogCategoryItem from './LogCategoryItem';
import logs from './logs';
import TweetEmbed from 'react-tweet-embed';
import categories from './categories';
import classNames from 'classnames';

export default function LogMenu() {

	const tweetStyle = {width: "300px"};
	 
	const displayLogs = logs.map( (log, logIndex)=>{
		let key = "log" + logIndex;
		return(<LogMenuItem key={key} content={log} />)
	});

	const displayCategories = categories.map( (category,catIndex)=>{
		let key = "cat" + catIndex;
		return(<LogCategoryItem key={key} content={category} />)
	});
	 
  const navClassNames = classNames('site_navigation', 'primary_navigation');
  const pageClassNames = classNames('hfeed', 'site');

	return (
		<div id="page" className={pageClassNames}>
			<div id="content" className={styles.site_content} role="main">
				<div style={tweetStyle}>	
					<TweetEmbed id='827905410543685632' />
				</div>
				{displayLogs}
				<div>
					<h2 className={styles.category_title}>CATEGORIES</h2>		
					{displayCategories}
				</div>	
			</div>
		</div>
  );
}

