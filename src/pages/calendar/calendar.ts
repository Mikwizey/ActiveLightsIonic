import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ViewController } from 'ionic-angular';
import { ListPage } from '../list/list';
import * as moment from 'moment';
import { ActivityService } from "../../providers/activity-service";
import { HomePage } from "../home/home";
//import { CalendarComponent } from "ionic2-calendar/calendar";
//import { ViewChild } from '@angular/core';


@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  // eventSource är den array av events som ionic2-calendar använder.
  // Varje element är en struktur med följande fält:
  //
  // title          Titeln på eventet - ionic2-calendar kräver den
  // startTime      Datum och klockslag då eventet börjar - ionic2-calendar kräver den
  // endTime        Datum och klockslag då eventet slutar - ionic2-calendar kräver den
  // allDay         Flagga som talar om ifall det är en heldagshändelse - ionic2-calendar kräver den
  //                (vi struntar i den utan låter den alltid vara false)
  // fieldId        Fotbollplanens identitet.  KOMMER FRÅN SportLightServer
  // id             Eventets identitet.  KOMMER FRÅN SportLightServer
  //
  eventSource = [];

  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay  //new Date();
  };

  public userId;
  public userName;
  public myLatitude;
  public myLongitude;
  public loginMethod;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController, public activityService: ActivityService, public viewCtrl: ViewController) {
  }

  // console.log(navParams.get('val'));

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');

    let id = this.navParams.get('id');

    this.userId = this.navParams.get('userId');
    this.userName = this.navParams.get('userName');
    this.myLatitude = this.navParams.get('myLatitude');
    this.myLongitude = this.navParams.get('myLongitude');
    this.loginMethod = this.navParams.get('loginMethod');

    this.activityService.getAllActivities(id).subscribe(eventSource => {
      eventSource.forEach(element => {
        element.startTime = new Date(element.startTime);
        element.endTime = new Date(element.endTime);
      });
      this.eventSource = this.eventSource.concat(eventSource);
      console.log(this.eventSource);
    })

    this.activityService.getAllBookedActivities(id).subscribe(eventSource => {
      eventSource.forEach(element => {
        element.startTime = new Date(element.startTime);
        element.endTime = new Date(element.endTime);
        element.title = "BOKAD: " + element.owner + " (" + element.activity + ") ";
      });
      this.eventSource = this.eventSource.concat(eventSource);
      console.log(this.eventSource);
    })

    let calendarPageData = {

      id: id,
      userName: this.userName,
      userId: this.userId,
      myLatitude: this.myLatitude,
      myLongitude: this.myLongitude,
      loginMethod: this.loginMethod

    }

    console.log("CalendarPage_DidLoad", calendarPageData);

  }

  dismiss() {

    let id = this.navParams.get('id');

    let data = {

      id: id,

      userId: this.userId,
      userName: this.userName,
      myLatitude: this.myLatitude,
      myLongitude: this.myLongitude,
      loginMethod: this.loginMethod,

    };

    this.viewCtrl.dismiss(data);

  }

  goHomePage() {
    let nextPage = this.modalCtrl.create(HomePage, { userId: this.userId, userName: this.userName });
    nextPage.present();
  }

  addActivity() {
    let modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let activityData = data;

        activityData.startTime = new Date(data.startTime);
        activityData.endTime = new Date(data.endTime);

        let id = this.navParams.get('id');
        console.log(id);

        let activities = this.eventSource;
        // Den pushade aktiviteten MÅSTE komma från servern
        // för det är den som skapar nya aid
        this.activityService.addActivity(id, activityData).subscribe({
          next: activity => {
            activities.push(activity);
            console.log("Activity data received from server");
            console.log(activity);
          }
        });
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = activities;
        });
      }
    });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    let start = moment(event.startTime).format('LT');
    let end = moment(event.endTime).format('LT');
    let date = moment(event.startTIme).format('L');
    let id = event.fieldId;
    let aid = event.id;

    console.log("onEventSelected, event: ", event);

    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: '<b>Datum: </b>' + date + '<br><b>Start:</b> ' + start
        + '<br><b>Slut:</b> ' + end,
      message: 'Plats: ' + event.place,
      buttons: [ {
        text: 'OK',
          handler: () => {
            console.log('OK clicked');
          }
        },
        {
          text: 'Ta bort aktivitet',
            handler: () => {
              this.activityService.removePlannedActivity(id, aid).subscribe({
                complete: () => {
                  console.log("Field " + id + ", Activity " + aid + " borttagen.");
                  // Gör en ny eventlista som består av alla existerande events UTOM
                  // den (borde bara finnas en) med den aid som vi precis tog bort
                  let activities = this.eventSource.filter(event => event.aid != aid);
                  setTimeout(() => {
                    this.eventSource = activities;
                  });
              }});
              console.log('Remove clicked');
            }
        }]
    });
    alert.present();
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }




}
