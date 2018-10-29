import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      position: 'middle',    // top, bottom
      message: 'User was added successfully',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'close'
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

}
