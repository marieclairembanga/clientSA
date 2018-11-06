import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultationPage } from './consultation';

@NgModule({
  declarations: [
    ConsultationPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultationPage),
  ],
})
export class ConsultationPageModule {}
