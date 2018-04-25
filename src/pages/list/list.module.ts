import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {FieldService} from '../../providers/field-service';
import {ListPage} from "./list";

@NgModule({
  declarations: [
      ListPage
  ],
  imports: [
      IonicPageModule.forChild(ListPage),
  ],
  providers: [
    FieldService,
  ]
})
export class ListPageModule {}
