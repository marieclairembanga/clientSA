import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VaccinPage } from '../vaccin/vaccin';
import { VisitePage } from '../visite/visite';
import { ConseilsPage } from '../conseils/conseils';
/**
 * Generated class for the SuiviMereEnfantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suivi-mere-enfant',
  templateUrl: 'suivi-mere-enfant.html',
})
export class SuiviMereEnfantPage {
  tab1Root = VisitePage;
  tab2Root = VaccinPage;
  tab3Root = ConseilsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuiviMereEnfantPage');
  }

}
