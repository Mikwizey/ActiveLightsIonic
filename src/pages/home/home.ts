import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {FieldService} from "../../providers/field-service";
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public fieldService: FieldService) {

  }

goToList(){

  this.navCtrl.push(ListPage);

}

}
