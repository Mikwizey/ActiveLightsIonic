import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {FieldService} from "../../providers/field-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public fieldService: FieldService) {

  }

}
