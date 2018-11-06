import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BilanPage } from './bilan';

@NgModule({
  declarations: [
    BilanPage,
  ],
  imports: [
    IonicPageModule.forChild(BilanPage),
  ],
})
export class BilanPageModule {}
