import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Bio from '../projects/bio/Bio';
import HomeGraph from '../home/HomeGraph';
//import HothNav from '../nav/HothNav';
import './Main.css';
//import { theme } from '../theme/Theme';
//import { log } from '../../utils/LogUtil';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      splashComplete: false
    };
  }

  componentDidMount() {}

  render() {
    const mainClass = this.props.app.isMobile ? 'mobileMain' : 'desktopMain';
    const mainStyle =
      this.props.location.pathname === '/' ? { top: 0 } : { top: 25 };

    console.log('location: ', this.props.location);

    const getLayout = () => {
      if (this.props.app.isMobile) {
        return (
          <div>
            {/*<HothNav />*/}
            <div className={mainClass} style={mainStyle}>
              <div className="propulsion" />
              {this.props.children}
              <div style={{pointerEvents: "none"}} />
            </div>
            <HomeGraph />
          </div>
        );
      } else {
        return (
          <div>
              {/*<HothNav />*/}
            <div className={mainClass} style={mainStyle}>
              <div className="gap" />
              {this.props.children}
              <div style={{pointerEvents: "none"}} />
            </div>
            <HomeGraph />
          </div>
        );
      }
    };

    return getLayout();
  }
}

const mapStateToProps = (state, ownProps) => ({
  app: state.app,
  location: ownProps.location
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
