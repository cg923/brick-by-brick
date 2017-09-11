const bodyParser 	= require('body-parser');
const db 			= require('../models');

// GET /emails
// INDEX
function getEmails(req, res) {
	console.log('yo!');
	db.Email.find({}, function(err, emails) {
		if (err) throw err;
		res.json(emails);
	});
}

module.exports = {
	getEmails: getEmails
};