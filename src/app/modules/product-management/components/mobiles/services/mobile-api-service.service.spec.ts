import { TestBed } from '@angular/core/testing';

import { MobileApiService } from './mobile-api.service';

describe('MobileApiService', () => {
  let service: MobileApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
