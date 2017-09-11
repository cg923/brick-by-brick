const mongoose = require('mongoose');
const Email = require('./models/email');
mongoose.connect(process.env.MONGODB_URI ||
				process.env.MONGOLAB_URI ||
				process.env.MONGOHQ_URL ||
				"mongodb://localhost/brickbybrick");

// Drop current database
Email.remove({}, function(err) {
	if(err) throw err;
});

// Reseed
let emails = [
	{
  		to: 'Greg Selover',
  		from: 'Dad',
  		subject: 'Letter',
  		date: '4/30/16',
  		text: 'Greg- We got your letter.  We love you. Our thoughts are with you in what must be a very difficult time.   We are of course in shock, and need some time to process this before we talk. Love, Dad',
  	  mailbox: 'inbox'
    },
  	{
  		to: 'Corey Selover',
  		from: 'Mom',
  		subject: 'Re: News!!',
  		date: '9/6/17',
  		text: 'HOORAY!',
		  mailbox: 'drafts'
  	}
];

Email.create(emails, function(err, emails) {
	if(err) {
		throw err;
	} else {
		mongoose.connection.close();
	}
})
