import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email-service.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {

  }
}
