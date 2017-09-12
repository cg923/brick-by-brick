import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EmailService {

  emails: FirebaseListObservable<any[]>;

  allEmails() {
  	return this.emails;
  }

  constructor(db: AngularFireDatabase) {
  	this.emails = db.list('/');
  }
}
