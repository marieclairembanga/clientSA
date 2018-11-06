import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoinsPage } from './soins';

@NgModule({
  declarations: [
    SoinsPage,
  ],
  imports: [
    IonicPageModule.forChild(SoinsPage),
  ],
})
export class SoinsPageModule {}
