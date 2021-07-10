import { TestBed } from '@angular/core/testing';

import { GetwineService } from './getwine.service';

describe('GetwineService', () => {
  let service: GetwineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetwineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
