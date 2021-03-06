import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsComponent } from './features/settings/settings.component';
import { AdminComponent } from './features/admin/admin.component';
import { LoginComponent } from './features/login/login.component';
import { NewsFeedComponent } from './features/news-feed/news-feed.component';
import { ProfileComponent } from './features/profile/profile.component';
import { RegisterComponent } from './features/register/register.component';
import { ErrPageNotFoundComponent } from './shared/err-page-not-found/err-page-not-found.component';

import { CanActivateGuardService } from './core/services/guards/can-activate-guard/can-activate-guard.service';
import { CanLoadGuardService } from './core/services/guards/can-load-guard/can-load-guard.service';
import { PreloadingStrategyService } from './core/services/preloading-strategy/preloading-strategy.service';

const routes: Routes = [
  {
    path: 'feed',
    component: NewsFeedComponent,
    // children: [ ]  // refactored into lazy loading
    loadChildren: () => import('./features/news-feed/news-feed.module').then((m) => m.NewsFeedModule),
    canActivate: [ CanActivateGuardService ],
    data: { preload: true, delay: 10}
  },
  {
    path: 'profile',
    component: ProfileComponent,
    loadChildren: () => import('./features/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [ CanActivateGuardService ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule),
    canLoad: [CanLoadGuardService],
    data: { preload: true, delay: 12}
  },
  {
    path: 'settings',
    component: SettingsComponent,
    loadChildren: () => import('./features/settings/settings.module').then((m) => m.SettingsModule),
    canActivate: [CanActivateGuardService]
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
