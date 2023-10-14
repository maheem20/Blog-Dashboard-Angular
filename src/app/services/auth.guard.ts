import { CanActivateFn, mapToCanActivate } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  constructor(private authService: AuthService) {}

  mapToCanActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | UrlTree | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.authService.isLoggedIn()) {
        return true;
      } else {
        return false;
      }
  }
};
