import React, { Component } from 'react';
import { theme } from '../../theme/Theme';
//import manufacturers from './manufacturers.png';

export default class WindLogMay21 extends Component {
  render() {
    return (
      <div>
        <p>
          On the front page of kaggle, a kaggler posted a fresh dataset covering
          over 20 years of US Wind Turbine production. I was pleasantly
          surprised to be the first to dive into this rich dataset.
        </p>
        {/*
        <div>
          <img
            src={manufacturers}
            alt="wind turbine manufacturers"
            width={300}
          />
        </div>*/}
        <div>
          <a
            href="https://www.kaggle.com/headwinds/us-wind-turbines"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...theme.linkStyle,
              marginTop: 0,
              marginBottom: 10,
              pointerEvents: 'all',
              cursor: 'pointer'
            }}
          >
            Kernel
          </a>{' '}
        </div>
        <p>
          Instead of predictiong future production like I have done in the other
          competitions, I wanted to explore production at the state level and
          discover if any states were approaching 100% self sufficiency similar
          to Scotland{"'"}s tremendous achievement this year.
        </p>
      </div>
    );
  }
}
