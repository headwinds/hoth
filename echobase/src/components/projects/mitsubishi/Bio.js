import React, { Component } from 'react';
import { theme } from '../../theme/Theme';
import { drawRing } from './drawRing';

const linkStyle = theme.linkStyle;
const paralinkStyle = theme.paralinkStyle;

export default class Bio extends Component {

  componentDidMount() {
    console.log('Bio componentDidMount ');

    // something clears all the svg from the dom so I need to track that down!
    setTimeout( () => {
      drawRing();
    }, 500);

  }

  render() {
    return (
      <div className="bio" style={{ height: 760, background: "white", padding: 10, pointerEvents: "all" }}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div>
          <h1 style={{ margin: 0, marginBottom: 10 }}>Brandon Flowers</h1>
          </div>
          <div>
          <a
            href="/"
            style={linkStyle}
          >
            X
          </a></div>
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: ""}}>
          <div id="ring" style={{display: "block", width: 200, height: 270}}></div>
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
        Today, I{"''"}m thrilled to have joined <a
          href="https://www.ada.support"
          target="_blank"
          rel="noopener noreferrer"
          style={paralinkStyle}
        >
          Ada
        </a>{' '} as a Frontend Architect. I enjoy prototyping, interaction design, data visualization, and leading a frontend team.
        </p>
          <p>
            Previously, I had an amazing 5 years working at     <a
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
            omnichannel. </p><p>I also contributed to a machine learning tool which
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
