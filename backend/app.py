from flask import Flask, request, jsonify
import requests
import praw
import os

app_settings = os.environ['APP_SETTINGS']

app = Flask(__name__)
app.config.from_object(app_settings)

if app_settings == 'config.DevelopmentConfig':
    reddit = praw.Reddit('DEFAULT')
else:
    client_id = os.environ['client_id']
    client_secret = os.environ['client_secret']
    reddit = praw.Reddit(client_id=client_id, client_secret=client_secret, user_agent='React-Flask_made_by_/u/nave321')

@app.route('/')
def index():
    return 'Server is working.'

@app.route('/api/v1/subreddit', methods=['GET', 'POST'])
def get_subreddit():
    if request.method == 'GET':
        return "It's a GET!"
    req_subreddit = request.data.decode('utf-8')

    subreddit = {
        'data': {
            'children': []
        }
    }
    for submission in reddit.subreddit(req_subreddit).hot(limit=20):
        subreddit['data']['children'].append({ 'data': { 'title': submission.title } })

    return jsonify(subreddit)