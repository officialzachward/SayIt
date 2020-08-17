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

  constructor(private auth: AuthService,
              private router: Router) { }

    signUp() {
      const user: User = {
        email: this.email,
        password: this.password,
        username: this.displayName
      };

      this.auth.register(user)
        .then(resolve => this.router.navigate(['chat']))
        .catch(error => this.errorMsg = error.message);
    }
}
