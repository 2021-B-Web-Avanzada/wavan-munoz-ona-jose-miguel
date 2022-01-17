import { TestBed } from '@angular/core/testing';

import { UserJPHServiceService } from './user-jphservice.service';

describe('UserJPHServiceService', () => {
  let service: UserJPHServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserJPHServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
