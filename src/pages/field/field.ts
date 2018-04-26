import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FieldService } from "../../providers/field-service";
/**
 * Generated class for the FieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-field',
  templateUrl: 'field.html',
})
export class FieldPage {

  protected name;
  protected visitors;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fieldService: FieldService) {

  
  }

  ionViewDidLoad() {

    this.name = this.navParams.get('name');
    this.visitors = this.navParams.get('visitors')

    console.log(this.name, this.visitors);

    this.setColor();

  }

  setColor(){

    switch(this.visitors){

      case "Låg belastning": document.getElementById('visitors').style.color="green"; break;
      case "Hög belastning": document.getElementById('visitors').style.color="red"; break;
      case "Medel belastning": document.getElementById('visitors').style.color="orange"; break;
    }

  }

}