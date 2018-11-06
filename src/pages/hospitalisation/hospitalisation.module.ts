import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HospitalisationPage } from './hospitalisation';

@NgModule({
  declarations: [
    HospitalisationPage,
  ],
  imports: [
    IonicPageModule.forChild(HospitalisationPage),
  ],
})
export class HospitalisationPageModule {}
