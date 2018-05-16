/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TweenMax, TimelineMax, Back, Quad } from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
import data from './northern-colony.csv';
import ColorUtil from '../../utils/ColorUtil';
import * as d3 from 'd3';

class HomeGraph extends Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;

    this.visualize = this.visualize.bind(this);
    this.updateTooltip = this.updateTooltip.bind(this);
    this.createTooltip = this.createTooltip.bind(this);
    this.animateInColonists = this.animateInColonists.bind(this);
    this.animateOutColonists = this.animateOutColonists.bind(this);

    this.state = {
      colonists: []
    };

    console.log('HomeGraph constructor this.props: ', this.props);
  }

  componentWillMount() {}

  componentDidMount() {
    console.log('HomeGraph componentDidMount');
    this.visualize();
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
  }

  animateInColonists() {
    console.log('animateInColonists this.state: ', this.state);

    _.each(this.state.colonists, colonist => {
      const colonistNode = d3.select(`#${colonist.nodeId}`);

      colonistNode
        .transition()
        .duration(500)
        .style('opacity', 1);

      console.log('hey ', colonistNode);
    });
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

    const tooltipG = tooltip.append('svg').append('g');

    tooltipG
      .append('text')
      .attr('x', 0)
      .attr('y', 20)
      .attr('class', 'tooltipFirstText')
      .text('a simple tooltip');

    tooltipG
      .append('text')
      .attr('x', 0)
      .attr('y', 40)
      .style('fill', '#999')
      .attr('class', 'tooltipSecondText')
      .style('font-size', '12px')
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

  visualize() {
    console.log('HomeGraph drawActivity');

    const self = this;

    const tooltip = this.createTooltip();

    const width = window.innerWidth / 1.5;
    const height = window.innerHeight / 1.5;
    const viewport = d3
      .select('#home-viewport')
      .append('svg')
      .attr('width', width)
      .attr('height', 900)
      .style('margin', '0 auto');

    const svg = viewport;

    const format = d3.format(',d');

    const color = d3.scaleOrdinal(d3.schemeCategory20c);

    const pack = d3
      .pack()
      .size([width, width])
      .padding(1.5);

    const world = svg.append('g').attr('id', 'world');

    const echo = world.append('g').attr('id', 'echo');

    echo
      .append('circle')
      .attr('r', 30)
      .style('fill', '#eee');
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

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

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

        /*
  	  node.append("text")
  	      .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; })
  	      .attr("text-anchor", "middle")
  	    .selectAll("tspan")
  	    .data(function(d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
  	    .enter().append("tspan")
  	      .attr("x", 0)
  	      .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
  	      .text(function(d) { return d; });


  	  node.append("title")
  	      .text(function(d) { return d.id + "\n" + format(d.value); });
  	         */
        console.log('here colonists: ', colonists);
        this.setState({ colonists });
      }
    );
  }

  render() {
    const homeStyle = {
      dislay: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      padding: 0,
      margin: 0,
      width: '100vw',
      height: '100vh'
    };
    return <div id="home-viewport" style={homeStyle} />;
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
