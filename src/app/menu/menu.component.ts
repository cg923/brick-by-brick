import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentTime;
  formattedTime;
  menuVisible = false;

  showMenu() {
    this.menuVisible = !this.menuVisible;
  }

  constructor() { }

  ngOnInit() {
  	setInterval(()=> {
  		this.currentTime = new Date();
      this.formattedTime = ('0' + this.currentTime.getHours()).slice(-2) + ':' +
                           ('0' + this.currentTime.getMinutes()).slice(-2) + ':' +
                           ('0' + this.currentTime.getSeconds()).slice(-2);
  	});
  }

}
