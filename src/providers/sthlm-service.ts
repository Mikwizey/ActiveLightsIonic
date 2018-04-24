import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class SthlmService {

  sthlmApi = 'http://api.stockholm.se/ServiceGuideService/ServiceUnitTypes/a05cd75b-c974-4890-9a7d-abc790997cf1/ServiceUnits/json?apikey=d2c76f717a554a9bb7496a06fc16b8fc';

  constructor(public http: HttpClient) {

  }

  getSthlmApi(): Observable<any> {
    return this.http.get(this.sthlmApi);
  }
}
