/* eslint-disable */
/* to do lint this file */
import * as d3 from 'd3';
import getMonth from 'date-fns/get_month';

export function MonthLogChart(){

  console.log("MonthLogChart");

  let width = 500; //window.innerWidth;
  let height = 500; //window.innerHeight; 
  let viewport = d3.select('#viewport').append('svg').attr('width', width).attr('height', height).style("margin", "0 auto");

  var svg = viewport;

  d3.select("svg").selectAll(".node").remove();

  // what month is this?
  const today = new Date();
  const thisMonth = getMonth(today);

  d3.csv("data/northern.csv", function(d) {
    
  });
};
  