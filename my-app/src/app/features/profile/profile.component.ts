import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User, User_, dummyUser } from '../../shared/models/User';
import { form } from '../../shared/utils/form';
import { url } from '../../shared/utils/url';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  email = form.fields.email;
  password = form.fields.password;
  username = form.fields.username;
  gender = form.fields.sex;
  // age = form.fields.age;
  phone = form.fields.phone;

  logo = url.logo;

  hide: boolean = true;
  user: User_ = dummyUser;
  users: User_[] = [];

  constructor(private route: ActivatedRoute) { }

  inputForm = new FormGroup({
    username: new FormControl(
      this.username.defaultValue,
      [ Validators.required ]
      ),
    password: new FormControl(
      this.password.defaultValue,
      [ Validators.required,
        Validators.minLength(6) ]
      ),
      email: new FormControl(
        this.email.defaultValue,
        [ Validators.required ]
      ),
      gender: new FormControl(
        '',
        [ Validators.required ]
      ),
      age: new FormControl(
        '',
        [ Validators.required ]
      ),
      phone: new FormControl(
        '',
        [ Validators.required ]
      )
  })

  onSave() {}

  ngOnInit(): void {

    // First get the user id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    // Find the user that correspond with the id provided in the route
    // this.user = this.users.find((user: User) => user._id === id);

    const doc = this.users.find((doc: User_) => doc._id === id);
    if (doc) this.user = doc;

  }

}
