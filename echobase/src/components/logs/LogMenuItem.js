import React from 'react';
import styles from './Log.css';

export default function LogMenuItem( props ) {
  const content = props.content;
  return (
    <section className={styles.logMenuItem}>
      <div className={styles.meta}>
        <span className={styles.meta}>{content.article.meta}</span>
      </div>  
      <h2 className={styles.log_title}><a href={content.article.link} className={styles.logMenuTitle}>{content.article.title}</a></h2>
      <div className={styles.meta}>
        <span className={styles.dateDisplay}>
          {content.article.dateTimeDisplay}
        </span> 
      </div>
    </section>  
  )
}