import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  single = [
  	  {
    	"name": "Germany",
    	"value": 8940000
	  },
	  {
	    "name": "USA",
	    "value": 5000000
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

  onSelect(event) {
    console.log(event);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
