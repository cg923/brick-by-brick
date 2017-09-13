import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DocumentService {

  baseUrl = 'http://localhost:3000';

  allDocuments() {
  	return this.http.get(`${this.baseUrl}/documents`);
  }

  constructor(private http: Http) { }

}
