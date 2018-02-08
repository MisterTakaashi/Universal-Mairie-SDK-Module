import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DiscussionMessageModel } from '../models/discussion_message';
export declare class DiscussionMessageService {
    private _http;
    constructor(_http: HttpClient);
    getDiscussionMessages(townhall: number, discussion_id: number): Observable<DiscussionMessageModel[]>;
    updateDiscussionMessageById(townhall: number, discussion_id: number, id: number, newDiscussionMessage: DiscussionMessageModel): Observable<DiscussionMessageModel>;
    deleteDiscussionById(townhall: number, discussion_id: number, id: number): Observable<void>;
    createDiscussionMessage(townhall: number, discussion_id: number, discussion_message: DiscussionMessageModel): Observable<DiscussionMessageModel>;
}
