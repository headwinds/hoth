 /* eslint-disable */
 
<template>
  <div class="deals"></div>
</template>

<script>

import * as d3 from 'd3';

let card_data;
let cards_clicked = [];

 const updateData = (lastData) => {

   const updated_data = lastData.map( card => {

     // is the card in the cards_clicked array?
     const found = cards_clicked.find(card_clicked => card_clicked.id === card.id)

     if (found !== undefined ) return {...card, clicked: true};
     else return {...card, clicked: false};

   })

   return updated_data;

 }

const getNewColor = (d) => {
  let newColor;

  if (d.clicked) return "cyan";

  if (Number(d.selected) > 5 ) newColor = "pink";
  else newColor = "lightgray";

  return newColor;

}

function handleCardClick(card){
  console.log("click card: ",card)
  //console.log("click cards_clicked: ",cards_clicked)
  //new_card_data = updateCardData(card_data);

  const found = cards_clicked.find(card_clicked => card_clicked.id === card.id)
  const foundIndex = cards_clicked.find(card_clicked => card_clicked.id === card.id)

  let new_cards_clicked;
  if (found !== undefined ) {
    new_cards_clicked = cards_clicked.filter(card_clicked => card_clicked.id !== card.id)
    cards_clicked = new_cards_clicked;
    console.log(cards_clicked.length)
  }
  else cards_clicked.push(card)

  cards_clicked.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

  const updated_card_data = updateData(card_data)

  update(updated_card_data);
}


function update(newData) {

  // DATA JOIN
  // Join new data with old elements, if any.
  var card = d3.select("world").selectAll("g")
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
  		.on("click", d => handleCardClick(d) );

  cardContainer
  		.append("rect")
      .attr("class", "card")
  		.attr("width", 60)
      .attr("height", 100)
  		.attr("fill", d => { return "white" })
  		.style("stroke-width", "1")

  		// after - entering and updating items!
  	.merge(card)
  		.transition()
  			.duration(1000)
  			.select("rect")
  			.style("stroke", "gray")
  			.style("stroke-width", "2")
  			//.attr("y", String(Math.random() * 10)+"em")
  			.attr("fill", d => { return getNewColor(d) });

cardContainer
	.append("text")
		.text(d => d.id)
		.style("pointer-events","none")
		.style("fill","#666")
		.style("opacity",0)
		.style("font-size",40)
		.style("font-family","Helvetica Neue")
		.attr("x", 18)
		.attr("y", 66)
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
}

export default {
  name: 'Deal',
  mounted() {
    // stuff()
    const newData = [];
    update(newData);
  },
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
