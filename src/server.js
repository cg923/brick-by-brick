'use strict'

const express 		= require('express');
const app			= express();
const bodyParser	= require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

var routes = require('./config/routes');
app.use(routes);

app.get('/', function(req, res) {
  res.sendFile('./index.html');
});

app.listen(process.env.PORT || 3000, () => {
	console.log('listening!');
});