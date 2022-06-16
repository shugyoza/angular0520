import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { url } from '../utils/url';
import { User_ } from '../models/User';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Component({
  selector: 'app-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.sass']
})
export class NavBottomComponent implements OnInit {

  url = url;
  newsFeedPath = url.client.feed;
  settingsPath = url.client.settings;
  profilePath = url.client.profile;

  user!: User_;

  subscriptions$: any[] = [];

  constructor(
    private router: Router
    , private authentication: AuthenticationService
    ) { }

  onProfile() {
    this.router.navigate(['profile']);
  }

  onFeed() {
    this.router.navigate(['profile']);
  }

  onSettings() {
    this.router.navigate(['settings']);
  }

  ngOnInit(): void {
  }

  getUser(): void {
    const observer = {
      next: (user: User_) => this.user = user,
      error: (err: Error) => console.log('getUserRole fails: ', err),
      complete: () => console.log('getUserRole() completed')
    }
    const subscription$ = this.authentication.user$.subscribe(observer)
    this.subscriptions$.push(subscription$);
  }


}

//     <app-nav-bottom></app-nav-bottom>
