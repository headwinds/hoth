import os
from flask import Flask, current_app, send_file, redirect, url_for, json

from flask_dance.contrib.twitter import make_twitter_blueprint, twitter
from flask_cors import CORS

from .api import api_bp
from .client import client_bp

app = Flask(__name__, static_folder='../dist/static')
CORS(app)
app.secret_key = "supersekrit"
consumer_key='GX6Zh0AyFv4OVXg5jncCkLkg9'
consumer_secret='YLzKwcUWnhYOGtUiyo9QnQYEjQIKjk80WKNsVlBjeqADONZyWl'
app.register_blueprint(api_bp)
# app.register_blueprint(client_bp)

from .config import Config
app.logger.info('>>> {}'.format(Config.FLASK_ENV))

blueprint = make_twitter_blueprint(
    api_key='GX6Zh0AyFv4OVXg5jncCkLkg9',
    api_secret='YLzKwcUWnhYOGtUiyo9QnQYEjQIKjk80WKNsVlBjeqADONZyWl',
)
app.register_blueprint(blueprint, url_prefix="/login")

@app.route("/twitter/auth")
def twitter_login():
    if not twitter.authorized:
        return redirect(url_for("twitter.login"))
    resp = twitter.get("account/settings.json")
    assert resp.ok
    # return "You are @{screen_name} on Twitter".format(screen_name=resp.json()["screen_name"])
    # return resp.json()
    data = resp.json()
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response

@app.route('/')
def index_client():
    dist_dir = current_app.config['dist']
    entry = os.path.join(dist_dir, 'index.html')
    return send_file(entry)

