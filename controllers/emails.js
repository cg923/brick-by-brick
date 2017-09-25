const bodyParser 	= require('body-parser');
const db 			= require('../models');

// --------- E-mails ---------- //
// ---------------------------- //
// GET /emails
function getEmails(req, res) {
	db.Email.find({}, (err, emails) => {
		if (err) throw console.log(err);
		res.json(emails);
	});
}

// GET /emails/:id
function getEmail(req, res) {
	db.Email.findOne({_id: req.params.id}, (err, email) => {
		if (err) throw console.log(err);
		res.json(email);
	});
}

// POST /emails
function postEmail(req, res) {
	if (typeof(req.body) === 'string') req.body = JSON.parse(req.body);
	db.Email.create(req.body, (err, email) => {
		if (err) throw console.log(err);
		res.json(email);
	});
}

// PUT /emails/:id
function updateEmail(req, res) {
	if (typeof(req.body) === 'string') req.body = JSON.parse(req.body);
	db.Email.findOne({_id: req.params.id}, (err, email) => {
		if (err) throw console.log(err);

		email.to 		= req.body.to;
		email.from 		= req.body.from;
		email.subject 	= req.body.subject;
		email.date 		= req.body.date;
		email.text 		= req.body.text;
		email.mailbox 	= req.body.mailbox;

		email.save((err, email) => {
			if (err) throw console.log(err);
			res.json(email);
		});
	});
}

// DELETE /emails/:id
function deleteEmail(req, res) {
	db.Email.remove({_id: req.params.id}, (err, email) => {
		if (err) throw console.log(err);
		res.json(email);
	});
}

// --------- Replies ---------- //
// ---------------------------- //
// GET /replies
function getReplies(req, res) {
	db.Reply.find({}, (err, replies) => {
		if (err) throw console.log(err);
		res.json(replies);
	});
}

// POST /replies
function postReply(req, res, next) {
	if(typeof(req.body) === 'string') req.body = JSON.parse(req.body);

	db.Reply.findOne({replyOption: req.body.replyOption}, (err, reply) => {
		if (err) throw console.log(err);
		else if(reply) {
			reply.occurences++;
			reply.save((err, reply) => {
				res.json(reply);
			});
		}
		else {
			let newReply = new db.Reply({
				to: 			req.body.to,
			  	from: 			req.body.from,
			  	subject: 		req.body.subject,
			  	date: 			req.body.date,
			  	text: 			req.body.rext,
			  	replyOption: 	req.body.replyOption,
			  	occurences: 	1
			});

			newReply.save((err, reply) => {
				if(err) throw console.log(err);
				res.json(reply);
			});
		}
	});
}

module.exports = {
	getEmails: getEmails,
	getEmail: getEmail,
	postEmail: postEmail,
	updateEmail: updateEmail,
	deleteEmail: deleteEmail,
	getReplies: getReplies,
	postReply: postReply
};