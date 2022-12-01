import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFireReportComponent } from './components/add-fire-report/add-fire-report.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AddFireReportComponent
  ],
  imports: [
    CommonModule,
    NgbModule,    
    FontAwesomeModule,
  ]
})
export class FireReportModule { }
