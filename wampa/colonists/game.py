import datetime
import json
import random
from sanic import Sanic
import os
from sanic.blueprints import Blueprint
from colonists.deck import game_config

def make_deck(deck_json):
  deck = Deck()

  for card in deck_json["cards"]:
    name = card["name"]
    action = card["type"]
    qty = card["qty"]
    text = card["text"]

    for i in range(qty):
      deck.add_card(Card(name, action, text))

  return deck

# each round should store and capture the player states for that round
# with 2 players, each round will have 2 turns then it is complete
class Round:
  def __init__(self, p1, p2):
    self.players_total = 2
    self.turns_complete = 0
    self.player_1 = p1
    self.player_2 = p2

  def get_turns_complete(self):
      return self.turns_complete

  def increase_turns(self):
      self.turns_complete += 1

  def get_players(self):
     return {player_1: self.player_1, player_2 : self.player_2}

class Game:
  def __init__(self, game_id, player_1, player_2):
    round = Round(player_1, player_2)
    self.rounds = [round]
    self.current_round_id = 0
    self.game_id = game_id
    self.created = datetime.datetime.now()

  def increase_round(self):
    round = Round(self.player_1, self.player_2)
    self.rounds.append(round)
    self.current_round_id += 1

  def get_round(self):
    return self.rounds[self.current_round_id]

  def get_game_state(self):
    return {current_round_id: self.current_round_id, game_id: self.game_id}

  def get_game_id(self):
    return self.game_id

class Deck:
  def __init__(self):
    self.cards = []

  def __setitem__(self, data):
          self.cards[card_number] = data

  def __getitem__(self):
      return self.cards

  def add_card(self, card):
    self.cards.append(card)

  def get_cards(self):
    return self.cards

  def shuffle(self):
    self.cards = sorted(self.cards, key=lambda card: card.id)

  def deal(self, player, count):
    if count == 0:
      return

    for i in range(count):
      player.give(self.cards.pop(0))

  def peek(self, count=10):
    for i in range(count):
      self.cards[i].display()

class Player:

  def __init__(self, char, player_number, player_id):
    self.hand = []
    self.id = player_id
    self.number = player_number
    self.char = char
    self.energy = self.char.energy
    self.health = self.char.health
    self.current_turn = 0

  def start(self):
    i = 1
    for card in self.hand:
      card.display(i)
      i += 1

  def turn(self, game):
    self.current_turn += 1
    self.energy = self.char.energy
    cards_needed = 5 - len(self.hand)
    # Draw up to 5 at the end of the turn
    if cards_needed > 0:
      deck.deal(self, cards_needed)

  def results(self, opponent):
    print ("result opponent: ", opponent)
    # what are the results of playing these cards after seeing both hands?
    # for i in range(opponent)

  def give(self, card):
    self.hand.append(card)

  def deal(self, index):
    if index == 0:
      return
    self.hand.pop(index-1)

  def add_health(self, hp):
    self.health += hp

  def add_energy(self, e):
    self.energy += e

  def play(self, card, cost=0, add_energy=0, add_cards=0):
    if self.energy < cost:
      return "You don't have the energy"

    play_stack.append(("Play %s" % self.id, self.hand[card-1].name, self.hand[card-1].text))
    self.deal(card)
    deck.deal(self, add_cards)
    self.add_energy(add_energy - cost)

class Card:
  def __init__(self, name, action, text):
    self.id = random.randint(0, 65536)
    self.name = name
    self.action = action
    self.text = text

  def display(self, pre=0):
    if pre != 0:
      print (pre, self.name, self.action, self.text) #"(%s)\t%s:\t%s\t%s" % (pre, self.name, self.action, self.text)
    else:
      print (self.id, self.name, self.action, self.text) #"(%s)\t%s:\t%s\t%s" % (self.id, self.name, self.action, self.text)

class Character:
  def __init__(self, name, ability, health, energy):
    self.id = random.randint(0, 65536)
    self.name = name
    self.ability = ability
    self.health = health
    self.energy = energy

def stack():
  for play in play_stack:
    print (play[0], play[1], play[2]) #"%s (%s): %s" % (play[0], play[1], play[2])

def turn(p1,p2,game_state):
  p1.turn()
  p2.turn()
  global play_stack
  play_stack = []
  # do I need to mark both turns completed in the game state for this round?!
  p1.results(p2)
  p2.result(p1)

def start(p1,p2):
  # print "Deck: %s cards" % len(deck.cards)
  p1.start()
  p2.start()

#if __name__ == "__main__":
def create_game(new_game_id):
    #random.seed(31337)

    # this didn't work so I converted the json file to python file and simply imported it
    # script_dir = os.path.dirname(__file__)
    # file_path = os.path.join(script_dir, 'deck.json')

    # Make the players -----------------------
    char_list = []
    for i in range(len(game_config["characters"])):
      char = game_config["characters"][i]
      char_list.append(Character(char["name"], char["ability"], char["health"], char["energy"]))
    char_list = sorted(char_list, key=lambda char: char.id)

    players = []
    player_number = 0
    for p in range(game_config["game"]["players"]):
      player_number += 1
      player_id = player_number * 1000 # make this unique
      players.append(Player(char_list.pop(0), player_number, player_id))

    # assign to globals for handy reference
    p1 = players[0]
    p2 = players[1]

    # Build the deck -------------------------
    play_stack = []
    deck = make_deck(game_config)

    deck.shuffle()

    # initial deal
    deck.deal(p1, 5)
    deck.deal(p2, 5)

    # create the game
    game = Game(new_game_id,p1,p2)

    start(p1,p2)
    return {"game": game, "round": game.get_round(), "deck" : deck, "play_stack" : play_stack, "player_1": p1, "player_2" : p2}
