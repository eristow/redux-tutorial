# redux-tutorial

## How To Install
1. Clone repository.
2. Run `npm install`.
3. Create Python venv `python -m venv venv`.
4. Run `activate` script created by venv, and then run `pip i -r requirements.txt`.
5. You'll need to supply a client id and secret for PRAW via a praw.ini in the root directory.

## How To Run
1. In one console, run `npm run start-dev` for dev or `npm run start` for prod.
2. In another console, run the venv `activate` script, and then run `python -m flask run`.

## TODO
- Need to add prod start script for npm.
- Lots of general fix-ups and adding new features. This is still very much WIP.

#### React/Redux/Webpack/Babel
- Deploy to Heroku
    - https://realpython.com/flask-by-example-part-1-project-setup/
    - How to get Heroku to show JS frontend, but have Py backend running and internal API able to be hit?
        - Get JS deployed and working to Heroku
            - 404 when trying to find public/bundle.js
                - Change all refs to public/ to be dist/, and then remove dist from .gitignore if necessary?
                - Something about react-router not working?
                - Deployment is a pain...
        - Figure out how to not use babel node on prod
        - Then make heroku run `heroku.sh` in procfile to run both
- Change how JS is consuming res data from Py
    - Don’t want to force a weird nesting of data/children in Py
- Allow for user to type in any subreddit
    - Need to return error to JS if 404 in Py
- Don’t think refresh button is working
    - Last Updated time doesn’t change when refresh is clicked
- Flask: store return from external API in DB?
    - Flask-sqlalchemy, flask-restful, flask-marshmallow, celery
- React-final-forms tutorial
