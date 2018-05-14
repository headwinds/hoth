import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bio from '../projects/bio/Bio';
//import SplashGraph from '../splash/SplashGraph';
import HothNav from '../nav/HothNav';
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

    const getLayout = () => {
      if (this.props.app.isMobile) {
        return (
          <div>
            <HothNav />
            <div className={mainClass}>
              <div className="propulsion" />
              <Bio />
              <div />
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <HothNav />
            <div className={mainClass}>
              <div className="gap" />
              <Bio />
              <div />
            </div>
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
