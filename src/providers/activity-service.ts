import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DateTime} from 'ionic-angular';

@Injectable()
export class ActivityService {
    //public API = 'https://pvt.dsv.su.se/Group02';
    public API = 'http://localhost:8080'; //För att se server lokalt
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
        return this.http.get(this.API + "/field/" + field_id + "/activity/"  + activity_id);
    }

}
