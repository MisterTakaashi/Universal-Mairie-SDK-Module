import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';
import { ArticleModel } from '../models/article';

@Injectable()
export class ArticleService {
  constructor(private _http: HttpClient) {

  }

  getArticles(townhall: number): Observable<ArticleModel[]> {
    return this._http
      .get<ArticleModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/articles');
  }

  getArticleById(townhall: number, id: number): Observable<ArticleModel> {
    return this._http
      .get<ArticleModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/articles/' + id);
  }

  updateArticleById(townhall: number, id: number, newArticle: ArticleModel): Observable<ArticleModel> {
    return this._http
      .patch<ArticleModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/articles/' + id, { newArticle: newArticle });
  }

  deleteArticleById(townhall: number, id: number): Observable<void> {
    return this._http
      .delete<void>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/articles/' + id);
  }

  createArticle(townhall: number, article: ArticleModel): Observable<ArticleModel> {
    return this._http
      .post<ArticleModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/articles', { article: article });
  }
}