import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFireReportComponent } from './fire-report/components/add-fire-report/add-fire-report.component';
import { InformationComponent } from './information/componets/information/information.component';

const routes: Routes = [
  {path: '', component: AddFireReportComponent},
  {path: 'information', component: InformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
