import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';
import { UserModel } from '../models/user';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) {

  }

  countUsers(townhall: number): Observable<number> {
    return this._http
      .get<number>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users/count');
  }

  platformsUsers(townhall: number): Observable<any> {
    return this._http
      .get<any>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users/platforms');
  }

  getUserById(townhall: number, id: number): Observable<UserModel> {
    return this._http
      .get<UserModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users/' + id);
  }

  getUserByUUID(townhall: number, uuid: string): Observable<UserModel> {
    return this._http
      .get<UserModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users/' + uuid + '/uuid');
  }

  createUser(townhall: number, user: UserModel): Observable<UserModel> {
    return this._http
      .post<UserModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users', { user: user });
  }
}
