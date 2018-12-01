import React, { Component } from 'react';
import { theme } from '../../theme/Theme';

const linkStyle = theme.linkStyle;
const paralinkStyle = theme.paralinkStyle;

export default class Bio extends Component {
  render() {
    return (
      <div className="bio" style={{ height: 760, background: "white", padding: 10 }}>
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
        <h2 style={{ margin: 0, marginBottom: 10 }}>70% Frontend Develoepr <br /> 30% UI Design & Data Visualization </h2>
        <div style={{ overflow: "hidden",
                      overflowY: "scroll",
                      height: "400px",
                      width: "260px",
                      padding: "10px",
                      border: "1px solid #eee",
                      margin: "0px",
                      marginBottom: "20px"}}>
        <p>
        Today, I'm looking for my next home. I consider myself av "pear-shaped" Fullstack dev having some SQL & NoSQL experience while prototyping and tinkering on the weekends. I mainly concern myself with the UI,
          data visualization, and the interaction design between it and the API.
          </p>
            <p>
          I enjoy prototyping, the process of interaction design, and leading a frontend team working closely with a solid Product Owner.
        </p>
        <p>
          Until recently, I was a proud part of the 4th industrial revolution building blockchain at{' '}
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
          I designed and developer the customer portal which allowed users to see their accounts, transactions and manage their api keys for their decentralized apps around the world.
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
