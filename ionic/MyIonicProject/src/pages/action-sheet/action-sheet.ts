import { Component } from '@angular/core';
import { ActionSheetController, AlertController , NavParams } from 'ionic-angular';

@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {
  selectedItem: any;

  constructor(
    public actionSheetCtrl: ActionSheetController, 
    public alertCtrl: AlertController,
    public navParams: NavParams
  ) {
    this.selectedItem = navParams.get('item');
    console.log(this.selectedItem);
  }

  openMenu() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }

}