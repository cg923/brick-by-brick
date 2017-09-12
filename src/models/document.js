const mongoose = require('mongoose');

var Document = mongoose.Schema({
  	title: String,
  	text: String
});

module.exports = mongoose.model('Document', Document);