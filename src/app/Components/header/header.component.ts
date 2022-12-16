import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebookMessenger, faHooli, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHospital } from '@fortawesome/free-regular-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faChat = faFacebookMessenger;
  faHeadset = faHeadset;
  faHouse = faHospital;
  text = "Iniciar Sesión"

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    if (!this.authService.tokenHasExpired()) {
      this.text = "Cerrar Sesión";
      this.authService.logout();
    }else{
      this.router.navigate(['/login'])

    }
  }

  isLogged() {
    return this.authService.tokenHasExpired();
  }

}
