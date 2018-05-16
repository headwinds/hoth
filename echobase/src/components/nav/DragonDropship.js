import * as d3 from 'd3';
import React, { Component } from 'react';

export default class DragonDropship extends Component {
  constructor(props) {
    super(props);

    this.ship = null;
  }

  componentDidMount() {
    this.draw();
  }

  animate() {}

  draw() {
    const width = 75; //window.innerWidth;
    const height = 75; //window.innerHeight;
    const svg = d3
      .select(this.viewport)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('margin', '0 auto');

    const ship = svg.append('g').attr('id', `${this.props.name}Ship`);

    const triangleData = function(color, size, x, y, rotation) {
      return {
        color: color,
        size: size,
        x: x,
        y: y,
        rotation: rotation
      };
    };

    const centerX = Math.floor(width / 2);
    const centerY = Math.floor(height / 2);
    const rotation = 0;

    const innerTriData = triangleData(
      '#f5f5f5',
      600,
      centerX,
      centerY,
      rotation
    );
    const outerTriData = triangleData(
      this.props.colour,
      1000,
      centerX,
      centerY,
      rotation
    );

    const drawTriangle = triangleData => {
      const triangle = d3
        .symbol()
        .type(d3.symbolTriangle)
        .size(triangleData.size);

      const groupsEnter = ship
        .selectAll('g')
        .data([triangleData])
        .enter();

      groupsEnter
        .append('path')
        .attr('d', triangle)
        .attr('stroke', function(d) {
          return d.color;
        })
        .attr('fill', function(d) {
          return d.color;
        })
        .attr('transform', function(d) {
          return (
            'translate(' + d.x + ',' + d.y + ') rotate(' + d.rotation + ')'
          );
        });
    };

    drawTriangle(outerTriData);
    drawTriangle(innerTriData);
  }

  render() {
    //const tipTop = -12;
    //const tipLeft = 80;

    const tipStyle = {
      display: 'block',
      position: 'absolute',
      zIndex: 1,
      top: 45,
      left: 50,
      userSelect: 'none'
    };
    const tipTxtStyle = {
      //background: 'white',
      padding: 0,
      paddingLeft: 20,
      fontStyle: 'Arial',
      fontSize: '12px',
      color: this.props.colour
    };

    const shipStyle = {
      display: 'block',
      position: 'absolute',
      zIndex: 0
    };

    const callsignId = `${this.props.name}Callsign`;

    return (
      <div
        ref={div => {
          this.ship = div;
        }}
      >
        <div style={tipStyle} id={callsignId}>
          <p style={tipTxtStyle}>{this.props.name}</p>
        </div>
        <div
          style={shipStyle}
          ref={div => {
            this.viewport = div;
          }}
        />
      </div>
    );
  }
}
