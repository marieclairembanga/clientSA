import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPersonnelPage } from './contact-personnel';

@NgModule({
  declarations: [
    ContactPersonnelPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPersonnelPage),
  ],
})
export class ContactPersonnelPageModule {}
