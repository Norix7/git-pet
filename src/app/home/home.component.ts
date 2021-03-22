import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../interfaces/pet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pet: Pet = {
    name: 'テストペットA',
    exp: 111,
    level: 4,
    petImageId: 2,
    trainerId: 'trainer001',
  };

  constructor() {}

  ngOnInit(): void {}
}
