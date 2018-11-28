import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import  { Storage } from '@ionic/storage'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  city: string;

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider, private storage: Storage) {

  }

  //ngoinit
  ionViewWillEnter () {
    this.storage.get('city')
      .then( (val) => {
        if(val != null) {
          this.city = val;
        } else {
          this.city = "London";
        }
        this.weatherProvider.getWeather(this.city).subscribe(weather => {
          this.weather = weather;
          console.log(weather);
        });
      });




  }

  getIcon(){
    if(this. weather) {
      return 'http://openweathermap.org/img/w/' + this.weather.weather[0].icon + '.png';
    }

  }


}
