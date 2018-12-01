 /* eslint-disable */

<template>
  <div>
    <button v-on:click="handleEndTurnClick">End Turn</button>
  </div>
</template>

<script>
import * as axios from 'axios';
import * as d3 from 'd3';

export default {
  name: 'Hand',
  data () {
    return {
      hand: null,
      loading: true,
      errored: false,
      cards_clicked: [],
      max_cards_clicked: 3,
    }
  },

  created: function () {
    this.fetchData()
  },

  watch: {
    // when to use watch?!
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },

  methods: {
    getNewColor: function(d){
      let newColor;

      if (d.clicked) return "cyan";

      if (Number(d.selected) > 5 ) newColor = "pink";
      else newColor = "lightgray";

      return newColor;
    },
    updateData: function(lastData) {

      console.log("updateData: ",lastData)

      const updated_data = lastData.map( card => {

        // is the card in the cards_clicked array?
        const found = this.cards_clicked.find(card_clicked => card_clicked.id === card.id)

        if (found !== undefined ) return {...card, clicked: true};
        else return {...card, clicked: false};

      })

      return updated_data;

    },
    handleEndTurnClick: function(event){

    },
    handleCardClick: function(card, hand){
      console.log("click click hand: ",hand)

      const found = this.cards_clicked.find(card_clicked => card_clicked.id === card.id)
      const foundIndex = this.cards_clicked.find(card_clicked => card_clicked.id === card.id)

      let new_cards_clicked;
      if (found !== undefined ) {
        new_cards_clicked = this.cards_clicked.filter(card_clicked => card_clicked.id !== card.id)
        this.cards_clicked = new_cards_clicked;
        console.log(this.cards_clicked.length)
      } else {
        // you can only select a max of cards this rounds
        if (cards_clicked.length < max_cards_clicked) {
          this.cards_clicked.push(card)
        } else {
          this.message = "You have have reached your limit of selected cards this round";
        }

      }

      this.cards_clicked.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

      const updated_card_data = this.updateData(hand)

      this.updateViz(updated_card_data);
    },
    updateViz: function(newData) {

      const self = this;

      console.log("update viz newData:", newData)

      // DATA JOIN
      // Join new data with old elements, if any.
      var card = d3.select("#world").selectAll("g")
        .data(newData);

       function getTrans(d,i){
        const y = (d.clicked) ? -50 : 30;
        return "translate (" + i * 64 + "," + y + ")"
      }

      // UPDATE
      // Update old elements as needed.
      //card
        //.attr("transform", getTrans);


      // ENTER
      // Create new elements as needed.
      //
      // ENTER + UPDATE
      // After merging the entered elements with the update selection,
      // apply operations to both.

      // need to better under merge
      // https://github.com/d3/d3-selection#selection_data


     const cardContainer = card.enter()
                   .append("g")
                   .attr("transform", getTrans);

      cardContainer
      		.on("click", d => self.handleCardClick(d, newData) );

      cardContainer
      		.append("rect")
          .attr("class", "card")
      		.attr("width", 60)
          .attr("height", 100)
    			.style("stroke", "gray")
    			.style("stroke-width", "2")
    			//.attr("y", String(Math.random() * 10)+"em")
    			.attr("fill", d => { return self.getNewColor(d) })

      		// after - entering and updating items!
      	.merge(card)
      		.transition()
      			.duration(1000)
      			.select("rect")
      			.style("stroke", "gray")
      			.style("stroke-width", "2")
      			//.attr("y", String(Math.random() * 10)+"em")
      			.attr("fill", d => { return self.getNewColor(d) });

    cardContainer
    	.append("text")
    		.text(d => d.id)
    		.style("pointer-events","none")
    		.style("fill","#666")
    		.style("opacity",0)
    		.style("font-size",20)
    		.style("font-family","Helvetica Neue")
    		.attr("x", 5)
    		.attr("y", 60)
        .style("opacity",1)
      .merge(card)
            .transition()
    					.delay(500)
              .duration(1000)
              .select("text")
      					.style("opacity",1);

      cardContainer
      	.merge(card)
      		.transition()
      			.attr("transform", getTrans)

      // EXIT
      // Remove old elements as needed.
      card.exit()
            .transition()
                  .duration(1000)
      							.select("rect")
                      .style("opacity",0)
                      .remove();
    },
    fetchData: function () {

      const game_id = 999;
      const path = 'http://localhost:4500';
      const final = (document.domain === "localhost") ? path : '';
      const url = `${final}/deal/${game_id}`;

      axios.get(url).then( response => {
            //
            console.log("Hand response: ", response.data);
            // what player am I?
            const player_1_hand = response.data.player_1.hand;

            const hand = player_1_hand;
            const hand_pos = hand.map((card,card_id) =>
                    {return {...card,
                            card_id,
                            selected: false,
                            state: "unselected"}})
            this.hand = hand_pos;
            this.updateViz(hand_pos);
          }
        ).catch(error => {
          console.log(error)
          this.errored = error
        }).finally(() => this.loading = false);
    },
    postEndTurn: function() {
      const game_id = 999;
      const path = 'http://localhost:4500';
      const final = (document.domain === "localhost") ? path : '';
      const player_number = 1;
      const url = `${final}/end-turn/player/${player_number}`;
      const data = {
        cards_played: this.cards_clicked,
      }

      const config = {
        method: "post",
        url,
        data,
      }
      // @app.route('/end-turn/player/<integer_arg:int>', methods=["POST",])
      axios.post(url, config)
          .then( response => {})
          .catch(error => {

          }).finally(() => this.loading = false);


    }
  }
}
</script>

<style>

</style>
