import { TestBed, inject } from '@angular/core/testing';

import { UsersServService } from './users-serv.service';

describe('UsersServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersServService]
    });
  });

  it('should be created', inject([UsersServService], (service: UsersServService) => {
    expect(service).toBeTruthy();
  }));
});
