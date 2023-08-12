import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  isLoading = false;
  weatherRes: any;

  ngOnInit(): void {

  }

  getWeather(location: string) {
    this.isLoading = true;
    this.weatherRes = undefined;
    this.weatherService.getWeatherOfLocation(location).subscribe(
      res => {
        this.weatherRes =  res;
        this.isLoading = false;
        console.log(res);
        
      }
    );
  }
}
