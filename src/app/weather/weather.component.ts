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
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather().subscribe(
      (data) => this.weather = data
    );
  }

  setHomeCity(event: Weather) {
    console.log(event);
  }

}
