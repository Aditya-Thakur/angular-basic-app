import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherOfLocation(location: string) {
    return this.http.get(environment.weatherBaseURL + 'current.json?key=' + environment.weatherAPIKey + '&q=' + location);
  }
}
