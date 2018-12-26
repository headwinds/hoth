/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TweenMax, TimelineMax, Back, Quad } from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
import { push } from 'react-router-redux';
import ColorUtil from '../../utils/ColorUtil';
import { drawSurface } from './drawSurface';
import * as d3 from 'd3';

import automotive from "./icons/automotive.svg";
import chat from "./icons/chat.svg";
import health from "./icons/health.svg";
import entertainment from "./icons/entertainment.svg";
import financial from "./icons/financial.svg";
import headwinds from "./icons/headwinds.svg";
import lifestyle from "./icons/lifestyle.svg";
import fwa from "./icons/fwa.svg";
import base from "./icons/base.svg";

import * as _ from "lodash";

import capBack from "./icons/mushroomCapsBack.svg";
import capFront from "./icons/mushroomCapsFront.svg";

import identity from "../../data/identity";

const width = 1000;
const height = width;

const homeStyle = {
  display: 'flex',
  position: 'relative',
  top: 0,
  left: 0,
  alignItems: 'center',
  padding: 0,
  margin: 20,
  zIndex: 0
};

const fontTeko = 'Asap Condensed';
const fontOribitron = 'Orbitron';
const colors = ["#00bd9c","#1dce6c","#2d97dd","#9b56b9","#344960","#cfb53b","#ff0e45","#878787"];
const colorsMap = {
  "Health" : colors[0],
  "Customer Service" : colors[1],
  "Entertainment" : colors[2],
  "Lifestyle" : colors[3],
  "Automotive" : colors[4],
  "Brandon Flowers" : colors[5],
  "Financial" : colors[6],
  "Energy" : colors[7],
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

    /*
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
    */
    this.draw();
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

    console.log("HomeGraph draw")

    const world = this.drawWorld();

    const colony0 = d3.select('#colony0');
    const colony0Pos = colony0.node().getScreenCTM();
    const colony0Box = colony0.node().getBBox();
    console.log('colony: ', colony0Box);

    this.drawColonists(world, colony0Box);
    const hud = this.drawHud(world, colony0Box);
    this.drawClientFilters(hud);
    this.drawAward();

    //d3.select('#colonist1').select('rect').dispatch('click');

  }

  updateDimensions() {
    //return;

    // do I want a redraw and then re-create state?!
    // or simply an aspect ratio preserved scale?!

    // clear svg
    /*
    d3.select('svg').remove();


    */
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
      .style('font-family', fontTeko)
      .text('a simple tooltip');

    tooltipG
      .append('text')
      .attr('x', 0)
      .attr('y', 40)
      .style('fill', '#999')
      .attr('class', 'tooltipSecondText')
      .style('font-size', '14px')
      .style('font-family', fontTeko)
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

    const foundColonist = this.state.colonists.filter( colonist => (colonist.name === d.name ) );

    if (foundColonist.length > 0) {
        console.log("HomeGraph foundColonist ",foundColonist[0])

        const colony0 = d3.select('#colony0');
        const colony0Box = colony0.node().getBBox();

        const centerX = colony0Box.x;
        const centerY = colony0Box.y;

      const newX = centerX - foundColonist[0].x;
      const newY = centerY - foundColonist[0].y - 10;

      d3.select("#spotlight")
      .transition()
        .ease(d3.easeCubic)
        .duration(1000)
        .attr('transform', 'translate(' + newX + ',' + newY + ') scale(0.5,0.5)')
        .transition()
          .ease(d3.easeBounce)
          .delay(500)
          .duration(500)
          .attr('transform', 'translate(' + newX + ',' + newY + ') scale(1,1) rotate(270)')
          .transition()
            .ease(d3.easeLinear)
            .delay(700)
            .duration(500)
            .attr('transform', 'translate(' + newX + ',' + newY + ') scale(0.6,0.6) rotate(0)');
    }


  }

  drawHud(world, colonyBox) {

    console.log("HomeGraph drawHud")

    const hud = world
      .append('g')
      .style('opacity', 1)
      .attr('id', 'hud');

    const centerX = colonyBox.x;
    const hudX = centerX - 80;
    hud.attr('transform', 'translate(' + hudX + ',' + 184 + ')');

    return hud;

  }

  drawClientFilters(hud){

    const self = this;

    const lengendX = 450;

    const clientsFilters = hud
      .append('g')
      .attr('transform', 'translate(' + lengendX + ',' + -160 + ')');

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

        const name = item.client;

        const iconWitdh = 50;

        const clientBarWidrth = ( name.length < 6 ) ? 120 : name.length * 10 + iconWitdh;
        const y = i * 46;

        const client = (item.client !== '247') ? item.client : 'twentyFourSeven';

        const clientBar = clientsFilters
          .append('g')
                .attr("id", client + "Bar");

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
          .attr("x", 47)
          .attr("y", 20)
          .attr("dy", ".35em")
          .style("fill","white")
          .style("user-select","none")
          .style("pointer-events","none")
          .style("cursor", "default")
          .style("font-family", fontTeko)
          .text(function(){return name})

        clientBar
          .attr('transform', 'translate(' + 0 + ',' + y + ')');

          let vertical;

          if ( item.vertical.toLowerCase() === "brandon flowers" ) {
            vertical = "headwinds";
          } else if ( item.vertical.toLowerCase() === "customer service" ) {
            vertical = "chat"
          } else {
            vertical = item.vertical.toLowerCase();
          }

          const path = "./icons/" + vertical + ".svg";

          const getIcon = (vertical) => {
            switch(vertical.toLowerCase()) {
              case "health" :
                return health;
              case "automotive" :
                return automotive;
              case "financial" :
                return financial;
              case "customer service" :
                return chat;
              case "brandon flowers" :
                  return headwinds;
              case "lifestyle" :
                  return lifestyle;
              case "entertainment" :
                  return entertainment;
              default :
                return headwinds;

            }
          }

          // draw icon

          d3.xml( getIcon(item.vertical) )
            .then(data => {
                const selection = d3.select(d3.select(data).select("defs")._groups[0][0]).select('g');

                const icon =  d3.select("#" + client + "Bar")
                    .append('g');

                icon
                    .append( () => selection.node() )
                      .select('path')
                        .attr("fill","white");

                icon
                  .attr("transform", "translate(5,0) scale(0.18,0.18)");
            })

            // draw front cap

            d3.xml( capFront )
              .then(data => {
                const selection = d3.select(d3.select(data).select("defs")._groups[0][0]).select('g');
                const client = (item.client !== '247') ? item.client : 'twentyFourSeven';
                const id = "#" + client + "Bar";

                d3.select(id)
                .append('g')
                .append( () => selection.node() )
                  .attr("transform", "translate(-16,-9) scale(0.545,0.545)")
                    .select('path')
                    .style('fill', colorsMap[item.vertical]);
                
              })

              d3.xml( capBack )
              .then(data => {
                const selection = d3.select(data).select("path");
                const client = (item.client !== '247') ? item.client : 'twentyFourSeven';
                const id = "#" + client + "Bar";

                const xPos = clientBarWidrth - 150;

                d3.select(id)
                .append('g')
                .attr("transform", "translate(" + xPos + ",-9) scale(0.545,0.545)")
                .append( () => selection.node() )
                    .style('fill', colorsMap[item.vertical]);
                
              })

      });
    
      // draw back cap 

  }

  drawAward(client){

    d3.xml( fwa )
      .then(data => {
          const selection = d3.select(d3.select(data).select("defs")._groups[0][0]).select('g');
          const url = "https://thefwa.com/cases/lancer-earth";

          const icon =  d3.select("#MitsubishiBar")
              .append('g')
              .style("cursor", "pointer")
              .style("pointer-events","all")
              .on("click", () => {
                window.open(url,'_blank');
              })

          const graphic = icon
                            .append( () => selection.node() );

          const hitArea = icon.append("rect")
                              .attr('width', 250)
                              .attr('height', 250)
                              .attr("fill","transparent")

            icon
              .attr("transform", "translate(165,-15) scale(0.30,0.30)")
      })
  }

  drawBases(colonists){

    console.log("drawBases colonists:",colonists)

    colonists.map( (d,i) => {
      d3.xml( base )
        .then(data => {

            const selection = d3.select(d3.select(data).select("defs")._groups[0][0]).select('g');

            const id = `#colonist${d.id}`

            const icon =  d3.select(id)
                .append("g")
                .style("pointer-events","none")

            const fill = colorsMap[ d.vertical ];

            const base = icon
                            .append( () => selection.node() )
                              .select("path")
                                .attr("fill", fill);

              icon
                .attr("transform", "translate(10,-120) scale(0,0)")
                .transition()
                  .duration(500)
                  .ease(d3.easeCubic)
                  .delay( i * 250)
                  .attr("transform", "translate(-25,-40) scale(0.50,0.50)")

        })
    })

  }

  drawColonists(world, colonyBox) {

    const echo = world.append('g').attr('id', 'echo');

    const self = this;

    const centerX = colonyBox.x;
    const centerY = colonyBox.y;

    const echoX = centerX + 40;
    const echoY = centerY + 40;

    const spotlight = echo.append("g")
                          .attr('transform', 'translate(' + echoX + ',' + echoY + ')')
                            .attr("id", "spotlight");

    spotlight
      .append('circle')
        .attr('r', 0)
        .style('fill', '#f9f9f9')
        .transition()
          .duration(1000)
          .ease(d3.easeElastic)
          .style('opacity', 0.25)
          .attr('r', 160);

    spotlight
      .append('circle')
        .attr('r', 0)
        .style('fill', '#f9f9f9')
        .transition()
          .duration(1000)
          .delay(500)
          .ease(d3.easeElastic)
          .style('opacity', 0.45)
          .attr('r', 140);


   spotlight
      .append('circle')
        .attr('r', 0)
        .style("fill", "transparent")
        .style("stroke", "#199ea5")
        .style("stroke-dasharray", "4,10,20,5")
        .transition()
          .duration(1000)
          .delay(1000)
          .ease(d3.easeElastic)
          //.style('opacity', 0.25)
          .attr('r', 80);


    const buildMap = () => {

    const coords = [{x: 20, y: 150},
                    {x: -80, y: 80},
                    {x: -40, y: -50},
                    {x: 55, y: 20},
                    {x: 135, y: 170},
                    {x: 235, y: 270},
                    {x: 335, y: 335},
                    {x: 350, y: 30},
                    {x: 400, y: 20},
                    {x: 450, y: 80},
                    {x: 480, y: 260},
                    {x: 500, y: 50},
                    {x: 540, y: 40},
                    {x: 580, y: 200}];

    const colonists = identity.projects.map( (project, i) => {

      const x = coords[i].x;
      const y = coords[i].y;

      const title = project.client;

      console.log("-------------------");
      console.log("title: ", title);
      console.log("x: ", x);
      console.log("y: ", y);

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
                x,
                y,
                title,
                subTitle: project.vertical,
                ...project}
    });

      const node = world
        .selectAll('.node')
        .data(colonists)
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
          return 20;
        })

        .attr('cy', function(d) {
          return -10;
        })
        .style('fill', function(d, i) {
          return "red";
        })
        .style('opacity', function(d, i) {
          return 0;
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

          self.moveHiliteCircleToTarget(d)

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

        this.drawBases(colonists)

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
      .attr('width', '1350px')
      .attr('height', '10000px')
      .style('margin', '0 auto');

    const svg = viewport;

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
