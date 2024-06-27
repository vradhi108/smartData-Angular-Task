import { TestBed } from '@angular/core/testing';

import { RandomUseridGenerationService } from './random-userid-generation.service';

describe('RandomUseridGenerationService', () => {
  let service: RandomUseridGenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomUseridGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
