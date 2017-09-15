import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { EmailComponent } from '../email/email.component';
import { DocumentComponent } from '../document/document.component';
import { MenuComponent } from '../menu/menu.component';
import { NotificationComponent } from '../notification/notification.component';
import { ResultsComponent } from '../results/results.component';
import { EmailService } from '../email-service.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  showArrow = true;

  @HostListener("window:scroll", ["$event"])

  // This function hides the scroll arrow when user
  // has reached the bottom of the document.
  onWindowScroll() {
    if(!this.results) return;

    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;

    // TODO - Booo hardcoded numbers >:(
    if(pos >= 2500) {
      this.showArrow = false;
    }
  }

  @ViewChild(EmailComponent) email;
  @ViewChild(DocumentComponent) documents;

  results = false;
  finalReply = null;
  replyOption = null;

  showLightMail() { 
  	this.email.showLightMail(); 
  	this.documents.hideDocuments();
  }

  showDocuments() { 
  	this.email.hideLightMail();
  	this.documents.showDocuments();
  }

  displayFinalReply(replyOption) {
    // Choose final response
    if(replyOption === 1) {
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

    // Pull statistics
    this.emailService.stats()
      .subscribe(response => {
        console.log(response);
      });
  }

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emailService.replyObservable()
      .subscribe(reply => {
        this.results = true;
        this.replyOption = reply.reply.replyOption;
        setTimeout(() => {
          this.displayFinalReply(this.replyOption);
        }, 3000);
      });
  }
}
