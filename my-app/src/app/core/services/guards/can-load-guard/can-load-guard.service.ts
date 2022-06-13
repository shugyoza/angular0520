import { Injectable } from '@angular/core';
import {
    Router
  , CanLoad
  , ActivatedRouteSnapshot
  , RouterStateSnapshot
  , UrlTree
} from'@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class CanLoadGuardService implements CanLoadGuardService {

  constructor(
    private _router: Router
    , private authenticationService: AuthenticationService
  ) { }

  canLoad(
      route: ActivatedRouteSnapshot
    , state: RouterStateSnapshot): boolean | UrlTree {

      if (!this.authenticationService.isAdmin) {
        alert('You are not an admin, redirected to Feed.');

        this._router.navigate(['feed'], { queryParams: {retUrl: route.url } });
        return false;
      }
      return true;
  }
}
