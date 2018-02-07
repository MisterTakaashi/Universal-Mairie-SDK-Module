import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';
import { DiscussionMessageModel } from '../models/discussion_message';

@Injectable()
export class DiscussionMessageService {
  constructor(private _http: HttpClient) {

  }

  getDiscussionMessages(townhall: number, discussion_id: number): Observable<DiscussionMessageModel[]> {
    return this._http
      .get<DiscussionMessageModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + discussion_id + '/messages');
  }

  updateDiscussionMessageById(townhall: number, discussion_id: number, id: number, newDiscussionMessage: DiscussionMessageModel): Observable<DiscussionMessageModel> {
    return this._http
      .patch<DiscussionMessageModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + discussion_id + '/messages/' + id, { newDiscussionMessage: newDiscussionMessage });
  }

  deleteDiscussionById(townhall: number, discussion_id: number, id: number): Observable<void> {
    return this._http
      .delete<void>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + discussion_id + '/messages/' + id);
  }

  createDiscussionMessage(townhall: number, discussion_id: number, discussion_message: DiscussionMessageModel): Observable<DiscussionMessageModel> {
    return this._http
      .post<DiscussionMessageModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + discussion_id + '/messages', { discussionMessage: discussion_message });
  }
}
