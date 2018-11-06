import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FicheConsultationPage } from './fiche-consultation';

@NgModule({
  declarations: [
    FicheConsultationPage,
  ],
  imports: [
    IonicPageModule.forChild(FicheConsultationPage),
  ],
})
export class FicheConsultationPageModule {}
