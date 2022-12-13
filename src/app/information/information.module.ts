import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './componets/information/information.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPostulationComponent } from './componets/add-postulation/add-postulation.component';
import { ContactInformationComponent } from './componets/contact-information/contact-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InformationComponent,
    AddPostulationComponent,
    ContactInformationComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,    
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ]
})
export class InformationModule { }
