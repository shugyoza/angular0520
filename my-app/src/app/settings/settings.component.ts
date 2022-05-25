import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})

export class SettingsComponent implements OnInit {

  newsFeedPath = '/feed';
  profilePath = '/profile';
  settingsPath = '/settings';
  
  constructor() { }

  ngOnInit(): void {
  }

}
