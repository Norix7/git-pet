import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  afUser$: Observable<firebase.User> = this.afAuth.user;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  login() {
    this.afAuth
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((_) =>
        this.router
          .navigateByUrl('/create')
          .then((_) => this.snackBar.open('ようこそ、GitPetへ！', null))
      );
  }

  logout() {
    this.afAuth
      .signOut()
      .then((_) =>
        this.router
          .navigateByUrl('/welcome')
          .then((_) => this.snackBar.open('ログアウトしました', null))
      );
  }
}
