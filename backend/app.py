from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return 'Server is working.'

@app.route('/api/v1/subreddit', methods=['GET', 'POST'])
def get_subreddit():
    if request.method == 'GET':
        return "It's a GET!"
    req_data = request.get_json()
    print('req_data', req_data)

    # subreddit = requests.get('https://www.reddit.com/r/reactjs.json').content

    subreddit = requests.get('https://jsonplaceholder.typicode.com/posts').content

    print('subreddit', subreddit)

    return subreddit