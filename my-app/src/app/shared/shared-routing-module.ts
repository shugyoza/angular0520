import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
