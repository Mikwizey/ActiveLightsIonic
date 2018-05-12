import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
//import { NgCalendarModule } from 'ionic2-calendar';
import { ActivityService } from "../../providers/activity-service";

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
    //NgCalendarModule
  ],
  providers: [
    
    ActivityService
  ]

})
export class CalendarPageModule {}
