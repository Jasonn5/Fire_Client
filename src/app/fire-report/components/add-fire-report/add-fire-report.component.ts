import { Component, OnInit } from '@angular/core';
import { faRockrms } from '@fortawesome/free-brands-svg-icons';
import { faExclamationTriangle, faFire, faPaw } from '@fortawesome/free-solid-svg-icons';
import { FireReport } from 'src/app/models/fire-report';
import { FireReportService } from '../../services/fire-report.service';

@Component({
  selector: 'app-add-fire-report',
  templateUrl: './add-fire-report.component.html',
  styleUrls: ['./add-fire-report.component.scss']
})
export class AddFireReportComponent implements OnInit {
  faFire = faFire;
  faPaw = faPaw;
  faExclamationTriangle = faExclamationTriangle;
  public isEmergencyTypePassed = false;
  public isLocationSelected = false;
  public fireReport: FireReport = new FireReport();
  public lat: number = -17.372752;
  public lng: number = -66.159048;
  public zoom: number = 15;
  public styles: any;

  constructor(private fireReportService: FireReportService) { }

  ngOnInit(): void {this.styles = [
    {
      "featureType": "poi.business",
      "elementType": "all",
      "stylers": [{
        visibility: "off",
      }]
    },
    {
      "featureType": "poi.medical",
      "elementType": "all",
      "stylers": [{
        visibility: "off",
      }]
    },
    {
      "featureType": "poi.government",
      "elementType": "all",
      "stylers": [{
        visibility: "off",
      }]
    },
    {
      "featureType": "poi.attraction",
      "elementType": "all",
      "stylers": [{
        visibility: "off",
      }]
    },
    {
      "featureType": "poi.school",
      "elementType": "all",
      "stylers": [{
        visibility: "off",
      }]
    }
  ];
  }

  initFireReport() {

  }

  mapClicked($event: any) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.getPhoneNumber();
  }

  markerDragEnd($event: any) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
  }

  selectEmergencyType(){
    this.isEmergencyTypePassed = true;
  }

  getPhoneNumber(){
    this.isLocationSelected = true;
  }

  sendFireReport() {
    var date = new Date()
    this.fireReport.date = date;
    this.fireReport.emergencyType =1;
    this.fireReport.extraInstructions = "Holas";
    this.fireReport.phoneNumber = "77904336";
    this.fireReport.location = "locatin";

    this.fireReportService.addFireReport(this.fireReport).subscribe(()=>{
      this.sendPostulation();
      alert("Reporte enviado Correctamente");
      
    });
  }

  sendPostulation() {
    var message = `Quiero reportar un *Incendio*`;
    message += `%0a%0a*Ubicaion:* https://www.google.com/maps/@-17.4082544,-66.1519264,18z`;
    message += `%0a%0a*Numero de Contacto:* 77904336`;
    window.open(`https://api.whatsapp.com/send?phone=${60797901}&text=${message}`, '_system');
  }  
}
