import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.sass']
})
export class NavBottomComponent implements OnInit {

  newsFeedPath = '/feed';
  settingsPath = '/settings';
  profilePath = '/profile';
  adminPath = '/admin';

  constructor() { }

  ngOnInit(): void {
  }

}

//     <app-nav-bottom></app-nav-bottom>
