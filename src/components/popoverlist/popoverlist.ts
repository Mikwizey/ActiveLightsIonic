import { Component } from '@angular/core';
import { FieldlocationsProvider } from '../../providers/fieldlocations/fieldlocations';
import { ViewController, NavParams } from "ionic-angular";

/**
 * Generated class for the PopoverlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'popoverlist',
  templateUrl: 'popoverlist.html'
})
export class PopoverlistComponent {

  value;
  fields = [];

  constructor(public flp: FieldlocationsProvider, public viewCtrl: ViewController) {
    this.fields = this.flp.getAllFields();
  }

  close(value) {
    this.viewCtrl.dismiss(value);
  }
}

