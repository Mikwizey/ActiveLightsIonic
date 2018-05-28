import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {FieldService} from '../../providers/field-service';
import {FieldPage} from "./field";
import * as moment from 'moment';
import {CalendarPage} from '../calendar/calendar';
import { ActivityService } from "../../providers/activity-service";
import {RatingService} from "../../providers/rating-service";




@NgModule({
  declarations: [
    FieldPage
  ],
  imports: [
    IonicPageModule.forChild(FieldPage),


  ],
  providers: [
    FieldService,
    ActivityService,
    RatingService
  ]
})
export class FieldPageModule {}
