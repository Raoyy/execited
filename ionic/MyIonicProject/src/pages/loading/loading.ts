import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
//      spinner: 'circles',
//      spinner: 'bubbles',
//      spinner: 'dots',
//      spinner: 'crescent',
      spinner: 'ios',
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {        // 手动关闭加载框
      loading.dismiss();
    }, 5000);
  }
  
  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">加载中...</div>
        </div>`,
      duration: 5000
    });
  
    loading.onDidDismiss(() => {            // 关闭加载框回调
      console.log('Dismissed loading');
    });
  
    loading.present();
  }
  
  nav = [];
  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',                               // 隐藏加载动画
      content: 'Loading Please Wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      this.nav.push('23333');
    }, 1000);
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
  }

}
