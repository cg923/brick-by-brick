import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EmailService {

  // Passing emails for notification purposes.
  private passedEmail = new Subject<any>();

  // Passing email for end of game.
  private passedReply = new Subject<any>();

  passEmail(email) {
  	this.passedEmail.next({email: email})
  }

  emailObservable(): Observable<any> {
  	return this.passedEmail.asObservable();
  }

  passReply(reply) {
    this.passedReply.next({reply: reply});
  }

  replyObservable(): Observable<any> {
    return this.passedReply.asObservable();
  }

  // HTTP requests to the back end.
  //baseUrl = 'http://localhost:3000';
  baseUrl = "";

  allEmails() {
  	return this.http.get(`${this.baseUrl}/emails`);
  }

  postReply(email) {
    return this.http.post(`${this.baseUrl}/replies`, email);
  }

  constructor(private http: Http) { }

}
