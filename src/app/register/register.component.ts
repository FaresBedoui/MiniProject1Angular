import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string="";
  password: string="";
  confirmPassword: string="";
  registerError: string="";

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.registerError = 'Passwords do not match';
      return;
    }
    try {
      this.authService.register(this.email, this.password);
      this.router.navigate(['/login']); // redirect to login page after successful registration
    } catch (error) {
      this.registerError = (error as Error).message;
    }
  }
}
