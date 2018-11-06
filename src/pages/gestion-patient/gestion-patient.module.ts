import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionPatientPage } from './gestion-patient';

@NgModule({
  declarations: [
    GestionPatientPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionPatientPage),
  ],
})
export class GestionPatientPageModule {}
