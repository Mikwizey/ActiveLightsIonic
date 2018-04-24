import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { FieldService } from "../../providers/field-service";
import { SthlmService } from "../../providers/sthlm-service";

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
  protected fields: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public fieldService: FieldService, public sthlmService: SthlmService) {
  }

  ionViewDidLoad() {
    this.sthlmService.getSthlmApi().subscribe(fields => {
      this.fields = fields;
    })
  }
}
