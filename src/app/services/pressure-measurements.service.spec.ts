import { TestBed } from '@angular/core/testing';

import { PressureMeasurementsService } from './pressure-measurements.service';

describe('PressureMeasurementsService', () => {
  let service: PressureMeasurementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PressureMeasurementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
