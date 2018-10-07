import React, { Component } from 'react';
import { theme } from '../../theme/Theme';

const linkStyle = theme.linkStyle;
const paralinkStyle = theme.paralinkStyle;

export default class Bio extends Component {
  render() {
    return (
      <div className="bio" style={{ height: 760, background: "white" }}>
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
        <h2 style={{ margin: 0, marginBottom: 10 }}>Design JS Python Clojure DB</h2>
        <div>
        <p>
          Today, I{"'"}m a proud part of the 4th industrial revolution building blockchain at{' '}
          <a
            href="https://www.todaqfinancial.com"
            target="_blank"
            rel="noopener noreferrer"
            style={paralinkStyle}
          >
            TODAQ Financial.
          </a>{' '}
        </p>
        <p>
          While I consider myself Fullstack having some SQL & NoSQL chops, I mainly concern myself with the UI,
          data visualization, and the interaction design between it and our API capable of servicing millions of decentralized apps around the world.
          </p>
          <p>
            Previously, I enjoyed 4 years working at     <a
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
            omnichannel. I also contributed to a machine learning tool which
            enables custom service to rapidly bulk tag and classify chat
            conversations.
          </p>
          {/*}<p>
          I'm constantly learning and am currently tinkering with Python. The graph you see on this page is my latest submission to the housing prices competition applying Random Forest and Xboost. I have a ways to go to move up the leaderboard.
        </p>*/}
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
