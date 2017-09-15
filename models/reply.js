const mongoose = require('mongoose');

var Reply = mongoose.Schema({
  	to: String,
  	from: String,
  	subject: String,
  	date: String,
  	text: String,
  	occurences: Number,
  	replyOption: Number
});

module.exports = mongoose.model('Reply', Reply);