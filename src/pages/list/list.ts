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


    constructor(public navCtrl: NavController, public navParams: NavParams, public fieldService: FieldService) { }



    showField(name, visitors) {

        let fieldData = {

            name: name,
            visitors: visitors,

        }

        this.navCtrl.push(FieldPage, fieldData);

    }
    
    ionViewDidLoad() {

        this.fieldService.getGoodFields().subscribe(fields => {
            this.fields = fields;
        })
    }

}


