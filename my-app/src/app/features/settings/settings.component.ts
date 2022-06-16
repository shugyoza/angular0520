import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { devSubscribeTo, subscribeTo } from 'src/app/shared/utils/functions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})

export class SettingsComponent implements OnInit {
  newsFeedPath = '/feed';
  profilePath = '/profile';
  settingsPath = '/settings';

  constructor( private authentication: AuthenticationService) { }

  ngOnInit(): void {
  }

}
