import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../material.module';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule} from '../shared/shared.module'

import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        SharedModule,
        AngularMaterialModule
    ]
})

export class LoginModule { }
