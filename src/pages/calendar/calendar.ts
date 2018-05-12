import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { ListPage } from '../list/list';
import * as moment from 'moment';
import { ActivityService } from "../../providers/activity-service";


@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay  //new Date();
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController) {
  }

 // console.log(navParams.get('val'));

 addActivity() {
  let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
  modal.present();
  modal.onDidDismiss(data => {
    if (data) {
      let activityData = data;

      activityData.startTime = new Date(data.startTime);
      activityData.endTime = new Date(data.endTime);

      let activities = this.eventSource;
      activities.push(activityData);
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
  let start = moment(event.startTime).format('LLLL');
  let end = moment(event.endTime).format('LLLL');

  let alert = this.alertCtrl.create({
    title: '' + event.title,
    subTitle: 'From: ' + start + '<br>To: ' + end,
    buttons: ['OK']
  })
  alert.present();
}

onTimeSelected(ev) {
  this.selectedDay = ev.selectedTime;
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

}
