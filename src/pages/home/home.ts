import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {FieldService} from "../../providers/field-service";
import { ListPage } from '../list/list';

import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public fieldService: FieldService, private geolocation: Geolocation, private platform: Platform) {
    this.platform.ready().then(() => {

  var options = {
  timeout: 5000
};

  this.geolocation.getCurrentPosition(options).then(resp => {
  console.log(resp.coords.latitude);
  console.log(resp.coords.longitude);
}).catch((error) =>{
  console.log("Error can't find the location", error);
});

  let watch = this.geolocation.watchPosition();
  watch.subscribe((data) => {
  console.log(data.coords.latitude);
  console.log(data.coords.longitude);
});
});
};
goToList(){

  this.navCtrl.push(ListPage);
}
}
