import {Injectable} from '@angular/core';
import {WEATHER} from './mock-weater';
import {Weather} from './weater.model';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() {
  }

  getWeather() {
    return of(WEATHER);
  }

  setWeather(weather: Weather) {
    WEATHER.push(weather);
  }
}
