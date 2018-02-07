import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';
import { DirectoryCategoryModel } from '../models/directory_category';
import { ShopModel } from '../models/shop';

@Injectable()
export class DirectoryCategoryService {
  constructor(private _http: HttpClient) {

  }

  getDirectoryCategories(townhall: number): Observable<DirectoryCategoryModel[]> {
    return this._http
      .get<DirectoryCategoryModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/directory_categories/');
     
  }

  getShopsForDirectoryCategory(townhall: number, id: number): Observable<ShopModel[]> {
    return this._http
      .get<ShopModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/directory_categories/' + id + '/shops');
      
  }

  getShopsForDirectory(townhall: number): Observable<ShopModel[]> {
    return this._http
      .get<ShopModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops');
  }

  getAssociationsForDirectory(townhall: number): Observable<ShopModel[]> {
    return this._http
      .get<ShopModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations');
  }

  getAssociationsForDirectoryCategory(townhall: number, id: number): Observable<ShopModel[]> {
    return this._http
      .get<ShopModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/directory_categories/' + id + '/associations');
  }

  updateDirectoryCategoryById(townhall: number, id: number, newDirectoryCategory: DirectoryCategoryModel): Observable<DirectoryCategoryModel> {
    return this._http
      .patch<DirectoryCategoryModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + id, { newDirectoryCategory: newDirectoryCategory });
  }

  deleteDiscussionById(townhall: number, id: number): Observable<void> {
    return this._http
      .delete<void>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + id);
  }

  createDirectoryCategory(townhall: number, directory_category: DirectoryCategoryModel, under_category_id: number): Observable<DirectoryCategoryModel> {
    return this._http
      .post<DirectoryCategoryModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/directory_categories/', { directory_category: directory_category, under_category_id: under_category_id });
  }
}
