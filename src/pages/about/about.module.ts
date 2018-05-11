import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {FieldService} from '../../providers/field-service';
import {AboutPage} from "./about";

@NgModule({
  declarations: [
      AboutPage
  ],
  imports: [
      IonicPageModule.forChild(AboutPage),
  ],
})
export class AboutPageModule {}