import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {FieldService} from '../../providers/field-service';
import {UserPage} from "./user";

@NgModule({
  declarations: [
      UserPage
  ],
  imports: [
      IonicPageModule.forChild(UserPage),
  ],
  providers: [
    FieldService,
  ]
})
export class UserPageModule {}