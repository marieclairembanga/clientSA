import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FicheHospitalisationPage } from './fiche-hospitalisation';

@NgModule({
  declarations: [
    FicheHospitalisationPage,
  ],
  imports: [
    IonicPageModule.forChild(FicheHospitalisationPage),
  ],
})
export class FicheHospitalisationPageModule {}
