import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AssociationAnnounceModel } from '../models/association_announce';
export declare class AssociationAnnounceService {
    private _http;
    constructor(_http: HttpClient);
    getAssociationAnnounce(townhall: number, association_id: number): Observable<AssociationAnnounceModel[]>;
    getAssociationAnnounceById(townhall: number, association_id: number, id: number): Observable<AssociationAnnounceModel>;
    updateAssociationAnnounceById(townhall: number, association_id: number, id: number, newAnnounce: AssociationAnnounceModel): Observable<AssociationAnnounceModel>;
    createAssociationAnnounce(townhall: number, association_id: number, announce: AssociationAnnounceModel): Observable<AssociationAnnounceModel>;
}
