import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { NavBottomRoutingModule } from './nav-bottom-routing.module';
import { SharedModule } from '../shared.module';

import { NavBottomComponent } from './nav-bottom.component';

@NgModule({
    declarations: [
        NavBottomComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ]
})

export class NavBottomModule { }
