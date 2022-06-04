import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { User, dummyUser } from '../../shared/models/User';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { UserService } from '../../core/services/user/user.service';

import { path } from '../../shared/variables';
import { form } from 'src/app/shared/utils/form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {
  form = form;
  user: User = dummyUser;
  subscriptions: any[] = []; // array to store Observables
  newsFeedPath = path.feed;
  registerPath = path.register;

  loginForm = new FormGroup({
    email: new FormControl(
      form.fields.email.defaultValue,
      [ Validators.required,
        Validators.email ]
      ),
    password: new FormControl(
      form.fields.password.defaultValue,
      [ Validators.required ]
      )
  })

  constructor(
    private router: Router,
    private authentication: AuthenticationService,
    private userService: UserService // we might not need this. last mission is to redirect to the corresponding page.
    ) { }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }

  // Method to get a User document with given userEmail and password
  onGetUser(userEmail: string, password: string) {

    const subscription = this.authentication.getUser(userEmail, password).subscribe(
      // define callback function to call if we got successful response.
      (response: any) => {
        console.log('Response to get User received.', response);
        if (response) {
          this.user = response;
          alert(`Username and password valid!
          User doc. we got:
          mongo _id: ${this.user._id};
          name: ${this.user.name},
          userName: ${this.user.userName},
          userEmail: ${this.user.userEmail},
          userRole: ${this.user.userRole},
          age: ${this.user.age},
          phone: ${this.user.phone},
          gender: ${this.user.gender},
          -hashed-password: ${this.user.password};
          TODO: Redirect to /feed/:userid OR /profile/:userid`)
        }
        else alert('Invalid password! TODO: Create directive to show the error on this login page.');
      },
      // defined callback if we got an error response
      (error: any) => console.log('Request to get User failed with error.'),
      // define optional callback as needed
      () => console.log('Request to get User completed.')
    );

    // push this observable to the array. We'll unsubscribe onDestroy.
    this.subscriptions.push(subscription);
  }

  // Method to login with the given userEmail and password
  onLogin() {

    const userEmail = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    const subscription = this.authentication.checkUserEmail(userEmail).subscribe(
      // callback for success response
      (response: boolean) => {
        console.log('Response for userEmail check received.', response);
        if (response === false) console.log('Invalid userEmail! TODO: Create directive to show the error on this login page.');
        else this.onGetUser(userEmail, password);
      },
      // callback for thrown error
      (error: any) => console.log('Request for userEmail check failed with error.'),
      // optional callback
      () => console.log('Request for userEmail check completed.')

    );
    // push this observable to the array. We'll unsubscribe onDestroy.
    this.subscriptions.push(subscription);
  }

}


