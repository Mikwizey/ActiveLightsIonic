import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ViewController } from 'ionic-angular';
import { FieldService } from "../../providers/field-service";
import { UserPage } from '../user/user';
import { CalendarPage } from '../calendar/calendar';
import { ActivityService } from "../../providers/activity-service";
import { FavoriteService } from "../../providers/favorite-service";
import * as firebase from 'Firebase';
import { ChatPage } from "../chat/chat";
import { FieldlocationsProvider } from "../../providers/fieldlocations/fieldlocations";
import { HomePage } from "../home/home";
import { Quote } from '@angular/compiler';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@IonicPage()
@Component({
  selector: 'page-field',
  templateUrl: 'field.html',
})

export class FieldPage {

  public userName;
  public userId;
  public field_id;
  public myLatitude;
  public myLongitude;
  public loginMethod;

  public showData = false;
  public myDistance;
  public userIsAway = false;
  favorities = [];

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
  public fieldInfo;
  public fieldAdress;


  protected buttonText = "Visa aktiviteter";
  protected currentrating = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fieldService: FieldService, public modalCtrl: ModalController, public alertCtrl: AlertController, public activityService: ActivityService, public viewCtrl: ViewController, public flp: FieldlocationsProvider,public favoriteService: FavoriteService,) {
    this.ref.on('value', resp => {
      const snapshotKey = snapshot => {
        var key = Object.keys(snapshot.val())[this.id];
        return key;
      }
      this.key = snapshotKey(resp);
    });
  }

  ionViewDidLoad() {

    this.id = this.navParams.get('id');
    this.myLatitude = this.navParams.get('myLatitude');
    this.myLongitude = this.navParams.get('myLongitude');
    this.userName = this.navParams.get('userName');
    this.userId = this.navParams.get('userId');
    this.loginMethod = this.navParams.get('loginMethod');

    this.fieldService.getField(this.id).subscribe(field => {
      this.field = field;
      this.setColor();
      this.userIsAway = false;
      this.fieldInfo = this.flp.getFields(this.field.name)[0].info;
      this.fieldAdress = this.flp.getFields(this.field.name)[0].ga + " " +  this.flp.getFields(this.field.name)[0].pa;
    })

    let fieldPageData = {

      key: this.key,
      id: this.id,
      field: this.field,
      userName: this.userName,
      userId: this.userId,
      myLatitude: this.myLatitude,
      myLongitude: this.myLongitude,
      loginMethod: this.loginMethod,

    }

    console.log("FieldPage_DidLoad", fieldPageData);

  }

  ionViewWillEnter() {
    console.log("refresh?");
  }

  dismiss() {

    let data = {
      userName: this.userName,
      userId: this.userId,
      myLatitude: this.myLatitude,
      myLongitude: this.myLongitude,
      loginMethod: this.loginMethod,
    };

    this.viewCtrl.dismiss(data);

  }

  goToCalendar() {

    //this.navCtrl.push(CalendarPage, { 'id': this.id });

    let calendarPageData = {

      'id': this.id,

      userName: this.userName,
      userId: this.userId,
      myLatitude: this.myLatitude,
      myLongitude: this.myLongitude,
      loginMethod: this.loginMethod,

    }

    let nextPage = this.modalCtrl.create(CalendarPage, calendarPageData);
    nextPage.onDidDismiss(data => {

      data.id = this.id;

      data.userName = this.userName;
      data.userId = this.userId;
      data.myLatitude = this.myLatitude;
      data.myLongitude = this.myLongitude;
      data.loginMethod = this.loginMethod;

      console.log("FieldPage_dismiss_from_CalendarPage", data);
    });
    nextPage.present();

  }

  toTheChatRoom(key) {

    console.log("BORDE INTE DEN (key) VARA DEFINERAD?", this.key);

    /*this.navCtrl.setRoot(ChatPage, {
      key: key,
      nickname: this.navParams.get("nickname")
    });*/

    let chatName = this.userName.toString();

    let chatPageData = {

      chatName: chatName,
      key: key,

      id: this.id,
      userName: this.userName,
      userId: this.userId,
      myLatitude: this.myLatitude,
      myLongitude: this.myLongitude,
      loginMethod: this.loginMethod,


    }

    let nextPage = this.modalCtrl.create(ChatPage, chatPageData);
    nextPage.onDidDismiss(data => {

      data.id = this.id;
      data.userName = this.userName;
      data.userId = this.userId;
      data.myLatitude = this.myLatitude;
      data.myLongitude = this.myLongitude;
      data.loginMethod = this.loginMethod;


      console.log("FieldPage_dismiss_from_ChatPage", data);
    });
    nextPage.present();

  }

  goHomePage() {
    let nextPage = this.modalCtrl.create(HomePage, { userId: this.userId, userName: this.userName });
    nextPage.present();
  }

  showActivity(id: number) {
    this.navCtrl.push(FieldPage, { id: id });
  }

  showInfo() {
    this.showData = true;
  }

  setRating() {
    // Framtida beräkning av medel osv
  }
  onAddToFavorite(selctedQuote:Quote){
    const altert=this.alertCtrl.create({
      title:"Lägga till i dina favoriter",
      message:" Vill du lägga till planen i dina favoriter?",
      buttons:[{
        text:"Avbryt",
        handler:()=>{
          console.log("avbryt");

        }
      },
      {
        text:"OK",
        role:"agree",
        handler:() =>{
          
          this.favoriteService.addFavorite(this.userId,this.field_id).subscribe();
          this.favorities=[];
          console.log(this.favorities);
          console.log("ok");
        }
      
        
      }
    ]

    });
    altert.present();
     
  
    
  }
 

  lightsOn() {

    this.checkDistance();

    if (!this.userIsAway) {

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

    let lat = field[0].lat;
    let lon = field[0].lon;

    let distance = this.distance(this.myLatitude, this.myLongitude, lat, lon, "K");
    //let distance = this.distance(this.myLatitude, this.myLongitude, this.myLatitude, this.myLongitude, "K");

    console.log(distance);

    let distanceString = distance.toString().substring(0, 5);

    console.log(distanceString);

    if (distance > 0.3) {
      this.myDistance = distanceString;
      this.userIsAway = true;
    }

    

  }

}







