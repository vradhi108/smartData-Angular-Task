import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const loginService = inject(AuthServiceService);
  const router = inject(Router);

  if (loginService.isAuthenticatedAdmin() == true){
    return true;
  }
  else return false;
  
};
