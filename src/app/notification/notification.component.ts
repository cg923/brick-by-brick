import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  email;

  receiveEmail(email) {
  	this.email = email;
  }

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  	this.emailService.emailObservable()
      .subscribe(email => {
        // Data
      	this.email = email.email;
        this.email.subject = this.email.subject.substr(0, 30) + '...';

        // CSS animation variables.
      });
  }
}
