import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  // instantiate the service
  // // but instantiating this authenticateService in every module is bad practice!
  // // so use dependency injection to inject the instance instantiated in app module!
  // authenticateService = new AuthenticationService()

  newsFeedPath = '/feed';
  registerPath = '/register';

  constructor(
    private router: Router,
    private authenticateService: AuthenticationService
    ) { }

  ngOnInit(): void {
    this.authenticateService.getInfo()
  }

  onLogin() {
    // this replace the [routerLink]="newsFeedPath" on the html button
    this.router.navigate(['feed'])
  }

}
