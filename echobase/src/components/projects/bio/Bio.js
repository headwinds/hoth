import React, { Component } from 'react';
import { theme } from '../../theme/Theme';

const linkStyle = theme.linkStyle;

export default class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <h1>Brandon Flowers</h1>
        <p>
          I{`'`}m a designer/developer and{' '}
          <a
            href="/budding-data-scientist"
            rel="noopener noreferrer"
            style={linkStyle}
            onClick={this.props.handleBudding}
          >
            budding data scientist
          </a>{' '}
          . As a hybrid, I primarily enjoy working on the data presentation
          layer collaborating with business and scientists to build products
          with Javascript (Angular/RxJS or React/Redux), Python, SQL and NoSQL,
          that convert big data into trends and insights through NLP and
          probability statistics.
        </p>
        <p>
          I{`'`}m currently a frontend developer at{' '}
          <a
            href="https://qochealth.com"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            QoC Health.
          </a>{' '}
          I mainly write React/Redux against a Spring Java/MS SQL backend but,
          on my last project, I was able to do some fullstack work. I worked
          with Python to pump data across platforms, and used Firebase to store
          the behavioral analytics for{' '}
          <a
            href="https://mythoughtspot.ca"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Thoughtspot
          </a>, a responsive (desktop & mobile) web app for CAMH. It talks to
          both the Google Places and Mapbox APIs as well as performs full text
          and geolocation proximity search through the HIPAA-compliant QoC API.
        </p>
        <p>
          Previously, I worked at 24-7 INC on an analytics and natural language
          processing app,{' '}
          <a
            href="https://www.youtube.com/watch?v=5KZofZX3XaY"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
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
    );
  }
}
