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


  constructor(public navCtrl: NavController, public navParams: NavParams, public fieldService: FieldService) {

  }

  showField(id: number) {
    this.navCtrl.push(FieldPage, { id: id }); 
  } 

  ionViewDidLoad() {
    this.fieldService.getGoodFields().subscribe(fields => {
      this.fields = fields;
      
    })
  }

}


