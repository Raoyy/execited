import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TapEventPage } from './tap-event';

@NgModule({
  declarations: [
    TapEventPage,
  ],
  imports: [
    IonicPageModule.forChild(TapEventPage),
  ],
})
export class TapEventPageModule {}
