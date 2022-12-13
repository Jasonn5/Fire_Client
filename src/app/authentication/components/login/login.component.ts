import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public errorMessage!: string;
  @ViewChild('userFocus', { static: true })
  usernameField!: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(100)]],
      password: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  login() {
    this.spinner.show();
    var login = this.loginForm.value;

    this.auth.login(login.username, login.password).subscribe(
      () => {
        this.router.navigate(['/home']);
        this.spinner.hide();
      },
      error => {        
        alert(error.error.error.message)
        this.spinner.hide();
      }
    );
  }

  showError(error:any) {
    if (error.ConfirmPassword) {
      return error.ConfirmPassword[0];
    }
    if (error.Password) {
      return error.Password[0];
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
