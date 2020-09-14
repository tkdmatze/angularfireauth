import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
  private LANDING_PAGE = '/profile';
  public currentUser: firebase.User;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router) {
    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
  }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigateByUrl(this.LANDING_PAGE);
      })
      .catch(err => {
      });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(value => {

        this.router.navigateByUrl(this.LANDING_PAGE);
      })
      .catch(error => {
        console.error(error);
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
    this.afAuth.signOut().then(() => {

      this.router.navigate(['/']);
    });
  }

  private oAuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider);
  }
}
