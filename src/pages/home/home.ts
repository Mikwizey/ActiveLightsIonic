import {Geolocation} from '@ionic-native/geolocation';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {FieldService} from "../../providers/field-service";
import {ListPage} from '../list/list';

declare var google: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, public fieldService: FieldService, private geolocation: Geolocation) {
  };


  ionViewDidLoad() {
    this.showMap();
  }


  showMap() {

    this.geolocation.getCurrentPosition().then(resp => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);

      // Map options
      let optionsMap = {
        zoom: 15,
        center: {lat: resp.coords.latitude, lng: resp.coords.longitude}
      };

      // New map
      let map = new google.maps.Map

      (this.mapRef.nativeElement, optionsMap);

      //Mark current position
      let currentPos = new google.maps.Marker({
        position: {lat: resp.coords.latitude, lng: resp.coords.longitude},
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      });

      // Listen for click on map
      google.maps.event.addListener(map, 'click', function (event) {
        // Add marker
        addMarker({coords: event.latLng});
      });

      // Array of markers
      let markers = [
        {
          coords: {lat: 59.334591, lng: 18.063240},
          iconImage: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
          content: '<h1>Johannes Bollplan</h1>'
        },
        {
          coords: {lat: 59.3584, lng: 18.100},
          iconImage: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
          content: '<h1>Bergholms Bollplan</h1>'

        },
        {

          coords: {lat: 59.3684, lng: 18.052240},
          iconImage: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
        }
      ];

      // Loop through markers
      for (let i = 0; i < markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
      }

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

    this.navCtrl.push(ListPage);
  }

}
