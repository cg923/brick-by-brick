const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI ||
				process.env.MONGOLAB_URI ||
				process.env.MONGOHQ_URL ||
				"mongodb://localhost/brickbybrick");

module.exports.Email = require('./email');
module.exports.Document = require('./document');