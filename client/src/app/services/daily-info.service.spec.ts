import { TestBed } from '@angular/core/testing';

import { DailyInfoService } from './daily-info.service';

describe('DailyInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyInfoService = TestBed.get(DailyInfoService);
    expect(service).toBeTruthy();
  });
});
