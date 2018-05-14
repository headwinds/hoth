/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import styles from './HothNav.module.css';
import identity from '../../data/identity';
import { TweenMax, TimelineMax, Back, Quad } from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
//import TweetEmbed from 'react-tweet-embed';
//import Logo from './Logo';
import DragonDropship from './DragonDropship';
import * as _ from 'lodash';
import ColorUtil from '../../utils/ColorUtil';
import { push } from 'react-router-redux';
import './Nav.css';

class HothNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAnimating: false,
      ships: [],
      currentRoute: '/'
    };
  }

  componentDidMount() {
    this.positionShips();
  }

  positionShips() {
    let delay = 0;
    _.each(this.state.ships, (ship, index) => {
      //TweenMax.to(ship, 2, {css:{top:"70px", backgroundColor:"#FF0000"}, ease:Quad.easeOut});
      delay = index * 2;
      let newLeft = index * 100 + 'px';
      TweenMax.to(ship, 2, {
        css: { top: '100px', left: newLeft },
        ease: Quad.easeOut,
        delay: delay
      });
    });
  }

  changeRoute(e, newRoute) {
    if (this.state.currentRoute !== newRoute) {
      this.props.navigateTo(newRoute);
      this.state.currentRoute = newRoute;
    }
  }

  render() {
    console.log('HothNav props: ', this.props);

    const tweet =
      'https://img.shields.io/twitter/url/https/github.com/headwinds/hoth.svg?style=social';
    const title = this.props.log.title;
    const encodedTweetMessage = encodeURIComponent(title);

    const tweetUrl =
      'https://twitter.com/intent/tweet?text=' + encodedTweetMessage;

    const getLogo = () => {
      if (this.props.showLogo) {
        return <Logo identity={identity} />;
      } else {
        return null;
      }
    };

    const getShips = () => {
      const colours = ColorUtil.getColours();

      return (
        <div className={''}>
          <ul className={'none'}>
            <li
              className={''}
              ref={div => {
                this.state.ships[0] = div;
              }}
              onClick={e => {
                this.changeRoute(e, '/');
              }}
            >
              <DragonDropship name={'home'} colour={colours[2]} />
            </li>
            <li
              className={''}
              ref={div => {
                this.state.ships[1] = div;
              }}
              onClick={e => {
                this.changeRoute(e, '/logs');
              }}
            >
              <DragonDropship name={'logs'} colour={colours[6]} />
            </li>
            <li
              className={''}
              ref={div => {
                this.state.ships[2] = div;
              }}
            >
              <a href={identity.works.link}>
                <DragonDropship
                  name={identity.works.name}
                  colour={colours[3]}
                />
              </a>
            </li>
            <li
              className={''}
              ref={div => {
                this.state.ships[3] = div;
              }}
            >
              <a href={identity.about.link}>
                <DragonDropship
                  name={identity.about.name}
                  colour={colours[4]}
                />
              </a>
            </li>
            <li
              className={''}
              ref={div => {
                this.state.ships[4] = div;
              }}
            >
              <a href={identity.contact.link}>
                <DragonDropship
                  name={identity.contact.name}
                  colour={colours[5]}
                />
              </a>
            </li>
          </ul>
        </div>
      );
    };

    const getLayout = () => {
      return null;

      return (
        <div className={''}>
          {getLogo()}
          <div className={''}>{getShips()}</div>
        </div>
      );
    };

    return <div>{getLayout()}</div>;
  }
}
const mapStateToProps = state => ({
  app: state.app,
  log: state.log
});

const mapDispatchToProps = dispatch => ({
  navigateTo: newRoute => {
    dispatch(push(newRoute));
  },
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(HothNav);
