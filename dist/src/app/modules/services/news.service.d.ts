import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NewsModel } from '../models/news';
export declare class NewsService {
    private _http;
    constructor(_http: HttpClient);
    getNews(townhall: number): Observable<NewsModel[]>;
    getNewsById(townhall: number, id: number): Observable<NewsModel>;
    updateNewsById(townhall: number, id: number, newNews: NewsModel): Observable<NewsModel>;
    deleteNewsById(townhall: number, id: number): Observable<void>;
    createNews(townhall: number, news: NewsModel, notification?: boolean): Observable<NewsModel>;
    createView(townhall: number, id: number, uuid: string): Observable<any>;
    getAllNewsViews(townhall: number): Observable<any>;
    getNewsViews(townhall: number, id: number): Observable<any>;
}
