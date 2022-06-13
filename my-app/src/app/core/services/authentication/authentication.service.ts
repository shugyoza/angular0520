import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable
  , ReplaySubject
  , Subject } from 'rxjs';
import jwtDecode from 'jwt-decode';

import { User_ } from '../../../shared/models/User';
import { url } from '../../../shared/utils/url';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // ReplaySubject has similar trait with BehaviorSubject, and does not need initial value
  public user$: Subject<User_> = new ReplaySubject<User_>();
  public isLoggedIn: boolean = false;
  public isAdmin: boolean = false;

  constructor(
      private http: HttpClient
    , private _router: Router) { }

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
          if (response.userRole === 'admin') this.isAdmin = true;
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
