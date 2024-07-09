import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authSellerLoginGuard } from './auth-seller-login.guard';

describe('authSellerLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authSellerLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
