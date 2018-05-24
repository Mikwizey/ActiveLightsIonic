import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus, private fb: Facebook, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() { 

    console.log("FirstPage_DidLoad")

  }

  goAboutPage() {

    this.navCtrl.push(AboutPage);

  }

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

              userName: res.name,
              userId: res.id,
              loginMethod: "Facebook"

            }

            let nextPage = this.modalCtrl.create(HomePage, userData);
            nextPage.present();

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

          userName: res.displayName,
          userId: res.userId,
          loginMethod: "Google"

        }

        let nextPage = this.modalCtrl.create(HomePage, userData);
        nextPage.present();
      })
      .catch(err => console.error(err));
  }

  /**
   * Utvecklare
   */

  loginDeveloper() {

    let userData = {
     
      userName: "Utvecklare", 
      userId: "1234", 
      loginMethod: "Developer"

    }

    let nextPage = this.modalCtrl.create(HomePage, userData);
    nextPage.present();

  }

}
