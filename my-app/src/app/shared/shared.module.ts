import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';


import { NavTopComponent } from './nav-top/nav-top.component';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';
import { ErrPageNotFoundComponent } from './err-page-not-found/err-page-not-found.component';



@NgModule({
  declarations: [
    NavTopComponent,
    NavBottomComponent,
    ErrPageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
