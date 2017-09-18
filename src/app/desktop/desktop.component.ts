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

  // VIEWS
  showArrow = true;
  titleScreen = true;
  hideTitle = false;
  fadeIn = false;

  menuLeft = "0px";
  menuTop = "0px";
  menuOpen = false;

  // WINDOW EVENTS
  @HostListener("window:scroll", ["$event"])

  // This function hides the scroll arrow when user
  // has reached the bottom of the document.
  onWindowScroll() {
    if(!this.results) return;

    // Calculate current scroll position
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;

    // TODO - Booo hardcoded numbers >:(
    if(pos >= 2500) {
      this.showArrow = false;
    }
  }

  // MENU
  openMenu($event) {
    // Disable OS menu
    $event.preventDefault();

    // Should only be available in the "desktop"
    if(this.results || this.titleScreen || this.fadeIn)
      return;

    // Open menu and get mouse coordinates.
    this.menuOpen = true;
    this.menuLeft = $event.clientX + "px";
    this.menuTop = $event.clientY + "px";
  }

  closeMenu() {
    this.menuOpen = false;
  }

  showFiles() {
    this.menuOpen = false;
    this.documents.showHiddenFiles();
  }

  // OTHER

  // For accessing child elements.
  @ViewChild(EmailComponent) email;
  @ViewChild(DocumentComponent) documents;

  results = false;
  finalReply = null;
  replyOption = null;
  lightMailSelected = false;
  documentsSelected = false;

  showLightMail() { 
    this.hideTitle = true;
    this.lightMailSelected = true;
    this.documentsSelected = false;
  	this.email.showLightMail(); 
  	this.documents.hideDocuments();
  }

  showDocuments() {
    this.documentsSelected = true;
    this.lightMailSelected = false;
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
  }

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    // Display title screen and then transition
    setTimeout(() => {
      this.titleScreen = false;
      this.fadeIn = true;
      setTimeout(() => {
        this.fadeIn = false;
      }, 3000);
    }, 3000);

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
