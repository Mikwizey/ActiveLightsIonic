import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { FieldPage} from "../field/field";
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

  data = { nickname:"" };

  constructor(public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus) {
  }

  enterNickname() {
    this.navCtrl.setRoot(FieldPage, {
      nickname: this.data.nickname
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
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

        let googleUserData = {

          displayName: res.displayName,
          email: res.email,
          userId: res.userId,

        }

        this.navCtrl.push(HomePage, googleUserData);
      })
      .catch(err => console.error(err));


  }

}
