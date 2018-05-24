import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FieldPage } from '../pages/field/field';
import { FirstPage } from "../pages/first/first";
import { Geolocation } from '@ionic-native/geolocation';
import { GooglePlus } from '@ionic-native/google-plus';

const config = {
  apiKey: "AIzaSyC_mEB81ALRZ9oqVDY_a70iLe0cbZZJftA",
  authDomain: "ionic-chat-697b4.firebaseapp.com",
  databaseURL: "https://ionic-chat-697b4.firebaseio.com",
  projectId: "ionic-chat-697b4",
  storageBucket: "ionic-chat-697b4.appspot.com",
  messagingSenderId: "19762664952"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  rootPage: any = FirstPage;
  @ViewChild(Nav) nav: Nav;

  /*pages: Array<{ title: string, component: any }>;*/


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public googlePlus: GooglePlus) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    /*this.pages = [
      { title: 'Hem', component: HomePage },
      { title: 'Lista med planer', component: ListPage },
      { title: 'Fotbollsplan', component: FieldPage }

    ];*/
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }

  /*openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }*/
}
