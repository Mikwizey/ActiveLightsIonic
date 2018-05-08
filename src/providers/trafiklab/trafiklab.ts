import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TrafiklabProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TrafiklabProvider Provider');
  }

  getNearbyStops(latitude, longitude) {

    return new Promise(resolve => {
      this.http.get('http://api.sl.se/api2/nearbystops.json?key=e71c5e6bea544fad9cc58dc344d0a2ad&originCoordLat=' + latitude + '&originCoordLong=' + longitude).subscribe(data => {

        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
