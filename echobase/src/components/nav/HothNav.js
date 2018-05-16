/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import styles from './HothNav.module.css';

import { TweenMax, TimelineMax, Back, Quad } from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
//import TweetEmbed from 'react-tweet-embed';
//import Logo from './Logo';
import DragonDropship from './DragonDropship';
import * as _ from 'lodash';
import ColorUtil from '../../utils/ColorUtil';
import { push } from 'react-router-redux';
import * as d3 from 'd3';
import './Nav.css';

class HothNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAnimating: false,
      ships: [],
      currentRoute: '/',
      curSelectedShip: 'home'
    };
  }

  componentDidMount() {
    this.positionShips();
  }

  componentDidUpdate() {
    this.positionShips();
  }

  positionShips() {
    let delay = 0;
    _.each(this.state.ships, (ship, index) => {
      //TweenMax.to(ship, 2, {css:{top:"70px", backgroundColor:"#FF0000"}, ease:Quad.easeOut});
      delay = index * 2;
      const shipId = `#${ship.name}Ship`;
      const callsignId = `${ship.name}Callsign`;
      const callsign = document.getElementById(callsignId);
      if (this.state.curSelectedShip !== ship.name) {
        let newLeft = index * 50 + 'px';
        let newTop = -(index * 20) + 'px';

        TweenMax.to(ship.div, 2, {
          css: { top: newTop, left: newLeft, width: 5, heigth: 5 },
          ease: Quad.easeOut,
          delay: delay
        });

        d3
          .select(shipId)
          .transition()
          .delay(delay)
          .attr('transform', 'translate(20,20)scale(0.75,0.75)rotate(0)');
        TweenMax.to(callsign, 1, {
          css: { left: '50px' },
          ease: Quad.easeOut,
          delay: 0
        });
      } else {
        let newLeft = index * 100 + 'px';
        TweenMax.to(ship.div, 1, {
          css: { top: '5px', left: newLeft, width: 5, heigth: 5 },
          ease: Quad.easeOut,
          delay: delay
        });
        d3
          .select(shipId)
          .transition()
          .delay(delay)
          .attr('transform', 'translate(75,75)scale(1,1)rotate(180)');
        TweenMax.to(callsign, 1, {
          css: { left: '35px' },
          ease: Quad.easeOut,
          delay: 0
        });
      }
    });
  }

  changeRoute(e, newRoute, shipName) {
    if (this.state.currentRoute !== newRoute) {
      this.props.navigateTo(newRoute);
      this.state.currentRoute = newRoute;
    }
    this.setState({ curSelectedShip: shipName });
  }

  selectShip(curSelectedShip) {}

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

      const shipData = [
        { name: 'home', route: '/' },
        { name: 'interfaces', route: '/bio' },
        { name: 'analytics', route: '/budding-data-scientist' }
      ];

      const shipStyle = {
        display: 'block',
        position: 'absolute',
        pointerEvents: 'all',
        cursor: 'pointer',
        left: -150
      };

      const createShips = () => {
        return _.map(shipData, (ship, uid) => {
          return (
            <li
              key={uid}
              style={shipStyle}
              ref={div => {
                this.state.ships[uid] = { div, name: ship.name };
              }}
              onClick={e => {
                this.changeRoute(e, ship.route, ship.name);
              }}
            >
              <DragonDropship name={ship.name} colour={colours[uid]} />
            </li>
          );
        });
      };

      return (
        <div className={''}>
          <ul className={'none'}>{createShips()}</ul>
        </div>
      );
    };

    const getLayout = () => {
      return (
        <div
          style={{
            display: 'block',
            position: 'relative',
            height: 80,
            overflow: 'visible'
          }}
        >
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
