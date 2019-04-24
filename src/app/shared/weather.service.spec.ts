import {async, inject, TestBed} from '@angular/core/testing';

import {WeatherService} from './weather.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

let weatherService: WeatherService;

let mockResponse = {
  name: 'London'
};

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });

  it('#getWeather should be called', () => {
    weatherService = TestBed.get(WeatherService);
    const spy = spyOn(weatherService, 'getWeather').and.callThrough();
    weatherService.getWeather().subscribe();
    expect(spy).toHaveBeenCalled();
  });

  it('#getWeather should be return data', async(inject([WeatherService],
    // tslint:disable-next-line:no-shadowed-variable
    (weatherService) => {
      weatherService.getWeather().subscribe(data => expect(data.lenght).toBeGreaterThan(0));
    })));
});
