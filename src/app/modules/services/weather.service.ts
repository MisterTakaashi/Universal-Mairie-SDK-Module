import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';
import { WeatherModel } from '../models/weather';

@Injectable()
export class WeatherService {
  constructor(private _http: HttpClient) {
  }

  getWeather(townhall: number): Observable<WeatherModel> {
    return this._http
      .get<WeatherModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/weather');
  }

  getWeatherIcon(condition: string): string {
    switch (condition) {
      case 'ensoleille':
        return 'wi-day-sunny';

      case 'nuit-claire':
        return 'wi-night-clear';

      case 'ciel-voile':
        return 'wi-day-cloudy';

      case 'nuit-legerement-voilee':
        return 'wi-night-alt-partly-cloudy';

      case 'faibles-passages-nuageux':
        return 'wi-day-cloudy';

      case 'nuit-bien-degagee':
        return 'wi-night-partly-cloudy';

      case 'brouillard':
        return 'wi-fog';

      case 'stratus':
        return 'wi-cloud';

      case 'stratus-se-dissipant':
        return 'wi-day-sunny-overcast';

      case 'nuit-claire-et-stratus':
        return 'wi-night-alt-cloudy';

      case 'eclaircies':
        return 'wi-day-cloudy';

      case 'nuit-nuageuse':
        return 'wi-night-alt-cloudy';

      case 'faiblement-nuageux':
        return 'wi-cloud';

      case 'fortement-nuageux':
        return 'wi-cloudy';

      case 'averses-de-pluie-faible':
        return 'wi-day-showers';

      case 'nuit-avec-averses':
        return 'wi-night-alt-showers';

      case 'averses-de-pluie-moderee':
        return 'wi-day-showers';

      case 'averses-de-pluie-forte':
        return 'wi-day-showers';

      case 'couvert-avec-averses':
        return 'wi-showers';

      case 'pluie-faible':
        return 'wi-rain';

      case 'pluie-forte':
        return 'wi-rain';

      case 'pluie-moderee':
        return 'wi-rain';

      case 'developpement-nuageux':
        return 'wi-day-cloudy-high';

      case 'nuit-avec-developpement-nuageux':
        return 'wi-night-alt-cloudy-high';

      case 'faiblement-orageux':
        return 'wi-day-thunderstorm';

      case 'nuit-faiblement-orageuse':
        return 'wi-night-alt-thunderstorm';

      case 'orage-modere':
        return 'wi-day-thunderstorm';

      case 'fortement-orageux':
        return 'wi-day-thunderstorm';

      case 'averses-de-neige-faible':
        return 'wi-day-rain-mix';

      case 'nuit-avec-averses-de-neige-faible':
        return 'wi-night-alt-rain-mix';

      case 'neige-faible':
        return 'wi-snow';

      case 'neige-moderee':
        return 'wi-snow';

      case 'neige-forte':
        return 'wi-snow';

      case 'pluie-et-neige-melee-faible':
        return 'wi-rain-mix';

      case 'pluie-et-neige-melee-moderee':
        return 'wi-rain-mix';

      case 'pluie-et-neige-melee-forte':
        return 'wi-rain-mix';

      default:
        return 'wi-day-sunny';
    }
  }
}
