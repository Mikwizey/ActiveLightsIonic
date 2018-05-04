webpackJsonp([5],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl, navParams, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: this.selectedDay //new Date();
        };
    }
    // console.log(navParams.get('val'));
    CalendarPage.prototype.addActivity = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var activityData = data;
                activityData.startTime = new Date(data.startTime);
                activityData.endTime = new Date(data.endTime);
                var activities_1 = _this.eventSource;
                activities_1.push(activityData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = activities_1;
                });
            }
        });
    };
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarPage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format('LLLL');
        var alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: 'From: ' + start + '<br>To: ' + end,
            buttons: ['OK']
        });
        alert.present();
    };
    CalendarPage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    CalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarPage');
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"C:\Users\h3nke\Documents\GitHub\SportLightsIonic\src\pages\calendar\calendar.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{ viewTitle }}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addActivity()">\n\n        <ion-icon ios="ios-add" md="md-add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <calendar\n\n      [eventSource]="eventSource"\n\n      [calendarMode]="calendar.mode"\n\n      [currentDate]="calendar.currentDate"\n\n      (onEventSelected)="onEventSelected($event)"\n\n      (onTitleChanged)="onViewTitleChanged($event)"\n\n      (onTimeSelected)="onTimeSelected($event)"\n\n      step="30"\n\n      class="calendar">\n\n    </calendar>\n\n    </ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\h3nke\Documents\GitHub\SportLightsIonic\src\pages\calendar\calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirstPage = /** @class */ (function () {
    function FirstPage(navCtrl, navParams, googlePlus) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googlePlus = googlePlus;
    }
    FirstPage.prototype.ionViewDidLoad = function () {
    };
    FirstPage.prototype.goMapPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    FirstPage.prototype.goUserPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserPage */]);
    };
    FirstPage.prototype.loginWithGoogle = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            console.log(res);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        })
            .catch(function (err) { return console.error(err); });
    };
    FirstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first',template:/*ion-inline-start:"C:\Users\h3nke\Documents\GitHub\SportLightsIonic\src\pages\first\first.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="background">\n\n   \n\n<div class="heading">\n\n  \n\n    <h2>Sport Lights</h2>\n\n  </div>\n\n  <div class="heading">\n\n    <h5>Let\'s light it up together and play football till you can no longer walk.</h5>\n\n  </div>\n\n <ion-card>\n\n  <ion-card-header >\n\n    <div text-wrap> \n\n   \n\n      \n\n    \n\n  </div> \n\n  </ion-card-header>\n\n  <ion-card-content>\n\n    <ion-list no-line>\n\n\n\n    <ion-item>\n\n     \n\n      <ion-input type="text" placeholder="Username"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      \n\n      <ion-input type="password" placeholder="Password"></ion-input>\n\n    </ion-item>\n\n\n\n    \n\n      <button ion-button block outline (click)="goUserPage()" color="light">Log in</button>\n\n      <p>Eller logga in med Google+</p>\n\n  \n\n\n\n     <button ion-button (click)="loginWithGoogle()">Logga in</button>\n\n  </ion-list>\n\n</ion-card-content>\n\n  </ion-card>\n\n\n\n    <button class="bottom" ion-button clear full color="light">Inget konto? registrera dig här</button>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\h3nke\Documents\GitHub\SportLightsIonic\src\pages\first\first.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], FirstPage);
    return FirstPage;
}());

//# sourceMappingURL=first.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar/calendar.module": [
		425,
		4
	],
	"../pages/event-modal/event-modal.module": [
		426,
		0
	],
	"../pages/field/field.module": [
		427,
		3
	],
	"../pages/first/first.module": [
		428,
		2
	],
	"../pages/list/list.module": [
		429,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_field_field__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_field_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bar_rating__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_first_first__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic2_calendar__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_calendar_calendar__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_plus__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_field_field__["a" /* FieldPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_calendar_calendar__["a" /* CalendarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/field/field.module#FieldPageModule', name: 'FieldPage', segment: 'field', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/first/first.module#FirstPageModule', name: 'FirstPage', segment: 'first', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_bar_rating__["a" /* BarRatingModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_field_field__["a" /* FieldPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_calendar_calendar__["a" /* CalendarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_field_service__["a" /* FieldService */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 163,
	"./af.js": 163,
	"./ar": 164,
	"./ar-dz": 165,
	"./ar-dz.js": 165,
	"./ar-kw": 166,
	"./ar-kw.js": 166,
	"./ar-ly": 167,
	"./ar-ly.js": 167,
	"./ar-ma": 168,
	"./ar-ma.js": 168,
	"./ar-sa": 169,
	"./ar-sa.js": 169,
	"./ar-tn": 170,
	"./ar-tn.js": 170,
	"./ar.js": 164,
	"./az": 171,
	"./az.js": 171,
	"./be": 172,
	"./be.js": 172,
	"./bg": 173,
	"./bg.js": 173,
	"./bm": 174,
	"./bm.js": 174,
	"./bn": 175,
	"./bn.js": 175,
	"./bo": 176,
	"./bo.js": 176,
	"./br": 177,
	"./br.js": 177,
	"./bs": 178,
	"./bs.js": 178,
	"./ca": 179,
	"./ca.js": 179,
	"./cs": 180,
	"./cs.js": 180,
	"./cv": 181,
	"./cv.js": 181,
	"./cy": 182,
	"./cy.js": 182,
	"./da": 183,
	"./da.js": 183,
	"./de": 184,
	"./de-at": 185,
	"./de-at.js": 185,
	"./de-ch": 186,
	"./de-ch.js": 186,
	"./de.js": 184,
	"./dv": 187,
	"./dv.js": 187,
	"./el": 188,
	"./el.js": 188,
	"./en-au": 189,
	"./en-au.js": 189,
	"./en-ca": 190,
	"./en-ca.js": 190,
	"./en-gb": 191,
	"./en-gb.js": 191,
	"./en-ie": 192,
	"./en-ie.js": 192,
	"./en-il": 193,
	"./en-il.js": 193,
	"./en-nz": 194,
	"./en-nz.js": 194,
	"./eo": 195,
	"./eo.js": 195,
	"./es": 196,
	"./es-do": 197,
	"./es-do.js": 197,
	"./es-us": 198,
	"./es-us.js": 198,
	"./es.js": 196,
	"./et": 199,
	"./et.js": 199,
	"./eu": 200,
	"./eu.js": 200,
	"./fa": 201,
	"./fa.js": 201,
	"./fi": 202,
	"./fi.js": 202,
	"./fo": 203,
	"./fo.js": 203,
	"./fr": 204,
	"./fr-ca": 205,
	"./fr-ca.js": 205,
	"./fr-ch": 206,
	"./fr-ch.js": 206,
	"./fr.js": 204,
	"./fy": 207,
	"./fy.js": 207,
	"./gd": 208,
	"./gd.js": 208,
	"./gl": 209,
	"./gl.js": 209,
	"./gom-latn": 210,
	"./gom-latn.js": 210,
	"./gu": 211,
	"./gu.js": 211,
	"./he": 212,
	"./he.js": 212,
	"./hi": 213,
	"./hi.js": 213,
	"./hr": 214,
	"./hr.js": 214,
	"./hu": 215,
	"./hu.js": 215,
	"./hy-am": 216,
	"./hy-am.js": 216,
	"./id": 217,
	"./id.js": 217,
	"./is": 218,
	"./is.js": 218,
	"./it": 219,
	"./it.js": 219,
	"./ja": 220,
	"./ja.js": 220,
	"./jv": 221,
	"./jv.js": 221,
	"./ka": 222,
	"./ka.js": 222,
	"./kk": 223,
	"./kk.js": 223,
	"./km": 224,
	"./km.js": 224,
	"./kn": 225,
	"./kn.js": 225,
	"./ko": 226,
	"./ko.js": 226,
	"./ky": 227,
	"./ky.js": 227,
	"./lb": 228,
	"./lb.js": 228,
	"./lo": 229,
	"./lo.js": 229,
	"./lt": 230,
	"./lt.js": 230,
	"./lv": 231,
	"./lv.js": 231,
	"./me": 232,
	"./me.js": 232,
	"./mi": 233,
	"./mi.js": 233,
	"./mk": 234,
	"./mk.js": 234,
	"./ml": 235,
	"./ml.js": 235,
	"./mn": 236,
	"./mn.js": 236,
	"./mr": 237,
	"./mr.js": 237,
	"./ms": 238,
	"./ms-my": 239,
	"./ms-my.js": 239,
	"./ms.js": 238,
	"./mt": 240,
	"./mt.js": 240,
	"./my": 241,
	"./my.js": 241,
	"./nb": 242,
	"./nb.js": 242,
	"./ne": 243,
	"./ne.js": 243,
	"./nl": 244,
	"./nl-be": 245,
	"./nl-be.js": 245,
	"./nl.js": 244,
	"./nn": 246,
	"./nn.js": 246,
	"./pa-in": 247,
	"./pa-in.js": 247,
	"./pl": 248,
	"./pl.js": 248,
	"./pt": 249,
	"./pt-br": 250,
	"./pt-br.js": 250,
	"./pt.js": 249,
	"./ro": 251,
	"./ro.js": 251,
	"./ru": 252,
	"./ru.js": 252,
	"./sd": 253,
	"./sd.js": 253,
	"./se": 254,
	"./se.js": 254,
	"./si": 255,
	"./si.js": 255,
	"./sk": 256,
	"./sk.js": 256,
	"./sl": 257,
	"./sl.js": 257,
	"./sq": 258,
	"./sq.js": 258,
	"./sr": 259,
	"./sr-cyrl": 260,
	"./sr-cyrl.js": 260,
	"./sr.js": 259,
	"./ss": 261,
	"./ss.js": 261,
	"./sv": 262,
	"./sv.js": 262,
	"./sw": 263,
	"./sw.js": 263,
	"./ta": 264,
	"./ta.js": 264,
	"./te": 265,
	"./te.js": 265,
	"./tet": 266,
	"./tet.js": 266,
	"./tg": 267,
	"./tg.js": 267,
	"./th": 268,
	"./th.js": 268,
	"./tl-ph": 269,
	"./tl-ph.js": 269,
	"./tlh": 270,
	"./tlh.js": 270,
	"./tr": 271,
	"./tr.js": 271,
	"./tzl": 272,
	"./tzl.js": 272,
	"./tzm": 273,
	"./tzm-latn": 274,
	"./tzm-latn.js": 274,
	"./tzm.js": 273,
	"./ug-cn": 275,
	"./ug-cn.js": 275,
	"./uk": 276,
	"./uk.js": 276,
	"./ur": 277,
	"./ur.js": 277,
	"./uz": 278,
	"./uz-latn": 279,
	"./uz-latn.js": 279,
	"./uz.js": 278,
	"./vi": 280,
	"./vi.js": 280,
	"./x-pseudo": 281,
	"./x-pseudo.js": 281,
	"./yo": 282,
	"./yo.js": 282,
	"./zh-cn": 283,
	"./zh-cn.js": 283,
	"./zh-hk": 284,
	"./zh-hk.js": 284,
	"./zh-tw": 285,
	"./zh-tw.js": 285
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 378;

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_field_field__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_first_first__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_user__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_first_first__["a" /* FirstPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Hem', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Lista med planer', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Fotbollsplan', component: __WEBPACK_IMPORTED_MODULE_6__pages_field_field__["a" /* FieldPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.goUserPage = function (page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */]);
    };
    MyApp.prototype.goToList = function (page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\h3nke\Documents\GitHub\SportLightsIonic\src\app\app.html"*/'<ion-menu   side="right"[content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-item (click)="goUserPage()">\n\n        Account\n\n      </ion-item> \n\n      <ion-item (click)="goToList()">\n\n          Fotballplats\n\n        </ion-item> \n\n\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" menu-close="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\h3nke\Documents\GitHub\SportLightsIonic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FieldService = /** @class */ (function () {
    function FieldService(http) {
        this.http = http;
        this.API = 'https://pvt.dsv.su.se/Group02'; //För att se riktiga servern
        //public API = 'http://localhost:8080'; //För att se server lokalt
        this.FIELD_API = this.API + '/field';
    }
    FieldService.prototype.getGoodFields = function () {
        return this.http.get(this.API + '/field');
    };
    FieldService.prototype.getField = function (id) {
        return this.http.get(this.API + '/field/' + id);
    };
    FieldService.prototype.setLights = function (id) {
        console.log("kommer till fs");
        return this.http.put(this.API + '/field/' + id + '/lightson', {});
    };
    FieldService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FieldService);
    return FieldService;
}());

//# sourceMappingURL=field-service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_field_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_calendar__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FieldPage = /** @class */ (function () {
    /*
        @ViewChild('actName') actName;
        @ViewChild('actDesc') actDesc;
    
        activity1 = {
    
            name: "Hårdkodad exempelaktivitet 1",
            description: "Hårdkodad exempelbeskrivning 1",
    
        }
    
        activity2 = {
    
            name: "Hårdkodad exempelaktivitet 2",
            description: "Hårdkodad exempelbeskrivning 2",
    
        }
    
        activityList = [this.activity1, this.activity2]; */
    function FieldPage(navCtrl, navParams, fieldService, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fieldService = fieldService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: this.selectedDay
        };
        this.isVisible = false;
        this.buttonText = "Visa aktiviteter";
        /*  protected addIsClicked = false;
         protected actDate = new Date().toISOString();
         protected actTime = new Date().toISOString(); */
        this.currentrating = 0;
    }
    FieldPage.prototype.setRating = function () {
        // Framtida beräkning av medel osv
    };
    FieldPage.prototype.goToCalendar = function () {
        console.log("calendar page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calendar_calendar__["a" /* CalendarPage */]);
    };
    FieldPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.id = this.navParams.get('id');
        this.fieldService.getField(this.id).subscribe(function (field) {
            _this.field = field;
            _this.setColor();
        });
    };
    FieldPage.prototype.lightsOn = function () {
        var _this = this;
        console.log("kommer till ts 1");
        this.fieldService.setLights(this.id).subscribe(function (field) {
            console.log("kommer till ts 2");
            _this.field.lights = true;
        });
    };
    FieldPage.prototype.setColor = function () {
        switch (this.field.visitors) {
            case "Låg belastning":
                document.getElementById('visitors').style.color = "green";
                break;
            case "Hög belastning":
                document.getElementById('visitors').style.color = "red";
                break;
            case "Medel belastning":
                document.getElementById('visitors').style.color = "orange";
                break;
        }
    };
    /*
      showActivities() {
    
        switch (this.isVisible) {
    
          case false:
    
            this.isVisible = true;
    
            this.buttonText = "Dölj aktiviteter";
    
            break;
    
          case true:
    
            this.isVisible = false;
    
            this.buttonText = "Visa aktiviteter";
    
        }
    
      }
    
      showInput() {
    
        this.addIsClicked = true;
      }
    
      addActivity() {
    
        let monthNumber = this.actDate.toString().substring(5, 7);
    
        let dayNumber = this.actDate.toString().substring(8, 10);
    
        let month;
    
        switch (monthNumber) {
    
          case "01": month = "Jan"; break;
          case "02": month = "Feb"; break;
          case "03": month = "Mar"; break;
          case "04": month = "Apr"; break;
          case "05": month = "Maj"; break;
          case "06": month = "Jun"; break;
          case "07": month = "Jul"; break;
          case "08": month = "Aug"; break;
          case "09": month = "Sep"; break;
          case "10": month = "Okt"; break;
          case "11": month = "Nov"; break;
          case "12": month = "Dec"; break;
    
        }
    
        let timeLong = this.actTime.toString().substring(11,16);
    
        let time = timeLong;
    
        let activity = {
    
          name: this.actName.value,
          description: this.actDesc.value,
          time: time,
          month: month,
          day: dayNumber,
    
        }
    
        this.activityList.push(activity);
    
        this.addIsClicked = false; */
    FieldPage.prototype.goUserPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserPage */]);
    };
    FieldPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-field',template:/*ion-inline-start:"C:\Users\h3nke\Documents\GitHub\SportLightsIonic\src\pages\field\field.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only menu-toggle>\n\n                <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title>Fotbollsplan</ion-title>\n\n    <ion-title>{{ viewTitle }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <h1 class="name">{{field?.name}}</h1>\n\n\n\n    <h2 id="visitors" class="">{{field?.visitors}}</h2>\n\n\n\n    <button ion-button icon-end small round float-right color="assertive" (click)="toTheChatRoom()" >\n\n        Chatta\n\n        <ion-icon ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon></button>\n\n\n\n    <bar-rating (rateChange)="setRate" [(ngModel)]="currentrating"></bar-rating>\n\n    <!-- DEBUG -->{{currentrating}}\n\n\n\n\n\n    <!-- ändrat från showActivities() till gotocalendar för att få fram kalendern-->\n\n    <button ion-button icon-left full color="dark" (click)="goToCalendar()" >\n\n        <ion-icon name="md-calendar"></ion-icon>{{buttonText}}</button>\n\n\n\n    <!-- Lampknappen -->\n\n        <button ion-button icon-left full color="dark" *ngIf="field?.lights == false"\n\n                (click)="lightsOn(field.id)">\n\n            <ion-icon name="md-add-circle"></ion-icon>\n\n            Tänd belysning</button>\n\n\n\n        <button ion-button icon-left full color="dark" *ngIf="field?.lights == true"\n\n                [disabled]="true">\n\n            <ion-icon name="md-bulb"></ion-icon>\n\n            Planen är tänd</button>\n\n\n\n\n\n        <!-- <div *ngIf="isVisible" id="activities">\n\n\n\n            <button ion-button icon-left full color="secondary"  (click)="showInput()">\n\n                <ion-icon name="md-add-circle"></ion-icon>\n\n                Lägg till aktivitet</button>\n\n\n\n            <!-- <div *ngIf="addIsClicked" id="addActivity"> --> \n\n\n\n           <!--      <ion-item>\n\n                    <ion-label>Namn</ion-label>\n\n                    <ion-input type="text" value="" #actName></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label>Beskrivning</ion-label>\n\n                    <ion-input type="text" value="" #actDesc></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label>Datum</ion-label>\n\n                    <ion-datetime #actDesc displayFormat="DD MMM" pickerFormat="DD MMM" [(ngModel)]="actDate"></ion-datetime>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label>Tid</ion-label>\n\n                    <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" [(ngModel)]="actTime"></ion-datetime>\n\n                </ion-item>\n\n\n\n                <div class="doneBtn">\n\n                    <button ion-button icon-left color="secondary" (click)="addActivity()">\n\n                        <ion-icon name="md-checkmark"></ion-icon>\n\n                        Lägg till</button>\n\n                </div>\n\n\n\n            </div> -->\n\n\n\n            <!-- <h1 padding>Aktiviteter</h1>\n\n\n\n            <ion-item *ngFor="let activity of activityList">\n\n\n\n                <h2>{{activity.name}}{{activity.time}}</h2>\n\n                <h3>{{activity.day}} {{activity.month}}</h3>\n\n                <p>{{activity.description}}</p>\n\n\n\n            </ion-item> -->\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\h3nke\Documents\GitHub\SportLightsIonic\src\pages\field\field.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_field_service__["a" /* FieldService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FieldPage);
    return FieldPage;
}());

//# sourceMappingURL=field.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_field_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field_field__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, fieldService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fieldService = fieldService;
    }
    ListPage.prototype.showField = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__field_field__["a" /* FieldPage */], { id: id });
    };
    ListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("refresh?");
        this.fieldService.getGoodFields().subscribe(function (fields) {
            _this.fields = fields;
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\h3nke\Documents\GitHub\SportLightsIonic\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    \n\n    <ion-title>Fotbollsplaner i Stockholm</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <!-- <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)"> -->\n\n        <!-- <ion-icon [name]="item.icon" item-start></ion-icon> -->\n\n        <!-- {{item.title}} -->\n\n        <!-- <div class="item-note" item-end>\n\n             {{item.note}} -->\n\n        <!-- </div> -->\n\n        <!-- </button> -->\n\n\n\n        \n\n        <button ion-item *ngFor="let field of fields" (click)="showField(field.id)">\n\n            <ion-icon name="md-bulb" *ngIf="field.lights == true" \n\n                      item-start></ion-icon>\n\n            <ion-icon name="md-add-circle" *ngIf="field.lights == false"\n\n                      item-start></ion-icon>\n\n            {{field.name}}\n\n            \n\n        </button>\n\n        \n\n    </ion-list>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\h3nke\Documents\GitHub\SportLightsIonic\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_field_service__["a" /* FieldService */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserPage = /** @class */ (function () {
    function UserPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\h3nke\Documents\GitHub\SportLightsIonic\src\pages\user\user.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      \n\n      <ion-title> Account</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n\n\n  </ion-content>'/*ion-inline-end:"C:\Users\h3nke\Documents\GitHub\SportLightsIonic\src\pages\user\user.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_field_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, fieldService, geolocation) {
        this.navCtrl = navCtrl;
        this.fieldService = fieldService;
        this.geolocation = geolocation;
    }
    ;
    HomePage.prototype.ionViewDidLoad = function () {
        this.showMap();
    };
    HomePage.prototype.showMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            // Map options
            var optionsMap = {
                zoom: 15,
                center: { lat: resp.coords.latitude, lng: resp.coords.longitude }
            };
            // New map
            var map = new google.maps.Map(_this.mapRef.nativeElement, optionsMap);
            //Mark current position
            new google.maps.Marker({
                position: { lat: resp.coords.latitude, lng: resp.coords.longitude },
                map: map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            });
            // Listen for click on map
            google.maps.event.addListener(map, 'click', function (event) {
                // Add marker
                addMarker({ coords: event.latLng });
            });
            // Array of markers
            var markers = [
                {
                    coords: { lat: 59.334591, lng: 18.063240 },
                    iconImage: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                    content: '<h1>Johannes Bollplan</h1>'
                },
                {
                    coords: { lat: 59.3584, lng: 18.100 },
                    iconImage: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                    content: '<h1>Bergholms Bollplan</h1>'
                },
                {
                    coords: { lat: 59.3684, lng: 18.052240 },
                    iconImage: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
                }
            ];
            // Loop through markers
            for (var i = 0; i < markers.length; i++) {
                // Add marker
                addMarker(markers[i]);
            }
            // Add Marker Function
            function addMarker(props) {
                var marker = new google.maps.Marker({
                    position: props.coords,
                    map: map,
                });
                // Check for marker image
                if (props.iconImage) {
                    // Set icon image
                    marker.setIcon(props.iconImage);
                }
                // Check content
                if (props.content) {
                    var infoWindow_1 = new google.maps.InfoWindow({
                        content: props.content
                    });
                    marker.addListener('click', function () {
                        infoWindow_1.open(map, marker);
                    });
                }
            }
        }).catch(function (error) {
            console.log("Error can't find the location", error);
        });
    }; // ShowMap
    HomePage.prototype.goToList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapRef", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\h3nke\Documents\GitHub\SportLightsIonic\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-title>SportLights</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div padding>\n\n    <button ion-button color="dark" block (click)="goToList()">Till lista</button>\n\n  </div>\n\n\n\n  <div #map id="map"></div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\h3nke\Documents\GitHub\SportLightsIonic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_field_service__["a" /* FieldService */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[331]);
//# sourceMappingURL=main.js.map