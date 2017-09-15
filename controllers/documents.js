const bodyParser 	= require('body-parser');
const db 			= require('../models');

// GET /emails
// INDEX
function getDocuments(req, res) {
	db.Document.find({}, function(err, documents) {
		if (err) throw err;
		res.json(documents);
	});
}

module.exports = {
	getDocuments: getDocuments
};