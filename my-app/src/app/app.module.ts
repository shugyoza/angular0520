import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// angular material
import { MatSliderModule } from '@angular/material/slider';

// import RouterModule for redirecting to customs path;
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminComponent } from './admin/admin.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    AdminComponent,
    NewsFeedComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule, // Angular Material

    // apply the RouterModule here to connect the path and corresponding component
    RouterModule.forRoot([
      { path: '', component: AdminComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'admin/:id', component: AdminComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'feed/:id', component: NewsFeedComponent },
      { path: 'settings/:id', component: SettingsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
