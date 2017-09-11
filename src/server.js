'use strict'

const express 		= require('express');
const app			= express();
const bodyParser	= require('body-parser');

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

var routes = require('./config/routes');
app.use(routes);

app.get('/', function(req, res) {
  res.send("You're Home!");
});

app.listen(3000, () => {
	console.log('listening on port 3000!');
});