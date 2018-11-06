import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AjoutInfoPage } from '../ajout-info/ajout-info';
import { CreationPatientPage } from '../creation-patient/creation-patient';

/**
 * Generated class for the GestionPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion-patient',
  templateUrl: 'gestion-patient.html',
})
export class GestionPatientPage {
  items: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionPatientPage');
  }
  initializeItems() {
    this.items = [
      //recupere les logins des patients sous forme de tableau ici
      'patient1',
      'patient2'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  creation(){
    this.navCtrl.push(CreationPatientPage);
  }
  ajout(){
    this.navCtrl.push(AjoutInfoPage);
  }
}
