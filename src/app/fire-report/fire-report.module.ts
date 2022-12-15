import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFireReportComponent } from './components/add-fire-report/add-fire-report.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmergencyType } from './pipes/emergency-type.pipe';



@NgModule({
  declarations: [
    AddFireReportComponent
  ],
  imports: [
    CommonModule,
    NgbModule,    
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AgmCoreModule,
  ],
  providers: [EmergencyType]
})
export class FireReportModule { }
