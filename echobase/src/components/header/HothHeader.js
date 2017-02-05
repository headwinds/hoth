import React from 'react';
import styles from './HothHeader.css';
import logo from './headwinds.svg';
import identity from '../../data/identity';

const HothHeader = () => {
  return (   
    <header id="masthead" className={styles.hoth_header} role="banner">
      <div className={styles.logoContainer}>
       <a href={identity.link} rel="home"> <img src={logo} width="100" /></a>
      </div>
      <div className={styles.header_main}>
        <h1 className={styles.title}>{identity.name}</h1>
        <h2 className={styles.description}>{identity.slogan}</h2>
      </div>  
      <div className={styles.menu}>
        <ul>
          <li className={styles.menu_item}><a href={identity.works.link}>{identity.works.name}</a></li>
          <li className={styles.menu_item}><a href={identity.about.link}>{identity.about.name}</a></li>
          <li className={styles.menu_item}><a href={identity.contact.link}>{identity.contact.name}</a></li>
        </ul>
      </div>
    </header>
  )
}

export default HothHeader;