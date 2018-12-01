# Jedis & Wampas

A card game based on Mages & Monsters but replacing them with characters inspired by Star Wars, specifically the ones from that desolate, ice-encrusted planet, Hoth. We can use traits from [Rebels](https://www.starwars.com/news/echo-base-personnel-meet-the-rebels-on-ice),[Snowtroopers](http://starwars.wikia.com/wiki/Cold_assault_stormtrooper), and [Wampas](http://starwars.wikia.com/wiki/Wampa) to create our own unique game.

* Python 3.7
* React 16
* D3 5.0
* SocketIO 2

## Getting Started


#### Frontend

The frontend is a VueJS app.

To work purely on the frontend:

```
cd ancients
yarn serve
```

When you are ready to deploy, build the frontend which copy the static files over to the backend.

```
cd ancients
yarn build
```

#### Backend
```
pip3 install -r requirements.txt
python3 main.py
```

Open Chrome to localhost:8000 and play the game in the browser.

## REPL

The Python code can be used in an interactive python console. I'd recommend reading through the code so you have an idea of what functions you should call.

## Docker Deploy

see Docker file

To deploy to Zeit.co simply run:

```
now
```

Choose Docker instead of NodeJS at the terminal prompt.

## Inspiration

Before we create our own unique rule set, let's get inspired by some existing card games:

[REIGNS: Her Majesty](https://www.devolverdigital.com/games/view/reigns-her-majesty)
[Magic: the gathering](https://magic.wizards.com/en)
[Hearthstone](https://playhearthstone.com/en-us/)

## Rules

Begin with a coin toss. The winner of the toss either has first pick of the Monster characters, or becomes Player 1 and has the first turn. Once characters are chosen, each player draws 5 cards to create their initial hand.

Beginning of Turn

Player 1 begins by playing an Attack card from their hand, or using their character's ability. A character ability takes effect immediately and ends the player's turn.

Shield War

If the player plays an Attack card, Player 2 may respond by playing a Shield card. A Shield card is used to block an opponent's Attack card or Shield card. Some shield cards only work against Attack cards, some only against other Shield cards, and some can be played against either Attack cards or Shield cards.

Shield cards have an energy cost in the lower left corner of the card that must be immediately paid from the player's available energy. Some shield cards may also have an added effect, such as "Draw a card" or "Gain 2 energy". These added effects occur immediately when a card is played.

If Player 2 was successfully able to block Player 1's Attack card, Player 1 can respond by playing his own Shield card against Player 2's Shield card. Play continues this way, with opponents playing Shield cards against each other, until one of the players in unable or choses not to play a Shield card.

End of Turn

The last player to successfully play a Shield card is the winner of the turn. If the winner of the turn also played the Attack card at the start of the turn, then the effect of the Attack card occurs now. If the winner of the turn did not play the Attack card, then the attack fails.

This marks the end of the turn. At the end of the turn, all the cards that were played this turn are discarded. Each player then restores their energy to full, and draws cards from the deck until they have 5 cards in their hand. If a player already has 5 or more cards in their hand, they don't draw any new cards.

Special rules

If a player must draw a card but there are no cards left in the deck, the player takes 1 damage for every card he was unable to draw.

## Blank cards

For blank cards, check out this [Card Game Template repo](https://github.com/malexw/Card-Game-Template)

## Origin

Resources for a card game that [malexw](http://www.github.com/malexw) created at Guelph Game Jam 2.
