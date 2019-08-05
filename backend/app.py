from flask import Flask, request, jsonify
import requests
import praw

app = Flask(__name__)
reddit = praw.Reddit('DEFAULT', user_agent='React-Flask by /u/nave321')

@app.route('/')
def index():
    return 'Server is working.'

@app.route('/api/v1/subreddit', methods=['GET', 'POST'])
def get_subreddit():
    if request.method == 'GET':
        return "It's a GET!"
    req_data = request.data.decode("utf-8")
    print('req_data', req_data)

    # subreddit_data = requests.get(f'https://www.reddit.com/r/{req_data}.json').content

    subreddit_data = []
    for submission in reddit.subreddit(req_data).hot(limit=20):
        subreddit_data.push(submission)

    print('subreddit_data', subreddit_data)

    subreddit = {
        'data': {
            'children': subreddit_data
        }
    }

    print('subreddit', subreddit)
    print('jsonify subreddit', jsonify(subreddit))

    return jsonify(subreddit)