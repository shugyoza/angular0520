import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { url } from '../utils/url';

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

  constructor(private router: Router) { }

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

}

//     <app-nav-bottom></app-nav-bottom>
