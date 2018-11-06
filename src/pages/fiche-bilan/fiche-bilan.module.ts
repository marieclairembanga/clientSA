import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FicheBilanPage } from './fiche-bilan';

@NgModule({
  declarations: [
    FicheBilanPage,
  ],
  imports: [
    IonicPageModule.forChild(FicheBilanPage),
  ],
})
export class FicheBilanPageModule {}
