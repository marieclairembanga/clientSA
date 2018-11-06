import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SoinsPage } from '../soins/soins';
import { BilanPage } from '../bilan/bilan';
import { RegimesPage } from '../regimes/regimes';

/**
 * Generated class for the Tab1Page tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html'
})
export class Tab1Page {

  soinsRoot = 'SoinsPage'
  bilanRoot = 'BilanPage'
  regimesRoot = 'RegimesPage'


  constructor(public navCtrl: NavController) {}

}
