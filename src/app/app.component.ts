import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, IonicPage } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { Tab1Page } from '../pages/tab1/tab1';
import { SoinsPage } from '../pages/soins/soins';
import { BilanPage } from '../pages/bilan/bilan';
import { RegimesPage } from '../pages/regimes/regimes';
import { SuiviPersoPage } from '../pages/suivi-perso/suivi-perso';
import { ParametresPage } from '../pages/parametres/parametres';
import { LogoutPage } from '../pages/logout/logout';
import { AjoutSoinsPage } from '../pages/ajout-soins/ajout-soins';
import { AjoutBilanPage } from '../pages/ajout-bilan/ajout-bilan';
import { AjoutRegimesPage } from '../pages/ajout-regimes/ajout-regimes';


import { AgendaPage } from '../pages/agenda/agenda';
import { RecommandationPage } from '../pages/recommandation/recommandation';
import { SuiviMedicalPage } from '../pages/suivi-medical/suivi-medical';
import { SuiviMereEnfantPage } from '../pages/suivi-mere-enfant/suivi-mere-enfant';

import { ConsultationPage } from '../pages/consultation/consultation';
import { ExamenPage } from '../pages/examen/examen';
import { HospitalisationPage } from '../pages/hospitalisation/hospitalisation';

import { VaccinPage } from '../pages/vaccin/vaccin';
import { VisitePage } from '../pages/visite/visite';
import { ConseilsPage } from '../pages/conseils/conseils';

import { HomePersonnelPage } from '../pages/home-personnel/home-personnel';
import { AgendaPersonnelPage } from '../pages/agenda-personnel/agenda-personnel';
import { ContactPersonnelPage } from '../pages/contact-personnel/contact-personnel';
import { GestionPatientPage } from '../pages/gestion-patient/gestion-patient';

import { FicheHospitalisationPage } from '../pages/fiche-hospitalisation/fiche-hospitalisation';
import { FicheConsultationPage } from '../pages/fiche-consultation/fiche-consultation';
import { FicheBilanPage } from '../pages/fiche-bilan/fiche-bilan';

import { FichePatientPage } from '../pages/fiche-patient/fiche-patient';
import { CreationPatientPage } from '../pages/creation-patient/creation-patient';
import { AjoutInfoPage } from '../pages/ajout-info/ajout-info';

import { ParametrePersonnelPage } from '../pages/parametre-personnel/parametre-personnel';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, events: Events, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = [
      { title: 'Suivi Personnel', component: 'SuiviPersoPage'},
      { title: 'Suivi Médical', component: 'SuiviMedicalPage' },
      {title: 'Suivi Mère & enfants ', component: 'SuiviMereEnfantPage' },
      { title: 'Agenda', component: 'AgendaPage' },
      { title: 'Recommandation', component: 'RecommandationPage'},
      { title: 'Paramètres', component: 'ParametresPage'},
      { title: 'Déconnexion', component: 'LogoutPage'}
    ];

//class="icon ion-log-out"
    events.subscribe('user:loggedin', ()=>{
        this.pages = [
          { title: 'Suivi Personnel', component: 'SuiviPersoPage'},
          { title: 'Suivi Médical', component: 'SuiviMedicalPage' },
          {title: 'Suivi Mère & enfants ', component: 'SuiviMereEnfantPage' },
          { title: 'Agenda', component: 'AgendaPage' },
          { title: 'Recommandation', component: 'RecommandationPage'},
          { title: 'Paramètres', component: 'ParametresPage'},
          { title: 'Déconnexion', component: 'LogoutPage'}
        ];

      }
    );

    events.subscribe('user:loggedout', ()=>{
        this.pages = [
          { title: 'Suivi Personnel', component: 'SuiviPersoPage'},
          { title: 'Suivi Médical', component: 'SuiviMedicalPage' },
          {title: 'Suivi Mère & enfants ', component: 'SuiviMereEnfantPage' },
          { title: 'Agenda', component: 'AgendaPage' },
          { title: 'Recommandation', component: 'RecommandationPage'},
          { title: 'Paramètres', component: 'ParametresPage'},
          { title: 'Déconnexion', component: 'LogoutPage'}
        ];
      }
    );

   /* platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });*/

  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }

  openPage(page){
    // reset the content nav to have just this page
    //we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

