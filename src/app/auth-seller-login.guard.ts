import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';

export const authSellerLoginGuard: CanActivateFn = (route, state) => {
  const loginService = inject(AuthServiceService);
  const router = inject(Router);

  return loginService.isAuthenticatedSeller();
};
