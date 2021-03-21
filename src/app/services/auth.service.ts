import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  afUser$: Observable<firebase.User> = this.afAuth.user;
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login() {
    this.afAuth
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((_) => this.router.navigateByUrl('/create'));
  }

  logout() {
    this.afAuth.signOut().then((_) => this.router.navigateByUrl('/welcome'));
  }
}
