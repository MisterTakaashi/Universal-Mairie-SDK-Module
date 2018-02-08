import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../models/user';
export declare class SessionService {
    private _http;
    constructor(_http: HttpClient);
    signin(email: string, password: string): Observable<UserModel>;
}
