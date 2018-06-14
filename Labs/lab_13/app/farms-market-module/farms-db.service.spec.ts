import { TestBed, inject } from '@angular/core/testing';

import { FarmsDBService } from './farms-db.service';

describe('FarmsDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmsDBService]
    });
  });

  it('should be created', inject([FarmsDBService], (service: FarmsDBService) => {
    expect(service).toBeTruthy();
  }));
});
