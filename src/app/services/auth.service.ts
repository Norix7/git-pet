import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  afUser$: Observable<firebase.User> = this.afAuth.user;
  constructor(private afAuth: AngularFireAuth) {}

  login(): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  logout() {
    this.afAuth.signOut();
  }
}
