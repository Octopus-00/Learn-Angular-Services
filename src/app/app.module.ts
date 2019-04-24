import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoggingService} from './shared/logging.service';
import {WeatherComponent} from './weather/weather.component';
import {WeatherDetailComponent} from './weather/weather-detail/weather-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {CitySearchComponent} from './city-search/city-search.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherDetailComponent,
    CitySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
