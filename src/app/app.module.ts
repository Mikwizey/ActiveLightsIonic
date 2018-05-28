import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core'; //Locale_id lagt till för o få svenska
import { registerLocaleData } from '@angular/common';  //lagt till för o få svenska
import localeSv from '@angular/common/locales/sv'; //lagt till för o få svenska
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FieldPage } from '../pages/field/field';
import { StatusBar } from '@ionic-native/status-bar';
import { FavoritePage } from '../pages/favorite/favorite';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from "@angular/common/http";
import { FieldService } from "../providers/field-service";
import { ActivityService } from "../providers/activity-service";
import { FavoriteService } from "../providers/favorite-service";
import { Geolocation } from '@ionic-native/geolocation';
import { BarRatingModule } from "ngx-bar-rating";
import { FirstPage } from '../pages/first/first';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarPage } from '../pages/calendar/calendar';
import { GooglePlus } from '@ionic-native/google-plus';
import { TrafiklabProvider } from '../providers/trafiklab/trafiklab';
import { AboutPage } from '../pages/about/about';
import { ChatPage } from "../pages/chat/chat";
import { Facebook } from '@ionic-native/facebook';
import { UserDataProvider } from '../providers/user-data/user-data';
import { FieldlocationsProvider } from '../providers/fieldlocations/fieldlocations';
import { PopoverlistComponent } from '../components/popoverlist/popoverlist';
import {RatingService} from "../providers/rating-service";


registerLocaleData(localeSv);  //lagt till för o få svenska

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FieldPage,
    FirstPage,
    FavoritePage,
    CalendarPage,
    AboutPage,
    ChatPage,
    PopoverlistComponent

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
    FavoritePage,
    ListPage,
    FieldPage,
    FirstPage,
    CalendarPage,
    AboutPage,
    ChatPage,
    PopoverlistComponent


  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: LOCALE_ID, useValue: 'sv' },    //lagt till för sv
    FieldService,
    ActivityService,
    FavoriteService,
    GooglePlus,
    Geolocation,
    TrafiklabProvider,
    Facebook,
    UserDataProvider,
    FieldlocationsProvider,
    RatingService
  ]
})
export class AppModule { }
