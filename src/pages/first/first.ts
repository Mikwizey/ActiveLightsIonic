import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GooglePlus } from '@ionic-native/google-plus';
import { AboutPage } from '../about/about';
import { Facebook } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  // data = { nickname: "" };

  constructor(public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus, private fb: Facebook) {
  }

  ionViewDidLoad() { }

  goAboutPage() {

    this.navCtrl.push(AboutPage);

  }

  /*
   * CJ's kod för chatten.
   */

  /* enterNickname() {
    this.navCtrl.push(HomePage, {
      nickname: this.data.nickname
    });
  }*/

  /**
   * 
   * SOCIAL MEDIA
   * 
   */

  /*
   * Facebook login
   */

  loginFacebook() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {

        this.fb.api("/" + res.authResponse.userID + "/?fields=id,email,name,picture,gender", ["public_profile"])
          .then(res => {
            console.log(res);

            let userData = {

              name: res.name,
              userId: res.id,
              loginMethod: "Facebook"

            }

            this.navCtrl.setRoot(HomePage, userData);

          })
          .catch(e => {
            console.log(e);
          });


      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  /*
   * Google 
   */

  loginGoogle() {

    this.googlePlus.login({})
      .then(res => {
        console.log(res);

        let userData = {

          name: res.displayName,
          userId: res.userId,
          loginMethod: "Google"

        }

        this.navCtrl.setRoot(HomePage, userData);
      })
      .catch(err => console.error(err));
  }

  /**
   * Utvecklare
   */

  loginDeveloper() {

    let userData = {
     
      name: "Utvecklare", 
      userId: "1234", 
      loginMethod: "Developer"

    }

    this.navCtrl.setRoot(HomePage, userData);

  }

}
