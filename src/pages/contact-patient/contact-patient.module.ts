import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPatientPage } from './contact-patient';

@NgModule({
  declarations: [
    ContactPatientPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPatientPage),
  ],
})
export class ContactPatientPageModule {}
