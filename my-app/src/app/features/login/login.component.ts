import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked} from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName, NgModel } from '@angular/forms';

import { User_ } from '../../shared/models/User';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { UserService } from '../../core/services/user/user.service';
// import { validateCredential, AsyncValidatorFn } from '../../core/services/authentication/credential.validator';
import { CookieService } from 'src/app/core/services/cookie/cookie.service';

import { url } from '../../shared/utils/url';
import { form } from 'src/app/shared/utils/form';
import { newObserver, newSubscription, log } from '../../shared/utils/functions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit {
  email = form.fields.email;
  password = form.fields.password;
  newsFeedPath = url.client.feed;
  registerPath = url.client.register;
  logo = url.logo;

  hide: boolean = true;
  user!: User_;
  subscriptions$: any[] = []; // array to store Observables

  constructor(
    private cookieService: CookieService,
    private authentication: AuthenticationService,
    private userService: UserService // we might not need this. last mission is to redirect to the corresponding page.
    ) { }

  inputForm = new FormGroup({
    email: new FormControl(
      this.email.defaultValue,
      [ Validators.required,
        Validators.email ]
      ),
    password: new FormControl(
      this.password.defaultValue,
      [ Validators.required,
        Validators.minLength(6) ]
      )
  });

  // method to subscribe to who is the logged in user
  subscribeUser(): void {
    this.subscriptions$.push(

      this.authentication.user$
          .subscribe(
            (response: User_) => this.user = response,
            (error: any) => console.log('subscribeUser() fails: ', error),
            () => console.log('subscribeUser() completed')
          )
    )
  }

  // Method to login with the given userEmail and password
  onLogin() {
    const email = this.inputForm.value.email;
    const password = this.inputForm.value.password;

    this.subscriptions$.push(
      this.authentication.checkUserEmail(email)
          .subscribe({
            next: (response: boolean) => {
                    if (response === false) console.log('Invalid email or password')
                    // TODO: Create directive to show the error on this login page.');
                    else {
                      this.authentication.fetchUser(email, password);
                    }
            },
            error: (err: Error) => console.log('Request for userEmail check failed with error.', err),
            complete: () => console.log('Request for userEmail check completed.')
          })
    )
  }


  ngOnInit(): void {
    let observeUser = newObserver(() => log('test next'), () => log('test err'), () => log('test complete'));
    let subscribeUser = newSubscription(this.authentication.user$, observeUser, this.subscriptions$)
  }

  ngOnChanges(): void{
    // console.log('onChange: ', this.inputForm.value.email, this.inputForm.value.password)
  }

  ngOnDestroy(): void {
    // this.subscriptions$.forEach((subscription$) => subscription$.unsubscribe());
  }

  ngDoCheck() {
    // console.log('doCheck: ', this.inputForm.value.email['valid'], this.inputForm.value.password['pristine'])
   }
  ngAfterContentInit() {
    console.log('ngAfterContentInit', this.inputForm.value.email, this.inputForm.value.password)
  }
  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked', this.inputForm.value.email, this.inputForm.value.password)
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.inputForm.value.email, this.inputForm.value.password)
  }
  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked', this.inputForm.value.email, this.inputForm.value.password)
  }
}
