import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FieldService } from "../../providers/field-service";
import { ActivityPage } from '../activity/activity';
/**
 * Generated class for the FieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-field',
  templateUrl: 'field.html',
})



export class FieldPage {

  @ViewChild('actName') actName;
  @ViewChild('description') actDesc;

  protected name;
  protected visitors;
  activityList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fieldService: FieldService) {


  }

  ionViewDidLoad() {

    this.name = this.navParams.get('name');
    this.visitors = this.navParams.get('visitors')

    console.log(this.name, this.visitors);

    this.setColor();

  }


  addBooking() {

    let activityName = this.actName.value;
    let activityDesc = this.actDesc.value;

    let activity = {

      name: activityName,
      description: activityDesc,

    }

    console.log("test1", activity.name, activity.description)

    this.activityList.push(activity);
  }

  setColor() {

    switch (this.visitors) {

      case "Låg belastning": document.getElementById('visitors').style.color = "green"; break;
      case "Hög belastning": document.getElementById('visitors').style.color = "red"; break;
      case "Medel belastning": document.getElementById('visitors').style.color = "orange"; break;
    }

  }

  showActivity(){

    this.navCtrl.push(ActivityPage);
    

  }

}