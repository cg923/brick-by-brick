import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailComponent } from '../email/email.component';
import { DocumentComponent } from '../document/document.component';
import { MenuComponent } from '../menu/menu.component';
import { NotificationComponent } from '../notification/notification.component';
import { EmailService } from '../email-service.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {
  @ViewChild(EmailComponent) email;
  @ViewChild(DocumentComponent) documents;

  results = false;
  finalReply = null;

  showLightMail() { 
  	this.email.showLightMail(); 
  	this.documents.hideDocuments();
  }

  showDocuments() { 
  	this.email.hideLightMail();
  	this.documents.showDocuments();
  }

  displayFinalReply(email) {
    if(email.replyOption === 1) {
      this.finalReply = {
        to: 'David Cooper',
        from: 'Henry Cooper',
        subject: 'Re: Update?',
        date: '9/6/17',
        text: "David, this is good news indeed. Love, Dad"
      };
    } else {
      this.finalReply = {
        to: 'Dana Cooper',
        from: 'Henry Cooper',
        subject: 'Re: Update?',
        date: '9/6/17',
        text: "David/Dana, this is good news indeed. I would prefer to call you David, but if that's a problem, you should let me know. Love, Dad"
      }
    }
  }

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emailService.replyObservable()
      .subscribe(reply => {
        this.results = true;
        setTimeout(() => {
          this.displayFinalReply(reply);
        }, 3000);
      });
  }
}
