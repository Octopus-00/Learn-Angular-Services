import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

}
