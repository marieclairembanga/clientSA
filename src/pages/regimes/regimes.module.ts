import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegimesPage } from './regimes';

@NgModule({
  declarations: [
    RegimesPage,
  ],
  imports: [
    IonicPageModule.forChild(RegimesPage),
  ],
})
export class RegimesPageModule {}
