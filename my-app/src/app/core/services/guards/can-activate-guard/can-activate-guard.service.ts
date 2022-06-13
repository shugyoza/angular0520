import { Injectable } from '@angular/core';
import {
    Route
  , Router
  , CanActivate
  , ActivatedRouteSnapshot
  , RouterStateSnapshot
  , UrlTree
} from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class CanActivateGuardService implements CanActivate {

  constructor(
      private _router: Router
    , private authenticationService: AuthenticationService
  ) { }

  canActivate(
      route: ActivatedRouteSnapshot
    , state: RouterStateSnapshot): boolean | UrlTree {

      if (this.authenticationService.isLoggedIn === false) {
        alert('You have not logged in, redirected to Login.');

        this._router.navigate(['login'], { queryParams: { retUrl: route.url } });
        return false;
      }
      return true;
    }

}
