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

  showLightMail() { 
  	this.email.showLightMail(); 
  	this.documents.hideDocuments();
  }

  showDocuments() { 
  	this.email.hideLightMail();
  	this.documents.showDocuments();
  }

  changeToResults() {
    this.results = true;
  }

  constructor(private emailService: EmailService) { }

  ngOnInit() {

  }
}
