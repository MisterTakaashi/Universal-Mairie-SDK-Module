import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { WeatherModel } from '../models/weather';
export declare class WeatherService {
    private _http;
    constructor(_http: HttpClient);
    getWeather(townhall: number): Observable<WeatherModel>;
    getWeatherIcon(condition: string): string;
}
