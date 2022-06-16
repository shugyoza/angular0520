import { Injectable, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common'; // this is used for cookie
import {
    Route
  , Router
  , CanActivate
  , ActivatedRouteSnapshot
  , RouterStateSnapshot
  , UrlTree
} from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
// import { CookieService } from 'src/app/core/services/cookie/cookie.service';
import { LocalStorageService } from 'src/app/core/services/localStorage/local-storage.service';
import { nowInUnix } from 'src/app/shared/utils/functions';

@Injectable({
  providedIn: 'root'
})

export class CanActivateGuardService implements CanActivate {

  constructor(
      private _router: Router
//    , @Inject(DOCUMENT) public document: Document // used for cookie
    , private authenticationService: AuthenticationService
    , private localStorage: LocalStorageService
    // , private cookie: CookieService
  ) { }

  public canActivate(
    route: ActivatedRouteSnapshot
    , state: RouterStateSnapshot
  ): boolean | UrlTree {
    console.log('canActivate(): ', this.authenticationService.isLoggedIn, this.localStorage.log)
    if (
      this.authenticationService.isLoggedIn ||
      (this.localStorage.log && this.localStorage.log.expire > nowInUnix())
      ) {
        console.log(this.localStorage.log, nowInUnix(), this.localStorage.log.expire > nowInUnix())
        return true;
      }
    alert('You have not logged in, redirected to Login.');
    this._router.navigate(['login'], { queryParams: { retUrl: route.url } });
    return false
  }

  /* using cookie
  canActivate(
      route: ActivatedRouteSnapshot
    , state: RouterStateSnapshot): boolean | UrlTree {
      const name = this.document.cookie.split('=')[1]
      console.log(this.authenticationService.isLoggedIn, this.cookie.isLoggedIn() )
      console.log('canActivate(): ', 'authentication.isLoggedIn: ', this.authenticationService.isLoggedIn, 'cookie: ', this.document.cookie, 'cookie.isLoggedIn: ', this.cookie.isLoggedIn())

      if (this.authenticationService.isLoggedIn === true || this.cookie.isLoggedIn() === true) return true;
      else {
        alert('You have not logged in, redirected to Login.');
        this._router.navigate(['login'], { queryParams: { retUrl: route.url } });
        return false;
      }
    }
    */
}

/*
  constructor(@Inject(DOCUMENT) public document: Document) { }

*/

/* REFACTORED
  canActivate(
      route: ActivatedRouteSnapshot
    , state: RouterStateSnapshot): boolean | UrlTree {
      const name = this.document.cookie.split('=')[1]
      console.log('can-activate: ', this.authenticationService.isLoggedIn, this.document.cookie, this.document.cookie.length, name)
      if (this.authenticationService.isLoggedIn === false && name !== 'Tham Kench') {
        alert('You have not logged in, redirected to Login.');

        this._router.navigate(['login'], { queryParams: { retUrl: route.url } });
        return false;
      }
      return true;
    }
    */
