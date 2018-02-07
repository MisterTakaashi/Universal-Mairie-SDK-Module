import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';
import { TownhallFeatureModel } from '../models/townhall_feature';


@Injectable()
export class TownhallFeatureService {
  constructor(private _http: HttpClient) {

  }

  getfeatures(townhall: number): Observable<TownhallFeatureModel> {
    return this._http
      .get<TownhallFeatureModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/townhall_features');
  }

  updateFeatures(townhall: number, newFeatures: TownhallFeatureModel): Observable<TownhallFeatureModel> {
    return this._http
      .patch<TownhallFeatureModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/townhall_features/', { newFeatures: newFeatures });
  }
}
