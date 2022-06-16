import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable
  , BehaviorSubject
  , ReplaySubject
  , Subject } from 'rxjs';
import jwtDecode from 'jwt-decode';

// import { CookieService } from 'src/app/core/services/cookie/cookie.service';
import { LocalStorageService } from 'src/app/core/services/localStorage/local-storage.service';
import { User_ } from '../../../shared/models/User';
import { url } from '../../../shared/utils/url';
import { setExpireInUnix } from '../../../shared/utils/functions';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // ReplaySubject has similar trait with BehaviorSubject, and does not need initial value
  public user$: Subject<User_> = new ReplaySubject<User_>();
  public isLoggedIn: boolean = false;
  public isAdmin: boolean = false;
  public isLoggedIn$ = new BehaviorSubject(false);
  public isAdmin$ = new BehaviorSubject(false);


  constructor(
      private http: HttpClient
    , private _router: Router
//    , private cookie: CookieService
    , public localStorage: LocalStorageService
    ) { }

  // method to check if a given _id is valid of a User_, returns a User_ observable
  checkID(userID: string): Observable<User_> {
    return this.http
      .get<User_>
      (`${url.api.base}/${url.api.register.route}/${url.api.register.path.getUserById}/${userID}`)
  }

  // method to check if a usermail has already been registered in the database, returns a boolean
  checkUserEmail(userEmail: string): Observable<boolean> {
    return this.http
      .get<boolean>
      (`${url.api.base}/${url.api.register.route}/${url.api.register.path.checkEmail}/${userEmail}`)
  }

  // method to check if a username already exist in the database, returns a boolean
  checkUserName(userName: string): Observable<boolean> {
    return this.http
      .get<boolean>
      (`${url.api.base}/${url.api.register.route}/${url.api.register.path.checkUsername}/${userName}`)
  }

  // method to get a user with given email and password, returns a subscription
  fetchUser(userEmail: string, password: string) {
    return this.http
      .post<User_> // model that gets the _id
        (`${url.api.base}/${url.api.login.route}`, { userEmail, password })
      .subscribe({
        next: (response: any) => {
          const jwtToken = response.bearerToken;
          const decoded: User_ = jwtDecode(jwtToken);
          this.user$.next(decoded);
          this.isLoggedIn = true;
          this.isLoggedIn$.next(true);  // do we need observable or not as our tracker?

          // changed cookie into localStorage
//          this.cookie.value = this.cookie.createToken('token', jwtToken, 24*60*60); // 24hrsX60minsX60secs
//          console.log('fetchUser(), this.cookie.value: ', this.cookie.value)

          const expiration = setExpireInUnix(24 * 60 * 60);
          this.localStorage.log = {
            token: jwtToken,
            expire: `${expiration}` // for more security this can be hashed
          }

          if (response.userRole === 'admin') {
            this.isAdmin = true;
            this.isAdmin$.next(true); // do we need observable or not as our tracker?
            }
          console.log('log created: ', this.localStorage.log);
          this._router.navigate(['feed']);
        },
        error: (err: Error) => console.error('fetchUser() fails: ', err),
        complete: () => console.log('fetchUser() completed')
      })
  }

  // method to register a new user in the database, returns a User_ observable
  registerNewUser(userEmail: string, userName: string, password: string): Observable<User_> {
    return this.http
      .post<User_>
        (`${url.api.base}/${url.api.register.route}/${url.api.register.path.createUser}`, { userEmail, userName, password })
  }

}
