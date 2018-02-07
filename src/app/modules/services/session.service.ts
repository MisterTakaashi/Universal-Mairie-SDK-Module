import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';
import { UserModel } from '../models/user';


@Injectable()
export class SessionService {
  constructor(private _http: HttpClient) {

  }

  signin(email: string, password: string): Observable<UserModel> {
    return this._http
      .post<UserModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/sessions', { email: email, password: password });
  }
}
