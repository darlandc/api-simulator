import { TestBed } from '@angular/core/testing';

import { ApiSimulatorService } from './api-simulator.service';

describe('ApiSimulatorService', () => {
  let service: ApiSimulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSimulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
