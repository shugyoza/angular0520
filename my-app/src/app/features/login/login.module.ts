import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';

import { AngularMaterialModule } from '../../material.module';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule} from '../../shared/shared.module'

import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        AngularMaterialModule
    ]
})

export class LoginModule { }
