import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class FavoriteService {
  //public API = 'https://pvt.dsv.su.se/Group02'; // För att se riktiga servern
  public API = 'http://localhost:8090'; //För att se server lokalt
  // (Spring verkar kunna köras på antingen port 8080 eller port 8090, testa det andra
  //om det första inte funkar
  public ACTIVITY_API = this.API;

  constructor(public http: HttpClient) {
  }

  addToFavorites(userId: number, id: number): Observable<any> {
    return this.http.post(this.API + "/user/" + userId + "/field/" + id + "/favorite/add", {});
  }

  removeFromFavorites(userId: number, id: number): Observable<any> {
    console.log("remove ");
    return this.http.delete(this.API + "/user/" + userId + "/field/" + id + "/favorite/remove");
  }

  getAllFavorites(userId: number): Observable<any> {
    return this.http.get(this.API + "/user/" + userId + "/favorites/get");
  }

}
