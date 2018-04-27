import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FieldService } from "../../providers/field-service";
import { ListPage } from '../list/list';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, public fieldService: FieldService) {

  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    // Map options
    var options = {
      zoom: 11,
      center: { lat: 59.334591, lng: 18.063240 }
    }

    // New map
    var map = new google.maps.Map
      (this.mapRef.nativeElement, options);

    // Listen for click on map
    google.maps.event.addListener(map, 'click', function (event) {
      // Add marker
      addMarker({ coords: event.latLng });
    });

    // Array of markers
    var markers = [
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
    ];

    // Loop through markers
    for (var i = 0; i < markers.length; i++) {
      // Add marker
      addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props) {
      var marker = new google.maps.Marker({
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
        var infoWindow = new google.maps.InfoWindow({
          content: props.content
        });

        marker.addListener('click', function () {
          infoWindow.open(map, marker);
        });
      }
    }
  }


  goToList() {

    this.navCtrl.push(ListPage);

  }

}
