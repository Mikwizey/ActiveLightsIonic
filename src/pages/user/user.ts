import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { FirstPage } from '../first/first';



@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  name;
  email;
  userId;
  loginMethod;

  constructor(public navCtrl: NavController, public navParams: NavParams, public googlePlus: GooglePlus, public facebook: Facebook) {
  }

  goToHome() {
    this.navCtrl.push(HomePage);
  }

  logout() {

    if (this.loginMethod === 'Google') {
      this.googlePlus.logout();
      this.navCtrl.setRoot(FirstPage);
      console.log('Google logout.')
    }

    if (this.loginMethod === 'Facebook') {
      this.facebook.logout()
      console.log('Facebook logout.');
      this.navCtrl.setRoot(FirstPage);
    }
  }


  ionViewDidLoad() {

    this.name = this.navParams.get('name');
    this.email = this.navParams.get('email');
    this.userId = this.navParams.get('userId');
    this.loginMethod = this.navParams.get('loginMethod');

  }






}