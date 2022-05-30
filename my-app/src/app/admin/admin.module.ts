import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';

@NgModule({
    declarations: [
        AdminComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        AdminRoutingModule,
    ]
})

export class AdminModule { }
