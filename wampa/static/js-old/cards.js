'use strict';

//const Hand = require("cards/Hand");
//https://developers.google.com/web/fundamentals/primers/modules

const e = React.createElement;

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Colonists",
      liked: false,
      games: [],
      turn: 0,
      game_started: false,
      coin_flip_result: null,
      cards_played: [],
      hand: null,
      game_id: 999,
      player: null, // am I player 1 or 2?
      error: null };

      //const hand = new Hand();
      console.log("hello ", window)
  }

  componentDidMount(){
    this.handleInit();
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
    this.drawCards();
  }

  handleInit(){
    const self = this;
    const game_id = 999;
    const url = `/deal/${game_id}`;

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
          self.setState({error: fail})
        }
      ).then(
        json => {
          const newGames = this.state.games.push(json);

          // what player # am I?

          // which one is my hand?
          console.log("json ", json)
          const player_1_hand = json.player_1.hand;

          const hand = player_1_hand;
          const hand_pos = hand.map((card,card_id) =>
                  {return {...card,
                          card_id,
                          selected: false,
                          state: "unselected"}})
          const dataset = hand_pos;

          self.setState({game: newGames, error: null, hand: dataset})
        }
      )
  }

  handleStartGame(ev){

    this.drawWorld();
    this.setState({turn: this.state.turn++, game_started: true})
  }

  handleCoinFlip(ev){

    const flip = Math.floor(Math.random() * 100);
    const coin_flip_result = (flip > 50) ? "heads" : "tails";

    this.setState({coin_flip_result})
  }

  handleEndTurn(ev){

    const self = this;
    const game_id = 999;
    const url = "/end-turn";

    const data = {cards_played: this.state.cards_played, game_id: this.state.game_id};

    console.log("handleEndTurn sending data: ", data);

    const config = {
       method: "POST", // *GET, POST, PUT, DELETE, etc.
       mode: "cors", // no-cors, cors, *same-origin
       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
       credentials: "same-origin", // include, same-origin, *omit
       headers: {
           "Content-Type": "application/json; charset=utf-8",
           // "Content-Type": "application/x-www-form-urlencoded",
       },
       redirect: "follow", // manual, *follow, error
       referrer: "no-referrer", // no-referrer, *client
       body: JSON.stringify(data), // body data type must match "Content-Type" header
   }


    fetch(url, config)
      .then(
        response => {
          return response.json();
        },
        fail => {
          console.log("end turn fail! ", fail)
          self.setState({error: fail})
        }
      ).then(
        json => {
          const newGames = this.state.games.push(json);
          self.setState({game: newGames, error: null, cards_played: []})
        }
      )

  }

  handlePlaySelectedCards(){

    const oldHand = this.state.hand;
    const cards_played = oldHand.filter( card => card.state === "selected") ;

    this.setState({cards_played})

  }

  handleCardClick(d){

    const selected = !d.selected;

    d.selected = selected;

    const oldHand = this.state.hand;

    const newHand = oldHand.map(card => {
      if (card.card_id === d.card_id) return {...d, state: "selected", selected}
      else return card
    })

      console.log("card click ", d)

    //this.worldUpdate(newHand)

    this.setState({hand: newHand})

  }

  handleCardMouseOver(d){

    const oldHand = this.state.hand;
    console.log("boino 1 : ", d)

    const newHand = oldHand.map(card => {

      if (card.card_id === d.card_id) {
        const state = (d.selected) ? "selected" : "mouseover";
        return {...d, state}

      } else return card
    })

    this.setState({hand: newHand})
  }

  handleCardMouseOut(d){

    const oldHand = this.state.hand;

    const newHand = oldHand.map(card => {
      if (card.card_id === d.card_id) {
        const state = (d.selected) ? "selected" : "mouseout";
        return {...d, state}

      } else return card
    })

    this.setState({hand: newHand})
  }

  getCardFillStyle(d) {
    let color;
    switch(d.state) {
      case "selected" :
        color = "blue";
        break;
      case "mouseover" :
        color = "red";
        break;
      case "mouseout" :
        color = "yellow";
        break;
      case "unselected" :
        color = "orange";
        break;
      default :
        color = "green";
        break;
    }

    console.log("new fill color: ", d.state)
    return color;
  }

  getCardStrokeStyle(d) {
    let stroke;

    if (d.selected) stroke = "blue";
    else stroke = "none";

    return stroke;
  }

  drawCards(){

    console.log("drawCards")

    const self = this;

    function wrap(text, width) {
        text.each(function () {
            var text = d3.select(this),
                words = text.text().split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.1, // ems
                x = text.attr("x"),
                y = text.attr("y"),
                dy = 0, //parseFloat(text.attr("dy")),
                tspan = text.text(null)
                            .append("tspan")
                            .attr("x", x)
                            .attr("y", y)
                            .attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan")
                                .attr("x", x)
                                .attr("y", y)
                                .attr("dy", ++lineNumber * lineHeight + dy + "em")
                                .text(word);
                }
            }
        });
    }

    let rowY = 0;
    let rowX = 0;
    let yPos = 0;
    let cardsPerRowCount = 0;
    const xStart = 300;
    const cardWidth = 260;
    const cardHeight = 320;
    const rowSpacer = 20;
    const colSpacer = 10;

    const getXpos = (d) => {
      //console.log("d",d)

      const curCount = cardsPerRowCount;

      if (cardsPerRowCount > 10) {
        yPos += cardHeight + colSpacer;
        cardsPerRowCount = 0;
      } else {
        cardsPerRowCount++;
      }

      const finalXPos = (curCount + rowSpacer + xStart) + ((cardWidth + rowSpacer) * curCount);

      return finalXPos;
    }

    const getYpos = (d) => {
      return yPos;
    }

    const getName = (d) => {
      return d.name;
    }

    const getDescription = (d) => {
      return d.text;
    }

    const newdata = d3.select("#world").selectAll('g')
        .data(this.state.hand)

    const card = d3.select("#world").selectAll('g')
        .data(this.state.hand)
        .enter()
        .append('g')
          .attr("class","card")
          .style("pointer-events", "all")
          .style("cursor", "pointer")
          .on("click", d => { self.handleCardClick(d) } )
          .on("mouseover", d => { self.handleCardMouseOver(d) } )
          .on("mouseout", d => { self.handleCardMouseOut(d) } )
          .attr("transform", d => {return "translate (" + getXpos(d) + "," + getYpos(d) + ")" });

      card
          .append('rect')
            .attr('class', 'cardback')
            .attr('width', cardWidth)
            .attr('height', cardHeight)
            // entering...
            .style("fill", d => { return  self.getCardFillStyle(d)} )
            .style("stroke", d => { return  self.getCardStrokeStyle(d)} )
            .style("opacity", 0.7)
            // entering & updating...
            .merge(newdata)
            .style("fill", d => { return  self.getCardFillStyle(d)} )
            .style("stroke", d => { return  self.getCardStrokeStyle(d)} )
            .style("opacity", 1);

      card
          .append("text")
            .text(d => getName(d))
            .style('fill', 'black')
            .attr('x', 10)
            .attr('y', 20)
            .attr("font-size", 14)
            .attr("font-family", "monospace");

      card
          .append("text")
            .text(d => getDescription(d))
            .style('fill', 'black')
            .attr('x', 10)
            .attr('y', 300)
            .attr("font-size", 12)
            .attr("font-family", "monospace")
            .call(wrap, cardWidth);

  }

  drawWorld(){

    console.log("drawWorld")

    const self = this;
    const svg = d3.select("#viz").append("svg")
      	.attr('id','svg')
        .attr("width", window.innerWidth)
        .attr("height", window.innerHeight)

      const world = svg.append('g')
         					.attr('id', 'world')
             			.attr("width", window.innerWidth)
              		.attr("height", window.innerHeight)
             			.append('rect')
             			.attr("width", window.innerWidth)
              		.attr("height", window.innerHeight)
             			.style('fill','white');



        this.drawCards();

  }

  render() {

    console.log("render")

    const total_cards = (this.state.games.length > 0) ? this.state.games[0].deck.length : 0;
    const game = this.state.games[0];
    const defaultChar = {health: 0, name: '', energy: 0, ability: ''};
    const defaultPlayer = {health: 0, energy: 0, char: defaultChar, hand: []};
    const player_1 = (game) ? this.state.games[0].player_1 : defaultPlayer;
    const player_2 = (game) ? this.state.games[0].player_2 : defaultPlayer;

    // 1

    const getStartButton = () => {
      if (this.state.game_started) {
        return null;
      } else {
        return (<div>
                  <button onClick={(ev) => this.handleStartGame(ev)}>
                    Start
                  </button>
                </div>)
      }
    }

    // 2

    const getCoinFlip = () => {
      if (!this.state.game_started) {
        return null;
      } else if (this.state.game_started && this.state.coin_flip_result !== null) {
        return null;
      }  else {
        return (<div>
                  <p>Player 1 is Heads</p>
                  <button onClick={(ev) => this.handleCoinFlip(ev)}>
                    Flip Coin
                  </button>
                </div>)
      }
    }

    // 3

    const getDisplayCoinFlipResult = () => {
      if (this.state.game_started  && this.state.coin_flip_result !== null) {

        const player = (this.state.coin_flip_result  === "heads") ? "Player 1" : "Player 2";
        const moves_first = `${player} will move first`;

        return (<div>
                  <p>The coin landed on {this.state.coin_flip_result}!</p>
                  <p>{moves_first}</p>
                  <button onClick={ev => this.handleEndTurn(ev)}>
                    End Turn
                  </button>
                </div>)
      } else {
        return null;
      }
    }



    return (
      <div className="cards">
        <h2>{this.state.title}</h2>
        <div>
          <h4>{player_1.char.name}</h4>
          <h4>{player_1.char.ability}</h4>
          <p>Health: {player_1.health}</p>
          <p>Energy: {player_1.energy}</p>
          <p>Hand: {player_1.hand.length}</p>
        </div>
        <div>
          <h4>{player_2.char.name}</h4>
          <h4>{player_2.char.ability}</h4>
          <p>Health: {player_2.health}</p>
          <p>Health: {player_2.energy}</p>
          <p>Hand: {player_2.hand.length}</p>
        </div>
        <p>total cards {total_cards}</p>
        {getStartButton()}
        {getCoinFlip()}
        {getDisplayCoinFlipResult()}
      </div>
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.cards')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(Cards, { commentID: commentID }),
      domContainer
    );
  });
