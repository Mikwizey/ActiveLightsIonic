import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserDataProvider {

  public userId;
  public userName;

  constructor(public http: HttpClient) {
    console.log('Hello UserDataProvider Provider');
  }

  setUserId(userId){
    this.userId = userId;
  }

  setUserName(userName){
    this.userName = userName;
  }

  getUserId(){
    return this.userId;
  }

  getUserName(){
    return this.userName;
  }

}
