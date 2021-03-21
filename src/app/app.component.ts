import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'git-pet';

  user$ = this.authService.afUser$;

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
  }
}
