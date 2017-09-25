import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  // ----- CHART ----- //
  results = [
    {
      "name": "See you soon!!",
      "value": 1
    },
    {
      "name": "See you soon!!\nLove, Dana",
      "value": 1
    }
  ];
  view: any[] = [400, 400];

  // options
  showLegend = false;

  colorScheme = {
    domain: ['red', 'blue']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  gradient = false;

  onSelect(event) {
  }

  constructor(private emailService: EmailService) {
  }

  ngOnInit() {
    // Pull statistics
    this.emailService.stats()
      .subscribe(response => {
        console.log(response["_body"]);
        response = JSON.parse(response["_body"]);
        console.log(response[0]);
        console.log(response[1]);
        this.results = [
          {
            "name": "...",
            "value": response[0]
          },
          {
            "name": "Love, Dana",
            "value": response[1]
          }
        ]
      });
  }

}
