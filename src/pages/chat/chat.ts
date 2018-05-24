import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, ViewController } from 'ionic-angular';
import { FieldPage } from "../field/field";
import * as firebase from 'Firebase';
import { ListPage } from "../list/list";

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  @ViewChild(Content) content: Content;

  public userId;
  public userName;
  public myLatitude;
  public myLongitude;
  public loginMethod;

  data = { type: '', chatName: '', message: '' };
  chats = [];
  roomkey: string;
  chatName: string;
  offStatus: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.roomkey = this.navParams.get("key") as string;
    this.chatName = this.navParams.get("chatName") as string;
    this.data.type = 'message';
    this.data.chatName = this.chatName;

    let joinData = firebase.database().ref('chatrooms/' + this.roomkey + '/chats').push();
    joinData.set({
      type: 'join',
      user: this.chatName,
      message: this.chatName + ' has joined this room.',
      sendDate: Date()
    });
    this.data.message = '';

    firebase.database().ref('chatrooms/' + this.roomkey + '/chats').on('value', resp => {
      this.chats = [];
      this.chats = snapshotKey(resp);
      setTimeout(() => {
        if (this.offStatus === false) {
          this.content.scrollToBottom(300);
        }
      }, 1000);
    });
  }

  ionViewDidLoad() {

    this.userId = this.navParams.get('userId');
    this.userName = this.navParams.get('userName');
    this.myLatitude = this.navParams.get('myLatitude');
    this.myLongitude = this.navParams.get('myLongitude');
    this.loginMethod = this.navParams.get('loginMethod');

    let id = this.navParams.get('id');

    let chatPageData = {

      userName: this.userName,
      userId: this.userId,
      myLatitude: this.myLatitude,
      myLongitude: this.myLongitude,
      key: this.roomkey,
      chatName: this.chatName,
      id: id,
      loginMethod: this.loginMethod,
    }

    console.log("ChatPage_didLoad", chatPageData)

  }

  dismiss() {

    let id = this.navParams.get('id');

    let data = {

      chatName: this.chatName,

      id: id,
      userId: this.userId,
      userName: this.userName,
      myLatitude: this.myLatitude,
      myLongitude: this.myLongitude,
      loginMethod: this.loginMethod,

    };

    this.viewCtrl.dismiss(data);


  }

  sendMessage() {
    let newData = firebase.database().ref('chatrooms/' + this.roomkey + '/chats').push();
    newData.set({
      type: this.data.type,
      user: this.data.chatName,
      message: this.data.message,
      sendDate: Date()
    });
    this.data.message = '';
  }
  exitChat() {
    let exitData = firebase.database().ref('chatrooms/' + this.roomkey + '/chats').push();
    exitData.set({
      type: 'exit',
      user: this.chatName,
      message: this.chatName + ' has exited this room.',
      sendDate: Date()
    });

    this.offStatus = true;

    this.dismiss();
  }
}




export const snapshotKey = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
