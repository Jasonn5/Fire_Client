import { Component, OnInit } from '@angular/core';
import { faRockrms } from '@fortawesome/free-brands-svg-icons';
import { faExclamationTriangle, faFire, faPaw } from '@fortawesome/free-solid-svg-icons';
import { FireReport } from 'src/app/models/fire-report';
import { EmergencyType } from '../../pipes/emergency-type.pipe';
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
  public phonenumber = ""; 
  public emergencyTypeSelected = 0;
  public location = "";
  public placeId = ""

  constructor(private fireReportService: FireReportService,
    private emergencyType: EmergencyType,) { }

  ngOnInit(): void {
    this.styles = [
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

  selectEmergencyType(emergencyType : number){
    this.isEmergencyTypePassed = true;
    this.emergencyTypeSelected = emergencyType
  }

  getPhoneNumber(){
    this.isLocationSelected = true;
  }

  sendFireReport() {
    this.fireReport.emergencyType = this.emergencyTypeSelected ;
    this.fireReport.phoneNumber = this.phonenumber;
    this.location ="https://www.google.com/maps/@" + this.lat + ","+ this.lng + ","+ this.zoom+ "z";
    this.fireReport.location = this.location;


    this.fireReportService.addFireReport(this.fireReport).subscribe(()=>{
      this.sendPostulation();
      alert("Reporte enviado Correctamente");      
    });
  }

  sendPostulation() {
    var emergencyType = this.emergencyType.transform(this.emergencyTypeSelected);
    var message = `Quiero reportar un *${emergencyType}*`;
    message += `%0a%0a*Ubicación:* ${this.location}`;
    message += `%0a%0a*Numero de Contacto:* ${this.phonenumber}`;
    window.open(`https://api.whatsapp.com/send?phone=${60797901}&text=${message}`, '_system');
  }  
}
