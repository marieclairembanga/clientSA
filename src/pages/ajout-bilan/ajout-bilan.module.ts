import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutBilanPage } from './ajout-bilan';

@NgModule({
  declarations: [
    AjoutBilanPage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutBilanPage),
  ],
})
export class AjoutBilanPageModule {}
