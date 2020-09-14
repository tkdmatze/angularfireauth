import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {SignupComponent} from './signup/signup.component';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  {path: '', redirectTo: 'pub/homepage', pathMatch: 'full'},
  {path: 'pub/login', component: LoginComponent},
  {path: 'pub/signup', component: SignupComponent},
  {path: 'pub/homepage', component: HomepageComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AngularFireAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
