import {Injectable} from '@angular/core';
import {WEATHER} from './mock-weater';
import {Weather} from './weater.model';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() {
  }

  getWeather() {
    return of(WEATHER);
  }

  getWeatherPromise() {
    const weatherProm = of(WEATHER).toPromise();
    return weatherProm;
  }

  getHomeCity() {
    // filter city.home === true inside obsevable
    return of(WEATHER).pipe(
      map(arr => arr.filter(city => city.home === true))
    );
  }

  setWeather(weather: Weather) {
    WEATHER.push(weather);
  }
}
