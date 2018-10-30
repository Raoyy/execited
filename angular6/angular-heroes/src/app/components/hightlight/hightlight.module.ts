import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HightlightComponent } from './hightlight.component';
import { HightlightRoutingModule } from './hightlight.routing.module';

import { HightlightDirective } from '../../directive/hightlight.directive';

@NgModule({
 imports: [
  CommonModule,
  HightlightRoutingModule
 ],
 declarations: [HightlightComponent, HightlightDirective]
})

export class HightlightModule { }
