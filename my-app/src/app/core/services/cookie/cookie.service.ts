// Ref.: https://stackoverflow.com/questions/54380886/how-we-can-access-cookies-in-angular-6-without-ngx-cookie-service
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import jwtDecode from 'jwt-decode';
import { User_ } from 'src/app/shared/models/User';
// import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

interface Cookie {
  [key: string]: any
}

interface Exp {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  regexExp = /expires=[a-zA-Z0-9 ,:;]+/;
  tokenKey: string = 'token';
  regexToken = /token=[a-zA-Z0-9_\-\.]*/i; // for jwt, no space, only alphanumeric and a .
  regexJWT = /^[\w-]+\.[\w-]+\.[\w-]+$/;
  // ref.: https://stackoverflow.com/questions/55201011/what-characters-are-allowed-in-a-jwt-token

  constructor(
    @Inject(DOCUMENT) public document: Document
//    , private authentication: AuthenticationService
    ) { }

  isLoggedIn(): boolean {
    if (!this.document.cookie || !this.document.cookie.length) return false;
    console.log(35, this.document.cookie)
    // check if 'key=value' token exist, valid, and is a valid JWT Token that can be converted into a user object
    const filteredToken = this.document.cookie.match(this.regexToken);
    if (filteredToken == null) return false;

    const tokenArr: string[] = filteredToken[0].split('=');
    const tokenVal: string = tokenArr[tokenArr.length - 1];

    // if token's value is not according to JWT format: xxx.xxx.xxx, return false
    const matched = tokenVal.match(this.regexJWT);
    if (!matched) return false;

    // if matched, we want to decode it to see if it gave a valid user
    const user: any = jwtDecode(tokenVal);
    console.log('user exists: ', user, 'returns true')

    /* GOT A CIRCULAR DEPENDENCY ERROR. WE need to compartmentalize to make this block work.
    // if we got a valid user, we compare it with the one we stored in service
    const observer = {
      next: (response: any) => {
        console.log('response', response)
      },
      error: (err: Error) => console.error(err),
      complete: () => console.log('comparing user from cookie and in service completed')
    };
    this.authentication.checkID(user._id).subscribe(observer);
    */

    // since we input our cookie with 'registers=...', this expiration key-value pair no longer
    // // exists in session cookie storage. Only the token key-value pair exists and the expiration
    // // will instead popped up in the second column titled: 'Expires / Max-Age', and the cookie
    // // will simply delete itself once the time lapsed the expiration. So we don't need to check
    // // for if now already passed the set expiration time. If the cookie expired, we cannot get
    // // a cookie anyway.
    return true;
  }

  get value(): string {
    return this.document.cookie;
  }

  set value(val: string) {
    console.log('cookie set with: ', val)
    this.document.cookie = val;
    console.log(this.document.cookie);
  }

  clear() {
    this.document.cookie = '';
  }

  createToken(tokenKey: string = this.tokenKey, tokenVal: string, maxAge: number): string {
    const now = new Date().toString();
    const unixNow = Date.parse(now);
    const unixExpire = unixNow + maxAge;
    const utcExpire = new Date(unixExpire).toUTCString();

    console.log('createToken(): ', `${tokenKey}=${tokenVal};maxAge=${maxAge};path=/`)
    // return `maxAge=${maxAge}; ${tokenKey}=${tokenVal}; path=/`;
    return `${tokenKey}=${tokenVal}; expires=${utcExpire}; path=/`;
  }

}

/* I don't know if this truly working or not, the cookie set always omits the expires date
  createToken(tokenKey: string = this.tokenKey, tokenVal: string, obj: Exp): string {
    const now = new Date().toString();
    const unixNow = Date.parse(now);
    let time = 1;
    if (!obj) time = 24 * 60 * 60;
    else if (obj) {
      for (let key in obj) {
        if (key === 'minute' && obj[key] > 0) {
          time = time * obj[key] * 60;
        }
        else if (key === 'hour' && obj[key] > 0) {
          time = time * obj[key] * 60 * 60;
        }
        else if (key === 'day' && obj[key] > 0) {
          time = time * obj[key] * 24 * 60 * 60
        }
        else if (key === 'second' && obj[key] > 0) {
          time = time * obj[key] * 1;
        }
      }
    }
    const unixExpire = unixNow + time;
    const utcExpire = new Date(unixExpire).toUTCString();
    console.log('createToken(): ', `${tokenKey}=${tokenVal};expires=${utcExpire};path=/`)
    return `${tokenKey}=${tokenVal}; expires=${utcExpire};`
  } */




  /* Not sure we're going to need below codes later in the future
  get expire(): string {
    if (!this.document.cookie || !this.document.cookie.length) return '' ;
    const filtered = this.document.cookie.match(this.regexExpire);
    if (filtered && filtered.length > 0) return filtered[0];
    return '';
  }

  set expire(jsonStr: string) {
    const obj = JSON.parse(jsonStr);
    if (!obj) return;

    let time = 1;
    for (let key in obj) {
      if (key === 'minute' && obj[key] > 0) {
        time = time * obj[key] * 60;
      }
      else if (key === 'hour' && obj[key] > 0) {
        time = time * obj[key] * 60 * 60;
      }
      else if (key === 'day' && obj[key] > 0) {
        time = time * obj[key] * 24 * 60 * 60
      }
      else if (key === 'second' && obj[key] > 0) {
        time = time * obj[key] * 1;
      }
    }
    const now = new Date().toString();
    const unixNow = Date.parse(now);
    const unixExpire = unixNow + time;
    const utcExpire = new Date(unixExpire).toUTCString();

    if (!this.document.cookie || !this.document.cookie.length) {
      this.document.cookie += `expires=${utcExpire};`;
    }
    else if (this.document.cookie && this.document.cookie.length) {

      if (this.document.cookie.match(this.regexExpire) == null) {
        this.document.cookie.trim();
        this.document.cookie += ` expires=${utcExpire};`;
      }
      else {
        this.document.cookie.replace(this.regexExpire, utcExpire);
      }
    }
  }

  get token(): string {
    if (!this.document.cookie || !this.document.cookie.length) return '' ;
    const filtered = this.document.cookie.match(this.regexToken);
    if (filtered && filtered.length > 0) return filtered[0];
    return '';
  }

  set token(val: string) {
    if (!this.document.cookie || !this.document.cookie.length) {
      this.document.cookie += `${this.tokenKey}=${val};`;
    }
    else if (this.document.cookie && this.document.cookie.length) {

      if (this.document.cookie.match(this.regexToken) == null) {
        this.document.cookie.trim();
        this.document.cookie += ` ${this.tokenKey}=${val};`;
      }
      else {
        this.document.cookie.replace(this.regexToken, `${this.tokenKey}=${val};`);
      }
    }
  } */
