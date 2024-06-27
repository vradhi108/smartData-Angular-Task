import {inject} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateFn, ActivatedRoute, mapToCanActivate
} from '@angular/router';
import {catchError, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthServiceService } from './services/auth-service.service';

export const authLoginGuard: CanActivateFn = (route, state) => {

  const loginService = inject(AuthServiceService);
  const router = inject(Router);

  if (loginService.isAuthenticatedUser() == true){
    console.log("im in authguard checking its working or not");
    return true;
  }
  return false;
  
};
