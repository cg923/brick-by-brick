import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  visible = false;

  documents = [];

  hideDocuments() { this.visible = false; }

  showDocuments() { this.visible = true; }

  constructor() { }

  ngOnInit() {
  }

}
