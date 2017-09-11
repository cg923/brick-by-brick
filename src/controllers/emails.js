const bodyParser 	= require('body-parser');
const db 			= require('../models');

// GET /emails
// INDEX
function getEmails(req, res) {
	console.log('hola');
	db.Email.find({}, function(err, emails) {
		if (err) throw err;
		res.json(places);
	});
}

module.exports = {
	getEmails: getEmails
};