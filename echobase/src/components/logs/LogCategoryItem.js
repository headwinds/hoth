import React from 'react';
import styles from './Log.module.css';

export default function LogMenuItem(props) {
  const category = props.content;
  return <div className={styles.catItem}>{category.title}</div>;
}
