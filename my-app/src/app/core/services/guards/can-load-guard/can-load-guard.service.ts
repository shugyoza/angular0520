import { Injectable } from '@angular/core';
import {
    Route
  , Router
  , CanLoad
} from'@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class CanLoadGuardService implements CanLoad {

  constructor(
    private _router: Router
    , private authenticationService: AuthenticationService
  ) { }

  canLoad(route: Route): boolean {

    let url: string | undefined = route.path;
    console.log('URL: ', url);

    if (!url) return false;

    if (url === 'admin' && this.authenticationService.isLoggedIn === false) {
      alert('You have not logged in, redirected to Login.');
      this._router.navigate(['login'], { queryParams: { retUrl: url } });
      return false;
      }

    if (url === 'admin' && this.authenticationService.isAdmin === false) {
      alert('You are not an admin, redirected to Feed.');
      this._router.navigate(['feed'], { queryParams: { retUrl: url } });
      return false;
      }
    return true;
  }
}
