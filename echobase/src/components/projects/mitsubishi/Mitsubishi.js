import React, { Component } from 'react';
import { theme } from '../../theme/Theme';
import { drawColony } from '../drawColony';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const linkStyle = theme.linkStyle;
const paralinkStyle = theme.paralinkStyle;

class Mitsubishi extends Component {

  componentDidMount() {
    console.log('Mitsubishi componentDidMount ');

    setTimeout( () => {
      drawColony("mitsubishi");
    }, 500);

  }

  render() {
    return (
      <div className="bio" style={{ height: 620, background: "white", padding: 10, pointerEvents: "all" }}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div>
          <h1 style={{ margin: 0, marginBottom: 10 }}>Mitsubishi Lancer</h1>
          </div>
          <div>
            <Link to={`/`} style={linkStyle}>X</Link>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: ""}}>
          <div id="colony" style={{display: "block", width: 200, height: 150}}></div>
        </div>
        <div style={{ overflow: "hidden",
                      overflowY: "scroll",
                      height: "300px",
                      width: "260px",
                      padding: "10px",
                      border: "1px solid #eee",
                      margin: "0px",
                      marginBottom: "20px"}}>
        <p>
        Mitsubishi Lancer Earth earned my first and only{' '}
        <a
          href="https://thefwa.com/cases/lancer-earth"
          target="_blank"
          rel="noopener noreferrer"
          style={paralinkStyle}
        >
           FWA.
          </a>{' '}
        </p>
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <div>
          <p>
            <a
              href="https://www.linkedin.com/in/brandonflowers/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Linkedin
            </a>{' '}
          </p>
        </div>
        <div>
          <p>
            <a
              href="https://github.com/headwinds"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Github
            </a>{' '}
          </p>
        </div>
        <div>
          <p>
            <a
              href="https://twitter.com/headwinds"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Twitter
            </a>{' '}
          </p>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  app: state.app,
  location: ownProps.location,
  game: state.game
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mitsubishi);
