import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {FieldService} from '../../providers/field-service';
import {FieldPage} from "./field";
import * as moment from 'moment';
import {CalendarPage} from '../calendar/calendar';

@NgModule({
  declarations: [
    FieldPage
  ],
  imports: [
    IonicPageModule.forChild(FieldPage),
  ],
  providers: [
    FieldService,
  ]
})
export class FieldPageModule {}
