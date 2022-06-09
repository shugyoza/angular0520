import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from 'src/app/shared/material.module';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';
import { ErrPageNotFoundComponent } from './err-page-not-found/err-page-not-found.component';
import { LikedStoriesComponent } from '../features/news-feed/liked-stories/liked-stories.component';

@NgModule({
  declarations: [
    NavTopComponent,
    NavBottomComponent,
    ErrPageNotFoundComponent,
    LikedStoriesComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    NavTopComponent,
    NavBottomComponent,
    LikedStoriesComponent
  ]
})
export class SharedModule { }
