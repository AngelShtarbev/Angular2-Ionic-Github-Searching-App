import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { Users } from '../pages/users/users';
import { Repos } from '../pages/repos/repos';
import { Organisations } from '../pages/organisations/organisations';
import { StatusBar } from "@ionic-native/status-bar";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    statusBar: any;
  @ViewChild(Nav) nav: Nav;

  // make Users the root (or first) page
  rootPage = Users;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController) 
    {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Users', component: Users },
      { title: 'Repos', component: Repos },
      { title: 'Organisations', component: Organisations }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar;
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
