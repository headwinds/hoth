/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TweenMax, TimelineMax, Back, Quad } from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
import data from './northern-colony.csv';
import ColorUtil from '../../utils/ColorUtil';
import { drawSurface } from './drawSurface';
import * as d3 from 'd3';

const homeStyle = {
  dislay: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  padding: 0,
  margin: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 0
};

const fontTeko = 'Teko';
const fontOribitron = 'Orbitron';

class HomeGraph extends Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;

    this.drawWorld = this.drawWorld.bind(this);
    this.drawColonists = this.drawColonists.bind(this);
    this.drawHud = this.drawHud.bind(this);
    this.updateTooltip = this.updateTooltip.bind(this);
    this.createTooltip = this.createTooltip.bind(this);
    this.getTooltip = this.getTooltip.bind(this);
    this.animateInColonists = this.animateInColonists.bind(this);
    this.animateOutColonists = this.animateOutColonists.bind(this);

    //const width = props.app.isMobile ? 350 : window.innerWidth / 1.5;

    this.state = {
      colonists: [],
      width: window.innerWidth,
      height: window.innerHeight,
      colours: ColorUtil.getColours(),
      homeStyle
    };

    console.log('HomeGraph constructor this.props: ', this.props);
  }

  componentWillMount() {}

  componentDidMount() {
    console.log('HomeGraph componentDidMount');
    if (document.location.pathname === '/') {
      const world = this.drawWorld();
      this.drawColonists(world);
      this.drawHud(world);
    }
  }

  componentDidUpdate(nextProps) {
    console.log('HomeGraph componentDidUpdate', this.state);
    if (this.state.colonists.length > 0) {
      if (document.location.pathname === '/') {
        this.animateInColonists();
      } else {
        this.animateOutColonists();
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;

    if (document.location.pathname === '/') {
      const newHomeStyle = { ...homeStyle, display: 'block' };
      this.state.homeStyle = newHomeStyle;
    } else {
      const newHomeStyle = { ...homeStyle, display: 'none' };
      this.state.homeStyle = newHomeStyle;
    }
  }

  clear() {
    d3
      .select('svg')
      .selectAll('.node')
      .remove();
  }

  animateOutColonists() {
    console.log('animateOutColonists');
    _.each(this.state.colonists, colonist => {
      d3
        .select(`#${colonist.nodeId}`)
        .transition()
        .duration(500)
        .style('opacity', 0);
    });

    const hudNode = d3.select('#hud');

    hudNode
      .transition()
      .duration(500)
      .style('opacity', 0);
  }

  animateInColonists() {
    console.log('animateInColonists this.state: ', this.state);

    _.each(this.state.colonists, colonist => {
      const colonistNode = d3.select(`#${colonist.nodeId}`);

      colonistNode
        .transition()
        .duration(500)
        .style('opacity', 1);
    });

    const hudNode = d3.select('#hud');

    hudNode
      .transition()
      .duration(500)
      .style('opacity', 1);
  }

  animateTooltipWarning(tooltipId) {
    d3
      .select(tooltipId)
      .select('.tooltipBar')
      .attr('width', title.length * 10 + 'px')
      .style('fill', 'blue')
      .transition()
      .duration(1000)
      .ease(d3.easeLinear)
      .style('fill', 'red')
      .transition()
      .duration(1000)
      .ease(d3.easeLinear)
      .style('fill', 'blue')
      .on('start', function repeat() {
        d3
          .active(this)
          .style('fill', 'red')
          .transition()
          .style('fill', 'green')
          .transition()
          .style('fill', 'blue')
          .transition()
          .on('start', repeat);
      });
  }

  updateTooltip(title, subTitle, tooltip) {
    const titleLen = title.length;
    const subTitleLen = subTitle.length;
    const useLen = titleLen > subTitleLen ? titleLen + 10 : subTitleLen + 10;

    tooltip
      .style('top', d3.event.pageY - 10 + 'px')
      .style('left', d3.event.pageX + 10 + 'px')
      .style('width', useLen * 6 + 'px');
    //tooltip.text(title);
    d3
      .select('#tooltip')
      .select('.tooltipFirstText')
      .text(title);
    d3
      .select('#tooltip')
      .select('.tooltipSecondText')
      .text(subTitle);

    return tooltip;
  }

  createTooltip() {
    const tooltip = d3
      .select('body')
      .append('div')
      .attr('id', 'tooltip')
      .style('pointer-events', 'none')
      .style('width', '150px')
      .style('height', '40px')
      .style('position', 'absolute')
      .style('z-index', '10')
      .style('visibility', 'hidden')
      .style('padding', '10px')
      .style('background-color', 'white')
      .style('opacity', '0.9');

    const tooltipG = tooltip
      .append('svg')
      .append('g')
      .attr('transform', 'translate(0,-5)');

    const fontColor = this.state.colours[6];

    tooltipG
      .append('text')
      .attr('x', 0)
      .attr('y', 20)
      .attr('class', 'tooltipFirstText')
      .style('fill', fontColor)
      .style('font-size', '20px')
      .style('font-family', 'Teko')
      .text('a simple tooltip');

    tooltipG
      .append('text')
      .attr('x', 0)
      .attr('y', 40)
      .style('fill', '#999')
      .attr('class', 'tooltipSecondText')
      .style('font-size', '14px')
      .style('font-family', 'Teko')
      .text('a simple tooltip 2');
    /*
    tooltipG
      .append('rect')
      .attr('width', 100)
      .attr('height', 5)
      .attr('y', 60)
      .attr('class', 'tooltipBar')
      .style('fill', 'red');
      */

    return tooltip;
  }

  getTooltip() {
    return d3.select('#tooltip');
  }

  drawHud(world) {
    const hud = world
      .append('g')
      .style('opacity', 0)
      .attr('id', 'hud');

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const y = this.props.app.isMobile ? 390 : 0;

    const hudX = centerX - 80;
    const hudY = centerY - 230 + y;

    hud.attr('transform', 'translate(' + hudX + ',' + hudY + ')');

    const date = new Date();

    const fontColor = this.state.colours[6];

    hud
      .append('text')
      .style('font-family', 'Orbitron') // or Teko?!
      .style('font-size', '70')
      .style('fill', fontColor)
      .text(date.getDate());

    const barX = 110;
    const iconX = 90;

    const healthIcon = hud
      .append('g')
      .append('rect')
      .attr('width', 16)
      .attr('height', 4)
      .style('fill', 'darkred')
      .attr('transform', 'translate(' + iconX + ',' + -40 + ')');

    const healthBar = hud
      .append('g')
      .append('rect')
      .attr('width', 80)
      .attr('height', 4)
      .style('fill', fontColor)
      .attr('transform', 'translate(' + barX + ',' + -40 + ')');

    const energyIcon = hud
      .append('g')
      .append('rect')
      .attr('width', 16)
      .attr('height', 4)
      .style('fill', 'gold')
      .attr('transform', 'translate(' + iconX + ',' + -30 + ')');

    const energyBar = hud
      .append('g')
      .append('rect')
      .attr('width', 40)
      .attr('height', 4)
      .style('fill', fontColor)
      .attr('transform', 'translate(' + barX + ',' + -30 + ')');

    const foodIcon = hud
      .append('g')
      .append('rect')
      .attr('width', 16)
      .attr('height', 4)
      .style('fill', 'darkgreen')
      .attr('transform', 'translate(' + iconX + ',' + -20 + ')');

    const foodBar = hud
      .append('g')
      .append('rect')
      .attr('width', 60)
      .attr('height', 4)
      .style('fill', fontColor)
      .attr('transform', 'translate(' + barX + ',' + -20 + ')');
  }

  drawColonists(world) {
    const echo = world.append('g').attr('id', 'echo');

    const self = this;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const echoX = centerX - 30;
    const echoY = centerY - 60;

    echo
      .append('circle')
      .attr('r', 0)
      .attr('transform', 'translate(' + echoX + ',' + echoY + ')')
      .style('fill', '#f9f9f9')
      .transition()
      .duration(1000)
      .ease(d3.easeElastic)
      .style('opacity', 0.25)
      .attr('r', 160);

    const colonists = [];

    d3.csv(
      data,
      d => {
        return d;
      },
      (error, classes) => {
        if (error) throw error;

        let root = d3.hierarchy({ children: classes }).each(d => {
          return d;
        });

        const pack = d3
          .pack()
          .size([this.state.width, this.state.width])
          .padding(1.5);

        let node = world
          .selectAll('.node')
          .data(pack(root).leaves())
          .enter()
          .append('g')
          .attr('class', 'node')
          .style('opacity', 0)
          .attr('id', d => {
            return `colonist${d.data.id}`;
          })
          .attr('transform', function(d) {
            const transX = centerX - Number(d.data.x);
            const transY = centerY - Number(d.data.y);

            colonists.push({ data: d.data, nodeId: `colonist${d.data.id}` });

            return 'translate(' + transX + ',' + transY + ')';
          });

        //const aqua = 'rgba(51, 197, 197, 0.20)';
        const colours = ColorUtil.getColours();

        let getColor = i => {
          return colours[i];
        };

        //d3.event.preventDefault();

        const tooltip = self.getTooltip();

        node
          .append('rect')
          .attr('id', function(d) {
            return d.id;
          })
          .attr('width', function(d) {
            return 20;
          })
          .attr('height', function(d) {
            return 20;
          })
          .style('fill', function(d, i) {
            return getColor(i);
          })
          .style('cursor', 'pointer')
          .on('mouseover', function() {
            return tooltip.style('visibility', 'visible');
          })
          .on('mousemove', function(d) {
            const subTitle = `${d.total} Shops which sold ${d.count} Items`;
            const title = d.title;
            return self.updateTooltip(d.data.title, d.data.subTitle, tooltip);
          })
          .on('mouseout', function() {
            return tooltip.style('visibility', 'hidden');
          })
          .on('click', function(d) {
            console.log(d);
          });

        node
          .append('clipPath')
          .attr('id', function(d) {
            return 'clip-' + d.id;
          })
          .append('use')
          .attr('xlink:href', function(d) {
            return '#' + d.id;
          });

        this.setState({ colonists });
      }
    );
  }

  drawWorld() {
    console.log('HomeGraph drawActivity');

    const self = this;

    const tooltip = this.createTooltip();

    const viewport = d3
      .select('#home-viewport')
      .append('svg')
      .attr('width', this.state.width)
      .attr('height', this.state.height)
      .style('margin', '0 auto');

    const svg = viewport;

    const format = d3.format(',d');

    const color = d3.scaleOrdinal(d3.schemeCategory20c);

    //const y = this.props.app.isMobile ? 100 : 0;

    const world = svg
      .append('g')
      .attr('id', 'world')
      .attr('transform', 'translate(' + 0 + ',' + 0 + ')');

    drawSurface(
      world,
      this.state.width,
      this.state.height,
      this.props.app.isMobile
    );

    return world;
  }

  render() {
    return <div id="home-viewport" style={this.state.homeStyle} />;
  }
}

const mapStateToProps = state => ({
  app: state.app,
  routing: state.routing
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeGraph);
