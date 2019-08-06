# redux-tutorial

## How To Install
1. Clone repository.
2. Run `npm install`.
3. Create Python venv `python -m venv venv`.
4. Run `activate` script created by venv, and then run `pip i -r requirements.txt`.
5. You'll need to supply a client id and secret for PRAW via a praw.ini in the root directory.

## How To Run
1. In one console, run `npm run start-dev` for dev or `npm run start` for prod. (Need to add prod start script...).
2. In another console, run the venv `activate` script, and then run `python -m flask run`.