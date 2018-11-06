import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuiviMedicalPage } from './suivi-medical';

@NgModule({
  declarations: [
    SuiviMedicalPage,
  ],
  imports: [
    IonicPageModule.forChild(SuiviMedicalPage),
  ],
})
export class SuiviMedicalPageModule {}
