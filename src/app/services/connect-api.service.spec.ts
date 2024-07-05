import { TestBed } from '@angular/core/testing';

import { ConnectAPIService } from './connect-api.service';

describe('ConnectAPIService', () => {
  let service: ConnectAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
