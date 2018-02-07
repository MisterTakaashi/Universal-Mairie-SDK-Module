import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AssociationSubscriptionModel } from '../models/association_subscription';
export declare class AssociationSubscriptionService {
    private _http;
    constructor(_http: HttpClient);
    getAssociationSubscriptions(townhall: number, association_id: number): Observable<AssociationSubscriptionModel[]>;
    getAssociationSubscriptionById(townhall: number, association_id: number, id: number): Observable<AssociationSubscriptionModel>;
    deleteAssociationSubscriptionById(townhall: number, id: number): Observable<void>;
    createAssociationSubscription(townhall: number, association_id: number, subscription: AssociationSubscriptionModel): Observable<AssociationSubscriptionModel>;
}
