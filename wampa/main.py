import datetime
from sanic import Sanic
from sanic import response
from sanic.blueprints import Blueprint
from sanic_cors import CORS, cross_origin
import aiohttp
import asyncio
import re
import json
from pages.index import battlefield
from pages.ancients import ancients
from colonists.game import create_game

from sanic_oauth.providers import TwitterClient

from sanic.request import Request
from sanic.response import text, HTTPResponse
from sanic_session import InMemorySessionInterface
from sanic_oauth.blueprint import oauth_blueprint, login_required


# experiment to keep 1 game in memory
games_list = []

def create_sample_game(self):
  game_id = -1
  p1 = Player(1)
  p2 = Player(2)
  game = create_game(game_id, p1, p2) # sample game
  games_list.append(game)

def add_game(games_list, find_game_id, new_game):
    game_added = find_game(games_list, find_game_id, new_game)

def find_game(games_list, find_game_id, new_game):
    for game in games_list:
        if game['game_id'] == find_game_id:
            return game
    games_list.append(new_game)
    return new_game

app = Sanic(__name__)
CORS(app)
# Serves files from the static folder to the URL /static
app.static('/static', './static')

# Serves the file /home/ubuntu/test.png when the URL /the_best.png
# is requested
app.static('/deck.json', '/colonists/deck.json')

callback_re = re.compile(r'^[a-zA-Z_](\.?[a-zA-Z0-9_]+)+$')
is_valid_callback = callback_re.match

async def head(session, url):
    try:
        async with session.head(url) as response:
            return {
                'ok': True,
                'headers': dict(response.headers),
                'status': response.status,
                'url': url,
            }
    except Exception as e:
        return {
            'ok': False,
            'error': str(e),
            'url': url,
        }

 

# Twitter 

from flask_dance.contrib.twitter import make_twitter_blueprint, twitter

app.secret_key = "supersekrit"
consumer_key='GX6Zh0AyFv4OVXg5jncCkLkg9'
consumer_secret='YLzKwcUWnhYOGtUiyo9QnQYEjQIKjk80WKNsVlBjeqADONZyWl'

blueprint = make_twitter_blueprint(
    api_key='GX6Zh0AyFv4OVXg5jncCkLkg9',
    api_secret='YLzKwcUWnhYOGtUiyo9QnQYEjQIKjk80WKNsVlBjeqADONZyWl',
)
app.register_blueprint(blueprint, url_prefix="/login")

@app.route("/")
def index():
    if not twitter.authorized:
        return redirect(url_for("twitter.login"))
    resp = twitter.get("account/settings.json")
    assert resp.ok
    return "You are @{screen_name} on Twitter".format(screen_name=resp.json()["screen_name"])

@app.route('/signinwithtwitter', methods=["GET",])
async def handle_request(request):
    session = aiohttp.ClientSession()
    twitter = TwitterClient(
        session,
        consumer_key='GX6Zh0AyFv4OVXg5jncCkLkg9',
        consumer_secret='YLzKwcUWnhYOGtUiyo9QnQYEjQIKjk80WKNsVlBjeqADONZyWl',
    )

    request_token, request_token_secret, _ = await twitter.get_request_token()

    authorize_url = twitter.get_authorize_url(request_token)

    print("Open",authorize_url,"in a browser")

    return authorize_url
    
    # ...
    # Reload client to authorize_url and get oauth_verifier
    # http://127.0.0.1:4000/?oauth_token=oJlTOgAAAAAAYtRcAAABZ-c30bU&oauth_verifier=nk7vEVhN6ol9xdXfc0LRe4D8VjCVFP6l
    # ...
    
    oauth_verifier = input()
    oauth_token, oauth_token_secret, _ = await twitter.get_access_token(oauth_verifier)

    print("PIN code oauth_token:", oauth_token)

    # Save the tokens for later use

    # ...

    twitter = TwitterClient(
        session,
        consumer_key='GX6Zh0AyFv4OVXg5jncCkLkg9',
        consumer_secret='YLzKwcUWnhYOGtUiyo9QnQYEjQIKjk80WKNsVlBjeqADONZyWl',
        oauth_token=oauth_token,
        oauth_token_secret=oauth_token_secret,
    )

    timeline = await twitter.request('GET', 'statuses/home_timeline.json')
    content = await timeline.read()
    print(content)
    session.close()
    return response.json({  "content" : content,
                         })

@app.route('/new-game/<integer_arg:int>/<player_1_arg:int>/<player_2_arg:int>')
async def handle_request(request, integer_arg):
    new_game_id = integer_arg

    new_player_1 = Player(player_1_arg)
    new_player_2 = Player(player_2_arg)

    new_game = create_game(new_game_id, new_player_1, new_player_2)
    present_game = find_game(games_list, find_game_id, new_game)
    game_state = present_game.get("game").get("game_state")
    deck = present_game.get("game").get("deck").get_cards()
    player_1 = present_game.get("game").get("player_1")
    player_2 = present_game.get("game").get("player_2")
    total_games = len(games_list)
    return response.json({  "game_state" : game_state,
                            "deck": deck,
                            "player_1": player_1,
                            "player_2": player_2,
                            "total_games": total_games})

@app.route('/deal/<integer_arg:int>')
async def handle_request(request, integer_arg):
    find_game_id = integer_arg
    new_game_id = find_game_id;
    #new_game = create_game(new_game_id)
    present_game = find_game(games_list, find_game_id)
    game_state = present_game.get("game").get("game_state")
    deck = present_game.get("game").get("deck").get_cards()
    player_1 = present_game.get("game").get("player_1")
    player_2 = present_game.get("game").get("player_2")
    total_games = len(games_list)
    return response.json({  "game_state" : game_state,
                            "deck": deck,
                            "player_1": player_1,
                            "player_2": player_2,
                            "total_games": total_games})


@app.route('/end-turn/player/<integer_arg:int>', methods=["POST",])
async def handle_request(request):
    json = request.body
    print ("end turn ", json)
    find_player_id = integer_arg
    if find_game_id == 1:
        # what game?
        # game
        # what round?
        round = game.get_round()
        round.increase_turns();

@app.route('/end-turn', methods=["POST",])
async def handle_request(request):
    # cards_played = request.args.getlist('cards_played')

    data = json.loads(request.body) # json string converted to a dictionary
    cards_played = data.get("cards_played")

    find_game_id = data.get("game_id")
    new_game = create_game(find_game_id)
    present_game = find_game(games_list, find_game_id, new_game)
    deck = present_game.get("game").get("deck").get_cards()
    player_1 = present_game.get("game").get("player_1")
    player_2 = present_game.get("game").get("player_2")

    player_1.turn()
    player_2.turn()

    total_games = len(games_list)

    return response.json({  "deck": deck,
                            "player_1": player_1,
                            "player_2": player_2,
                            "total_games": total_games})


@app.route('/ancients')
async def handle_request(request):
    return response.html(ancients)

@app.route('/')
async def handle_request(request):
    urls = request.args.getlist('url')
    callback = request.args.get('callback')
    if urls:
        if len(urls) > 10:
            return response.json([{
                'ok': False,
                'error': 'Max 10 URLs allowed'
            }], status=400)
        async with aiohttp.ClientSession() as session:
            head_infos = await asyncio.gather(*[
                head(session, url) for url in urls
            ])
            if callback and is_valid_callback(callback):
                return response.text(
                    '{}({})'.format(callback, json.dumps(head_infos, indent=2)),
                    content_type='application/javascript',
                    headers={'Access-Control-Allow-Origin': '*'},
                )
            else:
                return response.json(
                    head_infos,
                    headers={'Access-Control-Allow-Origin': '*'},
                )
    else:
        return response.html(battlefield)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=4500, debug=True)
