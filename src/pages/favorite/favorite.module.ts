import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {FieldService} from '../../providers/field-service';
import {FavoritePage} from "./favorite";
import * as moment from 'moment';
import {CalendarPage} from '../calendar/calendar';
import { ActivityService } from "../../providers/activity-service";

  


@NgModule({
  declarations: [
    FavoritePage
  ],
  imports: [
    IonicPageModule.forChild(FavoritePage),
   

  ],
  providers: [
    FieldService,
    ActivityService
  ]
})
export class FavoritePageModule {}