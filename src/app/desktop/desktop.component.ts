import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailComponent } from '../email/email.component';
import { DocumentComponent } from '../document/document.component';
import { EmailService } from '../email-service.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {
  @ViewChild(EmailComponent) email;
  @ViewChild(DocumentComponent) documents;

  showLightMail() { 
  	this.email.showLightMail(); 
  	this.documents.hideDocuments();
  }

  showDocuments() { 
  	this.email.hideLightMail();
  	this.documents.showDocuments();
  }

  constructor(private emailService: EmailService) { }

  ngOnInit() {

  }
}
