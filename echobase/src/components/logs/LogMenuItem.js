import React from 'react';
import styles from './Log.css';
import { Link, browserHistory } from 'react-router'

export default function LogMenuItem( props ) {
  const content = props.content;
  const path = content.article.link.split("http://headwinds.net/")[1];
  console.log("path: ", path);
  return (
    <section className={styles.logMenuItem}>
      <div className={styles.meta_tag}>
        <span>{content.article.meta}</span>
      </div>  
      <h2 className={styles.log_title}>
        <Link className={styles.logMenuTitle} to={path}>{content.article.title}</Link>
      </h2>
      <div className={styles.link_date_display}>
        <span>{content.article.dateTimeDisplay}</span> 
      </div>
    </section>  
  )
}