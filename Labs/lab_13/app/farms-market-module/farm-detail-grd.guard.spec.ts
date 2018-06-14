import { TestBed, async, inject } from '@angular/core/testing';

import { FarmDetailGrdGuard } from './farm-detail-grd.guard';

describe('FarmDetailGrdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmDetailGrdGuard]
    });
  });

  it('should ...', inject([FarmDetailGrdGuard], (guard: FarmDetailGrdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
