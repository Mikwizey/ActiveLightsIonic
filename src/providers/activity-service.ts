import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DateTime } from 'ionic-angular';

@Injectable()
export class ActivityService {
  //public API = 'https://pvt.dsv.su.se/Group02'; // För att se riktiga servern
  public API = 'http://localhost:8090'; //För att se server lokalt
  // (Spring verkar kunna köras på antingen port 8080 eller port 8090, testa det andra
  //om det första inte funkar
  public ACTIVITY_API = this.API;
  constructor(public http: HttpClient) {

  }
  getAllActivities(field_id: number): Observable<any> {
    return this.http.get(this.API + "/field/" + field_id + "/activity");
  }
  addActivity(field_id: number, data): Observable<any> {
    return this.http.post(this.API + "/field/" + field_id + "/activity/add", data);
  }

  getActivityByID(field_id: number, activity_id: number): Observable<any> {
    return this.http.get(this.API + "/field/" + field_id + "/activity/" + activity_id);
  }

  removePlannedActivity(id: number, aid: number): Observable<any> {
    console.log("activity service removing started");
    return this.http.delete(this.API + "/field/" + id + "/activity/remove/"  + aid);
  }

  // Metod för bokad aktiviteter: getAllBookedActivities
  getAllBookedActivities(field_id: number): Observable<any> {
    return this.http.get(this.API + "/field/" + field_id + "/bookedactivity");
  }

}
