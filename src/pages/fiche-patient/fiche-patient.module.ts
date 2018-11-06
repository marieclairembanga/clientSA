import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FichePatientPage } from './fiche-patient';

@NgModule({
  declarations: [
    FichePatientPage,
  ],
  imports: [
    IonicPageModule.forChild(FichePatientPage),
  ],
})
export class FichePatientPageModule {}
