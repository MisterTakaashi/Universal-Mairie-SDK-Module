import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TownhallModel } from '../models/townhall';
export declare class TownhallService {
    private _http;
    constructor(_http: HttpClient);
    getTownhalls(): Observable<TownhallModel[]>;
    getTownhallById(townhall: number): Observable<TownhallModel>;
    updateTownhallById(townhall: number, newTownhall: TownhallModel): Observable<TownhallModel>;
    convertColorToHTML(color: string): string;
}
