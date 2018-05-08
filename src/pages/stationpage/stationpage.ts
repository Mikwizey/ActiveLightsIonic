import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-stationpage',
  templateUrl: 'stationpage.html',
})
export class StationpagePage {

  nearbyStops = [];
  fieldName; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.nearbyStops = this.navParams.get('data');
    this.fieldName = this.navParams.get('name');
  }

}
