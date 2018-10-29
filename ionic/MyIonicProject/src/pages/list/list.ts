import { Component } from '@angular/core';

import { NavController, NavParams, Note } from 'ionic-angular';

import { pagesObj } from '../list.js';

console.log(pagesObj);

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[] = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
  'american-football', 'boat', 'bluetooth', 'build'];

  items: Array<{title: string, note: string, icon: string, component: any}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let i = 0;
    Object.keys(pagesObj).map(key=> {
      i++;
      this.items.push({
        title: key,
        note: key + ' demo', 
        icon: this.icons[i % this.icons.length], 
        component: pagesObj[key]
      });
    })
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component, {
      item: item,
      test: 2333,
    });
  }
}
