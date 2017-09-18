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
  hiddenFiles = false;

  documents = [];
  hiddenDocuments = [];
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

  showHiddenFiles() {
    // Don't add more than once
    if(this.hiddenFiles) return;

    console.log(this.hiddenDocuments);

    this.hiddenDocuments.forEach(element => {
      this.documents.push(element);
    })

    this.hiddenFiles = true;
  }

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
  	this.documentService.allDocuments()
      .subscribe(docs => {
        docs.json().forEach(element => {
          if(element.hidden) this.hiddenDocuments.push(element);
          else this.documents.push(element);
        })
  	  });
  }
}
