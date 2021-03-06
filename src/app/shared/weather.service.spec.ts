import {async, inject, TestBed} from '@angular/core/testing';

import {WeatherService} from './weather.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import any = jasmine.any;
import {of} from 'rxjs';
import {Weather} from './weater.model';

let weatherService: WeatherService;
let httpClinetSpy: { get: jasmine.Spy };

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

  it('#getWeatherByCity should return London', () => {
    const expectedResult = {
      name: 'London'
    };

    weatherService = new WeatherService(httpClinetSpy as any);
    const spy = spyOn(weatherService, 'getWeatherByCity').and.returnValue(of(mockResponse));

    weatherService.getWeatherByCity('London').subscribe(
      (data) => {
        expect(data).toEqual(expectedResult);
      }
    );
  });

  it('#addWeather should be called', () => {
    const mockWeather = new Weather();
    mockWeather.id = 4;
    mockWeather.city = 'Mumbai';
    mockWeather.temp = 25;
    mockWeather.forecast = 'Sunny';
    weatherService = TestBed.get(WeatherService);
    const spy = spyOn(weatherService, 'addWeather').and.callThrough();
    weatherService.addWeather(mockWeather).subscribe();
    expect(spy).toHaveBeenCalled();
  });

  it('#addWeather should add new object', () => {
    const mockWeather = new Weather();
    mockWeather.id = 4;
    mockWeather.city = 'Mumbai';
    mockWeather.temp = 25;
    mockWeather.forecast = 'Sunny';
    weatherService = TestBed.get(WeatherService);
    const spy = spyOn(weatherService, 'addWeather').and.returnValue(of(mockWeather.city + ' added'));
    weatherService.addWeather(mockWeather).subscribe(data => {
      expect(data).toEqual('Mumbai added');
    });
  });

  it('#deleteWeather should be an  object', () => {
    const mockWeather = new Weather();
    mockWeather.id = 1;
    mockWeather.city = 'London';
    mockWeather.temp = 10;
    mockWeather.forecast = 'Overcast with showers';
    weatherService = TestBed.get(WeatherService);
    const spy = spyOn(weatherService, 'deleteWeather').and.returnValue(of(mockWeather.city + ' deleted'));
    weatherService.deleteWeather(mockWeather).subscribe(data => {
      expect(data).toEqual('London deleted');
    });
  });

  it('#deleteWeather should be called', () => {
    const mockWeather = new Weather();
    mockWeather.id = 4;
    mockWeather.city = 'Mumbai';
    mockWeather.temp = 25;
    mockWeather.forecast = 'Sunny';
    weatherService = TestBed.get(WeatherService);
    const spy = spyOn(weatherService, 'deleteWeather').and.callThrough();
    weatherService.deleteWeather(mockWeather);
    expect(spy).toHaveBeenCalled();
  });
});
