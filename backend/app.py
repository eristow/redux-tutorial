from flask import Flask, request, jsonify
import requests
import praw

app = Flask(__name__)
reddit = praw.Reddit('DEFAULT')

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