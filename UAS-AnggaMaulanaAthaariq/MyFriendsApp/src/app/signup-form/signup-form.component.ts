import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthService) {}

  login(credentials){
    this.authService.login(credentials).subscribe(result => {
      if (result)
      this.router.navigate(['/post']);
      else
      this.invalidLogin = true;
    });
  }
}
