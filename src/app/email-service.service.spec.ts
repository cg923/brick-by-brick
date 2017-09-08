import { TestBed, inject } from '@angular/core/testing';

import { EmailService } from './email-service.service';

describe('EmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailServiceService]
    });
  });

  it('should be created', inject([EmailServiceService], (service: EmailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
