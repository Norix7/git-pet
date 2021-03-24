import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../interfaces/pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss'],
})
export class PetComponent implements OnInit {
  @Input() pet: Pet;

  maxExp = 40;
  expPercent = 0;

  expTable = [20, 40, 70, 110, 160, 220, 290, 370, 460];

  constructor() {}

  ngOnInit(): void {}

  get petImageURL(): string {
    return 'assets/images/pet-' + this.pet.petImageId + '.png';
  }
}
