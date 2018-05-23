import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FieldService } from "../../providers/field-service";
import { FieldPage } from '../field/field';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  protected fields: Array<any>;

  protected nickname:string;

  public myLatitude;
  public myLongitude;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fieldService: FieldService) {

  }

  showField(id: number) {
    this.navCtrl.push(FieldPage, { id: id, nickname:this.navParams.get("nickname"), lat: this.myLatitude, lon: this.myLongitude });
  }

  ionViewWillEnter() {
    console.log("refresh?");
    this.fieldService.getGoodFields().subscribe(fields => {
      this.fields = fields;

    })
  }

  ionViewDidLoad(){

    this.myLatitude = this.navParams.get('lat');
    this.myLongitude = this.navParams.get('lon');
  }



}


