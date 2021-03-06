import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  loginGoogle() {
    this.authService.googleLogin();
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.authService.login(
        this.email,
        this.password
      );
    }
  }
}
