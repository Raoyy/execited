import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute) {
      if (!this.setParams()) {
        activatedRoute.paramMap.subscribe((dataObj) => {    // 适用于动态匹配路径的方式传参
          this.params = dataObj['params'];
          console.log(this.params);
          this.setHero();
        });

        // activatedRoute.queryParamMap.subscribe((dataObj) => {     // 适用于query方式传参
        //   console.log(dataObj);
        //   this.params = dataObj['params'];
        //   this.setHero();
        // });
      }
  }

  params: Object;
  hero: Object;

  setHero() {
    if (this.params['hero']) {
      this.hero = JSON.parse(this.params['hero']);
    } else {
      this.hero = this.params;
    }
  }

  setParams(): Boolean {
    const Route = this.activatedRoute;
    if (Route && Route.snapshot.params) {           // 适用接收动态匹配传参
      this.params = Route.snapshot.params;
      return true;
    } else {
      return false;
    }
  }

  getObjLength(obj): Number {
    return Object.getOwnPropertyNames(obj).length;
  }

  ngOnInit() {
    console.log();
    // console.log('hero--------', this.hero);
  }

}
