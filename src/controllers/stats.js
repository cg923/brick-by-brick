const bodyParser 	= require('body-parser');
const db 			= require('../models');

// GET /replies
function getReplies(req, res) {
	db.Reply.find({}, function(err, replies) {
		if (err) throw err;
		res.json(replies);
	});
}

// POST /replies
function postReply(req, res, next) {
	if(typeof(req.body) === 'string') req.body = JSON.parse(req.body);

	db.Reply.findOne({replyOption: req.body.replyOption}, (err, reply) => {
		if (err) throw err;
		else if(reply) {
			console.log('already exists, updating');
			reply.occurences++;
			reply.save((err, reply) => {
				res.json(reply);
			});
		}
		else {
			console.log('doesnt exist, creating');
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
				if(err) throw err;
				res.json(reply);
			});
		}
	});
}

module.exports = {
	getReplies: getReplies,
	postReply: postReply
};