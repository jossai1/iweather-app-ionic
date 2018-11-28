import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { Storage } from '@ionic/storage'
import { HomePage} from "../home/home";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  city: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('city').then((val) => {

      if(val != null ){
        let city =val;
        this.city = city;
      } else {
        this.city = 'London';
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm () {
    let city = this.city ;
    this.storage.set('city', city);
    console.log("setting city in local storage");
    this.navCtrl.push(HomePage);
  }
}
