import { Geolocation } from '@ionic-native/geolocation';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { FieldService } from "../../providers/field-service";
import { ListPage } from '../list/list';
import { TrafiklabProvider } from '../../providers/trafiklab/trafiklab';
import { UserDataProvider } from "../../providers/user-data/user-data";
import { User } from 'firebase';
import { FieldlocationsProvider } from "../../providers/fieldlocations/fieldlocations";
import { ToastController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { FirstPage } from '../first/first';
import { PopoverController } from 'ionic-angular';
import { PopoverlistComponent } from '../../components/popoverlist/popoverlist';

declare var google: any;


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {


    public show;
    //protected nickname: string;

    public myLatitude;
    public myLongitude;
    public stations: any;
    public stationListMap = [];

    //Användarvariabler

    public userId;
    public userName;

    public loginMethod;

    //Sök-funktionen

    public results;
    public resultsListMap = [];
    public allFieldMarkers = [];
    public fieldIsOnMap = false;
    public resultsAreShowing = false;
    public centerSearchLocation = false;
    public fieldNearbyStopsAreShowing = false;
    public optionsMapSearch;
    public fieldLatitude;
    public fieldLongitude;
    public fieldName;
    public fieldIsChosen = false;
    public showInfoPrompt = false;
    public showAll = false;

    @ViewChild('map') mapRef: ElementRef;

    constructor(
        public toastCtrl: ToastController, public popoverCtrl: PopoverController, public modalCtrl: ModalController, public navCtrl: NavController, public fieldService: FieldService, public geolocation: Geolocation, public navParams: NavParams, public tlP: TrafiklabProvider, public udp: UserDataProvider, public flp: FieldlocationsProvider, private googlePlus: GooglePlus, private fb: Facebook) {

    }

    ionViewDidLoad() {

        this.flp = new FieldlocationsProvider(this.geolocation, this.fieldService);

        this.userId = this.navParams.get('userId');
        this.userName = this.navParams.get('userName');
        this.loginMethod = this.navParams.get('loginMethod');

        this.getLocation();
        this.showMap();

        //this.showAllFieldsOnMap();
        this.optionsMapSearch = false;
        this.getLocation();

        let homePageData = {

            userName: this.userName,
            userId: this.userId,
            myLatitude: this.myLatitude,
            myLongitude: this.myLongitude,
            loginMethod: this.loginMethod,

        };

        console.log("HomePage_DidLoad", homePageData);

    }

    goToList() {

        //this.navParams.get("nickname")

        //this.navCtrl.push(ListPage, { nickname: this.userName, lat: this.myLatitude, lon: this.myLongitude });

        let chatName = this.userName.toString();

        let listPageData = {

            nickName: chatName,
            userName: this.userName,
            userId: this.userId,
            myLatitude: this.myLatitude,
            myLongitude: this.myLongitude,
            loginMethod: this.loginMethod,

        };

        let nextPage = this.modalCtrl.create(ListPage, listPageData);
        nextPage.onDidDismiss(data => {

            data.userName = this.userName;
            data.userId = this.userName;
            data.myLatitude = this.myLatitude;
            data.myLongitude = this.myLongitude;
            data.loginMethod = this.loginMethod;

            console.log("HomePage_dismiss_from_ListPage", data);
        });
        nextPage.present();


    }

    showMap() {

        this.geolocation.getCurrentPosition().then(resp => {

            // Map options



            let optionsMap;

            if (this.centerSearchLocation) {

                optionsMap = this.optionsMapSearch;

            }

            if (!this.centerSearchLocation) {

                optionsMap = {
                    zoom: 15,
                    center: { lat: resp.coords.latitude, lng: resp.coords.longitude }
                };

            }


            // New map
            let map = new google.maps.Map

                (this.mapRef.nativeElement, optionsMap);

            //Mark current position
            new google.maps.Marker({
                position: { lat: resp.coords.latitude, lng: resp.coords.longitude },
                map: map,
                //icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                //icon: 'http://maps.google.com/mapfiles/kml/pal2/icon49.png' //fotbollskaraktär
                //icon: 'http:// google.com/mapfiles/arrow.png'
                icon: 'http://maps.google.com/mapfiles/ms/micons/man.png'
            });

            // Listen for click on map
            /*google.maps.event.addListener(map, 'click', function (event) {
              // Add marker
              addMarker({ coords: event.latLng });
            });*/

            // Array of markers
            /*let markers = [
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
            ];*/

            //SL-API: Visar närliggande HPL på kartan
            for (let i = 0; i < this.stationListMap.length; i++) {
                addMarker(this.stationListMap[i]);

            }

            //VISA ALLA-FUNKTIONEN
            for (let i = 0; i < this.allFieldMarkers.length; i++) {
                addMarker(this.allFieldMarkers[i]);
            }



            // Loop through markers
            /*for (let i = 0; i < markers.length; i++) {
              // Add marker
              addMarker(markers[i]);
            }*/

            // Add Marker Function
            function addMarker(props) {
                let marker = new google.maps.Marker({
                    position: props.coords,
                    map: map,
                    //icon:props.iconImage
                });

                // Check for marker image
                if (props.iconImage) {
                    // Set icon image
                    marker.setIcon(props.iconImage);
                }

                // Check content
                if (props.content) {
                    let infoWindow = new google.maps.InfoWindow({
                        content: props.content
                    });

                    marker.addListener('click', function () {
                        infoWindow.open(map, marker);
                    });
                }
            }
        }).catch((error) => {
            console.log("Error can't find the location", error);
        });
    }// ShowMap

    /*
    *
    * HENRIKS KOD HÄRIFRÅN
    *
    */

    //Hämtar användarens plats.

    getLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.myLatitude = resp.coords.latitude,
                this.myLongitude = resp.coords.longitude
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }

    // SL-API: Tar bort närliggande hållplatser och döljer från kartan.

    removeNearbyStops() {

        this.show = false;

        for (let i = this.stationListMap.length; i > 0; i--) {
            this.stationListMap.pop();
        }

        this.showMap();

    }

    // Hanterar input från sökrutan.

    onInput(ev: any) {

        let query = ev.target.value;

        if (query != undefined) {

            let results = this.flp.getFields(query);

            console.log(results);

            this.results = results;

        }

        if (this.results.length > 0) {
            this.resultsAreShowing = true;
            this.fieldName = undefined;
            this.fieldIsChosen = false;
        } else {
            this.resultsAreShowing = false;
        }

    }

    //Centerar till den sökta platsen på kartan.

    showSearchedField(fieldname) {

        let toastInfo;

        for (let i = 0; i < this.results.length; i++) {

            if (fieldname == this.results[i].namn) {

                let iconImage;

                let googlelat = parseFloat(this.results[i].lat);
                let googlelon = parseFloat(this.results[i].lon);
                this.fieldName = this.results[i].namn;

                toastInfo = this.results[i].info;

                this.optionsMapSearch = {

                    zoom: 15,
                    center: { lat: googlelat, lng: googlelon }

                };

                console.log(this.results[i]);

                if (this.results[i].visitors == "Låg belastning") {
                    iconImage = 'http://maps.google.com/mapfiles/ms/micons/green-dot.png';
                }
                if (this.results[i].visitors == "Medel belastning") {
                    iconImage = 'http://maps.google.com/mapfiles/ms/micons/orange-dot.png';
                }
                if (this.results[i].visitors == "Hög belastning") {
                    iconImage = 'http://maps.google.com/mapfiles/ms/micons/red-dot.png';
                }

                this.centerSearchLocation = true;

                this.fieldLatitude = googlelat;
                this.fieldLongitude = googlelon;
                let googleContent = this.results[i].namn + "<br>" + this.results[i].visitors+ "<br>" + this.results[i].ga;

                let fieldMarker = {

                    coords: { lat: googlelat, lng: googlelon },
                    iconImage: iconImage,
                    content: googleContent,

                };

                this.allFieldMarkers.push(fieldMarker);

            }

            this.showMap();

        }

        this.resultsAreShowing = true;

        if (this.fieldName != undefined) {
            this.fieldIsChosen = true;
        }

        this.showMap();

        this.presentInfoToast(toastInfo);

    }

    // Visar närliggande stopp i förhållande till en fotbollsplan som användaren har valt.

    getNearbyStops() {

        this.show = true;

        this.tlP.getNearbyStops(this.fieldLatitude, this.fieldLongitude)
            .then(data => {

                this.stations = data;

                console.log(this.stations.LocationList.StopLocation);

                for (let i = 0; i < this.stations.LocationList.StopLocation.length; i++) {

                    //Skapar Google Maps markers för varje hållplats i den mottagna arrayen.

                    let googlelat = parseFloat(this.stations.LocationList.StopLocation[i].lat);
                    let googlelon = parseFloat(this.stations.LocationList.StopLocation[i].lon);
                    let iconImage = 'http://maps.google.com/mapfiles/ms/micons/bus.png';
                    let googleContent = this.stations.LocationList.StopLocation[i].name + ' ' + this.stations.LocationList.StopLocation[i].dist + 'm';

                    let stationMarkerInfo = {

                        coords: { lat: googlelat, lng: googlelon },
                        iconImage: iconImage,
                        content: googleContent
                    };

                    this.stationListMap.push(stationMarkerInfo);

                }

                this.fieldNearbyStopsAreShowing = true;
                this.showMap();

            })
    }

    //Visar alla planer på kartan.

    showAllFieldsOnMap() {

        this.showAll = true;

        let allFields = [];

        allFields = this.flp.getAllFields();

        for (let i = 0; i < allFields.length; i++) {

            let iconImage;

            if (allFields[i].visitors == "Låg belastning") {
                iconImage = 'http://maps.google.com/mapfiles/ms/micons/green-dot.png';
            }
            if (allFields[i].visitors == "Medel belastning") {
                iconImage = 'http://maps.google.com/mapfiles/ms/micons/orange-dot.png';
            }
            if (allFields[i].visitors == "Hög belastning") {
                iconImage = 'http://maps.google.com/mapfiles/ms/micons/red-dot.png';
            }

            let googlelat = parseFloat(allFields[i].lat);
            let googlelon = parseFloat(allFields[i].lon);
            let googleContent = allFields[i].namn + "<br>" + allFields[i].visitors;

            let fieldMarker = {

                coords: { lat: googlelat, lng: googlelon },
                iconImage: iconImage,
                content: googleContent,

            };

            this.allFieldMarkers.push(fieldMarker);

        }

        this.showMap();

    }

    hideAllFieldsOnMap() {

        this.showAll = false;

        this.allFieldMarkers = [];

        this.showMap();

    }

    //Sökrutans kryss.

    clear() {

        this.resultsAreShowing = false;
        this.results = [];
        this.fieldName = undefined;
        this.fieldIsChosen = false;
        this.fieldLatitude = undefined;
        this.fieldLongitude = undefined;
        this.removeNearbyStops();
        this.hideAllFieldsOnMap();

    }

    //Centerar kartan till användaren.

    centerMap() {

        this.centerSearchLocation = false;
        this.getLocation();
        this.showMap();

    }

    //Visar toast med planens info.

    presentInfoToast(text) {
        let toast = this.toastCtrl.create({
            message: text,
            //duration: 6000,
            showCloseButton: true,
            closeButtonText: 'Stäng'
        });
        toast.present();
    }

    /**
     *
     * In och utloggning med respektive APIer
     *
     */

    logoutFacebook() {
        this.fb.logout()
            .then(res => {
                console.log(res);
                console.log('SM, logoutFacebook')
            })
            .catch(e => console.log('Error logout from Facebook', e));
    }

    logoutGoogle() {
        this.googlePlus.logout().then(res => {
            console.log(res);
            console.log('SM, logoutGoogle')
        })
            .catch(err => console.error(err));
    }

    logout() {

        if (this.loginMethod == "Facebook") {
            this.logoutFacebook();
        } else

            if (this.loginMethod == "Google") {
                this.logoutGoogle();
            } else
                if (this.loginMethod == "Developer") {
                    console.log("Logout developer.");
                }

        //let nextPage = this.modalCtrl.create(FirstPage, {userId: this.userId, userName: this.userName, loginMethod: this.loginMethod});
        //nextPage.present();

        this.navCtrl.setRoot(FirstPage);

    }

    presentPopover(myEvent) {
        let popover = this.popoverCtrl.create(PopoverlistComponent);
        popover.present({
            ev: myEvent
        });

        popover.onDidDismiss(query => {
            console.log("popover dismissed");
            console.log("Selected Item is " + query);

            if (query != null || query != undefined) {

                let results = this.flp.getFields(query);

                console.log(results);

                this.results = results;



                if (this.results.length > 0) {
                    this.resultsAreShowing = true;
                    this.fieldName = undefined;
                    this.fieldIsChosen = false;
                } else {
                    this.resultsAreShowing = false;
                }
            }
        });
    }


}















