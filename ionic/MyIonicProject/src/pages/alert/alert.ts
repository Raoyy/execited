import { Component } from '@angular/core';
import {NavParams, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {
  selectedItem: any;

  constructor(
    public alertCtrl: AlertController,
    public navParams: NavParams
  ) {
    this.selectedItem = navParams.get('item');
    console.log(this.selectedItem);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'This is the title!',
      subTitle: 'This is the alert content!',
      buttons: ['OK']
    });
    alert.present();
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


  testRadioOpen: boolean = false;
  testRadioResult: object;
  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log('radio box data', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }


  testCheckboxOpen: boolean = true;
  testCheckboxResult: object;
  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addButton({
      text: 'Cancel',
      handler: () => {
        console.log('Cancel');
      }
    });
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }

}