import { Component, OnInit } from '@angular/core';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { FireReport } from 'src/app/models/fire-report';
import { FireReportService } from '../../services/fire-report.service';

@Component({
  selector: 'app-add-fire-report',
  templateUrl: './add-fire-report.component.html',
  styleUrls: ['./add-fire-report.component.scss']
})
export class AddFireReportComponent implements OnInit {
  faFire = faFire;
  public fireReport: FireReport = new FireReport();

  constructor(private fireReportService: FireReportService) { }

  ngOnInit(): void {
    this.sendFireReport();
  }

  initFireReport() {

  }

  sendFireReport() {
    var date = new Date()
    this.fireReport.date = date;
    this.fireReport.emergencyType =1;
    this.fireReport.extraInstructions = "Holas";
    this.fireReport.phoneNumber = "77904336";
    this.fireReport.location = "locatin";

    this.fireReportService.addFireReport(this.fireReport).subscribe(()=>{debugger;
      
    });
  }
}
