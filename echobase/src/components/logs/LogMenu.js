import React from 'react';
import styles from './Log.css';
import LogMenuItem from './LogMenuItem';
import LogCategoryItem from './LogCategoryItem';
import logs from './logs';
import categories from './categories';
import identity from './identity';
import classNames from 'classnames';
import HothHeader from '../header/HothHeader';

export default function LogMenu() {
	 
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
			<div>
					<div className={styles.logContainer}></div>
					<script src="bundle.js"></script>
			</div>
			<HothHeader identity={identity} />
			<div id="main" className={styles.site_main}>
				<div id="main_content" className={styles.main_content}>
					<div id="primary" className={styles.content_area}>
						<div id="content" className={styles.site_content} role="main">
							{displayLogs}
						</div>
					</div>
					<div id="content_sidebar" className={navClassNames} role="complementary">
					</div>
				</div>
				<div id="secondary">
				
						<aside>
							<h1 className={styles.category_title}>Categories</h1>		
							{displayCategories}	
						</aside>	
				</div>
			</div>
			<footer id="colophon" className={styles.site_footer} role="contentinfo"></footer>
		</div>
  );
}

