import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EmailService {

  baseUrl = 'http://localhost:3000';

  allEmails() {
  	return this.http.get(`${this.baseUrl}/emails`);
  }

  constructor(private http: Http) { }

}
