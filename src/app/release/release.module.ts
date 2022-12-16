import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditReleaseComponent } from './components/edit-release/edit-release.component';
import { ViewReleasesComponent } from './components/view-releases/view-releases.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    EditReleaseComponent,
    ViewReleasesComponent
  ],
  imports: [
    CommonModule,
    NgbModule,    
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ]
})
export class ReleaseModule { }
