import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePersonnelPage } from './home-personnel';

@NgModule({
  declarations: [
    HomePersonnelPage,
  ],
  imports: [
    IonicPageModule.forChild(HomePersonnelPage),
  ],
})
export class HomePersonnelPageModule {}
