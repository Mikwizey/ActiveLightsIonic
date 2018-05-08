import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { FieldService } from "../../providers/field-service";
import { UserPage } from '../user/user';
import { CalendarPage } from '../calendar/calendar';

import { TrafiklabProvider } from '../../providers/trafiklab/trafiklab';

import { Geolocation } from "@ionic-native/geolocation";



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

  protected isVisible = false;
  protected buttonText = "Visa aktiviteter";
  protected currentrating = 0;

  public fieldLatitude;
  public fieldLongitude;
  public station: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fieldService: FieldService, public modalCtrl: ModalController, public alertCtrl: AlertController, public tlP: TrafiklabProvider, private geolocation: Geolocation) {
    this.getLocation();

  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.fieldLatitude = resp.coords.latitude,
        this.fieldLongitude = resp.coords.longitude,
        console.log(this.fieldLatitude, this.fieldLongitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }



  getNearbyStops() {  //SL Närliggande hållplatser, visar i konsol

    this.tlP.getNearbyStops(this.fieldLatitude, this.fieldLongitude)
      .then(data => {

        this.station = data;

        console.log(this.station.LocationList.StopLocation);

        for(let i = 0; i < this.station.LocationList.StopLocation.length; i++){

          console.log(this.station.LocationList.StopLocation[i].name);
          console.log(this.station.LocationList.StopLocation[i].dist + 'm bort.');

        }

        

        
      })
  }

  showInConsole() {

    let stops = this.station.LocationList.StopLocation;

    for (let i = 0; i < stops; i++) {
      console.log(stops[i].name, stops[i].dist);

    }
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






