import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './features/login/login.component';
import { ErrPageNotFoundComponent } from './shared/err-page-not-found/err-page-not-found.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logins', redirectTo: 'login' }, // default pathMatch options: full
  { path: 'logn', redirectTo: 'login', pathMatch: 'full' }, // if full 'logn', will redirect
  { path: 'registers', redirectTo: 'register', pathMatch: 'prefix' }, // research...

  // wild card for page not found
  { path: '**', component: ErrPageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
