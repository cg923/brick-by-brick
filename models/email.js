const mongoose = require('mongoose');

var Email = mongoose.Schema({
	order: Number,
  	to: String,
  	from: String,
  	subject: String,
  	date: String,
  	mailbox: String,
  	text: String
});

module.exports = mongoose.model('Email', Email);