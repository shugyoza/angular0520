import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User, dummyUser } from '../../shared/models/User';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { UserService } from '../../core/services/user/user.service';

import { url } from '../../shared/utils/url';
import { form } from 'src/app/shared/utils/form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {
  email = form.fields.email;
  password = form.fields.password;
  newsFeedPath = url.client.feed;
  registerPath = url.client.register;
  logo = url.logo;

  hide: boolean = true;
  user: User = dummyUser;
  subscriptions: any[] = []; // array to store Observables
  loginDenied: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl(
      this.email.defaultValue,
      [ Validators.required,
        Validators.email ]
      ),
    password: new FormControl(
      this.password.defaultValue,
      [ Validators.required ]
      )
  })

  constructor(
    private router: Router,
    private authentication: AuthenticationService,
    private userService: UserService // we might not need this. last mission is to redirect to the corresponding page.
    ) { }


  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnChanges(): void{
    console.log('ngOnChanges')
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    console.log('ngOnDestroy')
  }

  ngDoCheck() { console.log('ngDoCheck') }
  ngAfterContentInit() { console.log('ngAfterContentInit') }
  ngAfterContentChecked() { console.log('ngAfterContentChecked')}
  ngAfterViewInit() {console.log('ngAfterViewInit')}
  ngAfterViewChecked() { console.log('ngAfterViewChecked')}

  // Method to get a User document with given userEmail and password
  onGetUser(email: string, password: string) {

    const subscription = this.authentication.getUser(email, password).subscribe(
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
        else console.log('Invalid password! TODO: Create directive to show the error on this login page.');
      },
      // defined callback if we got an error response
      (error: any) => console.log('93 Request to get User failed with error.', error),
      // define optional callback as needed
      () => console.log('Request to get User completed.')
    );

    // push this observable to the array. We'll unsubscribe onDestroy.
    this.subscriptions.push(subscription);
  }

  // Method to login with the given userEmail and password
  onLogin() {

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    const subscription = this.authentication.checkUserEmail(email).subscribe(
      // callback for success response
      (response: boolean) => {
        console.log('Response for userEmail check received.', response);
        if (response === false) {
          console.log('Invalid userEmail! TODO: Create directive to show the error on this login page.');
          // this.loginDenied = true;
          // console.log(this.loginDenied)
        }
        else this.onGetUser(email, password);
      },
      // callback for thrown error
      (error: any) => console.log('Request for userEmail check failed with error.', error),
      // optional callback
      () => console.log('Request for userEmail check completed.')

    );
    // push this observable to the array. We'll unsubscribe onDestroy.
    this.subscriptions.push(subscription);
  }

}
