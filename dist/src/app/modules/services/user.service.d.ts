import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../models/user';
export declare class UserService {
    private _http;
    constructor(_http: HttpClient);
    countUsers(townhall: number): Observable<number>;
    platformsUsers(townhall: number): Observable<any>;
    getUserById(townhall: number, id: number): Observable<UserModel>;
    getUserByUUID(townhall: number, uuid: string): Observable<UserModel>;
    createUser(townhall: number, user: UserModel): Observable<UserModel>;
}
