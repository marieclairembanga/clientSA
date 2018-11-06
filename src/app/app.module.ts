import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';

import { Tab1Page } from '../pages/tab1/tab1';
import { SoinsPage } from '../pages/soins/soins';
import { BilanPage } from '../pages/bilan/bilan';
import { RegimesPage } from '../pages/regimes/regimes';

import { Tab1PageModule } from '../pages/tab1/tab1.module';
import { SoinsPageModule } from '../pages/soins/soins.module';
import { BilanPageModule } from '../pages/bilan/bilan.module';
import { RegimesPageModule } from '../pages/regimes/regimes.module';
import { SuiviPersoPageModule } from '../pages/suivi-perso/suivi-perso.module';
import { ParametresPageModule } from '../pages/parametres/parametres.module';
import { LogoutPageModule } from '../pages/logout/logout.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { AgendaPageModule } from '../pages/agenda/agenda.module';
import { RecommandationPageModule } from '../pages/recommandation/recommandation.module';
import { SuiviMedicalPageModule } from '../pages/suivi-medical/suivi-medical.module';
import { SuiviMereEnfantPageModule } from '../pages/suivi-mere-enfant/suivi-mere-enfant.module';
import { AjoutSoinsPageModule } from '../pages/ajout-soins/ajout-soins.module';
import { AjoutBilanPageModule } from '../pages/ajout-bilan/ajout-bilan.module';
import { AjoutRegimesPageModule } from '../pages/ajout-regimes/ajout-regimes.module';

import { ConsultationPageModule } from '../pages/consultation/consultation.module';
import { ExamenPageModule } from '../pages/examen/examen.module';
import { HospitalisationPageModule } from '../pages/hospitalisation/hospitalisation.module';

import { VaccinPageModule } from '../pages/vaccin/vaccin.module';
import { VisitePageModule } from '../pages/visite/visite.module';
import { ConseilsPageModule } from '../pages/conseils/conseils.module';

import { RegisterPage } from '../pages/register/register';
import { ParametresPage } from '../pages/parametres/parametres';
import { SuiviPersoPage } from '../pages/suivi-perso/suivi-perso';
import { LogoutPage } from '../pages/logout/logout';
import { AgendaPage } from '../pages/agenda/agenda';
import { RecommandationPage } from '../pages/recommandation/recommandation';
import { SuiviMedicalPage } from '../pages/suivi-medical/suivi-medical';
import { SuiviMereEnfantPage } from '../pages/suivi-mere-enfant/suivi-mere-enfant';
import { AjoutSoinsPage } from '../pages/ajout-soins/ajout-soins';
import { AjoutBilanPage } from '../pages/ajout-bilan/ajout-bilan';
import { AjoutRegimesPage } from '../pages/ajout-regimes/ajout-regimes';
import { ConsultationPage } from '../pages/consultation/consultation';
import { ExamenPage } from '../pages/examen/examen';
import { HospitalisationPage } from '../pages/hospitalisation/hospitalisation';

import { VaccinPage } from '../pages/vaccin/vaccin';
import { VisitePage } from '../pages/visite/visite';
import { ConseilsPage } from '../pages/conseils/conseils';
import { HomePersonnelPage } from '../pages/home-personnel/home-personnel';
import { HomePersonnelPageModule } from '../pages/home-personnel/home-personnel.module';
import { AgendaPersonnelPage } from '../pages/agenda-personnel/agenda-personnel';
import { ContactPersonnelPage } from '../pages/contact-personnel/contact-personnel';
import { AgendaPersonnelPageModule } from '../pages/agenda-personnel/agenda-personnel.module';
import { ContactPersonnelPageModule } from '../pages/contact-personnel/contact-personnel.module';
import { GestionPatientPage } from '../pages/gestion-patient/gestion-patient';
import { GestionPatientPageModule } from '../pages/gestion-patient/gestion-patient.module';
import { FicheHospitalisationPage } from '../pages/fiche-hospitalisation/fiche-hospitalisation';
import { FicheConsultationPage } from '../pages/fiche-consultation/fiche-consultation';
import { FicheBilanPage } from '../pages/fiche-bilan/fiche-bilan';
import { FicheHospitalisationPageModule } from '../pages/fiche-hospitalisation/fiche-hospitalisation.module';
import { FicheConsultationPageModule } from '../pages/fiche-consultation/fiche-consultation.module';
import { FicheBilanPageModule } from '../pages/fiche-bilan/fiche-bilan.module';
import { FichePatientPage } from '../pages/fiche-patient/fiche-patient';
import { CreationPatientPage } from '../pages/creation-patient/creation-patient';
import { FichePatientPageModule } from '../pages/fiche-patient/fiche-patient.module';
import { CreationPatientPageModule } from '../pages/creation-patient/creation-patient.module';
import { AjoutInfoPage } from '../pages/ajout-info/ajout-info';
import { AjoutInfoPageModule } from '../pages/ajout-info/ajout-info.module';
import { ParametrePersonnelPage } from '../pages/parametre-personnel/parametre-personnel';
import { ParametrePersonnelPageModule } from '../pages/parametre-personnel/parametre-personnel.module';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RegisterPageModule,
    Tab1PageModule,
    SoinsPageModule,
    BilanPageModule,
    RegimesPageModule,
    SuiviPersoPageModule,
    ParametresPageModule,
    LogoutPageModule,
    AgendaPageModule,
    RecommandationPageModule,
    SuiviMedicalPageModule,
    SuiviMereEnfantPageModule,
    AjoutSoinsPageModule,
    AjoutBilanPageModule,
    AjoutRegimesPageModule,
    ConsultationPageModule,
    VisitePageModule,
    VaccinPageModule,
    ConseilsPageModule,
    ExamenPageModule,
    HomePersonnelPageModule,
    ContactPersonnelPageModule,
    AgendaPersonnelPageModule,
    HospitalisationPageModule,
    GestionPatientPageModule,
    FicheHospitalisationPageModule,
    FicheConsultationPageModule,
    FicheBilanPageModule,
    CreationPatientPageModule,
    FichePatientPageModule,
    AjoutInfoPageModule,
    ParametrePersonnelPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    ProfilePage,
    Tab1Page,
    SoinsPage,
    BilanPage,
    RegimesPage,
    SuiviPersoPage,
    LogoutPage,
    AgendaPage,
    RecommandationPage,
    SuiviMedicalPage,
    SuiviMereEnfantPage,
    AjoutSoinsPage,
    AjoutBilanPage,
    AjoutRegimesPage,
    ConsultationPage,
    VisitePage,
    VaccinPage,
    ConseilsPage,
    ExamenPage,
    HospitalisationPage,
    HomePersonnelPage,
    ContactPersonnelPage,
    AgendaPersonnelPage,
    GestionPatientPage,
    FicheHospitalisationPage,
    FicheConsultationPage,
    CreationPatientPage,
    FichePatientPage,
    FicheBilanPage,
    AjoutInfoPage,
    ParametrePersonnelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
