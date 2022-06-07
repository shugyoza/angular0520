import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { User, dummyUser } from '../../shared/models/User';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { UserService } from '../../core/services/user/user.service';
// import { validateCredential, AsyncValidatorFn } from '../../core/services/authentication/credential.validator';

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
  subscriptions$: any[] = []; // array to store Observables

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
  })

  constructor(
    private router: Router,
    private authentication: AuthenticationService,
    private userService: UserService // we might not need this. last mission is to redirect to the corresponding page.
    ) { }

  // Method to get a User document with given userEmail and password
  onGetUser(email: string, password: string) {

    const subscription$ = this.authentication.fetchUser(email, password).subscribe(
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
      (error: any) => {
        alert('Invalid email or password.')
        console.log('93 Request to get User failed with error.', error)
        },
      // define optional callback as needed
      () => console.log('Request to get User completed.')
    );

    // push this observable to the array. We'll unsubscribe onDestroy.
    this.subscriptions$.push(subscription$);
  }

  // Method to login with the given userEmail and password
  onLogin() {
    const email = this.inputForm.value.email;
    const password = this.inputForm.value.password;

    const subscription$ = this.authentication.checkUserEmail(email).subscribe(
      // callback for success response
      (response: boolean) => {
        console.log('Response for userEmail check received.', response);
        if (response === false) {
          console.log('Invalid userEmail! TODO: Create directive to show the error on this login page.');
        }
        else this.onGetUser(email, password);
      },
      // callback for thrown error
      (error: any) => {
        console.log('Request for userEmail check failed with error.', error)
      },
      // optional callback
      () => console.log('Request for userEmail check completed.')

    );
    // push this observable to the array. We'll unsubscribe onDestroy.
    this.subscriptions$.push(subscription$);
  }

  /*
  // method to hit api only on delayed time after user stopped typing
  // // Ref.: https://www.tektutorialshub.com/angular/debouncetime-debounce-in-angular/
  debounceT(time: number): void {
    console.log('debounceT()');
    const subscription$ = this.inputForm.valueChanges
      .pipe(debounceTime(time))
      .subscribe(
        (response: any) => {
          console.log('debounceT receives: ', response, 'and pass to getUser: ');
          if (response.email.length && response.password.length) {
          this.authentication.getUser(response.email, response.password);
          console.log('authentication.getUser(response.email, response.password): ', this.authentication.getUser(response.email, response.password).subscribe(data => console.log(data)));
          }
        },
        (error: any) => console.log('debounceT request fails, with: ', error),
        () => console.log('debounceT() completed')
      );
    this.subscriptions$.push(subscription$);
  }
*/

  ngOnInit(): void {
    // this.debounceT(500)
  }

  ngOnChanges(): void{
    console.log('ngOnChanges')
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((subscription$) => subscription$.unsubscribe());
    console.log('ngOnDestroy')
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }
  ngAfterContentInit() { console.log('ngAfterContentInit') }
  ngAfterContentChecked() { console.log('ngAfterContentChecked')}
  ngAfterViewInit() {console.log('ngAfterViewInit')}
  ngAfterViewChecked() { console.log('ngAfterViewChecked')}




}
