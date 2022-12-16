import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { AddFireReportComponent } from './fire-report/components/add-fire-report/add-fire-report.component';
import { InformationComponent } from './information/componets/information/information.component';
import { ViewReleasesComponent } from './release/components/view-releases/view-releases.component';

const routes: Routes = [
  {path: '', component: AddFireReportComponent},
  {path: 'information', component: InformationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'view-releases', component: ViewReleasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
