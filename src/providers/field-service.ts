import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FieldService {
  public API = 'https://pvt.dsv.su.se/Group02'; //För att se riktiga servern
  //public API = 'http://localhost:8090'; //För att se server lokalt
  public FIELD_API = this.API + '/field';

  constructor(public http: HttpClient) {
  }

  getGoodFields(): Observable<any> {
    return this.http.get(this.API + '/field');
  }

    getField(id: number): Observable<any> {
        return this.http.get(this.API + '/field/' + id);
    }

  setLights(id: number): Observable<any> {
    console.log("kommer till fs");
    return this.http.put(this.API + '/field/' + id + '/lightson',{});
  }

}
