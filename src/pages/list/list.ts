import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FieldService } from "../../providers/field-service";
import { FieldPage } from '../field/field';
import { HomePage } from '../home/home';
import {FavoritePage} from '../favorite/favorite';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  protected fields: Array<any>;

  //protected nickname: string;

  public myLatitude;
  public myLongitude;
  public userName;
  public userId;
  public loginMethod;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fieldService: FieldService, public viewCtrl: ViewController, public modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
    console.log("refresh?");
    this.fieldService.getGoodFields().subscribe(fields => {
      this.fields = fields;

    })
  }

  ionViewDidLoad() {

    this.myLatitude = this.navParams.get('myLatitude');
    this.myLongitude = this.navParams.get('myLongitude');
    this.userName = this.navParams.get('userName');
    this.userId = this.navParams.get('userId');
    this.loginMethod = this.navParams.get('loginMethod');

    let listPageData = {

      userName: this.userName,
      userId: this.userId,
      myLatitude: this.myLatitude,
      myLongitude: this.myLongitude,
      loginMethod: this.loginMethod,

    };

    console.log("ListPage_DidLoad", listPageData)

  }

  dismiss() {

    let data = {
      userName: this.userName,
      userId: this.userId,
      myLatitude: this.myLatitude,
      myLongitude: this.myLongitude,
      loginMethod: this.loginMethod,
    };

    this.viewCtrl.dismiss(data);
  }

  goHomePage(){
    let nextPage = this.modalCtrl.create(HomePage, {userId: this.userId, userName: this.userName, loginMethod: this.loginMethod});
    nextPage.present();
  }

  showField(id: number) {

    //this.navCtrl.push(FieldPage, { id: id, nickname: this.navParams.get("nickname"), lat: this.myLatitude, lon: this.myLongitude });

    let fieldPageData = {

      id: id,

      userName: this.userName,
      userId: this.userId,
      myLatitude: this.myLatitude,
      myLongitude: this.myLongitude,
      loginMethod: this.loginMethod,

    };

    let nextPage = this.modalCtrl.create(FieldPage, fieldPageData);
    nextPage.onDidDismiss(data => {

      data.userName = this.userName;
      data.userId = this.userId;
      data.myLatitude = this.myLatitude;
      data.myLongitude = this.myLongitude;
      data.loginMethod = this.loginMethod;

      console.log("ListPage_dismiss_from_FieldPage", data);
    });
    nextPage.present();

  }
  goToFavorites(){
    this.navCtrl.push(FavoritePage);  }

}
