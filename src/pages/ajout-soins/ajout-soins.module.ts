import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutSoinsPage } from './ajout-soins';

@NgModule({
  declarations: [
    AjoutSoinsPage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutSoinsPage),
  ],
})
export class AjoutSoinsPageModule {}
