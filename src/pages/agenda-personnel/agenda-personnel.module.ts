import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaPersonnelPage } from './agenda-personnel';

@NgModule({
  declarations: [
    AgendaPersonnelPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaPersonnelPage),
  ],
})
export class AgendaPersonnelPageModule {}
