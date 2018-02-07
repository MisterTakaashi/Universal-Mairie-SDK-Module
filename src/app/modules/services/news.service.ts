import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';
import { NewsModel } from '../models/news';

@Injectable()
export class NewsService {
  constructor(private _http: HttpClient) {

  }

  getNews(townhall: number): Observable<NewsModel[]> {
    console.log("NENENENENNENEWS !");

    return this._http
      .get<NewsModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news');
  }

  getNewsById(townhall: number, id: number): Observable<NewsModel> {
    return this._http
      .get<NewsModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/' + id);
  }

  updateNewsById(townhall: number, id: number, newNews: NewsModel): Observable<NewsModel> {
    return this._http
      .patch<NewsModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/' + id, { newNews: newNews });
  }

  deleteNewsById(townhall: number, id: number): Observable<void> {
    return this._http
      .delete<void>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/' + id);
  }

  createNews(townhall: number, news: NewsModel, notification?: boolean): Observable<NewsModel> {
    if (!notification) {
      notification = false;
    }

    return this._http
      .post<NewsModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news', { news: news, notification: notification });
  }

  createView(townhall: number, id: number, uuid: string): Observable<any> {
    return this._http
      .post<any>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/' + id + '/views', { uuid: uuid });
  }

  getAllNewsViews(townhall: number): Observable<any> {
    return this._http
      .get<any>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/views');
  }

  getNewsViews(townhall: number, id: number): Observable<any> {
    return this._http
      .get<any>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/' + id + '/views');
  }
}
