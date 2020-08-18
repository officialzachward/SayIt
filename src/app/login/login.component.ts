import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  errorMsg: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log('login() called from login-form component');
    const user: User = {
      email: this.email,
      password: this.password,
    }
    this.authService.login(user).catch(error => this.handleError(error.message));
  }

  handleError(errorMessage: string) {
    this.errorMsg = errorMessage;
    console.log("HANDLE ERROR PRINTING...")
    console.log(this.errorMsg);
  }

}
