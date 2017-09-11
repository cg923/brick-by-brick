import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {

  emails = [
  	{
      id: 1,
  		to: 'Greg Selover',
  		from: 'Dad',
  		subject: 'Letter',
  		date: '4/30/16',
  		text: 'Greg- We got your letter.  We love you. Our thoughts are with you in what must be a very difficult time.   We are of course in shock, and need some time to process this before we talk. Love, Dad',
  	  inbox: true,
      draft: false,
      junk: false,
      trash: false
    },
  	{
      id: 2,
  		to: 'Corey Selover',
  		from: 'Mom',
  		subject: 'Re: News!!',
  		date: '9/6/17',
  		text: 'HOORAY!',
      inbox: true,
      draft: false,
      junk: false,
      trash: false
  	},
    {
      id: 3,
      to: 'Corey Selover',
      from: 'Mom',
      subject: 'Re: News!!',
      date: '9/6/17',
      text: 'HOORAY!',
      inbox: true,
      draft: false,
      junk: false,
      trash: false
    },
    {
      id: 4,
      to: 'Corey Selover',
      from: 'Mom',
      subject: 'Re: News!!',
      date: '9/6/17',
      text: 'HOORAY!',
      inbox: false,
      draft: false,
      junk: false,
      trash: true
    },
    {
      id: 5,
      to: 'Corey Selover',
      from: 'Mom',
      subject: 'Re: News!!',
      date: '9/6/17',
      text: 'HOORAY!',
      inbox: false,
      draft: false,
      junk: true,
      trash: false
    },
    {
      id: 6,
      to: 'Corey Selover',
      from: 'Mom',
      subject: 'Re: News!!',
      date: '9/6/17',
      text: 'HOORAY!',
      inbox: false,
      draft: true,
      junk: false,
      trash: false
    }
  ]

  allEmails(): Promise<any[]> {
  	return Promise.resolve(this.emails);
  }

  constructor() { }

}
