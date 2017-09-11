const express 		= require('express');
const app			= express();
const cookieParser 	= require('cookie-parser');
const bodyParser	= require('body-parser');

app.use(cookieParser);
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

var routes = require('./config/routes');
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
	console.log('app running on port: ', port);
});