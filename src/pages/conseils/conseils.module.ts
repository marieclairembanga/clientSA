import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConseilsPage } from './conseils';

@NgModule({
  declarations: [
    ConseilsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConseilsPage),
  ],
})
export class ConseilsPageModule {}
