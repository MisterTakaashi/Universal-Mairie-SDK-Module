import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DiscussionModel } from '../models/discussion';
export declare class DiscussionService {
    private _http;
    constructor(_http: HttpClient);
    getDiscussions(townhall: number): Observable<DiscussionModel[]>;
    getUsersDiscussions(townhall: number, id: number): Observable<DiscussionModel[]>;
    getDiscussionById(townhall: number, id: number): Observable<DiscussionModel>;
    updateDiscussionById(townhall: number, id: number, newDiscussion: DiscussionModel): Observable<DiscussionModel>;
    deleteDiscussionById(townhall: number, id: number): Observable<void>;
    createDiscussion(townhall: number, discussion: DiscussionModel): Observable<DiscussionModel>;
}
