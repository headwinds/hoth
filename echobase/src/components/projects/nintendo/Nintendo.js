import React, { Component } from 'react';
import { theme } from '../../theme/Theme';
import { drawColony } from '../drawColony';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const linkStyle = theme.linkStyle;
const paralinkStyle = theme.paralinkStyle;

class Nintendo extends Component {

  componentDidMount() {
    console.log('Nintendo componentDidMount ');

    setTimeout( () => {
      drawColony("nintendo");
    }, 500);

  }

  render() {
    return (
      <div className="bio" style={{ height: 620, background: "white", padding: 10, pointerEvents: "all" }}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div>
          <h1 style={{ margin: 0, marginBottom: 10 }}>Nintendo Wii Fit</h1>
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
        While this Link fan boy dreamt of working on that brand, instead I was pleasantly surprised to work on {' '}<a
          href="https://www.youtube.com/watch?v=-Taruqvk30E"
          target="_blank"
          rel="noopener noreferrer"
          style={paralinkStyle}
        >
          Wii Fit
        </a>{' '} and built an interactive user guilde and video gallery to teach customers how to use this neat fitness product.</p>

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

export default connect(mapStateToProps, mapDispatchToProps)(Nintendo);
