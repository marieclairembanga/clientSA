import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AgendaPersonnelPage } from '../agenda-personnel/agenda-personnel';
import { AgendaPersonnelPage } from '../agenda-personnel/agenda-personnel';
import { ContactPersonnelPage } from '../contact-personnel/contact-personnel';
import { GestionPatientPage } from '../gestion-patient/gestion-patient';
import { ParametrePersonnelPage } from '../parametre-personnel/parametre-personnel';
/**
 * Generated class for the HomePersonnelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-personnel',
  templateUrl: 'home-personnel.html',
})
export class HomePersonnelPage {
  tab1Root = GestionPatientPage;
  tab2Root = AgendaPersonnelPage;
  tab3Root = ContactPersonnelPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePersonnelPage');
  }
  goToparam(){
    this.navCtrl.push(ParametrePersonnelPage);
  }
}
