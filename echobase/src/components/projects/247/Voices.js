import React, { Component } from 'react';
import { theme } from '../../theme/Theme';
import { drawColony } from '../drawColony';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const linkStyle = theme.linkStyle;
const paralinkStyle = theme.paralinkStyle;

const link = "http://nautil.us/issue/66/clockwork/we-are-all-bewildered-machines";

class Voices extends Component {

  componentDidMount() {
    console.log('Voices componentDidMount ');

    setTimeout( () => {
      drawColony("voices");
    }, 500);

  }

  render() {
    return (
      <div className="bio" style={{ height: 620, background: "white", padding: 10, pointerEvents: "all" }}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div>
          <h1 style={{ margin: 0, marginBottom: 10 }}>247 Voices</h1>
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
        <p> I had an amazing 5 years working at     <a
                  href="https://www.247.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={paralinkStyle}
                >
                  24-7 ai
                </a>{' '} building an analytics and natural
            language processing app,{' '}
            <a
              href="https://www.youtube.com/watch?v=5KZofZX3XaY"
              target="_blank"
              rel="noopener noreferrer"
              style={paralinkStyle}
            >
              Voices
            </a>{' '}
            that visualizes and tracks the customer journey across the
            omnichannel. </p>

            <p>I established the Frontend Architecture for 3 products: Voices, ML Tools, and Offers, and also contributed to the ML Tools implemenation which
            enables custom service to rapidly bulk tag and classify chat
            conversations.
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

export default connect(mapStateToProps, mapDispatchToProps)(Voices);
