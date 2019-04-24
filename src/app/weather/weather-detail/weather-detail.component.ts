import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Weather} from '../../shared/weater.model';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  @Input() selectedCity: Weather;
  @Output() homeCity = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  setHome() {
    this.selectedCity.home = true;
    this.homeCity.emit(this.selectedCity);
  }

}
