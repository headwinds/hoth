import React, { Component } from 'react';
import { theme } from '../../theme/Theme';
import { drawColony } from '../drawColony';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const linkStyle = theme.linkStyle;
const titleStyle = theme.titleStyle;
const paralinkStyle = theme.paralinkStyle;

class Toda extends Component {

  componentDidMount() {
    console.log('Toda componentDidMount ');

    setTimeout( () => {
      drawColony("toda", this.props);
    }, 500);

  }

  render() {
    return (
      <div className="bio" style={{ height: 620, background: "white", padding: 10, pointerEvents: "all" }}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div>
          <h1 style={titleStyle}>TodaQ Blockchain</h1>
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
        <p>Meet {' '}
        <a
          href="https://www.youtube.com/watch?v=nGo2wnVGr1E"
          target="_blank"
          rel="noopener noreferrer"
          style={paralinkStyle}
        >
           Hassan Khan. 
           </a></p>
           <p>Meet {' '}
        <a
          href="https://www.youtube.com/watch?v=JpAhj8SJY-Y"
          target="_blank"
          rel="noopener noreferrer"
          style={paralinkStyle}
        >
           Dann Toliver. 
           </a></p>
           <p>Hassan and Dann present the mission of TodaQ to enable
           emerging markets to preserve value and invest within their economy by using digital currency that can be tracked unlike cash.
           </p>
          <p>Toda is a blockchain service, which along with a currency, can produce many secure file types like identities, art or virtual items.
            With a Toda file, you have full control who can access that file and who you can share it with. As a decentralized network, Toda makes
            it easier to share and track files then a centralized database which is attracting many different verticals that struggle with this problem.
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

export default connect(mapStateToProps, mapDispatchToProps)(Toda);
