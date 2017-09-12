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
  		to: 'David Cooper',
  		from: 'Henry Cooper',
  		subject: 'Letter',
  		date: '4/30/16',
  		text: 'Greg- We got your letter.  We love you. Our thoughts are with you in what must be a very difficult time.   We are of course in shock, and need some time to process this before we talk. Love, Dad',
  	  mailbox: 'inbox'
    },
  	{
  		to: 'David Cooper',
  		from: 'Henry Cooper',
  		subject: 'News',
  		date: '5/30/16',
  		text: 'Kids- Mom and I talked to Helen today, because we are leaving for Maine  Wednesday afternoon, and after a couple of stops, plan to be at Fielders on Friday.  Unfortunately, Elliot is in the hospital.  He had difficulty in breathing (fluid on lungs) and the melanoma has reappeared.  They are hoping that he will be home when we get to their house on Friday.  We also talked to him today and he was in good spirits and feisty.   He is in Robert Wood Johnson Hospital in New Brunswick.  Love, Dad',
		  mailbox: 'inbox'
  	},
    {
      to: 'David Cooper',
      from: 'Henry Cooper',
      subject: 'Elliot',
      date: '6/9/16',
      text: "Kids. Here is Helen’s text to me today, after I asked how Elliot was doing.\nHe went Monday to see his doctor and they admitted him due to his problems breathing and pain levels. I think he'll be here through at least early next week. He had his first radiation treatment today and will have another tomorrow. He's on a pain pump (morphine) which helps a lot. If he can get through this tough time and the Keytruda and radiation kick in he will improve",
      mailbox: 'inbox'
    },
    {
      to: 'David Cooper',
      from: 'Henry Cooper',
      subject: 'Uncle Elliot',
      date: '6/13/16',
      text: "Kids-- Terrible news.  We talked to Helen this morning. She was with Elliot in the ICU, and he was on a breathing tube.  He was to see the oncologist team in the afternoon and Helen was hopeful.  We had a call from Ruth this afternoon, and the oncologists said there was nothing else they could do.  Elliot has requested that life support apparatus be removed, so it is only a matter of time.  Love, Dad",
      mailbox: 'inbox'
    },
    {
      to: 'David Cooper',
      from: 'Henry Cooper',
      subject: 'Re: Re: Uncle Elliot',
      date: '6/14/16',
      text: "Helen called this morning and talked to Mom. Elliot died last night. Sorry to break it this way\n\nSent from my iPhone",
      mailbox: 'inbox'
    },
    {
      to: 'David Cooper',
      from: 'Henry Cooper',
      subject: 'Re: Re: Re: Uncle Elliot',
      date: '6/15/16',
      text: "Kids. I had a long talk with Helen yesterday. It is difficult of course. \n\nA couple of things.\n\n1.  There will be a memorial service at Helen’s church on Saturday June 25 in the morning. We will be there. \n\n2.  Helen said she would like to come to Maine and was thinking about the 4th of July.  It might include Sara and/or Tim. Larry could also be here. I need to count beds. I would like to give Helen an answer. Are any of you planning to be in Maine over the 4th?\n\nThanks, love, Dad\n\nSent from my iPhone",
      mailbox: 'inbox'
    },
    {
      to: 'Laura Cooper',
      from: 'Henry Cooper',
      subject: 'Dad',
      date: '7/1/16',
      text: "David, you've probably heard from Kat. But Dad spent the afternoon in ER. He and Helen played golf and he was really tired and felt terrible. The hospital was really close. They did a lot of testing and most everything was normal except his heart was beating too fast. They sent him home with some meds to control it. He will go back Sunday for blood work and then on Tues for an echocardiogram and whatever else. They really don't want to do any testing they don't have to because the staff is low due to the holiday weekend. It's called 'A Fib' I think, atrial fibulation ( misspelled).  He can ride in the boat, whatever he wants just no high impact activities.  We have Helen, Sara, and Rick here. Joanie and her boyfriend will join us for Sunday dinner.  So that's the scoop. I'll keep you updated. Probably nothing til Tues. we sure didn't expect it. Peter didn't seem quite right when we were there. I didn't expect Dad to have problems.     Xxxxxx.  It was wonderful to be with you last weekend and especially our walk. I was so happy to hear that you and Mini are together as life partners. I diidn't know what to think. As soon as I got back from our walk Ben asked me to walk with him cause he was trying to get Lila to sleep ( no luck).  My legs were tired from walking in flip flops but of course I went. I only wish Kat would have invited me. It's just a special way to communicate. \nKeep well and I will keep you informed. It may not be serious but they need all the tests to be sure.   Love you, Mom",
      mailbox: 'inbox'
    },
];

Email.create(emails, function(err, emails) {
	if(err) {
		throw err;
	} else {
		mongoose.connection.close();
	}
})
