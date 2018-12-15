import React, { Component } from 'react';
import WindLogMay21 from './WindLogMay21';
import { theme } from '../../theme/Theme';
import { Link } from 'react-router';

const linkStyle = theme.linkStyle;



export default class About extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          pointerEvents: 'none',
          background: "white",
          padding: 20
        }}
      >
        <div style={{ display: 'block', marginRight: 0, marginTop: 0 }}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div>
          <h1 style={{ margin: 0, marginBottom: 10 }}>US Wind Turbines</h1>
          </div>
          <div>
            <Link to={`/`} style={linkStyle}>X</Link>
          </div>
        </div>
          <p
            style={{
              display: 'block',
              fontSize: 14,
              color: '#cb778b',
              margin: 0,
              padding: 0,
              marginBottom: 20
            }}
          />
          <WindLogMay21 />
        </div>
      </div>
    );
  }
}
