import React from 'react';
import styles from './Log.css';

export default function LogMenuItem( props ) {
  const content = props.content;
  return (
    <article className={styles.logMenuItem}>
      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.meta}>{content.article.meta}</span>
        </div>  
        <h2 className={styles.log_title}><a href={content.article.link}>{content.article.title}</a></h2>
        <div className={styles.meta}>
          <span className={styles.dateDisplay}><a href={content.article.link}><time className={styles.dateTime} dateTime={content.article.dateTime}>{content.article.dateTimeDisplay}</time></a></span> <span className={styles.byline}><span className={styles.author}><a className={styles.link}>{content.author.name}</a></span></span>
        </div>
      </header>
    </article>  
  )
}