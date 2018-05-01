import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end'
        }}
      >
        <div style={{ display: 'block', marginRight: 40, marginTop: 0 }}>
          <p
            style={{
              display: 'block',
              fontSize: 20,
              color: '#bd6e81',
              margin: 0,
              padding: 0
            }}
          >
            Predict Future Sales of the <br /> Russian Gaming Store, 1Company
          </p>
          <p
            style={{
              display: 'block',
              fontSize: 14,
              color: '#cb778b',
              margin: 0,
              padding: 0
            }}
          >
            Working through this Kaggle competition (May 1/2018 - Day 3)
          </p>
          <p
            style={{
              display: 'block',
              fontSize: 14,
              color: '#cb778b',
              margin: 0,
              padding: 0
            }}
          />
        </div>
      </div>
    );
  }
}
