import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  onAdmin() {
    this.router.navigate(['admin']);
  }

  ngOnInit() {}
}
