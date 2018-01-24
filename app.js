// npm packages dependecies => install with npm i or yarn install
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// items folder dependencies
var items = require('./routes/items');

// create instances of express
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

// routing items
app.use('/api/items', items);

module.exports = app;