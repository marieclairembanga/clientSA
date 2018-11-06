import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions }  from "@angular/http";

import { SoinsPage } from '../soins/soins';
import { BilanPage } from '../bilan/bilan';
import { RegimesPage } from '../regimes/regimes';
/**
 * Generated class for the SuiviPersoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suivi-perso',
  templateUrl: 'suivi-perso.html',
})
export class SuiviPersoPage {
  tab1Root = SoinsPage;
  tab2Root = RegimesPage;
  tab3Root = BilanPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuiviMereEnfantPage');
  }

}
