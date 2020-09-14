import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.authService.emailSignup(
        this.email,
        this.password
      );
    }
  }
}
