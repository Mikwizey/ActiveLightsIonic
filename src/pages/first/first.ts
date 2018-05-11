import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { GooglePlus } from '@ionic-native/google-plus';
import { AboutPage } from '../about/about';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() { }

  goMapPage() {

    this.navCtrl.push(HomePage);

  }
  goUserPage() {

    this.navCtrl.push(UserPage);

  }
  goAboutPage() {

    this.navCtrl.push(AboutPage);

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
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  temporaryLogin() {
    this.navCtrl.push(HomePage);
  }
}
