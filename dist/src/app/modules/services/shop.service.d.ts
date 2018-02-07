import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ShopModel } from '../models/shop';
export declare class ShopService {
    private _http;
    constructor(_http: HttpClient);
    getShops(townhall: number): Observable<ShopModel[]>;
    getShopById(townhall: number, id: number): Observable<ShopModel>;
    updateShopById(townhall: number, id: number, newShop: ShopModel): Observable<ShopModel>;
    deleteShopById(townhall: number, id: number): Observable<void>;
    createShop(townhall: number, shop: ShopModel): Observable<ShopModel>;
    validateShopById(townhall: number, id: number): Observable<ShopModel>;
}
