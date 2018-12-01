 /* eslint-disable */

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="viewport"></div>
    <Deal />
    <Hand />
  </div>
</template>

<script>

import * as d3 from 'd3';

const data = [99, 71, 78, 25, 36, 92];

const getCards = () => {

    const self = this;
    const game_id = 999;
    const path = 'http://localhost:8000';
    const final = (document.domain === "localhost") ? path : '';
    const url = `${final}/deal/${game_id}`;

    const config = {
       method: "GET", // *GET, POST, PUT, DELETE, etc.
       mode: "cors", // no-cors, cors, *same-origin
       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
       credentials: "same-origin", // include, same-origin, *omit
       headers: {
           "Content-Type": "application/json; charset=utf-8",
           // "Content-Type": "application/x-www-form-urlencoded",
       },
       redirect: "follow", // manual, *follow, error
       referrer: "no-referrer", // no-referrer, *client
       //body: JSON.stringify(data), // body data type must match "Content-Type" header
   }


    fetch(url, config)
      .then(
        response => {
          return response.json();
        },
        fail => {
        //  self.setState({error: fail})
        }
      ).then(
        json => {

          //const newGames = this.state.games.push(json);

          // what player # am I?

          // which one is my hand?
          console.log("cards fetch ", json);

          if (!json) return; 

          const player_1_hand = json.player_1.hand;

          const hand = player_1_hand;
          const hand_pos = hand.map((card,card_id) =>
                  {return {...card,
                          card_id,
                          selected: false,
                          state: "unselected"}})
          const dataset = hand_pos;

          //self.setState({game: newGames, error: null, hand: dataset})
        }
      )
  }

  const drawLine = () => {
    const svg = d3.select("#viewport")
      .append('svg')
      .attr('width', 1000)
      .attr('height', 1000)
      .append('g')
      .attr('id', 'world')
      .attr('transform', 'translate(0, 10)');
    const x = d3.scaleLinear().range([0, 430]);
    const y = d3.scaleLinear().range([210, 0]);
    d3.axisLeft().scale(x);
    d3.axisTop().scale(y);
    x.domain(d3.extent(data, (d, i) => i));
    y.domain([0, d3.max(data, d => d)]);
    const createPath = d3.line()
      .x((d, i) => x(i))
      .y(d => y(d));
    svg.append('path')
      .style("fill", "none")
      .style("stroke", "#42b983")
      .style("stroke-width", "4px")
      .attr('d', createPath(data));
  }

import Deal from './Deal.vue';
import Hand from './Hand.vue'

export default {
  name: 'Cards',
  props: {
    msg: String
  },
  mounted() {
      drawLine();
      getCards();
      //console.log(this.props.msg)
  },
  components: {
    Deal, Hand
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

path {
  fill: none;
  stroke: #76BF8A;
  stroke-width: 3px;
}

</style>
