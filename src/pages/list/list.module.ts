import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {FieldService} from '../../providers/field-service';
import {ListPage} from "./list";
import { FavoriteService } from "../../providers/favorite-service";

@NgModule({
  declarations: [
      ListPage
  ],
  imports: [
      IonicPageModule.forChild(ListPage),
  ],
  providers: [
    FieldService,
    FavoriteService,

  ]
})
export class ListPageModule {}
