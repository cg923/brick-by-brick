import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  visible = false;
  documentVisible = false;
  hiddenFiles = false;

  documents = [];
  currentDocument;

  hideDocuments() { 
    this.visible = false; 
    this.documentVisible = false;
  }

  showDocuments() { 
    this.visible = true; 
    this.documentVisible = false;
  }

  openDocument(document) {
    this.documentVisible = true;
    this.currentDocument = document;
    this.visible = false;
  }

  closeDocument() { 
    this.documentVisible = false;
    this.visible = true;
  }

  showHiddenFiles() {
    // Don't add more than once
    if(this.hiddenFiles) return;

    this.documents.push({
      title: "Note.doc",
      hidden: true,
      text: "Vulnerability\nDavid Cooper\n\nThe past year I have spent grappling with one central issue: whether to truly accept responsibility for my life.  On the mat and off, I reached crossroads that asked me to finally and firmly chose whether to take my life and my training into my own hands, or to let them both slip away from me, to hamper my own personal growth, to die.  My preparation for Nidan has been saying yes to being vulnerable, saying yes to the truth, and honoring uke and uke’s falling sword, whether uke is another person or myself.\n\nWithout Jonathan on the mat, the progress in my waza and ukemi over the past few years has had to come largely from internal exploration, rather than external feedback.  Though I am always looking to my peers and to Linda Sensei for inspiration and guidance, the nature of our current situation is that I am very rarely getting direct instruction on my Aikido.  When I was training for Shodan I was receiving constant feedback for hours a day, five to seven days a week, for almost a year from Jonathan and from other senior students.  I never had to figure out for myself how my Aikido needed to improve because there were always others telling me what I needed to do.\n\nWithout that support, my training for Nidan has meant stepping on the mat with the explicit intention of getting softer, standing up straighter, recognizing the direction of uke’s movement, moderating my ego, one of any number of things we all need in our lives and training.  It has also meant forgiving Jonathan for leaving the dojo and convincing myself to keep training.  These are, of course, ongoing and difficult processes, but my Aikido has become a more intentional, internally motivated experience.  I have accepted that in order to grow I need to be asking questions with every movement and pushing myself to be better and better, or I face stagnation in my training.  I hope that someday there will be a Sensei in my life that can push me again, give me an example to work toward, and help guide me toward the right challenges, but I know that this time in my life without that guidance will most likely not be unique.  And, I know that a Sensei cannot give me everything I need.  My training will always require this effort on my part if I am truly to grow.\n\nBut really, the difference between receiving external feedback and developing my own sense for the situation has not been a matter of physicality, but of spirit.  When Sensei is standing there telling us what to do, it requires little creativity on our part to try moving differently.  Without Sensei, it means opening ourselves to questions, and if we are to learn anything from those questions, to let our guard down so that we can see what’s really there instead of what we want to be there.  It means being open to the possibility that we might be (and often are) wrong, or at least not entirely correct.  It means being vulnerable.\n\nThe understanding of the importance of vulnerability and the determination to honor it have come slowly over time and are by no means a finished process, but the power to actually follow through has come not only from my training on the mat but from a very distinct and personal conflict.  I spent twenty eight years denying that I am transgender.  For a long time I simply didn’t have the emotional vocabulary to understand my feelings.  When those feelings turned into an existential question, I buried it as deep as I could. Whenever I asked the “what if?” question, my mind answered “that’s impossible. We’re not going there.”  In essence, my mind said, “No, we will not be vulnerable.”\n\nI am not sure why my heart finally answered the question instead of my brain.  Perhaps it was simply a matter of maturity, or perhaps it was a combination of circumstances, or maybe it was because I had run out of the energy to resist myself, but as I sat across from my boss that afternoon what I meant to say was, “I’m not in a good place right now.”  Instead, I said, “I think I am actually female.”\n\nIt was true.  It felt too good not to be true.  It was so obvious that it was fundamental and it blew the door wide open.  I did not chose to be vulnerable in that moment, it simply happened, but it gave me an incredible opportunity to love myself, an opportunity I am not sure I had ever had before.  It is that same vulnerability that must be present, I believe, in our training in order to truly do Aikido.  We have to detach ourselves from the conviction that our waza is good, or correct, or whatever praise we give ourselves.  Aikido is about trying to ask questions without preconceived notions of the result, and without investing our egos into the outcome.  It is about listening, not speaking.  Jonathan said in my first semester at Middlebury that we were looking at Aikido as a way to foster constructive disagreement in the classroom.  We had to argue the idea, not our point of view.  We had to see the conflict as separate from our reputation, from our sense of personal satisfaction, from our desire to win.  We have to be able to stand across from a white belt we don’t know, who just doesn’t seem to move no matter what we do, and feel joy and openness at the opportunity to listen, instead of determination to show them what’s what.\n\nOn the mat I am trying to learn how to listen to others.  To feel their intention, direction, and energy and to remove my commitment to a specific outcome.  I am listening to myself as well, of course, because I have helped to create this conflict.  My energy, my posture, my disposition are all affecting this interaction and my awareness should extend in all directions, including internally and externally.  Perhaps, though, off the mat I have spent time listening to others but have just begun listening to myself.  There has never been someone to point out to me, “you are transgender,” the way Jonathan used to point out, “your foot should be there, not there,” but I have often focused my intention on others, probably to avoid focusing on myself.  Teaching in a school and teaching Aikido have always brought me great joy because I’ve been able to watch kids grow through their own struggles.  But now I can finally begin to work on myself.  So I have been trying to look at this conflict with new eyes, to remove my personal agenda from the situation, the incessant, “No, no! It isn’t true!” so that the truth might finally emerge.\n\nI need to be vulnerable and allow the thoughts to speak that I never wanted to hear, or else I may as well not bother living.  Denying who I am is the same as telling that white belt, “I know what’s best and that’s that. Do it this way.”  It’s just as dangerous as meeting uke and not honoring their movement fully.  It’s just as dangerous as not honoring the cutting blade of a sword.  That is to say: it is life or death.  Either we face ourselves head on and honor the truth, or we are cut in two.  And when we do choose to be vulnerable we give ourselves room to grow, to be compassionate, and to do Aikido.  That is what I want to do.  That is why I have trained for Nidan."
    });

    this.hiddenFiles = true;
  }

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
  	this.documentService.allDocuments()
      .subscribe(docs => {
  		this.documents = docs.json();
  	  });
  }
}
