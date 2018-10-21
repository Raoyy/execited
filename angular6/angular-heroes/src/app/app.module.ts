import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import Components from './components.module.js';             //组件列表
import { RoutingModule } from './routes.module';      //路由模块

@NgModule({
  declarations: [
    AppComponent,
    ...Components
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
