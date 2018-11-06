import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommandationPage } from './recommandation';

@NgModule({
  declarations: [
    RecommandationPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommandationPage),
  ],
})
export class RecommandationPageModule {}
