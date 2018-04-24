import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FieldService {
  public API = 'http://localhost:8080';
  public FIELD_API = this.API + '/field';

  constructor(public http: HttpClient) {
  }

  getGoodFields(): Observable<any> {
    return this.http.get(this.API + '/field');
  }

}
