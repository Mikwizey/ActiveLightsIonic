import { Geolocation } from '@ionic-native/geolocation';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FieldService } from "../../providers/field-service";
import { ListPage } from '../list/list';

import { TrafiklabProvider } from '../../providers/trafiklab/trafiklab';
import { SocialmediaProvider } from "../../providers/socialmedia/socialmedia";
import { UserDataProvider } from "../../providers/user-data/user-data";
import { User } from 'firebase';
import { FieldlocationsProvider } from "../../providers/fieldlocations/fieldlocations";

declare var google: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public show = false;
  //protected nickname: string;

  public fieldLatitude;
  public fieldLongitude;
  public station: any;
  public stationList = [];
  public stationListMap = [];

  //Social media-variabler

  public userId;
  public name;

  //Sök-funktion

  public results;
  public resultsListMap = [];
  public resultsAreShowing = false;

  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, public fieldService: FieldService, private geolocation: Geolocation, public navParams: NavParams, public tlP: TrafiklabProvider, public smp: SocialmediaProvider, public udp: UserDataProvider, public flp: FieldlocationsProvider) {

    this.getLocation();

    let userId = this.navParams.get('userId');
    let name = this.navParams.get('name');
    let loginMethod = this.navParams.get('loginMethod');

    this.smp.setLoginMethod(loginMethod);

    this.udp.setUserId(userId);
    this.udp.setUserName(name);

    this.name = udp.getUserName();
    this.userId = udp.getUserId();

  }

  ionViewDidLoad() {

    this.showMap();

  }

  showMap() {

    this.geolocation.getCurrentPosition().then(resp => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);

      // Map options
      let optionsMap = {
        zoom: 12,
        center: { lat: resp.coords.latitude, lng: resp.coords.longitude }
      };



      // New map
      let map = new google.maps.Map

        (this.mapRef.nativeElement, optionsMap);

      //Mark current position
      new google.maps.Marker({
        position: { lat: resp.coords.latitude, lng: resp.coords.longitude },
        map: map,
        //icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        //icon: 'http://maps.google.com/mapfiles/kml/pal2/icon49.png' //fotbollskaraktär
        //icon: 'http:// google.com/mapfiles/arrow.png'
        icon: 'http://maps.google.com/mapfiles/ms/micons/man.png'
      });

      // Listen for click on map
      /*google.maps.event.addListener(map, 'click', function (event) {
        // Add marker
        addMarker({ coords: event.latLng });
      });*/

      // Array of markers
      /*let markers = [
        {
          coords: { lat: 59.334591, lng: 18.063240 },
          iconImage: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
          content: '<h1>Johannes Bollplan</h1>'
        },
        {
          coords: { lat: 59.3584, lng: 18.100 },
          iconImage: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
          content: '<h1>Bergholms Bollplan</h1>'

        },
        {

          coords: { lat: 59.3684, lng: 18.052240 },
          iconImage: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
        }
      ];*/

      //SL-API: Visar närliggande HPL på kartan
      for (let i = 0; i < this.stationListMap.length; i++) {
        addMarker(this.stationListMap[i]);

      }

      //SÖK-FUNKTIONEN
      for (let i = 0; i < this.resultsListMap.length; i++) {
        addMarker(this.resultsListMap[i]);
      }

      

      // Loop through markers
      /*for (let i = 0; i < markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
      }*/

      // Add Marker Function
      function addMarker(props) {
        let marker = new google.maps.Marker({
          position: props.coords,
          map: map,
          //icon:props.iconImage
        });

        // Check for marker image
        if (props.iconImage) {
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if (props.content) {
          let infoWindow = new google.maps.InfoWindow({
            content: props.content
          });

          marker.addListener('click', function () {
            infoWindow.open(map, marker);
          });
        }
      }
    }).catch((error) => {
      console.log("Error can't find the location", error);
    });
  }// ShowMap

  goToList() {

    //this.navParams.get("nickname")

    this.navCtrl.push(ListPage, { nickname: this.name });
  }

  /*
  *
  * HENRIKS SL API HÄRIFRÅN
  *
  */

  //SL-API: Hämtar platsen

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.fieldLatitude = resp.coords.latitude,
        this.fieldLongitude = resp.coords.longitude,
        console.log(this.fieldLatitude, this.fieldLongitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  //SL-API: Hämtar närliggande stationer

  getNearbyStops() {

    this.show = true;

    this.tlP.getNearbyStops(this.fieldLatitude, this.fieldLongitude)
      .then(data => {

        this.station = data;

        console.log(this.station.LocationList.StopLocation);

        for (let i = 0; i < this.station.LocationList.StopLocation.length; i++) {

          let stationInfo = {

            name: this.station.LocationList.StopLocation[i].name,
            dist: this.station.LocationList.StopLocation[i].dist,
            lat: this.station.LocationList.StopLocation[i].lat,
            long: this.station.LocationList.StopLocation[i].lon,
          }

          //För Google Maps markers.

          let googlelat = parseFloat(this.station.LocationList.StopLocation[i].lat);
          let googlelon = parseFloat(this.station.LocationList.StopLocation[i].lon);
          let iconImage = 'http://maps.google.com/mapfiles/ms/micons/bus.png';
          let googleContent = this.station.LocationList.StopLocation[i].name + ' ' + this.station.LocationList.StopLocation[i].dist + 'm';

          let stationMapInfo = {
            coords: { lat: googlelat, lng: googlelon },
            iconImage: iconImage,
            content: googleContent,
          }

          this.stationList.push(stationInfo);
          this.stationListMap.push(stationMapInfo);
          this.showMap();

        }

      })
  }

  // SL-API: Tar bort närliggande hållplatser och döljer från kartan

  removeNearbyStops() {

    this.show = false;

    for (let i = this.stationListMap.length; i > 0; i--) {
      this.stationListMap.pop();
    }

    this.showMap();

  }

  onInput(ev: any) {

    let query = ev.target.value;

    let results = this.flp.getFields(query);

    console.log(results);

    this.results = results;

    if(results.length == 0){
      
      let inget = {
        namn: "Inga sökträffar på " + "\"" +query + "\"",
      }

      results.push(inget);

    }

  }

  //VISAR SÖKTA PLATSER PÅ KARTAN

  showFieldsMap(fieldname) {

    for (let i = 0; i < this.results.length; i++) {

      if (fieldname == this.results[i].namn) {


        let googlelat = parseFloat(this.results[i].lat);
        let googlelon = parseFloat(this.results[i].lon);
        let iconImage = 'http://maps.google.com/mapfiles/ms/micons/green-dot.png';
        let googleContent = this.results[i].namn;

        let fieldMapInfo = {
          coords: { lat: googlelat, lng: googlelon },
          iconImage: iconImage,
          content: googleContent,
        }

        this.resultsListMap.push(fieldMapInfo);

      }

    }

    this.resultsAreShowing = true;

    this.showMap();

  }

  //DÖLJER SÖKTA PLATSER FRÅN KARTAN

  hideFieldsMap() {

    this.resultsAreShowing = false;

    for (let i = this.resultsListMap.length; i > 0; i--) {
      this.resultsListMap.pop();
    }

    this.showMap();
  }

}







