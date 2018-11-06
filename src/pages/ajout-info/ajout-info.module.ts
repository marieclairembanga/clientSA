import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutInfoPage } from './ajout-info';

@NgModule({
  declarations: [
    AjoutInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutInfoPage),
  ],
})
export class AjoutInfoPageModule {}
