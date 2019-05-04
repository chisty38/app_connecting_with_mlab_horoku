import { TestBed } from '@angular/core/testing';

import { VitalListService } from './vital-list.service';

describe('VitalListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VitalListService = TestBed.get(VitalListService);
    expect(service).toBeTruthy();
  });
});
