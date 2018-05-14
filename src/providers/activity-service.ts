import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DateTime} from 'ionic-angular';

@Injectable()
export class ActivityService {
  //public API = 'https://pvt.dsv.su.se/Group02';
  public API = 'http://localhost:8080';
  public ACTIVITY_API = this.API;

  constructor(public http: HttpClient) {

  }

  getAllActivities(): Observable<any> {
    return this.http.get(this.API + "/field/" + "activity/",);
  }

  addActivity(id, activitydata): Observable<any> {
    return this.http.post(this.API + "/field/" + id + "/activity/", activitydata);
  }

  getActivityByID(): Observable<any> {
    return this.http.get(this.API + "/field/" + "activity/", {});
  }

}
