import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { GooglePlus } from '@ionic-native/google-plus';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus) {
  }

  ionViewDidLoad() {

  }

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
        this.navCtrl.push(HomePage);
      })
      .catch(err => console.error(err));


  }

}
