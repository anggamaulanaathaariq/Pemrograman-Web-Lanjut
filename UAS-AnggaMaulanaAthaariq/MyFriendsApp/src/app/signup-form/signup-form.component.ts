import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  invalidLogin: boolean;

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  });

  login(credentials){
    this.authService.login(credentials).subscribe(result => {
      if (result)
      this.router.navigate(['/post']);
      else
      this.invalidLogin = true;
    })
    this.form.setErrors({
      invalidLogin: true
    });
  }
  
  get username(){
    return this.form.get('username');
  }

  constructor(
    private router: Router,
    private authService: AuthService) {}

  ngOnInit() {
  }

}
