import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { FieldService } from "../../providers/field-service";
import { UserPage } from '../user/user';
import { CalendarPage } from '../calendar/calendar';


@IonicPage()
@Component({
  selector: 'page-field',
  templateUrl: 'field.html',
})

export class FieldPage {

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  };

  protected id;
  protected field;

  protected buttonText = "Visa aktiviteter";
  protected currentrating = 0;


  //för SL API

  public fieldLatitude;
  public fieldLongitude;
  public station: any;
  public stationList = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fieldService: FieldService, public modalCtrl: ModalController, public alertCtrl: AlertController) {

  }


  setRating() {
    // Framtida beräkning av medel osv
  }

  goToCalendar() {
    console.log("calendar page")
    this.navCtrl.push(CalendarPage);
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id');

    this.fieldService.getField(this.id).subscribe(field => {
      this.field = field;
      this.setColor();
    })

  }

  lightsOn() {
    console.log("kommer till ts 1");
    this.fieldService.setLights(this.id).subscribe(field => {
      console.log("kommer till ts 2");
      this.field.lights = true;
    })
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
}






