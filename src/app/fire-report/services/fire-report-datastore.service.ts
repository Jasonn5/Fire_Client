import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FireReport } from 'src/app/models/fire-report';

@Injectable({
  providedIn: 'root'
})
export class FireReportDatastoreService {
  
  readonly ROOT_URL = `${environment.BACK_END_HOST}fire-report`;

  constructor(private http: HttpClient) { }

  add(fireReport: FireReport) {
    return this.http.post<FireReport>(this.ROOT_URL, fireReport);
  }
}
