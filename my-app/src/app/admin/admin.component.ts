import { Component, OnInit, OnDestroy } from '@angular/core';

import { User, dummyUser } from '../shared/models/User';
import { UserService } from '../shared/services/user.service';
import { path } from '../shared/variables';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit, OnDestroy {

  users: User[] = []; // mockUsers;
  user: User = dummyUser;

    /* subscription = [] will cause the following error
  Argument of type 'Subscription' is not assignable to parameter of type 'never'.
  We have to define the type.
  https://stackoverflow.com/questions/52423842/what-is-not-assignable-to-parameter-of-type-never-error-in-typescript
  */
  subscriptions: any[] = [];

  newsFeedPath = path.feed;
  settingsPath = path.settings;
  profilePath = path.profile;
  adminPath = path.admin;

  constructor(private userService: UserService) {};

  onDeleteUser(user: User) {
    window.alert(`User to delete: ${user.name}`)
  }

  onAddUser() {
    window.alert('We must empty all the input fields in the panel for new input')
  }

  onDisplayUser(id: number) {
    const doc = this.users.find((doc: User) => doc._id === id);
    if (doc) this.user = doc;
    window.alert(`You clicked ${this.user ? this.user.name : ''} button. Do you want to delete this user?`)
  }

  displayUsers() {
      const subs = this.userService.getUsers().subscribe(
      (response: any) => {
        // console.log('response received');
        this.users = response;
        this.user = response[0];
        // console.log(this.user);
      },
      (error: any) => {
        // console.log('Request failed with error')
        alert('Request failed with error');
      },
      () => {
        // console.log('Request completed')
      })
      // keep track of subscriptions to unsubscribe on destroying the component
      this.subscriptions.push(subs);
  }

  ngOnInit(): void {
   this.displayUsers();
  }

  ngOnDestroy(): void {
    // when the component get's destroyed, unsubscribe all the subscriptions
    this.subscriptions.forEach((sub) => sub.unsubscribe())
  }

}
