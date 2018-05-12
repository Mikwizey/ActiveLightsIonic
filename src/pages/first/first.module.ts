import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstPage } from './first';
import { ActivityService } from "../../providers/activity-service";

@NgModule({
  declarations: [
    FirstPage,
  ],
  imports: [
    IonicPageModule.forChild(FirstPage),
  ],
  providers:[
   ActivityService

  ],

})
export class FirstPageModule {}
