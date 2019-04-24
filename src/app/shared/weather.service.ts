import {Injectable} from '@angular/core';
import {WEATHER} from './mock-weater';
import {Weather} from './weater.model';
import {of} from 'rxjs';
import {map, tap} from 'rxjs/operators';

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
    return of(WEATHER).pipe(
      // Useful for debugging observables
      // Browser res =>
      //Tap: 1, city London
      //Tap: 2, city New York
      //Tap: 3, city paris
      tap(res => res.forEach((x) => {
        console.log(`Tap: ${x.id}, city ${x.city}`);
      }))
    );
  }

  setWeather(weather: Weather) {
    WEATHER.push(weather);
  }
}
