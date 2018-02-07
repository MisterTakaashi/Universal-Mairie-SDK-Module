import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';
import { AssociationModel } from '../models/association';

@Injectable()
export class AssociationService {
  constructor(private _http: HttpClient) {

  }

  getAssociations(townhall: number, query?: any): Observable<AssociationModel[]> {
    let queryString = "?";

    for (let queryName in query) {
      queryString += queryName + "=" + query[queryName];
    }

    return this._http
      .get<AssociationModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations' + queryString);
  }

  getAssociationById(townhall: number, id: number): Observable<AssociationModel> {
    return this._http
      .get<AssociationModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + id);
  }

  updateAssociationById(townhall: number, id: number, newAssociation: AssociationModel): Observable<AssociationModel> {
    return this._http
      .patch<AssociationModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + id, { newAssociation: newAssociation });
  }

  deleteAssociationById(townhall: number, id: number): Observable<void> {
    return this._http
      .delete<void>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + id);
  }

  createAssociation(townhall: number, association: AssociationModel): Observable<AssociationModel> {
    return this._http
      .post<AssociationModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations', { association: association });
  }

  validateAssociationById(townhall: number, id: number): Observable<AssociationModel> {
    return this._http
      .patch<AssociationModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + id + '/validate', {});
      
  }

  associateAssociationToUser(townhall: number, uuid: string, token: string): Observable<AssociationModel> {
    return this._http
      .patch<AssociationModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + 0 + '/associate', { token: token, uuid: uuid });
        }
}
