import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";

@Injectable()
export class WeatherProvider {

  apiKey = 'f9064261008e7d89e49651ae10f1f134';
  url;
  city;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.city = 'London';
    this.url = 'http://api.openweathermap.org/data/2.5/weather?' +'q=' + this.city + '&units=metric'+ '&appid=' + this.apiKey;
  }

  getWeather (city) {
    this.city  = city;
    this.url = 'http://api.openweathermap.org/data/2.5/weather?' +'q=' + this.city + '&units=metric'+ '&appid=' + this.apiKey;
    console.log(city, this.url);
    return this.http.get(this.url)
      .map(res => res);
  }
}
