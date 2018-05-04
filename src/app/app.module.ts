import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FieldPage } from '../pages/field/field';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from "@angular/common/http";
import { FieldService } from "../providers/field-service";

import { Geolocation } from '@ionic-native/geolocation';

import { BarRatingModule } from "ngx-bar-rating";
import { FirstPage } from '../pages/first/first';

import {NgCalendarModule } from 'ionic2-calendar';
import { CalendarPage } from '../pages/calendar/calendar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FieldPage,
    FirstPage,
    CalendarPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgCalendarModule,
    HttpClientModule,
    BarRatingModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FieldPage,
    FirstPage,
    CalendarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FieldService,
    Geolocation
  ]
})
export class AppModule { }
