import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User, dummyUser } from '../shared/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  user: User = dummyUser;
  users: User[] = [];

  settingsPath = '/settings';
  newsFeedPath = '/feed';
  profilePath = '/profile';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // First get the user id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    // Find the user that correspond with the id provided in the route
    // this.user = this.users.find((user: User) => user._id === id);

    const doc = this.users.find((doc: User) => doc._id === id);
    if (doc) this.user = doc;

  }

}
