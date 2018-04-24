import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {FieldService} from '../../providers/field-service';
import {FieldPage} from "./field";

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
