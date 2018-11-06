import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutRegimesPage } from './ajout-regimes';

@NgModule({
  declarations: [
    AjoutRegimesPage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutRegimesPage),
  ],
})
export class AjoutRegimesPageModule {}
