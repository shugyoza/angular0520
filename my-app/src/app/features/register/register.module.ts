import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from 'src/app/shared/material.module';
import { RegisterRoutingModule } from './register-routing.module';

import { RegisterComponent } from './register.component';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        AngularMaterialModule
    ]
})

export class RegisterModule { };
