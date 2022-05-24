import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User, users } from '../users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  user: User | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // First get the user id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    // Find the user that correspond with the id provided in the route
    this.user = users.find((user: User) => user.id === id);
  }

}
