/* eslint-disable */
import React from 'react';
import headwinds from './headwinds.svg';
import styles from './HothNav.module.css';

const Logo = props => {
  console.log(props);
  return (
    <div className={styles.logo}>
      <div className={styles.mark}>
        <a href={props.identity.link} rel="home">
          {' '}
          <img src={headwinds} width="100" />
        </a>
      </div>
      <div className={styles.brand}>
        <h1 className={styles.title}>{props.identity.name}</h1>
        <h2 className={styles.description}>{props.identity.slogan}</h2>
      </div>
    </div>
  );
};

export default Logo;
