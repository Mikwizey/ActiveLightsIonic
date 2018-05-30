import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoriteService } from "../../providers/favorite-service";



@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

public fields;
public userId;

  constructor(public navCtrl: NavController, public navParams: NavParams, public favoriteService: FavoriteService) {
  }

  ionViewWillEnter() {
    console.log("refresh?");
    console.log("user id : " + this.userId);
    this.favoriteService.getAllFavorites(this.userId).subscribe(fields => {
      this.fields = fields;
    })
    console.log("getallfav fired");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
    this.userId = this.navParams.get('userId');
  }

}