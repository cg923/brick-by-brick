import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EmailService {

  emails: FirebaseListObservable<any[]>;

  baseUrl = 'http://localhost:3000';

  allEmails() {
  	return this.emails;
  	//return this.http.get(`${this.baseUrl}/emails`);
  }

  //constructor(private http: Http) { }
  constructor(db: AngularFireDatabase) {
  	this.emails = db.list('/');
  }
}
