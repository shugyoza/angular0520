import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// backend #01. import HttpClientModule to use HttpClient
// // We will need this in the service
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SettingsModule } from './settings/settings.module';
import { ProfileModule } from './profile/profile.module';
import { AdminModule } from './admin/admin.module';
import { NewsFeedModule } from './news-feed/news-feed.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { UserService } from './shared/services/user.service';
import { StoriesService } from './shared/services/stories.service';

// import { ColorRandomizerDirective } from './shared/color-randomizer.directive';
// import { AuthenticationService } from './shared/services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,

    // ColorRandomizerDirective
  ],
  imports: [
    BrowserModule,

    // backend #02. import HttpClientModule after Browser Module
    // // else we'll get an error
    HttpClientModule,

    BrowserAnimationsModule,
    AngularMaterialModule,

    LoginModule,
    RegisterModule,
    SettingsModule,
    ProfileModule,
    AdminModule,
    NewsFeedModule,
    SharedModule,

    // This module must be at the bottom because it contains wild card ** for page not found
    AppRoutingModule,
  ],
  providers: [UserService, StoriesService], // [ConfigService],//AuthenticationService],
//  providers: [{provide: AuthenticationService}, use: class AuthenticationService]
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
    // apply the RouterModule here to connect the path and corresponding component
    RouterModule.forRoot([
    ])


replaced with sub router
    // apply the RouterModule here to connect the path and corresponding component
    RouterModule.forRoot([
      { path: '', component: AdminComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'feed', component: NewsFeedComponent },
      { path: 'settings', component: SettingsComponent }
    ])
  ],

*/
