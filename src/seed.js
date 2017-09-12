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
      to: 'David Cooper',
      from: 'Laura Cooper',
      subject: 'Dad',
      date: '7/1/16',
      text: "David, you've probably heard from Kat. But Dad spent the afternoon in ER. He and Helen played golf and he was really tired and felt terrible. The hospital was really close. They did a lot of testing and most everything was normal except his heart was beating too fast. They sent him home with some meds to control it. He will go back Sunday for blood work and then on Tues for an echocardiogram and whatever else. They really don't want to do any testing they don't have to because the staff is low due to the holiday weekend. It's called 'A Fib' I think, atrial fibulation ( misspelled).  He can ride in the boat, whatever he wants just no high impact activities.  We have Helen, Sara, and Rick here. Joanie and her boyfriend will join us for Sunday dinner.  So that's the scoop. I'll keep you updated. Probably nothing til Tues. we sure didn't expect it. Peter didn't seem quite right when we were there. I didn't expect Dad to have problems.     Xxxxxx.  It was wonderful to be with you last weekend and especially our walk. I was so happy to hear that you and Mini are together as life partners. I diidn't know what to think. As soon as I got back from our walk Ben asked me to walk with him cause he was trying to get Lila to sleep ( no luck).  My legs were tired from walking in flip flops but of course I went. I only wish Kat would have invited me. It's just a special way to communicate. \nKeep well and I will keep you informed. It may not be serious but they need all the tests to be sure.   Love you, Mom",
      mailbox: 'inbox'
    },
    {
      to: 'Danika Cooper',
      from: 'Laura Cooper',
      subject: 'Hmmm',
      date: '8/28/16',
      text: "We are watching Saturday Live  Their next subject isTransgender. Dad has to hide out somewhere else. He just can't deal. I hate to write this but you need to know. In order to keep him comfortable I refer to you as David but it grates on my honestly. We both are looking forward to your visit but you need to know his viewpoint. Please don't let this cause you not to come. We have to get this out there and if he has a problem then that's his loss.  I can't wait to see you both. Just don't expect the best reaction from Dad. He may totally be fine which would be awesome but another reaction is possible.  I really feel badly writing you, especially since he might be okay. I just want you to know that if he doesn't, you need to try to understand and stand your place as the person that you are.  Love you, Mom",
      mailbox: 'inbox'
    },
    {
      to: 'Danika Cooper',
      from: 'Laura Cooper',
      subject: 'Check out "60 minutes overtime. On transgender',
      date: '8/28/16',
      text: "Well, I wrote too soon. While I was watching 60 minutes downstairs wishing we were a united family Dad also watched 60 minutes upstairs after he walked out of it downstairs and he checked out 60 minutes overtime. He said it really helped him see how important parental support was. He asked me if I  wanted to see it. At first I said I don't need to see it. He already has my support and always has had it. But I realized this was a huge step for Dad so I asked to see it to validify his new awareness. (My computer tells me there is no such word). Anyway. Clap your hands and do a little dance!  See you Friday",
      mailbox: 'inbox'
    },
    {
      to: 'David Cooper',
      from: 'Henry Cooper',
      subject: 'NYTimes: Chicken Tetrazzini, the Casserole Even Snobs Love',
      date: '9/29/16',
      text: "Kids-I guess you're not snobs. Love, Dad\n\nhttp://www.nytimes.com/2016/10/02/magazine/chicken-tetrazzini-the-casserole-even-snobs-love.html?smid=nytcore-ipad-share&smprod=nytcore-ipad\n\nTime and home cooking have stripped away many of the dish’s Continental flourishes. That might be for the better.\n\nSent from my iPad",
      mailbox: 'inbox'
    },
    {
      to: 'David Cooper',
      from: 'Henry Cooper',
      subject: 'Thanksgiving',
      date: '10/28/16',
      text: "Kids--As I think we told you all, we plan to stay here in Florida for Thanksgiving.  As I think we also told you, we have an invitation to go to the neighbors for dinner that day.  I think we should give them an answer next week.  You all are welcome, but I got the sense in talking to Kat and Ben that you might be coming here around the Christmas holiday, which would be wonderful, not Thanksgiving. If none of you plan to be here for Thanksgiving, we would probably go next door.  Please let us know.  Thanks.  Love, Dad",
      mailbox: 'inbox'
    },
    {
      to: 'David Cooper',
      from: 'Henry Cooper',
      subject: 'Re: Re: Thanksgiving',
      date: '10/28/16',
      text: "Ok thanks\n\nSent from my iPad",
      mailbox: 'inbox'
    },
    {
      to: 'David Cooper',
      from: 'Henry Cooper',
      subject: 'T Shirt',
      date: '8/24/17',
      text: "The Blue Gill T shirt arrived. It is awesome. Thank you. I thought they stopped making them. The only problem is that it is a medium, and I am a large. Where did you get it?  Maybe I could exchange it. Or bring it to the Blue Gill tackle shop in September. Thank you for thinking of me. Love, Dad\n\nSent from my iPad",
      mailbox: 'inbox'
    },
    {
      to: 'Henry Cooper',
      from: 'David Cooper',
      subject: 'Re: Letter',
      date: '4/30/16',
      text: "I love you both so much too. Sorry for what may have been a strange way to share the news. I feel so good just knowing I still have your love. I am, of course, still processing in many ways too. Take your time, and let me know when you'd like to talk. I should be reachable on my cell phone tonight if you'd like to talk, but I understand if you'd rather wait a while.  I love you both so much.",
      mailbox: 'sent'
    },
    {
      to: 'Henry Cooper',
      from: 'David Cooper',
      subject: 'Re: Elliot',
      date: '6/9/16',
      text: "Shit. That is not good to hear. My thoughts are with him. Do you think calling would be a good idea?\n\nThanks for sharing the info\n\nLove\nDavid",
      mailbox: 'sent'
    },
    {
      to: 'Henry Cooper',
      from: 'David Cooper',
      subject: 'Re: Uncle Elliot',
      date: '6/13/16',
      text: "I'm not sure what to say. I just called aunt helen and asked her to give Elliot my love.  I love you all and I'm sure we'll all connect soon.\n\nLove\nDavid",
      mailbox: 'sent'
    },
    {
      to: 'Henry Cooper',
      from: 'Danika Cooper',
      subject: 'Re: Re: Uncle Elliot',
      date: '6/15/16',
      text: "Hi Dad.  Thank you for the information.  I will also be at the memorial service.  I think it is probably unlikely, unfortunately, that I will make it to Maine July 4.  If it turns out I can make it I am happy to sleep on the floor or pullout couch or something.\n\nLove,\nDavid",
      mailbox: 'sent'
    },
    {
      to: 'Henry Cooper',
      from: 'David Cooper',
      subject: 'Re: Re: Uncle Elliot',
      date: '6/15/16',
      text: "Hey Dad,\n\nSorry, I just sent you an e-mail from a different e-mail address. Not how I meant to share with you my thoughts on a new name... in any case I am looking forward to seeing you and Mom next Saturday, despite the circumstances.\n\nLove,\nDavid",
      mailbox: 'sent'
    },
    {
      to: 'Henry Cooper',
      from: 'Danika Cooper',
      subject: 'Re: Thanksgiving',
      date: '10/28/16',
      text: "Hi Fam.  I'm trying to sort of follow the tide.  So I think if y'all will be there in December that's what I'll do too.  Plus, Mini’s grandma who lives an hour from Irvine has invited us for Thanksgiving, and Mini only has 4 days off.  So that seems like a good option for us.\nSorry to miss you guys for Thanksgiving, although I'm glad you have plans!",
      mailbox: 'sent'
    },
    {
      to: 'Henry Cooper',
      from: 'Danika Cooper',
      subject: 'Re: T Shirt',
      date: '8/24/17',
      text: "Hi Dad,\n\nI’m glad you like it!  I’m sorry it’s too small.  Unfortunately I made it myself! (Or rather, I paid someone online to make it).  I looked forever and ever for a real one but they just don’t exist anymore.\n\nIn any case, I will order you a large.  I’m sure there’s someone else in the family who will gladly take a medium (I think because it’s a custom made shirt they won’t take returns, but like I said, there’s got to be a Cooper or Fielder who would want it).",
      mailbox: 'sent'
    },
    {
      to: 'Henry Cooper',
      from: 'Danika Cooper',
      subject: 'News!!',
      date: '9/5/17',
      text: "IBM is flying me to VT for an interview!!\n\nSee you soon!\nLove,\nDanika",
      mailbox: 'drafts'
    },
    {
      to: 'Henry Cooper',
      from: 'Danika Cooper',
      subject: 'News!!',
      date: '9/5/17',
      text: "IBM is flying me to VT for an interview!!",
      mailbox: 'drafts'
    },
];

Email.create(emails, function(err, emails) {
	if(err) {
		throw err;
	} else {
		mongoose.connection.close();
	}
});
