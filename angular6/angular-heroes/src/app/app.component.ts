import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation  } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
  }

  title = 'angular-heroes';
  author = '饶银银';

  get timeNow() {
    return new Date();
  }

  open(): void {
    // this.router.navigateByUrl('router2/2');
    this.router.navigate(['router2'], {
      queryParams: {
          productId: '1',
          title: 'moon'
      }
    });
  }

  toRHook() {
    this.router.navigate(['hook'], {
      queryParams: {
        productId: '1',
        title: 'moon'
      }
    });
  }

  logIt (msg: string) {
    console.log(`${msg}`);
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit(): void {
    this.logIt('onInit');
  }

}
