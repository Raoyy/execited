import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import Components from './components/index.js';             // 组件列表
import Pipes from './Pipe/index.js';                 // 自定义管道
import { RoutingModule } from './routes.module';             // 路由模块

import { HightlightDirective } from './directive/hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ...Components,
    ...Pipes,
    HightlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
