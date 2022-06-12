import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable
  , of
  , BehaviorSubject
  , AsyncSubject
  , from
  , Subject } from 'rxjs';
import { UserService } from 'src/app/core/services/user/user.service';
import { User, User_, dummyUser } from '../../../shared/models/User';
import { url } from '../../../shared/utils/url';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public user$ = new BehaviorSubject(dummyUser);

  constructor(
      private http: HttpClient
    , private userService: UserService) { }

  // function to check if a given _id is valid of a User_, returns a User_ observable
  checkID(userID: string): Observable<User_> {
    return this.http
      .get<User_>
      (`${url.api.base}/${url.api.register.route}/${url.api.register.path.getUserById}/${userID}`)
  }

  // function to check if a usermail has already been registered in the database, returns a boolean
  checkUserEmail(userEmail: string): Observable<boolean> {
    return this.http
      .get<boolean>
      (`${url.api.base}/${url.api.register.route}/${url.api.register.path.checkEmail}/${userEmail}`)
  }

  // function to check if a username already exist in the database, returns a boolean
  checkUserName(userName: string): Observable<boolean> {
    return this.http
      .get<boolean>
      (`${url.api.base}/${url.api.register.route}/${url.api.register.path.checkUsername}/${userName}`)
  }

  // function to get a user with given email and password, returns a subscription
  fetchUser(userEmail: string, password: string) {
    return this.http
      .post<User_> // model that gets the _id
        (`${url.api.base}/${url.api.login.route}`, { userEmail, password })
      .subscribe(
        (response: any) => {
          this.user$.next(response);
          console.log('fetchUser() received & emitted through this.user$: ', response)
          // fetch all users
          this.userService.fetchUsers();
        },
        (error: any) => {
          console.log('fetchUser() fails: ', error);
          alert('Invalid email or password');
        },
        () => console.log('fetchUser() completed')
      )
  }

  // function to register a new user in the database, returns a User_ observable
  registerNewUser(userEmail: string, userName: string, password: string): Observable<User_> {
    return this.http
      .post<User_>
        (`${url.api.base}/${url.api.register.route}/${url.api.register.path.createUser}`, { userEmail, userName, password })
  }

}
