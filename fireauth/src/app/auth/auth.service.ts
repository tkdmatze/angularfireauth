import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {
  private LANDING_PAGE = '/profile';
  public currentUser: firebase.User;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router) {
    this.afAuth.auth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigateByUrl(this.LANDING_PAGE);
      })
      .catch(err => {
      });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {

        this.router.navigateByUrl(this.LANDING_PAGE);
      })
      .catch(error => {
      });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then(value => {

          this.router.navigateByUrl(this.LANDING_PAGE);
      })
      .catch(error => {
      });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {

      this.router.navigate(['/']);
    });
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
