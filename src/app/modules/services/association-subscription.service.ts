import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';
import { AssociationSubscriptionModel } from '../models/association_subscription';

@Injectable()
export class AssociationSubscriptionService {
  constructor(private _http: HttpClient) {

  }

  getAssociationSubscriptions(townhall: number, association_id: number): Observable<AssociationSubscriptionModel[]> {
    return this._http
      .get<AssociationSubscriptionModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/subscriptions');
  }

  getAssociationSubscriptionById(townhall: number, association_id: number, id: number): Observable<AssociationSubscriptionModel> {
    return this._http
      .get<AssociationSubscriptionModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/subscriptions/' + id);
  }

  deleteAssociationSubscriptionById(townhall: number, id: number): Observable<void> {
    return this._http
      .delete<void>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + 0 + '/subscriptions/' + id);
  }

  createAssociationSubscription(townhall: number, association_id: number, subscription: AssociationSubscriptionModel): Observable<AssociationSubscriptionModel> {
    return this._http
      .post<AssociationSubscriptionModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/subscriptions', { subscription: subscription });
  }
}
