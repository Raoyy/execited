import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TapEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tap-event',
  templateUrl: 'tap-event.html',
})
export class TapEventPage {
  press: number = 0;
  pan: number = 0;
  swipe: number = 0;
  tap: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TapEventPage');
  }

  tapEvent(e) {           // 点击
    console.log(e);
    this.tap++
  }

  pressEvent(e) {         // 长按
    console.log(e);
    this.press++
  }
  panEvent(e) {           // touch
    console.log(e);
    this.pan++
  }
  swipeEvent(e) {         // banner拖动，通过deltaX的正负判断滑动方向
    console.log(e);
    this.swipe++
  }
  

}
