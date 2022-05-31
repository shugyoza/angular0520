import { Component, OnInit } from '@angular/core';

// import { User } from '../../shared/models/User';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { UserService } from '../../core/services/user/user.service';

import { path } from '../../shared/variables';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  user: any | undefined;
  subscriptions: any[] = [];
  errorMessages: string[] = [];
  loginPath = path.login;

  constructor(private authentication: AuthenticationService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onValidatePassword(password: string, confirmPassword: string): boolean {
    // add logic for password validation
    console.log('validate password is identic: ', password.length === confirmPassword.length)
    if (password.length !== confirmPassword.length) return false;
    for (let i: number = 0; i < password.length; i++) {
      console.log('checking characters...')
      if (password[i] !== confirmPassword[i]) {
        console.log("unmatched!")
        return false;
      }
    }
    console.log("matched!")
    return true;
  }

  onCheckUserName(userName: string): boolean {
    // add login for userName validation
    let result: any | undefined;

    const subscription = this.authentication.checkUserName(userName).subscribe(

      (response: boolean) => {
        console.log('Response for userName check received.', response);
        result = response;
        return result;
      },

      (error: any) => {
        console.log('Request for userName check failed with error.');
        alert('Request for userName check failed with error.');
      },

      () => {
        console.log('Request for userName check completed.');
      }

    );
    this.subscriptions.push(subscription);
    return result;
  }

  onCheckUserEmail(userEmail: string): boolean {
    // add logic for email validation: @, . etc.
    let result: any | undefined;

    const subscription = this.authentication.checkUserEmail(userEmail).subscribe(

      (response: boolean) => {
        console.log('Response for userEmail check received.', response);
        result = response;
        return result;
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
    return result;
  }

  onRegister(userName: string, userEmail: string, password: string, confirmPassword: string): void {

    if (this.onValidatePassword(password, confirmPassword) === false) this.errorMessages.push("Password and Confirmation is not identic");
    if (this.onCheckUserEmail(userEmail) === true) this.errorMessages.push("Email already registered");
    if (this.onCheckUserName(userName) === true) this.errorMessages.push("Username already registered");
    if (this.errorMessages.length > 0) {
      alert(`${this.errorMessages[0] || ''}; ${this.errorMessages[1] || ''}, ${this.errorMessages[2] || ''}`)
      return;
    }

    const subscription = this.authentication.registerNewUser(userEmail, userName, password).subscribe(

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
        console.log('Request to register new User failed with error.');
        alert('Request to register new User failed with error.');
      },
      // define optional callback as needed
      () => {
        console.log('Request to register new User completed.');
      }

    );
    // push this observable to the array. We'll unsubscribe onDestroy.
    this.subscriptions.push(subscription);
  }
}
