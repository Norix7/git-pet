import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private petService: PetService
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.login();
  }
}
