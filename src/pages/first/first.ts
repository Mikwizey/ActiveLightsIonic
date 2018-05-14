import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { GooglePlus } from '@ionic-native/google-plus';
import { AboutPage } from '../about/about';
import { AlertController } from 'ionic-angular';

import { Facebook } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  isLoggedIn: boolean = false;
  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus, public alertCtrl: AlertController, private fb: Facebook) {
  }

  ionViewDidLoad() { }

  goAboutPage() {

    this.navCtrl.push(AboutPage);

  }


  loginWithFacebook() {

    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if (res.status === "connected") {
          this.isLoggedIn = true;
          
          this.fb.api("/" + res.authResponse.userID + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(res => {
              console.log(res);
              this.users = res;

              let userData = {

                name: res.name,
                email: res.email,
                userId: res.id,
                loginMethod: "Facebook"
              }

              this.navCtrl.setRoot(UserPage, userData);
            })
            .catch(e => {
              console.log(e);
            });

        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }


  loginWithGoogle() {

    this.googlePlus.login({})
      .then(res => {
        console.log(res);

        let userData = {

          name: res.displayName,
          email: res.email,
          userId: res.userId,
          loginMethod: "Google"
        }

        this.navCtrl.setRoot(UserPage, userData);
      })
      .catch(err => console.error(err));
  }

  temporaryLogin() {
    this.navCtrl.setRoot(UserPage, { name: "Användare Användarsson", email: "Användare@domän.se" });
  }
}
