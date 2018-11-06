import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultationPage } from '../consultation/consultation';
import { ExamenPage } from '../examen/examen';
import { HospitalisationPage } from '../hospitalisation/hospitalisation';

/**
 * Generated class for the SuiviMedicalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suivi-medical',
  templateUrl: 'suivi-medical.html',
})
export class SuiviMedicalPage {
  tab1Root = ConsultationPage;
  tab2Root = ExamenPage;
  tab3Root = HospitalisationPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuiviMedicalPage');
  }

}
