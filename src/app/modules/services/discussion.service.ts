import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';
import { DiscussionModel } from '../models/discussion';

@Injectable()
export class DiscussionService {
  constructor(private _http: HttpClient) {

  }

  getDiscussions(townhall: number): Observable<DiscussionModel[]> {
    return this._http
      .get<DiscussionModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions');
  }

  getUsersDiscussions(townhall: number, id: number): Observable<DiscussionModel[]> {
    return this._http
      .get<DiscussionModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users/' + id + '/discussions');
  }

  getDiscussionById(townhall: number, id: number): Observable<DiscussionModel> {
    return this._http
      .get<DiscussionModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + id);
  }

  updateDiscussionById(townhall: number, id: number, newDiscussion: DiscussionModel): Observable<DiscussionModel> {
    return this._http
      .patch<DiscussionModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + id, { newDiscussion: newDiscussion });
  }

  deleteDiscussionById(townhall: number, id: number): Observable<void> {
    return this._http
      .delete<void>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + id);
  }

  createDiscussion(townhall: number, discussion: DiscussionModel): Observable<DiscussionModel> {
    return this._http
      .post<DiscussionModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions', { discussion: discussion });
  }
}
