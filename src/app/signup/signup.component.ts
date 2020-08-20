import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email: string;
  password: string;
  displayName: string;
  errorMsg: string;

  instructions: string = 'Please make sure that:\n (1) Your email is valid \n ' +
  '(2) Your password is at least 6 characters and \n (3) Your display name is at ' +
  'least 12 characters long';
  constructor(private auth: AuthService,
              private router: Router) { }

    signUp() {
      const user: User = {
        email: this.email,
        password: this.password,
        username: this.displayName
      };

      this.auth.register(user).catch(error => this.handleError(error.message));
    }

    handleError(errMessage: string): void {
      this.errorMsg = errMessage;
    }
}
