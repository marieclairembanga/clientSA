import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { Http, Headers, RequestOptions }  from "@angular/http";
import { AjoutRegimesPage } from '../ajout-regimes/ajout-regimes';
/**
 * Generated class for the RegimesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regimes',
  templateUrl: 'regimes.html',
})
export class RegimesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController,
              private http: Http, public loading: LoadingController, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegimesPage');
  }

  addautomed(){
    let alert = this.alertCtrl.create({
      title:"Ajouter ?",
      subTitle:"confirmé l'ajout",
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot(AjoutRegimesPage);
  }
}
