import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-linklist',
  templateUrl: './linklist.component.html',
  styleUrls: ['./linklist.component.css']
})
export class LinklistComponent {


  constructor(public authService: AuthService) { }

  signOut() {
    this.authService.logout();
  }

}
