import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TownhallFeatureModel } from '../models/townhall_feature';
export declare class TownhallFeatureService {
    private _http;
    constructor(_http: HttpClient);
    getfeatures(townhall: number): Observable<TownhallFeatureModel>;
    updateFeatures(townhall: number, newFeatures: TownhallFeatureModel): Observable<TownhallFeatureModel>;
}
