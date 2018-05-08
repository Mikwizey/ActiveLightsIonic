import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { GooglePlus } from '@ionic-native/google-plus';

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus) {
  }

  ionViewDidLoad() { }

  goMapPage() {

    this.navCtrl.push(HomePage);

  }
  goUserPage() {

    this.navCtrl.push(UserPage);

  }

  loginWithGoogle() {

    this.googlePlus.login({})
      .then(res => {
        console.log(res);

        let googleUserData = {

          displayName: res.displayName,
          email: res.email,
          userId: res.userId,
          givenName: res.givenName,
          familyName: res.familyName,

        }

        this.navCtrl.setRoot(HomePage, googleUserData);
      })
      .catch(err => console.error(err));
  }

  temporaryLogin() {
    this.navCtrl.push(HomePage);
  }
}
