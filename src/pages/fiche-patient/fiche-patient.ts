import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FicheHospitalisationPage } from '../fiche-hospitalisation/fiche-hospitalisation';
import { FicheConsultationPage } from '../fiche-consultation/fiche-consultation';
import { FicheBilanPage } from '../fiche-bilan/fiche-bilan';
/**
 * Generated class for the FichePatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fiche-patient',
  templateUrl: 'fiche-patient.html',
})
export class FichePatientPage {
  tab1Root = FicheConsultationPage;
  tab2Root =FicheBilanPage;
  tab3Root = FicheHospitalisationPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FichePatientPage');
  }

}
