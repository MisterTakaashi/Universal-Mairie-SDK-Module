import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AssociationModel } from '../models/association';
export declare class AssociationService {
    private _http;
    constructor(_http: HttpClient);
    getAssociations(townhall: number, query?: any): Observable<AssociationModel[]>;
    getAssociationById(townhall: number, id: number): Observable<AssociationModel>;
    updateAssociationById(townhall: number, id: number, newAssociation: AssociationModel): Observable<AssociationModel>;
    deleteAssociationById(townhall: number, id: number): Observable<void>;
    createAssociation(townhall: number, association: AssociationModel): Observable<AssociationModel>;
    validateAssociationById(townhall: number, id: number): Observable<AssociationModel>;
    associateAssociationToUser(townhall: number, uuid: string, token: string): Observable<AssociationModel>;
}
