import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { User_, dummyUser } from 'src/app/shared/models/User';
import { url } from 'src/app/shared/utils/url';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = url;
  users$ = new BehaviorSubject([dummyUser]);
  user$ = new BehaviorSubject(dummyUser);
  likedStories$ = new BehaviorSubject([{newsId: '"624aa7beb853a430a40a1592"'}])

  constructor(private http: HttpClient) { }

  // method to get a subscription of allay of all users
  fetchUsers(): any {
    // this is the new way of subscribing, by passing an observer object that has 3 properties: next, error, and complete
    const observer = {
      next: (users: User_[]) => {
        this.users$.next(users);
        console.log('fetchUsers() receives and next: ', users)
      },
      error: (err: Error) => console.error('fetchUsers() fails with: ', err),
      complete: () => console.log('fetchUsers() completed')
    };

    return this.http
      .get<User_[]>(
        `${url.api.base}/${url.api.users.route}/${url.api.users.path.getAll}`
        )
      .subscribe(observer);
  }


  // method to get a subscription of a user by their username
  fetchUser(username: string): any {
    const observer = {
      next: (user: User_) => {
        this.user$.next(user);
        console.log('fetchUser() receives and next: ', user)
      },
      error: (err: Error) => console.error('fetchUser() fails with: ', err),
      complete: () => console.log('fetchUser() completed')
    };

    return this.http
      .get<User_>(
        `${url.api.base}/${url.api.users.route}/${url.api.users.path.getOne}/${username}`
        )
      .subscribe(observer);
  }


  // method to find a user in a list of users based on email
  findUserIDByEmail(value: string, key: string, list: any): any {
    const user = list.find((doc: any) => doc[key] === value)
    return user;
  }
}

/*
fetchUsers(): any {
  // return this.http.get<User_>('http://localhost:4231/api/users/getallusers');
  // this is the old way of subscribing, by providing three callbacks
  return this.http
    .get<User_[]>(`${url.api.base}/${url.api.users.route}/${url.api.users.path.getAll}`)
    .subscribe(
      (users) => {
        this.users$.next(users);
        console.log('fetchUsers() receives and next: ', users);
      },
      (error: Error) => console.error('fetchUsers() fails with: ', error),
      () => console.log('fetchUsers() completed')
    );
  }
*/
