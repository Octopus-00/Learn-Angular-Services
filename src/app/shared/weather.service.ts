import {Injectable} from '@angular/core';
import {WEATHER} from './mock-weater';
import {Weather} from './weater.model';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

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
      tap(res => res.forEach((x) => {
        console.log(`Tap: ${x.id}, city ${x.city}`);
      })),
      catchError(this.handleError(`getHomeCity() failed, city=${WEATHER[0].city}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // let the app keep running by returning an empty result
      return of(result as T);
    };
  }

  setWeather(weather: Weather) {
    WEATHER.push(weather);
  }
}
