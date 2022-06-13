import { Component, OnInit, OnDestroy } from '@angular/core';

import { User, User_, dummyUser } from '../../shared/models/User';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { path } from '../../shared/variables';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit, OnDestroy {

  users: User_[] = []; // mockUsers;
  user: User_ = dummyUser;

    /* subscription = [] will cause the following error
  Argument of type 'Subscription' is not assignable to parameter of type 'never'.
  We have to define the type.
  https://stackoverflow.com/questions/52423842/what-is-not-assignable-to-parameter-of-type-never-error-in-typescript
  */

  newsFeedPath = path.feed;
  settingsPath = path.settings;
  profilePath = path.profile;
  adminPath = path.admin;

  subscriptions$: any = [];

  constructor(
      private authentication: AuthenticationService
    , private userService: UserService
    ) {};

  ngOnInit(): void {
    this.subscribeUser();
    this.userService.fetchUsers();
    this.subscribeUsers;
  }

  ngOnDestroy(): void {
    // when the component get's destroyed, unsubscribe all the subscriptions
    this.subscriptions$.forEach((subscription$: any) => subscription$.unsubscribe())
  }

  onDeleteUser(user: User) {
    window.alert(`User to delete: ${user.name}`)
  }

  onAddUser() {
    window.alert('We must empty all the input fields in the panel for new input')
  }

  onDisplayUser(id: number) {
    const doc = this.users.find((doc: User_) => doc._id === id);
    if (doc) this.user = doc;
    window.alert(`You clicked ${this.user ? this.user.name : ''} button. Do you want to delete this user?`)
  }

  // method to subscribe to who is the logged in user
  subscribeUser(): void {
    const observer = {
      next: (response: User_) => {
        this.user = response;
        console.log('admin.subscribeUser()', this.user, this.authentication.isLoggedIn, this.authentication.isAdmin)
      },
      error: (err: Error) => console.error('admin.subscribeUser() fails: ', err),
      complete: () => console.log('admin.subscribeUser() completed')
    }
    this.subscriptions$.push(this.authentication.user$.subscribe(observer));
  }

  // method to subscribe to who is the logged in user
  subscribeUsers(): void {
    const observer = {
      next: (response: User_[]) => {
        this.users = response;
        console.log('admin.subscribeUsers()', this.users)
      },
      error: (err: Error) => console.error('admin.subscribeUsers() fails: ', err),
      complete: () => console.log('admin.subscribeUsers() completed')
    }
    this.subscriptions$.push(this.userService.users$.subscribe(observer));
  }

}
