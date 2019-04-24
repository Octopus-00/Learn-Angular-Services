import {Component, OnInit} from '@angular/core';
import {Weather} from '../shared/weater.model';
import {WeatherService} from '../shared/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: Weather[];
  selectedCity: Weather;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    // this.getWeather();
    this.getWeatherPromise();
  }

  getWeather() {
    this.weatherService.getWeather().subscribe(
      (data) => this.weather = data
    );
  }

  getWeatherPromise() {
    this.weatherService.getWeatherPromise().then((data) => {
      this.weather = data;
    }).catch((error) => {
      console.log(error);
    });
  }

  setHomeCity(event: Weather) {
    console.log(event);
  }

}
