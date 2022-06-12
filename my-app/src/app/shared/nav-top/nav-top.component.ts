import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
import { StoriesService } from 'src/app/core/services/stories/stories.service';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { User_ } from 'src/app/shared/models/User';
import { url } from '../utils/url';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.sass']
})
export class NavTopComponent implements OnInit {

  url = url;
  newsFeedPath = url.client.feed;
  settingsPath = url.client.settings;
  profilePath = url.client.profile;
  adminPath = url.client.admin;

  panelOpenState = false;
  user!: User_;

  likedStories: any[] = [];
  subscriptions$: any[] = [];

  constructor(
    private router: Router
    , private userService: UserService
    , private storiesService: StoriesService
    , private authentication: AuthenticationService
    ) { }

  getUserRole(): void {
    const observer = {
      next: (user: User_) => this.user = user,
      error: (err: Error) => console.log('getUserRole fails: ', err),
      complete: () => console.log('getUserRole() completed')
    }
    const subscription$ = this.authentication.user$.subscribe(observer)
    this.subscriptions$.push(subscription$);
  }

  // grab liked stories from Subject
  getLikedStories() { // temporary: get likedStories
    const observer = {
      next: (stories: any) => this.likedStories = stories,
      error: (err: Error) => console.log('nav-top getStories() fails, with: ', err),
      complete: () => console.log('nav-top getStories() completed')
    }
    // this.subscriptions$.push(this.storiesService.stories$.subscribe(observer));
    this.subscriptions$.push(this.userService.likedStories$.subscribe(observer));
  }

  onProfile() {
    this.router.navigate(['profile']);
  }

  onFeed() {
    this.router.navigate(['feed']);
  }

  onSettings() {
    this.router.navigate(['settings']);
  }

  onAdmin() {
    this.router.navigate(['admin']);
  }

  ngOnInit() {
    this.getUserRole();
    this.getLikedStories();
  }

}
