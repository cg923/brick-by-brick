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
	  },
	  {
	    "name": "France",
	    "value": 7200000
	  }
  ];
  view: any[] = [700, 400];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
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
