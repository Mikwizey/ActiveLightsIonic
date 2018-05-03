import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FieldService } from "../../providers/field-service";




@IonicPage()
@Component({
  selector: 'page-field',
  templateUrl: 'field.html',
})

export class FieldPage {

    protected id;
    protected field;
    
    protected isVisible = false;
    protected buttonText = "Visa aktiviteter";
    protected addIsClicked = false;
    protected actDate = new Date().toISOString();
    protected actTime = new Date().toISOString();
    protected currentrating = 0;

    @ViewChild('actName') actName;
    @ViewChild('actDesc') actDesc;

    activity1 = {

        name: "Hårdkodad exempelaktivitet 1",
        description: "Hårdkodad exempelbeskrivning 1",

    }

    activity2 = {

        name: "Hårdkodad exempelaktivitet 2",
        description: "Hårdkodad exempelbeskrivning 2",

    }

    activityList = [this.activity1, this.activity2];

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public fieldService: FieldService, public alertCtrl: AlertController) {

    }

    setRating() {
        // Framtida beräkning av medel osv
    }

    ionViewDidLoad() {
        this.id = this.navParams.get('id');

        this.fieldService.getField(this.id).subscribe(field => {
            this.field = field;
            this.setColor();
        })

    }

    setColor() {

        switch (this.field.visitors) {

            case "Låg belastning": document.getElementById('visitors').style.color = "green"; break;
            case "Hög belastning": document.getElementById('visitors').style.color = "red"; break;
            case "Medel belastning": document.getElementById('visitors').style.color = "orange"; break;
        } 
    }


    showActivities() {

        switch (this.isVisible) {

            case false:

                this.isVisible = true;

                this.buttonText = "Dölj aktiviteter";

                break;

            case true:

                this.isVisible = false;

                this.buttonText = "Visa aktiviteter";

        }

    }

    showInput() {

        this.addIsClicked = true;
    }

    addActivity() {

        let monthNumber = this.actDate.toString().substring(5, 7);

        let dayNumber = this.actDate.toString().substring(8, 10);

        let month;

        switch (monthNumber) {

            case "01": month = "Jan"; break;
            case "02": month = "Feb"; break;
            case "03": month = "Mar"; break;
            case "04": month = "Apr"; break;
            case "05": month = "Maj"; break;
            case "06": month = "Jun"; break;
            case "07": month = "Jul"; break;
            case "08": month = "Aug"; break;
            case "09": month = "Sep"; break;
            case "10": month = "Okt"; break;
            case "11": month = "Nov"; break;
            case "12": month = "Dec"; break;

        }

        let timeLong = this.actTime.toString().substring(11,16);

        let time = timeLong;

        let activity = {

            name: this.actName.value,
            description: this.actDesc.value,
            time: time,
            month: month,
            day: dayNumber,

        }

        this.activityList.push(activity);

        this.addIsClicked = false;

    }

}




