const mongoose    = require('mongoose');
const Email       = require('./models/email');
const Document    = require('./models/document');
const Reply       = require('./models/reply');

mongoose.connect(process.env.MONGODB_URI ||
				process.env.MONGOLAB_URI ||
				process.env.MONGOHQ_URL ||
				"mongodb://localhost/brickbybrick");

// Drop current databases
Email.remove({}, function(err) {
	if(err) throw err;
});

Document.remove({}, function(err) {
  if(err) throw err;
});

Reply.remove({}, function(err) {
  if(err) throw err;
});

// Reseed
let emails = [
	{
		to: 'David Cooper',
		from: 'Henry Cooper',
		subject: 'Letter',
		date: '4/30/16',
		text: 'David- We got your letter.  We love you. Our thoughts are with you in what must be a very difficult time.   We are of course in shock, and need some time to process this before we talk. Love, Dad',
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
    to: 'Dana Cooper',
    from: 'Laura Cooper',
    subject: 'Hmmm',
    date: '8/28/16',
    text: "We are watching Saturday Live  Their next subject isTransgender. Dad has to hide out somewhere else. He just can't deal. I hate to write this but you need to know. In order to keep him comfortable I refer to you as David but it grates on my honestly. We both are looking forward to your visit but you need to know his viewpoint. Please don't let this cause you not to come. We have to get this out there and if he has a problem then that's his loss.  I can't wait to see you both. Just don't expect the best reaction from Dad. He may totally be fine which would be awesome but another reaction is possible.  I really feel badly writing you, especially since he might be okay. I just want you to know that if he doesn't, you need to try to understand and stand your place as the person that you are.  Love you, Mom",
    mailbox: 'inbox'
  },
  {
    to: 'Dana Cooper',
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
    to: 'David Cooper',
    from: 'Henry Cooper',
    subject: 'Update?',
    date: '9/4/17',
    text: "David, you mentioned that you spoke to IBM last week.  Any news? Love, Dad",
    mailbox: 'incoming'
  },
  {
    to: 'Dana Cooper',
    from: 'Mini Martinez',
    subject: 'Re: HOLY SHITTTTTTTT',
    date: '9/3/17',
    text: "How did they find you?!?!\n\nWhat?! THAT'S AWESOME",
    mailbox: 'incoming'
  },
  {
    to: 'Dana Cooper',
    from: 'Netflix',
    subject: 'David, now is a great time to restart your membership',
    date: '9/2/17',
    text: 'You have HTML E-mails disabled. Click here to enable them.\n\nNETFLIX\nEnjoy Netflix Again\n\nNow is a great time to enjoy Netflix again. Watch TV shows & movies on your computer, phone, tablet or right to your TV. Start, pause and continue when you want. And remember, there are no ads or commercials!\n\nRestart Today!',
    mailbox: 'incoming'
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
    from: 'Dana Cooper',
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
    from: 'Dana Cooper',
    subject: 'Re: Thanksgiving',
    date: '10/28/16',
    text: "Hi Fam.  I'm trying to sort of follow the tide.  So I think if y'all will be there in December that's what I'll do too.  Plus, Mini’s grandma who lives an hour from Irvine has invited us for Thanksgiving, and Mini only has 4 days off.  So that seems like a good option for us.\nSorry to miss you guys for Thanksgiving, although I'm glad you have plans!",
    mailbox: 'sent'
  },
  {
    to: 'Henry Cooper',
    from: 'Dana Cooper',
    subject: 'Re: T Shirt',
    date: '8/24/17',
    text: "Hi Dad,\n\nI’m glad you like it!  I’m sorry it’s too small.  Unfortunately I made it myself! (Or rather, I paid someone online to make it).  I looked forever and ever for a real one but they just don’t exist anymore.\n\nIn any case, I will order you a large.  I’m sure there’s someone else in the family who will gladly take a medium (I think because it’s a custom made shirt they won’t take returns, but like I said, there’s got to be a Cooper or Fielder who would want it).",
    mailbox: 'sent'
  },
  {
    to: 'Mini Martinez',
    from: 'Dana Cooper',
    subject: 'HOLY SHITTTTTTTT',
    date: '9/3/17',
    text: "A RECRUITER FROM IBM JUST CALLED ME AND THEY WANT TO INTERVIEW ME RIGHT AWAY WTF AHHHHHHHHHH",
    mailbox: 'sent'
  },
];

let docs = [
  {
    title: 'People Who Know.doc',
    hidden: false,
    text: '6/26/17 ...EVERYONE!!!!\nPeople who know\nMini\nBen\nKat\nAnne\nJonathan\nRyan\nKatya\nSensei\nLisa\nJackie\nBrett\nRyan R.\nGreg\nEmber\nAJ\nErik\nDoug\nLisa\nElla\nSam\nAbby\nNick\nRoxann\nAunt Kara\nMiguel\nJake\nStephen\nMark'
  },
  {
    title: 'Letter.doc',
    hidden: false,
    text: "Dear Mom and Dad,\nYou’re probably surprised to see that I have written you a letter, especially when my phone calls are sporadic at best.  I wanted to share something with you, however, and I feel that a letter allows me to gather my thoughts and present them calmly and clearly.\nBefore I start" 
  },
  {
    title: "Untitled.doc",
    hidden: false,
    text: "Yes, I have shared this with people before.  But usually when I finish one of those conversations I have the terrifying feeling that I have been completely misunderstood.  Which of course is fucking ridiculous because it’s my job to present myself and look at the lies I just told.  I have never once told the whole truth, nothing but the truth, so help me God.  I suspect that no one has but I know for sure that I haven’t.\n\nAnd then I told you, but this time I said it differently. You reacted in all the right ways, but that wasn’t important because you’re a wonderful person and I knew you would say just what you said and react just the way you reacted.\n\nWhat was important was that each word that stumbled out of my lips, no matter how pained, was completely and utterly honest.  And when we finished, instead of that lingering feeling of regret that I had not come quite clean, that now you would think of me as some weirdo with a fetish and how could I possibly think it was appropriate for me to share that with you, I knew that you understood everything I was trying to say.  The conversation was so short because I didn’t have to qualify anything I said."
  },
  {
    title: "Note.doc",
    hidden: true,
    text: "Vulnerability\nDavid Cooper\n\nThe past year I have spent grappling with one central issue: whether to truly accept responsibility for my life.  On the mat and off, I reached crossroads that asked me to finally and firmly chose whether to take my life and my training into my own hands, or to let them both slip away from me, to hamper my own personal growth, to die.  My preparation for Nidan has been saying yes to being vulnerable, saying yes to the truth, and honoring uke and uke’s falling sword, whether uke is another person or myself.\n\nWithout Jonathan on the mat, the progress in my waza and ukemi over the past few years has had to come largely from internal exploration, rather than external feedback.  Though I am always looking to my peers and to Linda Sensei for inspiration and guidance, the nature of our current situation is that I am very rarely getting direct instruction on my Aikido.  When I was training for Shodan I was receiving constant feedback for hours a day, five to seven days a week, for almost a year from Jonathan and from other senior students.  I never had to figure out for myself how my Aikido needed to improve because there were always others telling me what I needed to do.\n\nWithout that support, my training for Nidan has meant stepping on the mat with the explicit intention of getting softer, standing up straighter, recognizing the direction of uke’s movement, moderating my ego, one of any number of things we all need in our lives and training.  It has also meant forgiving Jonathan for leaving the dojo and convincing myself to keep training.  These are, of course, ongoing and difficult processes, but my Aikido has become a more intentional, internally motivated experience.  I have accepted that in order to grow I need to be asking questions with every movement and pushing myself to be better and better, or I face stagnation in my training.  I hope that someday there will be a Sensei in my life that can push me again, give me an example to work toward, and help guide me toward the right challenges, but I know that this time in my life without that guidance will most likely not be unique.  And, I know that a Sensei cannot give me everything I need.  My training will always require this effort on my part if I am truly to grow.\n\nBut really, the difference between receiving external feedback and developing my own sense for the situation has not been a matter of physicality, but of spirit.  When Sensei is standing there telling us what to do, it requires little creativity on our part to try moving differently.  Without Sensei, it means opening ourselves to questions, and if we are to learn anything from those questions, to let our guard down so that we can see what’s really there instead of what we want to be there.  It means being open to the possibility that we might be (and often are) wrong, or at least not entirely correct.  It means being vulnerable.\n\nThe understanding of the importance of vulnerability and the determination to honor it have come slowly over time and are by no means a finished process, but the power to actually follow through has come not only from my training on the mat but from a very distinct and personal conflict.  I spent twenty eight years denying that I am transgender.  For a long time I simply didn’t have the emotional vocabulary to understand my feelings.  When those feelings turned into an existential question, I buried it as deep as I could. Whenever I asked the “what if?” question, my mind answered “that’s impossible. We’re not going there.”  In essence, my mind said, “No, we will not be vulnerable.”\n\nI am not sure why my heart finally answered the question instead of my brain.  Perhaps it was simply a matter of maturity, or perhaps it was a combination of circumstances, or maybe it was because I had run out of the energy to resist myself, but as I sat across from my boss that afternoon what I meant to say was, “I’m not in a good place right now.”  Instead, I said, “I think I am actually female.”\n\nIt was true.  It felt too good not to be true.  It was so obvious that it was fundamental and it blew the door wide open.  I did not chose to be vulnerable in that moment, it simply happened, but it gave me an incredible opportunity to love myself, an opportunity I am not sure I had ever had before.  It is that same vulnerability that must be present, I believe, in our training in order to truly do Aikido.  We have to detach ourselves from the conviction that our waza is good, or correct, or whatever praise we give ourselves.  Aikido is about trying to ask questions without preconceived notions of the result, and without investing our egos into the outcome.  It is about listening, not speaking.  Jonathan said in my first semester at Middlebury that we were looking at Aikido as a way to foster constructive disagreement in the classroom.  We had to argue the idea, not our point of view.  We had to see the conflict as separate from our reputation, from our sense of personal satisfaction, from our desire to win.  We have to be able to stand across from a white belt we don’t know, who just doesn’t seem to move no matter what we do, and feel joy and openness at the opportunity to listen, instead of determination to show them what’s what.\n\nOn the mat I am trying to learn how to listen to others.  To feel their intention, direction, and energy and to remove my commitment to a specific outcome.  I am listening to myself as well, of course, because I have helped to create this conflict.  My energy, my posture, my disposition are all affecting this interaction and my awareness should extend in all directions, including internally and externally.  Perhaps, though, off the mat I have spent time listening to others but have just begun listening to myself.  There has never been someone to point out to me, “you are transgender,” the way Jonathan used to point out, “your foot should be there, not there,” but I have often focused my intention on others, probably to avoid focusing on myself.  Teaching in a school and teaching Aikido have always brought me great joy because I’ve been able to watch kids grow through their own struggles.  But now I can finally begin to work on myself.  So I have been trying to look at this conflict with new eyes, to remove my personal agenda from the situation, the incessant, “No, no! It isn’t true!” so that the truth might finally emerge.\n\nI need to be vulnerable and allow the thoughts to speak that I never wanted to hear, or else I may as well not bother living.  Denying who I am is the same as telling that white belt, “I know what’s best and that’s that. Do it this way.”  It’s just as dangerous as meeting uke and not honoring their movement fully.  It’s just as dangerous as not honoring the cutting blade of a sword.  That is to say: it is life or death.  Either we face ourselves head on and honor the truth, or we are cut in two.  And when we do choose to be vulnerable we give ourselves room to grow, to be compassionate, and to do Aikido.  That is what I want to do.  That is why I have trained for Nidan."
    
  }
];

Email.create(emails, function(err, emails) {
	if(err) throw err;

  // Lives inside Email.create to ensure both
  // happen before exiting.
  Document.create(docs, function(err, docs) {
    if(err) throw err;
    else mongoose.connection.close();
  });
});
