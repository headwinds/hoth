import os
from flask import Flask, current_app, send_file, redirect, url_for, json
from flask_dance.contrib.twitter import make_twitter_blueprint, twitter
from flask_dance.contrib.github import make_github_blueprint, github
from flask_cors import CORS
from werkzeug.contrib.fixers import ProxyFix
from flask_restful import Api as API
from flask_cors import CORS
from routes import route_dict

from api import api_bp
# from .client import client_bp

app = Flask(__name__)

app = Flask(__name__, static_folder='./dist/static')
app.wsgi_app = ProxyFix(app.wsgi_app)

CORS(app)
app.register_blueprint(api_bp)

# from flask import session
# session.clear()

app.secret_key = "viper-probe1" # change the secret to clear the session!

# app.register_blueprint(client_bp)

# from .config import Config
# app.logger.info('>>> {}'.format(Config.FLASK_ENV))

from routes.twitter import twitter_bp

app.register_blueprint(twitter_bp, url_prefix="/login")

api = API(app)

# Add routes from /routes/__init__.py
for route, resource in route_dict.items():
    api.add_resource(resource, route)

@app.route("/twitter/auth")
def twitter_login():
    
    if not twitter.authorized:
        print("url ", url_for("twitter.login"))
        return redirect(url_for("twitter.login"))

    resp = twitter.get("account/settings.json")
        
    if resp.ok:
        # return "You are @{screen_name} on Twitter".format(screen_name=resp.json()["screen_name"])
        # return resp.json()
        data = resp.json()
        response = app.response_class(
            response=json.dumps(data),
            status=200,
            mimetype='application/json'
        )
        return response
    else:
       return 'Need to figure out how to delete oath'   


github_blueprint = make_github_blueprint(
    client_id="77781ee12eca70e9ec04",
    client_secret="87bfce21ca96a95b37a9c574ffe486c5321de1d4",
)
app.register_blueprint(github_blueprint, url_prefix="/login")

@app.route("/github/auth")
def index():
    if not github.authorized:
        return redirect(url_for("github.login"))
    resp = github.get("/user")
    assert resp.ok
    return "You are @{login} on GitHub".format(login=resp.json()["login"])       


@app.route("/hello")
def hello_world():
    return 'Hello, World!'    

app.run(host='0.0.0.0')
app.run(port=5000)

# To Run:
# python app.py
# or
# python -m flask app
