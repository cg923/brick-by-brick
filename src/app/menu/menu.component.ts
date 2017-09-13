import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentTime = new Date();

  constructor() { }

  ngOnInit() {
  	setInterval(()=> {
  		this.currentTime = new Date();
  	});
  }

}
