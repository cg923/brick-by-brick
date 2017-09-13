import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { EmailService } from '../email-service.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  visible = false;

  emails = [];
  inboxEmails = [];
  draftEmails = [];
  sentEmails = [];
  trashEmails = [];
  incomingEmails = [];
  readEmails = 0;

  selected = null;
  mailbox = 'inbox';

  amISelected(email) {
    return this.selected === email;
  }

  selectEmail(email) {
  	this.selected = email;

    if(!this.selected.read) {
      this.readEmails++;
    }
    this.selected.read = true;

    // Triggers for incoming e-mails
    if(this.readEmails === 4 ||
       this.readEmails === 10 ||
       this.readEmails === 21) {
      this.incomingMail();
    }
  }

  selectMailbox(mailbox) { this.mailbox = mailbox; }

  inbox() { return this.mailbox === 'inbox'; }

  drafts() { return this.mailbox === 'drafts'; }

  sent() { return this.mailbox === 'sent'; }

  trash() { return this.mailbox === 'trash'; }

  hideLightMail() { this.visible = false; }

  showLightMail() { this.visible = true; }

  incomingMail() {
    let next = this.incomingEmails.pop();
    this.emailService.passEmail(next);
    this.inboxEmails.push(next);

    if(this.readEmails === 21) {
      this.draftEmails.push(  
        {
          to: 'Henry Cooper',
          from: 'Danika Cooper',
          subject: 'Re: Update?',
          date: '9/5/17',
          text: "IBM is flying me to VT for an interview!!\n\nSee you soon!\nLove,\nDanika",
          mailbox: 'drafts'
        },
        {
          to: 'Henry Cooper',
          from: 'Danika Cooper',
          subject: 'Re: Update?',
          date: '9/5/17',
          text: "IBM is flying me to VT for an interview!!",
          mailbox: 'drafts'
        });
    }
  }

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  	this.emailService.allEmails()
      .subscribe(emails => {
  		this.emails = emails.json();
  		this.emails.forEach(element => {
  			element.blurb = element.text.substring(0, 59);
  			if(element.text.length > 60) element.blurb += "...";
  			element.expanded = false;
        element.read = false;

        // Distribute into mailbox arrays.
        if(element.mailbox === 'inbox') this.inboxEmails.push(element);
        if(element.mailbox === 'drafts') this.draftEmails.push(element);
        if(element.mailbox === 'sent') this.sentEmails.push(element);
        if(element.mailbox === 'trash') this.trashEmails.push(element);
        if(element.mailbox === 'incoming') this.incomingEmails.push(element);
  		});
  	});
  }

}
