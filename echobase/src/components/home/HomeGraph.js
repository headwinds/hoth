/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TweenMax, TimelineMax, Back, Quad } from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
import { push } from 'react-router-redux';
import ColorUtil from '../../utils/ColorUtil';
import { drawSurface } from './drawSurface';
import * as d3 from 'd3';

import identity from "../../data/identity";

const width = 1000;
const height = width;

const homeStyle = {
  dislay: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  padding: 0,
  margin: 100,
  width: width,
  height: height,
  zIndex: 0
};

const fontTeko = 'Teko';
const fontOribitron = 'Orbitron';
const colors = ["#00bd9c","#1dce6c","#2d97dd","#9b56b9","#344960","#cfb53b"];
const colorsMap = {
  "Health" : colors[0],
  "Customer Service" : colors[1],
  "Entertainment" : colors[2],
  "Lifestyle" : colors[3],
  "Automotive" : colors[4],
  "Brandon, Jessica, Mabel & Elodie" : colors[5],
}

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
    this.updateDimensions = this.updateDimensions.bind(this);
    this.draw = this.draw.bind(this);

    //const width = props.app.isMobile ? 350 : window.innerWidth / 1.5;

    this.state = {
      colonists: [],
      width: width,
      height: width,
      colours: ColorUtil.getColours(),
      homeStyle,
      currentRoute: null,
      curSelectedActor: null,
    };

    console.log('HomeGraph constructor this.props: ', this.props);
  }

  componentWillMount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  componentDidMount() {
    console.log('HomeGraph componentDidMount 2');

    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentDidUpdate(nextProps) {
    console.log('HomeGraph componentDidUpdate', this.state);


    return;
    /*
    if (this.state.colonists.length > 0) {
      if (document.location.pathname === '/') {
        this.animateInColonists();
      } else {
        this.animateOutColonists();
      }
    }
    */
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;

    /*
    if (document.location.pathname === '/') {
      const newHomeStyle = { ...homeStyle, display: 'block' };
      this.state.homeStyle = newHomeStyle;
    } else {
      const newHomeStyle = { ...homeStyle, display: 'none' };
      this.state.homeStyle = newHomeStyle;
    } */
  }

  changeRoute(d) {
    if (this.state.currentRoute !== d.route) {
       this.props.navigateTo(d.route);
    }
    this.setState({ curSelectedActor: d.title, currentRoute: d.route });
  }

  draw() {

    console.log("HomeGraph draw ? ",document.location.pathname )

    //if (document.location.pathname === '/') {

      console.log("HomeGraph draw")

      const world = this.drawWorld();

      const colony0 = d3.select('#colony0');
      const colony0Pos = colony0.node().getScreenCTM();
      const colony0Box = colony0.node().getBBox();
      console.log('colony: ', colony0Box);

      this.drawColonists(world, colony0Box);
      this.drawHud(world, colony0Box);

      //d3.select('#colonist1').select('rect').dispatch('click');
    //}
  }

  updateDimensions() {
    //return;

    // do I want a redraw and then re-create state?!
    // or simply an aspect ratio preserved scale?!

    // clear svg
    d3.select('svg').remove();

    this.draw();
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
      .style('width', useLen * 4 + 'px');
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
      .style('width', '50px')
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

  moveHiliteCircleToTarget(d){

    const foundColonist = this.state.colonists.filter( colonist => (colonist.title === d.name ) );

    console.log("HomeGraph foundColonist ",d.name)

    if (foundColonist.length > 0) {

      const newX = foundColonist[0].x + 600;
      const newY = foundColonist[0].y + 300;

      d3.select("#spotlight")
        .transition()
          .ease(d3.easeCubic)
          .duration(2000)
          .attr('transform', 'translate(' + newX + ',' + newY + ')');
    }


  }

  drawHud(world, colonyBox) {

    console.log("HomeGraph drawHud")

    const self = this;

    const hud = world
      .append('g')
      .style('opacity', 1)
      .attr('id', 'hud');

    const centerX = colonyBox.x;
    const centerY = colonyBox.y;

    const y = this.props.app.isMobile ? 390 : 0;

    const hudX = centerX - 80;
    const hudY = centerY - 230 + y;

    hud.attr('transform', 'translate(' + hudX + ',' + hudY + ')');

    const date = new Date();

    const fontColor = this.state.colours[6];

    const hudText = hud
      .append('text')
      .style('font-family', 'Orbitron') // or Teko?!
      .style('font-size', '70')
      .style('fill', fontColor)
      .text(date.getDate());

    const hudBox = hudText.node().getBBox();
    console.log('drawHud', hudBox);

    const startX = hudBox.width;

    const barX = startX + 70;
    const iconX = startX + 50;

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

      const lengendX = 450;

      const clientsFilters = hud
        .append('g')
        .attr('transform', 'translate(' + lengendX + ',' + -180 + ')');

        // function for dynamic sorting
        function compareValues(key, order='asc') {
          return function(a, b) {
            if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
              // property doesn't exist on either object
              return 0;
            }

            const varA = (typeof a[key] === 'string') ?
              a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string') ?
              b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
              comparison = 1;
            } else if (varA < varB) {
              comparison = -1;
            }
            return (
              (order == 'desc') ? (comparison * -1) : comparison
            );
          };
        }

        const projects = identity.projects.sort(compareValues("vertical"));

        projects.map( (item, i) => {

          const name = item.client + " - " + item.vertical;

          const clientBarWidrth = ( name.length < 5 ) ? 60 : name.length * 9;
          const y = i * 46;

          const clientBar = clientsFilters
            .append('g');

          clientBar
            .append('rect')
            .attr('width', clientBarWidrth)
            .attr('height', 40)
            .style("pointer-events","all")
            .style("cursor", "pointer")
            .on("click", function(){
              console.log("HomeGraph click bar");
              return self.moveHiliteCircleToTarget(item)})
            .style('fill', colorsMap[item.vertical]);

          clientBar
            .append('text')
            .attr("x", 5)
            .attr("y", 20)
            .attr("dy", ".35em")
            .style("fill","white")
            .style("user-select","none")
            .style("pointer-events","none")
            .style("cursor", "default")
            .text(function(){return name})

          clientBar
            .attr('transform', 'translate(' + 0 + ',' + y + ')');

        });

  }

  drawColonists(world, colonyBox) {


    const echo = world.append('g').attr('id', 'echo');

    const self = this;

    const centerX = colonyBox.x;
    const centerY = colonyBox.y;

    const echoX = centerX - 30;
    const echoY = centerY - 60;

    echo
      .append('circle')
      .attr('r', 0)
      .attr("id", "spotlight")
      .attr('transform', 'translate(' + echoX + ',' + echoY + ')')
      .style('fill', '#f9f9f9')
      .transition()
      .duration(1000)
      .ease(d3.easeElastic)
      .style('opacity', 0.25)
      .attr('r', 160);

    const colonists = [];

    const buildMap = () => {

    //  let root = d3.hierarchy({ children: classes }).each(d => {
      //  return d;
    //  });

    //id,energy,income,expenses,debt,sentiment,adults,kids,x,y,title,subTitle


    const turbine = { id: 2,
                      route: "/budding-data-scientist",
                      energy: 1500,
                      income: 10000,
                      expenses: 8000,
                      debt: 1200,
                      sentiment: 5,
                      adults: "UI engineer/actuary",
                      kids: "2 girls",
                      x: 480,
                      y: 260,
                      title:"wind turbine",
                      subTitle:"a python experiment exploring turbines across the US"};

    const colonist0 = {  id: 1,
                        route: "/bio",
                        energy: 1500,
                        income: 10000,
                        expenses: 8000,
                        debt: 1200,
                        sentiment: 5,
                        adults: "UI engineer/actuary",
                        kids: "2 girls",
                        x: 80,
                        y: 80,
                        title:"The Flowers",
                        subTitle:"Brandon, Jessica, Mabel & Elodie"};

      const coords = [{x: 0, y: 50},
                      {x: 80, y: 80},
                      {x: 55, y: 120},
                      {x: 135, y: 170},
                      {x: 235, y: 270},
                      {x: 335, y: 335},
                      {x: 350, y: 30},
                      {x: 400, y: 20},
                      {x: 450, y: 80},
                      {x: 500, y: 50},
                      {x: 540, y: 40},
                      {x: 580, y: 200}];

    const colonists = identity.projects.map( (project, i) => {
      return {  id: i,
                route: project.route,
                energy: 1500,
                income: 10000,
                expenses: 8000,
                debt: 1200,
                sentiment: 5,
                adults: "miner/farmer",
                kids: "3 boys",
                fill: '',
                x: coords[i].x,
                y: coords[i].y,
                title: project.client,
                subTitle: project.vertical,
                ...project}
    });

    const actors = [turbine, ...colonists];

      let node = world
        .selectAll('.node')
        .data(actors)
        .enter()
        .append('g')
        .attr('class', 'node')
        //.style('opacity', 0)
        .attr('id', d => {
          return `colonist${d.id}`;
        })
        .attr('transform', function(d) {
          const transX = centerX - Number(d.x);
          const transY = centerY - Number(d.y);

          colonists.push({ data: d, nodeId: `colonist${d.id}` });

          return 'translate(' + transX + ',' + transY + ')';
        });

      //const aqua = 'rgba(51, 197, 197, 0.20)';
      const colours = ColorUtil.getColours();

      let getColor = i => {
        return colours[i];
      };


      const tooltip = self.getTooltip();

      node
        .append('circle')
        .attr('id', function(d) {
          return d.id;
        })
        .attr('r', function(d) {
          return 10;
        })
        /*
        .attr('height', function(d) {
          return 20;
        })*/
        .style('fill', function(d, i) {
          const color = (d.vertical) ? colorsMap[d.vertical] : getColor(i);
          return color;
        })
        .style('cursor', 'pointer')
        .on('mouseover', function() {
          return tooltip.style('visibility', 'visible');
        })
        .on('mousemove', function(d) {
          const subTitle = `${d.total} Shops which sold ${d.count} Items`;
          const title = d.title;
          return self.updateTooltip(d.title, d.subTitle, tooltip);
        })
        .on('mouseout', function() {
          return tooltip.style('visibility', 'hidden');
        })
        .on('click', function(d) {
          console.log(d);
          if (d.route === "/no-route") return;
          self.changeRoute(d)
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

        self.setState({colonists})
    }

    return buildMap();

  }

  drawWorld() {
    console.log('HomeGraph drawWorld');

    const self = this;

    const tooltip = this.createTooltip();

    const viewport = d3
      .select('#home-viewport')
      .append('svg')
      //.attr('viewBox', '0 0 100 100')
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .attr('width', '10000px')
      .attr('height', '10000px')
      .style('margin', '0 auto');

    const svg = viewport;

    //const format = d3.format(',d');
    //const color = d3.scaleOrdinal(d3.schemeCategory20c);

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

// note: push = import { push } from 'react-router-redux';
const mapDispatchToProps = dispatch => ({
  navigateTo: newRoute => {
    dispatch(push(newRoute));
  },
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeGraph);
