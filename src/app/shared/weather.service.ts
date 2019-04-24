import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Weather} from './weater.model';
import {Observable, of} from 'rxjs';
import {WEATHER} from './mock-weater';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'cb4f806781297c4228e13fb0744afa23';
  baseUri
    = 'http://api.openweathermap.org/data/2.5/find?&cnt=10&units=metric&appid=';

  lat = 46.360342;
  lon = 6.931803;

  constructor(private http: HttpClient) {
  }

  getWeather() {
    const uri = this.baseUri + this.apiKey + '&lat=' + this.lat + '&lon=' + this.lon;
    return this.http.get(uri);
  }

  getWeatherByCity(city: string) {
    const uri = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + this.apiKey;
    return this.http.get(uri);
  }

  addWeather(weather: Weather): Observable<string> {
    weather.id = WEATHER.length + 1;
    WEATHER.push(weather);
    return of(weather.city + ' added');
  }

}
