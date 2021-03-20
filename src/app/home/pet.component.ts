import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../interfaces/pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss'],
})
export class PetComponent implements OnInit {
  @Input() pet: Pet;

  maxExp = 400;
  expPercent = 0;

  constructor() {}

  ngOnInit(): void {}

  getExpPercentage(): number {
    return (this.pet.exp / this.maxExp) * 100;
  }
}
