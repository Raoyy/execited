import { Component } from '@angular/core';
import { IonicPage, ModalController} from 'ionic-angular';
import { ModalContentPage } from '../modals-template/modals-template';

@IonicPage()
@Component({
  templateUrl: 'modals.html'
})
export class ModalsPage {
  constructor(public modalCtrl: ModalController) { }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }
}

