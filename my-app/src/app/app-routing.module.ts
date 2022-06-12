import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './features/admin/admin.component';
import { LoginComponent } from './features/login/login.component';
import { NewsFeedComponent } from './features/news-feed/news-feed.component';
import { ProfileComponent } from './features/profile/profile.component';
import { RegisterComponent } from './features/register/register.component';
import { ErrPageNotFoundComponent } from './shared/err-page-not-found/err-page-not-found.component';

const routes: Routes = [
  {
    path: 'feed',
    component: NewsFeedComponent,
    // children: [ ]  // refactored into lazy loading
    loadChildren: () => import('./features/news-feed/news-feed.module').then((m) => m.NewsFeedModule)
  },
  {
    path: 'profile',
    component: ProfileComponent,
    loadChildren: () => import('./features/profile/profile.module').then((m) => m.ProfileModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./features/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'register',
    component: RegisterComponent,
    loadChildren: () => import('./features/register/register.module').then((m) => m.RegisterModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'logins', redirectTo: 'login' }, // default pathMatch options: full
  { path: 'logn', redirectTo: 'login', pathMatch: 'full' }, // if full 'logn', will redirect
  { path: 'registers', redirectTo: 'register', pathMatch: 'prefix' }, // research...

  // { path: '', component: LoginComponent },

  // wild card for page not found
  { path: '**', component: ErrPageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
