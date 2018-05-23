import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { FieldService } from "../../providers/field-service";
import { UserPage } from '../user/user';
import { CalendarPage } from '../calendar/calendar';
import { ActivityService } from "../../providers/activity-service";
import * as firebase from 'Firebase';
import { ChatPage } from "../chat/chat";
import { FieldlocationsProvider } from "../../providers/fieldlocations/fieldlocations";

@IonicPage()
@Component({
  selector: 'page-field',
  templateUrl: 'field.html',
})

export class FieldPage {

  public myLatitude;
  public myLongitude;
  public myDistance;
  public userIsAway = false;

  protected activity: Array<any>;

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  }

  key: string;
  ref = firebase.database().ref('chatrooms/');

  protected nickname: string;
  protected id;
  protected field;


  protected buttonText = "Visa aktiviteter";
  protected currentrating = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fieldService: FieldService, public modalCtrl: ModalController,
    public alertCtrl: AlertController, public activityService: ActivityService,
    public flp: FieldlocationsProvider) {
    this.ref.on('value', resp => {
      const snapshotKey = snapshot => {
        var key = Object.keys(snapshot.val())[this.id];
        return key;
      }
      this.key = snapshotKey(resp);
    });

  }

  showActivity(id: number) {
    this.navCtrl.push(FieldPage, { id: id });
  }

  ionViewWillEnter() {
    console.log("refresh?");
  }

  setRating() {
    // Framtida beräkning av medel osv
  }

  goToCalendar() {
    console.log("calendar page")
    this.navCtrl.push(CalendarPage, { 'id': this.id });
  }

  toTheChatRoom(key) {
    this.navCtrl.setRoot(ChatPage, {
      key: key,
      nickname: this.navParams.get("nickname")
    });
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    this.myLatitude = this.navParams.get('lat');
    this.myLongitude = this.navParams.get('lon');

    this.fieldService.getField(this.id).subscribe(field => {
      this.field = field;
      this.setColor();
    })
  }

  lightsOn() {

    this.checkDistance();

    if(!this.userIsAway){

    console.log("kommer till ts 1");
    this.fieldService.setLights(this.id).subscribe(field => {
      console.log("kommer till ts 2");
      this.field.lights = true;
    })
  }
  }

  setColor() {

    switch (this.field.visitors) {

      case "Låg belastning": document.getElementById('visitors').style.color = "green"; break;
      case "Hög belastning": document.getElementById('visitors').style.color = "red"; break;
      case "Medel belastning": document.getElementById('visitors').style.color = "orange"; break;
    }
  }
  goUserPage() {

    this.navCtrl.push(UserPage);

  }

  distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;

    if (unit == "K") { dist = dist * 1.609344; }
    if (unit == "N") { dist = dist * 0.8684; }
    return dist;
  }

  checkDistance() {

    console.log(this.myLatitude, this.myLongitude, this.field.name);

    let field: any;

    field = this.flp.getFields(this.field.name);

    console.log(field[0].lat);
    console.log(field[0].lon);

    let lat =  field[0].lat;
    let lon = field[0].lon;

    let distance = this.distance(this.myLatitude, this.myLongitude, lat, lon, "K");
    //let distance = this.distance(this.myLatitude, this.myLongitude, this.myLatitude, this.myLongitude, "K");

    console.log(distance);

    let distanceString = distance.toString().substring(0,5);

    console.log(distanceString);

    if(distance > 0.3){
      this.myDistance = distanceString;
      this.userIsAway = true;
    }
    
  }

}







