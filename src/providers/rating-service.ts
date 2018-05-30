import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RatingService {
  //public API = 'https://pvt.dsv.su.se/Group02'; // För att se riktiga servern
  public API = 'http://localhost:8090'; //För att se server lokalt
  // (Spring verkar kunna köras på antingen port 8080 eller port 8090, testa det andra
  //om det första inte funkar

  constructor(public http: HttpClient) {
  }

  addRating(userId: number, id: number, value: number): Observable<any> {
    return this.http.post(this.API + "/user/"+ userId +"/field/" + id + "/rating/" + value,{} );
  }

  getAverageRating(id: number): Observable<any> {
    return this.http.get("/field/" + id + "/rating");
  }
}
