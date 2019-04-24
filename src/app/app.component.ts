import {Component} from '@angular/core';
import {LoggingService} from './shared/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather App';
  author = 'Onur Dogan';
  compagny = 'Packt Publishng';

  constructor(private loggingService: LoggingService) {
  }

  onClick(message: string) {
    this.loggingService.log(message);
  }

}
