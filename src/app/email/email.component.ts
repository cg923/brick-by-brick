import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { EmailService } from '../email-service.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  emails = [];
  inboxEmails = [];
  draftEmails = [];
  junkEmails = [];
  trashEmails = [];

  selected = null;
  mailbox = 'inbox';

  amISelected(email) {
    return this.selected === email;
  }

  selectEmail(email) {
  	this.selected = email;
  }

  selectMailbox(mailbox) { this.mailbox = mailbox; }

  inbox() { return this.mailbox === 'inbox'; }

  drafts() { return this.mailbox === 'drafts'; }

  junk() { return this.mailbox === 'junk'; }

  trash() { return this.mailbox === 'trash'; }



  constructor(private emailService: EmailService) { }

  ngOnInit() {
  	this.emailService.allEmails().then(emails => {
  		this.emails = emails;
  		this.emails.forEach(element => {
  			element["blurb"] = element["text"].substring(0, 59);
  			if(element.text.length > 60) element["blurb"] += "...";
  			element.expanded = false;

        // Distribute into correct arrays.
        if(element.inbox) this.inboxEmails.push(element);
        if(element.draft) this.draftEmails.push(element);
        if(element.junk) this.junkEmails.push(element);
        if(element.trash) this.trashEmails.push(element);
  		});
  	});
  }

}
