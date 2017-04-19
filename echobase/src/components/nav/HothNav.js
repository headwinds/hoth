import React, {Component} from 'react';
import { connect } from 'react-redux';
import styles from './HothNav.css';
import identity from '../../data/identity';
import {TweenMax, TimelineMax, Back, Quad} from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
import AnchorItem from './AnchorItem';
import Logo from './Logo';
import DragonDropship from './DragonDropship';


class HothNav extends Component {

  render() {
    
    console.log("HothNav props: ", this.props);  
 
    const tweet = "https://img.shields.io/twitter/url/https/github.com/headwinds/hoth.svg?style=social"
    const title = this.props.log.title; 
    const encodedTweetMessage = encodeURIComponent(title); 

    const tweetUrl = "https://twitter.com/intent/tweet?text=" + encodedTweetMessage;

    const getLogo = () => {
      if (this.props.showLogo) {
        return <Logo identity={identity} />
      } else {
        return null; 
      }
    }

    return (   
      <div  className={styles.hoth_nav}>
        { getLogo() }
        <div className={styles.menu}>
          <ul>
			  <li className={styles.menu_item}><a href="/"><DragonDropship name={"home"}></DragonDropship></a></li>
			  <li className={styles.menu_item}><a href={identity.works.link}><DragonDropship name={identity.works.name}></DragonDropship></a></li>
			  <li className={styles.menu_item}><a href={identity.about.link}><DragonDropship name={identity.about.name}></DragonDropship></a></li>
			  <li className={styles.menu_item}><a href={identity.contact.link}><DragonDropship name={identity.contact.name}></DragonDropship></a></li>
            <li>
                <a className="twitter-share-button" href={tweetUrl}>
                  <img src={tweet} alt="tweet" />
                </a> 
            </li>
          </ul>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HothNav);
