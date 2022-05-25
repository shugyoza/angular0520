import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material
import { MatSliderModule } from '@angular/material/slider';
// import { MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SettingsModule } from './settings/settings.module';
import { ProfileModule } from './profile/profile.module';
import { AdminModule } from './admin/admin.module';
import { NewsFeedModule } from './news-feed/news-feed.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    LoginModule,
    RegisterModule,
    SettingsModule,
    ProfileModule,
    AdminModule,
    NewsFeedModule,

    // Angular Material
    MatSliderModule,


    // This module must be at the bottom because it contains wild card ** for page not found
    AppRoutingModule,
  ],
  providers: [],
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
