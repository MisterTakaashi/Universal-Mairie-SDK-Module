import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';
import { ShopModel } from '../models/shop';

@Injectable()
export class ShopService {
  constructor(private _http: HttpClient) {

  }

  getShops(townhall: number): Observable<ShopModel[]> {
    return this._http
      .get<ShopModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops');
  }

  getShopById(townhall: number, id: number): Observable<ShopModel> {
    return this._http
      .get<ShopModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops/' + id);
  }

  updateShopById(townhall: number, id: number, newShop: ShopModel): Observable<ShopModel> {
    return this._http
      .patch<ShopModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops/' + id, { newShop: newShop });
  }

  deleteShopById(townhall: number, id: number): Observable<void> {
    return this._http
      .delete<void>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops/' + id);
  }

  createShop(townhall: number, shop: ShopModel): Observable<ShopModel> {
    return this._http
      .post<ShopModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops', { shop: shop });
  }

  validateShopById(townhall: number, id: number): Observable<ShopModel> {
    return this._http
      .patch<ShopModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops/' + id + '/validate', {});
  }
}
