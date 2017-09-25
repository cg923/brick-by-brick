import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  email;
  appearing = false;
  visible = false;
  disappearing = false;

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
        this.appearing = true;

        // After a second, stay visible.
        setTimeout(() => {
          this.visible = true;
          this.appearing = false;

          // After three seconds, disappear.
          setTimeout(() => {
            this.disappearing = true;
            this.visible = false;

            // After a second, reset.
            setTimeout(() => {
              this.disappearing = false;
              this.email = null;
            }, 1000)
          }, 3000);
        }, 1000);
      });
  }
}
