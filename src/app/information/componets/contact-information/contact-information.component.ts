import { Component, OnInit } from '@angular/core';
import { faHeadphones, faPhone, faPhoneAlt, faPhoneSquare, faPhoneSquareAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {

  faPhoneVolume = faPhoneAlt
  constructor() { }

  ngOnInit(): void {
  }

}
