# APPOINTMENT
<h4>An appointment application<br />
- demo: https://appointment-heroku.herokuapp.com/ (wait for 5-7 second for it to load due to free dyno from Heroku)

## There are 2 parts that this UI interacts with
- Nodejs and express to serve data to UI

## UI Installation
$ cd to react-ui/ from root directory <br />
$ npm install - pull all ui dependencies <br />

## Server Installation
$ cd to root directory<br />
$ npm install - pull all nodejs dependencies <br />

## Start the UI
$ cd to react-ui/ from root directory<br />
$ npm run start - will automatically open the UI on your favorite browser (http://localhost:3000)<br />

## Start the Server
$ cd to root directory<br />
$ npm run start:server (http://localhost:5001)<br />

## Run test
$ cd to react-ui from root directory<br />
$ npm test - run all tests<br />

## Pushing to Heroku
$ git add .<br />
$ git commit -m "commit message"<br />
$ git push heroku master<br />

$ git push heroku <YOUR_BRANCH>:master
