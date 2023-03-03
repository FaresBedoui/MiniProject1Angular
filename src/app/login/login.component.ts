import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string ="";
  password: string="";
  loginError: string="";

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    try {
      this.authService.login(this.email, this.password);
      this.router.navigate(['/articles']); 
    } catch (error) {
      this.loginError = (error as Error).message;
    }
  }
}
