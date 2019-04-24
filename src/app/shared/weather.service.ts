import {Injectable} from '@angular/core';
import {WEATHER} from './mock-weater';
import {Weather} from './weater.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() {
  }

  getWeather() {
    return WEATHER;
  }

  setWeather(weather: Weather) {
    WEATHER.push(weather);
  }
}
