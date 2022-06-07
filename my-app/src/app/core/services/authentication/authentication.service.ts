import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable
  , of
  , BehaviorSubject
  , AsyncSubject
  , from
  , Subject } from 'rxjs';
import { User, dummyUser } from '../../../shared/models/User';
import { url } from '../../../shared/utils/url';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public user$ = new BehaviorSubject(dummyUser);

  constructor(private http: HttpClient) { }

  checkID(userID: string): Observable<User> {
    return this.http.get<User>
    (`${url.api.base}/${url.api.register.route}/${url.api.register.path.getUserById}/${userID}`)
  }

  checkUserEmail(userEmail: string): Observable<boolean> {
    return this.http.get<boolean>
    (`${url.api.base}/${url.api.register.route}/${url.api.register.path.checkEmail}/${userEmail}`)
  }

  checkUserName(userName: string): Observable<boolean> {
    return this.http.get<boolean>
    (`${url.api.base}/${url.api.register.route}/${url.api.register.path.checkUsername}/${userName}`)
  }

  getUser(userEmail: string, password: string): Observable<User> {
    return this.http.post<User>
    (`${url.api.base}/${url.api.login.route}`, { userEmail, password })
  }

  registerNewUser(userEmail: string, userName: string, password: string): Observable<User> {
    return this.http.post<User>
    (`${url.api.base}/${url.api.register.route}/${url.api.register.path.createUser}`, { userEmail, userName, password })
  }

}
