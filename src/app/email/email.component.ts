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

  // Mailboxes
  emails = [];
  inboxEmails = [];
  draftEmails = [];
  sentEmails = [];
  trashEmails = [];
  incomingEmails = [];

  // Unread/Read counters
  readEmails = 0;
  inboxUnreads = 0;
  draftsUnreads = 0;
  sentUnreads = 0;
  trashUnreads = 0;

  // 'Current' values.
  selected = null;
  mailbox = 'inbox';

  amISelected(email) {
    return this.selected === email;
  }

  selectEmail(email) {
  	this.selected = email;

    if(!this.selected.read) {
      this.readEmails++;

      // Decrease unread count.
      switch(this.mailbox) {
        case 'inbox':
          this.inboxUnreads--;
          break;
        case 'drafts':
          this.draftsUnreads--;
          break;
        case 'sent':
          this.sentUnreads--;
          break;
        case 'trash':
          this.trashUnreads--;
          break;
      }
    }

    // Mark as read.
    this.selected.read = true;

    // Triggers for incoming e-mails
    if(this.readEmails === 4 ||
       this.readEmails === 18 ||
       this.readEmails === 23) {
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

    // Send email to service to pass to notifications
    this.emailService.passEmail(next);

    // Add reply button if it's the last e-mail
    if(this.incomingEmails.length === 0) next.reply = true;
 
    // Move incoming into inbox
    this.inboxEmails.push(next);
    this.inboxUnreads++;

    if(this.readEmails === 23) {
      this.draftsUnreads += 2;
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
          text: "IBM is flying me to VT for an interview!!\n\nSee you soon!",
          mailbox: 'drafts'
      });
      this.emailService.passEmail(this.draftEmails[0]);
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
        if(element.mailbox === 'inbox') {
          this.inboxEmails.push(element);
          this.inboxUnreads++;
        }
        if(element.mailbox === 'drafts') {
          this.draftEmails.push(element);
          this.draftsUnreads++;
        }
        if(element.mailbox === 'sent') {
          this.sentEmails.push(element);
          this.sentUnreads++;
        }
        if(element.mailbox === 'trash') {
          this.trashEmails.push(element);
          this.trashUnreads++;
        }
        if(element.mailbox === 'incoming') {
          this.incomingEmails.push(element);
        }
  		});
  	});
  }
}
