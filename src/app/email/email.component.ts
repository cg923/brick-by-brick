import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { EmailService } from '../email-service.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  visible = true;

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

  hideLightMail() { this.visible = false; }

  showLightMail() { this.visible = true; }

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  	this.emailService.allEmails()
      .subscribe(emails => {
      console.log(emails.json());
  		this.emails = emails.json();
  		this.emails.forEach(element => {
  			element["blurb"] = element["text"].substring(0, 59);
  			if(element.text.length > 60) element["blurb"] += "...";
  			element.expanded = false;

        // Distribute into mailbox arrays.
        if(element.mailbox === 'inbox') this.inboxEmails.push(element);
        if(element.mailbox === 'drafts') this.draftEmails.push(element);
        if(element.mailbox === 'junk') this.junkEmails.push(element);
        if(element.mailbox === 'trash') this.trashEmails.push(element);
  		});
  	});
  }

}
