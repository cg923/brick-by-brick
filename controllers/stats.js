const bodyParser 	= require('body-parser');
const db 			= require('../models');

// GET /stats
// INDEX
function getStats(req, res) {
	let responses = [];

	db.Reply.find({}, function(err, emails) {
		if (err) throw err;

		//calculate stats
		emails.forEach((element, index) => {
			responses[index] = element.occurences;
		});

		res.json(responses);
	});
}

module.exports = {
	getStats: getStats
};