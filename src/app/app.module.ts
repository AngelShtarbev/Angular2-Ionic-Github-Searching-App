import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { Users } from '../pages/users/users';
import { Repos } from '../pages/repos/repos';
import { Organisations } from '../pages/organisations/organisations';
import { GithubUsers } from '../providers/github-users';
import { UserDetails } from '../pages/user-details/user-details';

@NgModule({
  declarations: [
    MyApp,
    Users,
    Repos,
    Organisations,
    UserDetails
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Users,
    Repos,
    Organisations,
    UserDetails
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsers
  ]
})
export class AppModule {}
