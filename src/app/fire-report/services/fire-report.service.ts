import { Injectable } from '@angular/core';
import { FireReportDatastoreService } from './fire-report-datastore.service';
import { FireReport } from 'src/app/models/fire-report';

@Injectable({
  providedIn: 'root'
})
export class FireReportService {

  constructor(private fireReportDatastoreService: FireReportDatastoreService) { }

  public addFireReport(fireReport: FireReport){
    var newFireReport = new FireReport();
    newFireReport.emergencyType = fireReport.emergencyType;
    newFireReport.location = fireReport.location;
    newFireReport.extraInstructions = fireReport.extraInstructions,
    newFireReport.phoneNumber = fireReport.phoneNumber;

    return this.fireReportDatastoreService.add(newFireReport);
  }
}
