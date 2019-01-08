'use strict'
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('./routes');
const port = process.env.PORT || 5001;
//set in heroku config vars
const profile = process.env.PROFILE || "localhost";

let app = express();
//enable cors for localhost
if(profile !== 'dev') {
  app.use(cors());
}
app.use(bodyParser.json());
router(app);

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is live at port: ${port}`);
});