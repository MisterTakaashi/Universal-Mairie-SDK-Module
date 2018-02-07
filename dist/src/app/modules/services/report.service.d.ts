import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ReportModel } from '../models/report';
export declare class ReportService {
    private _http;
    constructor(_http: HttpClient);
    getReports(townhall: number): Observable<ReportModel[]>;
    getReportById(townhall: number, id: number): Observable<ReportModel>;
    updateReportById(townhall: number, id: number, newReport: ReportModel): Observable<ReportModel>;
    deleteReportById(townhall: number, id: number): Observable<void>;
    createReport(townhall: number, report: ReportModel): Observable<ReportModel>;
}
