import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email-service.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  emails = [];
  selected = null;

  selectEmail(email) {
  	this.selected = email;
  	console.log(this.selected);
  }

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  	this.emailService.allEmails().then(emails => {
  		this.emails = emails;
  		this.emails.forEach(element => {
  			element["blurb"] = element["text"].substring(0, 59);
  			if(element["text"].length > 60) element["blurb"] += "...";
  			element["expanded"] = false;
  		});
  	});
  }

}
