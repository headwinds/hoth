import React from 'react';
import styles from './Log.css';
import logo from './cabinquestLogo.svg';
import LogMenuItem from './LogMenuItem';
import LogCategoryItem from './LogCategoryItem';
import logs from './logs';
import categories from './categories';
import identity from './identity';
import classNames from 'classnames';

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
  const widgetClassNames = classNames('widget', 'widget_categories'); 
  const pageClassNames = classNames('hfeed', 'site');

	return (
		<div id="page" className={pageClassNames}>
			<div>
					<div className={styles.logContainer}></div>
					<script src="bundle.js"></script>
			</div>
			<header id="masthead" className={styles.site_header} role="banner">
				<img src={logo} width="200" />
				<div className={styles.header_main}>
					<h1 className={styles.site_title}><a href={identity.link} rel="home">{identity.name}</a> </h1>
					<h2 className={styles.site_description}>{identity.slogan}</h2>
					<nav id="primary_navigation" className={styles.primary_navigation} role="navigation">
						<button className={styles.menu_toggle}>Primary Menu</button>
						<div className={styles.nav_menu}><ul><li className={styles.page_item}><a href={identity.works.link}>{identity.works.name}</a></li><li className={styles.page_item}><a href={identity.about.link}>{identity.about.name}</a></li><li className={styles.page_item}><a href={identity.contact.link}>{identity.contact.name}</a></li></ul></div>
					</nav>
				</div>
			</header>
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
						<div className={widgetClassNames} role="complementary">
						<aside><h1 className={styles.widget_title}>Categories</h1>		
						{displayCategories}	
						</aside>	
					</div>
				</div>
			</div>
			<footer id="colophon" className={styles.site_footer} role="contentinfo"></footer>
		</div>
  );
}

