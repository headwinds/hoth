import React, {Component} from 'react';
import { connect } from 'react-redux';
import styles from './HothHeader.css';
import logo from './headwinds.svg';
import identity from '../../data/identity';

class HothHeader extends Component {

  constructor(props){
    super(props);
    this.props = props;
  }

  render() {
    
    console.log("HothHeader props: ", this.props);  
 
    const tweet = "https://img.shields.io/twitter/url/https/github.com/headwinds/hoth.svg?style=social"
    const title = this.props.log.title; 
    const encodedTweetMessage = encodeURIComponent(title); 

    const tweetUrl = "https://twitter.com/intent/tweet?text=" + encodedTweetMessage;

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
            <li>
                <a className="twitter-share-button" href={tweetUrl}>
                  <img src={tweet} alt="tweet" />
                </a> 
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
const mapStateToProps = (state) => ({
  app: state.app,
  log: state.log
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HothHeader);
