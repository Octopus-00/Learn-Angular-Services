import {Component, OnInit} from '@angular/core';
import {Weather} from '../shared/weater.model';
import {WeatherService} from '../shared/weather.service';
import {WeatherOwn} from '../shared/weaterown.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: WeatherOwn[];
  selectedCity: Weather;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather().subscribe(
      (data: any) => this.weather = data.list
    );
  }


  setHomeCity(event: Weather) {
    console.log(event);
  }

}
