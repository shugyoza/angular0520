import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavTopComponent } from './nav-top/nav-top.component';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';

const routes: Routes = [
    { path: 'admin', redirectTo: 'admin' },
    { path: 'login', redirectTo: 'login'},
    { path: 'feed', redirectTo: 'feed'},
    { path: 'profile', redirectTo: 'profile'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class SharedRoutingModule { }
