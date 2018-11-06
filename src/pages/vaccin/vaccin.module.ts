import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VaccinPage } from './vaccin';

@NgModule({
  declarations: [
    VaccinPage,
  ],
  imports: [
    IonicPageModule.forChild(VaccinPage),
  ],
})
export class VaccinPageModule {}
