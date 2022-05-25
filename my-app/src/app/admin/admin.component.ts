import { Component, OnInit } from '@angular/core';

import { User, users } from '../users';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  users = users;
  user: User | undefined;

  newsFeedPath = '/feed';
  settingsPath = '/settings';
  profilePath = '/profile';
  adminPath = '/admin';

  onDeleteUser(user: User) {
    window.alert(`User to delete: ${user.name}`)
  }

  onAddUser() {
    window.alert('We must empty all the input fields in the panel for new input')
  }

  onDisplayUser(id: number) {
    this.user = users.find((doc) => doc.id === id);
    window.alert(`You clicked ${this.user ? this.user.name : ''} button. Do you want to delete this user?`)
  }

  ngOnInit() {
    this.user = users[0]
  }
}
