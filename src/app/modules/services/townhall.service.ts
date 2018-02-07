import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';
import { TownhallModel } from '../models/townhall';


@Injectable()
export class TownhallService {
  constructor(private _http: HttpClient) {

  }

  getTownhalls(): Observable<TownhallModel[]> {
    return this._http
      .get<TownhallModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls');
  }

  getTownhallById(townhall: number): Observable<TownhallModel> {
    return this._http
      .get<TownhallModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall);
  }

  updateTownhallById(townhall: number, newTownhall: TownhallModel): Observable<TownhallModel> {
    return this._http
      .patch<TownhallModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall, { newTownhall: newTownhall });
  }

  convertColorToHTML(color: string): string {
    let colors = [
      { color: 'red-500', html: '#f44336' },
      { color: 'pink-500', html: '#e91e63' },
      { color: 'purple-500', html: '#9c27b0' },
      { color: 'deep-purple-500', html: '#673ab7' },
      { color: 'indigo-500', html: '#3f51b5' },
      { color: 'blue-500', html: '#2196f3' },
      { color: 'cyan-500', html: '#00bcd4' },
      { color: 'teal-500', html: '#009688' },
      { color: 'green-500', html: '#4caf50' },
      { color: 'light-green-500', html: '#8bc34a' },
      { color: 'lime-500', html: '#cddc39' },
      { color: 'yellow-500', html: '#ffeb3b' },
      { color: 'amber-500', html: '#ffc107' },
      { color: 'orange-500', html: '#ff9800' },
      { color: 'deep-orange-500', html: '#ff5722' },
      { color: 'brown-500', html: '#795548' },
      { color: 'grey-500', html: '#9e9e9e' }
    ];

    for (var index = 0; index < colors.length; index++) {
      console.log('Couleur voulue: ' + color + '|' + colors[index].color);
      if (colors[index].color === color) {
        return colors[index].html;
      }
    }

    return '#9e9e9e';
  }
}
