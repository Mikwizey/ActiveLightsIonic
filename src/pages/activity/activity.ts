import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {

  @ViewChild('actName') actName;
  @ViewChild('actDesc') actDesc;

  protected activityList = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addActivity() {

    let name = this.actName.value
    let desc = this.actDesc.value

    if (name.length == 0 || desc.length == 0) {
      return;
    } else {

      let activity = {

        name: name,
        description: desc,

      }

      console.log(name, desc);

      //this.activityList.push(activity);

    }




  }

  ionViewDidLoad() {

    this.activityList = this.navParams.get('activityList');

  }

}
