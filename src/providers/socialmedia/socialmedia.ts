import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';


@Injectable()
export class SocialmediaProvider {

  loginMethod;

  constructor(public http: HttpClient, private googlePlus: GooglePlus, private fb: Facebook) {
    console.log('Hello SocialmediaProvider Provider');
  }

  logoutFacebook() {
    this.fb.logout()
      .then(res => {
        console.log(res);
        console.log('SM, logoutFacebook')
      })
      .catch(e => console.log('Error logout from Facebook', e));
  }

  logoutGoogle() {
    this.googlePlus.logout().then(res => {
      console.log(res);
      console.log('SM, logoutGoogle')
    })
      .catch(err => console.error(err));
  }

  setLoginMethod(loginMethod){
    this.loginMethod = loginMethod; 
  }

  logout(){

    if(this.loginMethod == "Facebook"){
      this.logoutFacebook();
    } else 

    if(this.loginMethod == "Google"){
      this.logoutGoogle();
    } else 
    if(this.loginMethod == "Developer"){
      console.log("Logout developer.");
    }

  }

}
