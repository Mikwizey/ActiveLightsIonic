import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FieldService } from '../../providers/field-service';
import { FieldPage } from "./field";
import { SthlmService } from "../../providers/sthlm-service";

@NgModule({
  declarations: [
    FieldPage
  ],
  imports: [
    IonicPageModule.forChild(FieldPage),
  ],
  providers: [
    FieldService,
    SthlmService
  ]
})
export class FieldPageModule {}
