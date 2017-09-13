import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  visible = false;
  documentVisible = false;

  documents = [];
  currentDocument;

  hideDocuments() { 
    this.visible = false; 
    this.documentVisible = false;
  }

  showDocuments() { 
    this.visible = true; 
    this.documentVisible = false;
  }

  openDocument(document) {
    this.documentVisible = true;
    this.currentDocument = document;
    this.visible = false;
  }

  closeDocument() { 
    this.documentVisible = false;
    this.visible = true;
  }

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
  	this.documentService.allDocuments()
      .subscribe(docs => {
  		this.documents = docs.json();
  	  });
  }
}
