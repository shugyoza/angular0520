import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { User, dummyUser } from '../../shared/models/User';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { UserService } from '../../core/services/user/user.service';

import { path }
 from '../../shared/variables';
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

  // if we use this User interface withoud _id, we cannot grab the _id value from the doc. from backend
  // // a good solution would be to define User interface for inserting to backend differ from User interface
  // // for grabbing data from backend.
  user: any | undefined; // User = dummyUser;

  subscriptions: any[] = []; // array to store Observables

  newsFeedPath = path.feed;
  registerPath = path.register;

  constructor(
    // private router: Router,
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
      (error: any) => {
        console.log('Request to get User failed with error.');
        alert('Request to get User failed with error.');
      },
      // define optional callback as needed
      () => {
        console.log('Request to get User completed.');
      }

    );
    // push this observable to the array. We'll unsubscribe onDestroy.
    this.subscriptions.push(subscription);
  }

  // Method to login with the given userEmail and password
  onLogin(userEmail: string, password: string) {

    const subscription = this.authentication.checkUserEmail(userEmail).subscribe(

      (response: boolean) => {
        console.log('Response for userEmail check received.', response);
        if (response === false) alert('Invalid userEmail! TODO: Create directive to show the error on this login page.');
        else this.onGetUser(userEmail, password);
      },

      (error: any) => {
        console.log('Request for userEmail check failed with error.');
        alert('Request for userEmail check failed with error.');
      },

      () => {
        console.log('Request for userEmail check completed.');
      }

    );
    this.subscriptions.push(subscription);
  }

}

/* REFACTORED. See above.
  onLogin(userEmail: string, password: string) {

    this.subscriptions.push(

      this.authentication.checkUserEmail(userEmail).subscribe(

        (response1: boolean) => {
          console.log('Response for userEmail check received.', response1);
          if (response1 === false) alert('Invalid userEmail!');

          else {

            this.subscriptions.push(
              this.authentication.getUser(userEmail, password).subscribe(
                (response2: any) => {
                  console.log('Response to get User received.', response2);
                  if (response2) this.user = response2;
                  else alert('Invalid password!');
                },
                (error: any) => {
                  console.log('Request to get User failed with error.');
                  alert('Request to get User failed with error.');
                },
                () => {
                  console.log('Request to get User completed.');
                }
              )
            )
          }
        },

        (error: any) => {
          console.log('Request for userEmail check failed with error.');
          alert('Request for userEmail check failed with error.');
        },

        () => {
          console.log('Request for userEmail check completed.');
        }
      )
    )
  } */
