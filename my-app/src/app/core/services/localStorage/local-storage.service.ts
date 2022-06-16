// ref.: https://medium.com/quick-code/how-use-localstorage-in-angular-85c924275ad0
import { Injectable } from '@angular/core';
import { User_ } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public get token(): string {
    return localStorage.getItem('token') || '';
  }

  public set token(value: string) {
    localStorage.setItem('token', value);
  }

  public get exp(): string {
    return localStorage.getItem('exp') || '';
  }

  public set exp(value: string) {
    localStorage.setItem('exp', value);
  }

  public get log(): Log {
    let result: any = {
      token: '',
      expire: ''
    }
    if (!localStorage.getItem('log')) return result;
    result = localStorage.getItem('log');
    return JSON.parse(result);
  }

  public set log(value: Log) {
    localStorage.setItem('log', JSON.stringify(value));
  }
}

export interface Log {
  token: string;
  expire: string;
}
