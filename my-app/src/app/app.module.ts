// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// backend #01. import HttpClientModule to use HttpClient for the services
import { HttpClientModule } from '@angular/common/http';

// LOCAL MODULES
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './features/login/login.module';
import { RegisterModule } from './features/register/register.module';
import { SettingsModule } from './features/settings/settings.module';
import { ProfileModule } from './features/profile/profile.module';
import { AdminModule } from './features/admin/admin.module';
import { NewsFeedModule } from './features/news-feed/news-feed.module';
import { SharedModule } from './shared/shared.module';
import { AngularMaterialModule } from './material.module'; // Styling

// COMPONENTS
import { AppComponent } from './app.component';

// SERVICES
import { UserService } from './core/services/user/user.service';
import { StoriesService } from './core/services/stories/stories.service';
import { AuthenticationService } from './core/services/authentication/authentication.service';

// import { ColorRandomizerDirective } from './shared/color-randomizer.directive';

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
  providers: [UserService, StoriesService, AuthenticationService],
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
