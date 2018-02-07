import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';
import { ReportModel } from '../models/report';

@Injectable()
export class ReportService {
  constructor(private _http: HttpClient) {

  }

  getReports(townhall: number): Observable<ReportModel[]> {
    return this._http
      .get<ReportModel[]>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/reports');
  }

  getReportById(townhall: number, id: number): Observable<ReportModel> {
    return this._http
      .get<ReportModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/reports/' + id);
  }

  updateReportById(townhall: number, id: number, newReport: ReportModel): Observable<ReportModel> {
    return this._http
      .patch<ReportModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/reports/' + id, { newReport: newReport });
  }

  deleteReportById(townhall: number, id: number): Observable<void> {
    return this._http
      .delete<void>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/reports/' + id);
  }

  createReport(townhall: number, report: ReportModel): Observable<ReportModel> {
    return this._http
      .post<ReportModel>(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/reports', { report: report });
  }
}
