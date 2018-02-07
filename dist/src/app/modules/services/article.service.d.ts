import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ArticleModel } from '../models/article';
export declare class ArticleService {
    private _http;
    constructor(_http: HttpClient);
    getArticles(townhall: number): Observable<ArticleModel[]>;
    getArticleById(townhall: number, id: number): Observable<ArticleModel>;
    updateArticleById(townhall: number, id: number, newArticle: ArticleModel): Observable<ArticleModel>;
    deleteArticleById(townhall: number, id: number): Observable<void>;
    createArticle(townhall: number, article: ArticleModel): Observable<ArticleModel>;
}
