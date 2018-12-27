import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-router2',
  templateUrl: './router2.component.html',
  styleUrls: ['./router2.component.css']
})
export class Router2Component implements OnInit {
  params: Object;

  constructor(private activatedRoute: ActivatedRoute ) {
    if (!this.setQueryParams()) {
      activatedRoute.queryParamMap.subscribe((dataObj) => {     // 适用于query方式传参
        this.params = dataObj['params'];
        console.log(this.params);
      });
    }
  }

  timeNow = new Date();
  hero: any;

  get paramsData() {                                         // 类似一个computer
    const dataString = JSON.stringify(this.params);
    return dataString;
  }

  timeFormater(timeObj) {                           // 可通过timeFormater(timeNow)的方式实现过滤目的
    const time = new Date(timeObj);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const secend = time.getSeconds();
    return `${year}/${month}/${day} ${hour}:${minute}:${secend}`;
  }

  getObjLength(obj): Number {
    return Object.getOwnPropertyNames(obj).length;
  }

  setQueryParams(): Boolean {
    const Route = this.activatedRoute;
    if (Route && Route.snapshot.params) {           // 适用接收动态路径方式传参
      this.params = Route.snapshot.params;
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.setQueryParams();
    console.log(this.activatedRoute.snapshot.params);
    console.log('params', this.params);
  }

}

