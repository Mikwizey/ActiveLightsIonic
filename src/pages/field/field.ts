import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FieldService } from "../../providers/field-service";

@IonicPage()
@Component({
  selector: 'page-field',
  templateUrl: 'field.html',
})



export class FieldPage {

  protected name;
  protected visitors;
  protected isVisible = false;
  protected buttonText = "Visa aktiviteter";

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

  ionViewDidLoad() {

    this.name = this.navParams.get('name');
    this.visitors = this.navParams.get('visitors')
    this.setColor();

  }

  setColor() {

    switch (this.visitors) {

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

  addActivity() {

    this.showActivityPrompt();

  }

  showActivityPrompt() {


    let inputForm = this.alertCtrl.create({
      title: 'Skapa aktivitet',
      message: "Namnge och beskriv din aktivitet.",
      inputs: [
        {
          name: 'name',
          placeholder: 'Namn på aktiviteten.'
        },
        {
          name: 'desc',
          placeholder: 'Beskriv aktiviteten.'
        }
      ],
      buttons: [
        {
          text: 'Avbryt',
          handler: data => {
            return;
          }
        },
        {
          text: 'Skapa',
          handler: data => {

            if (data.desc.length == 0 || data.desc.length == 0) {
              this.showEmptyAlert();
            }

            else {

              let activity = {

                name: data.name,
                description: data.desc,

              }

              this.activityList.push(activity);

            }


          }
        }
      ]
    });
    inputForm.present();
  }

  showEmptyAlert() {
    let alert = this.alertCtrl.create({
      title: 'Fyll i båda fälten!',
      subTitle: 'Namn eller beskrivning saknas.',
      buttons: ['Yes papi']
    });
    alert.present();
  }
}




