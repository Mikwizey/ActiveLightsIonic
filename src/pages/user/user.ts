import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';


@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  displayName;
  email;
  userId;
  givenName;
  familyName;

  constructor(public navCtrl: NavController, private googlePlus: GooglePlus) {
    this.googlePlus.trySilentLogin({})
      .then(res => {
        console.log(res);
        this.displayName = res.displayName;
        this.givenName = res.givenName;
        this.familyName = res.familyName;
        this.email = res.email;
        this.userId = res.userId;
      }
      )
      .catch(err => console.error(err));
  }



}