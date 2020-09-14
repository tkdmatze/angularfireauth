import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';


@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthService],
  declarations: []
})
export class AuthModule { }
