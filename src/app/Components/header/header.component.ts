import { Component, OnInit } from '@angular/core';
import { faFacebookMessenger, faHooli, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHospital } from '@fortawesome/free-regular-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faChat = faFacebookMessenger;
  faHeadset = faHeadset;
  faHouse = faHospital

  constructor() { }

  ngOnInit(): void {
  }

}
