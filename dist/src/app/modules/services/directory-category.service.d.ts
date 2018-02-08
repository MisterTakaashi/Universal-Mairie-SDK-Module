import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DirectoryCategoryModel } from '../models/directory_category';
import { ShopModel } from '../models/shop';
export declare class DirectoryCategoryService {
    private _http;
    constructor(_http: HttpClient);
    getDirectoryCategories(townhall: number): Observable<DirectoryCategoryModel[]>;
    getShopsForDirectoryCategory(townhall: number, id: number): Observable<ShopModel[]>;
    getShopsForDirectory(townhall: number): Observable<ShopModel[]>;
    getAssociationsForDirectory(townhall: number): Observable<ShopModel[]>;
    getAssociationsForDirectoryCategory(townhall: number, id: number): Observable<ShopModel[]>;
    updateDirectoryCategoryById(townhall: number, id: number, newDirectoryCategory: DirectoryCategoryModel): Observable<DirectoryCategoryModel>;
    deleteDiscussionById(townhall: number, id: number): Observable<void>;
    createDirectoryCategory(townhall: number, directory_category: DirectoryCategoryModel, under_category_id: number): Observable<DirectoryCategoryModel>;
}
