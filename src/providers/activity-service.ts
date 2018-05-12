import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BrowserModule} from'@angular/platform-browser';

@Injectable()
export class ActivityService {
    public API = 'https://pvt.dsv.su.se/Group02';
    public ACTIVITY_API = this.API + '/field/{id}/activity/add';
    constructor(public http: HttpClient) {

    }
    getAllActivities(): Observable<any> {
        return this.http.get(this.API + "/field/{id}/activity");
      }
    addAllActivities(id): Observable<any> {
      return this.http.put(this.API + "/field/"+id+"/activity/"+"add",{});
      }
      
      getActivityByID(): Observable<any> {
          return this.http.get(this.API + "/field/{id}/activity/{aid}");
      }


}