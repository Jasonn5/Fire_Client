
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FireReportModule } from './fire-report/fire-report.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './authentication/authentication.module';
import { InformationModule } from './information/information.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { ReleaseModule } from './release/release.module';
import { UploadService } from './services/upload.service';
import { httpInterceptorProviders } from './authentication/http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AgmCoreModule.forRoot({ apiKey: environment.API_KEY }),
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FireReportModule,
    InformationModule,
    ReleaseModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
