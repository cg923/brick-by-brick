const mongoose = require('mongoose');

var Document = mongoose.Schema({
  	title: String,
  	hidden: Boolean,
  	text: String
});

module.exports = mongoose.model('Document', Document);