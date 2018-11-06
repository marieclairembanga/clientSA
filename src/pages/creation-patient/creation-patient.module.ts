import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreationPatientPage } from './creation-patient';

@NgModule({
  declarations: [
    CreationPatientPage,
  ],
  imports: [
    IonicPageModule.forChild(CreationPatientPage),
  ],
})
export class CreationPatientPageModule {}
