import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AjoutInfoPage } from '../ajout-info/ajout-info';
/**
 * Generated class for the CreationPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creation-patient',
  templateUrl: 'creation-patient.html',
})
export class CreationPatientPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreationPatientPage');
  }
Register(){
  this.navCtrl.push(AjoutInfoPage);
}
}
