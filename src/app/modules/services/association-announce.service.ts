import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';
import { AssociationAnnounceModel } from '../models/association_announce';

@Injectable()
export class AssociationAnnounceService {
  constructor(private _http: HttpClient) {

  }

  getAssociationAnnounce(townhall: number, association_id: number): Observable<AssociationAnnounceModel[]> {
    return this._http
      .get<AssociationAnnounceModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/announces');
  }

  getAssociationAnnounceById(townhall: number, association_id: number, id: number): Observable<AssociationAnnounceModel> {
    return this._http
      .get<AssociationAnnounceModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/announces/' + id);
  }

  updateAssociationAnnounceById(townhall: number, association_id: number, id: number, newAnnounce: AssociationAnnounceModel): Observable<AssociationAnnounceModel> {
    return this._http
      .patch<AssociationAnnounceModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/announces/' + id, { newAnnounce: newAnnounce });
  }

  /*deleteAssociationAnnounceById(townhall: number, id: number): Observable<void> {
    return this._http
      .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/announces/' + id)
      .map((r) => r.json());
  }*/

  createAssociationAnnounce(townhall: number, association_id: number, announce: AssociationAnnounceModel): Observable<AssociationAnnounceModel> {
    return this._http
      .post<AssociationAnnounceModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/announces', { announce: announce });
  }
}
