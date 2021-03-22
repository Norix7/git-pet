import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AuthService } from '../services/auth.service';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  petIds = [...Array(10)].map((_, i) => i + 1);

  config: SwiperConfigInterface = {
    loop: true,
    navigation: true,
    pagination: {
      el: '.pager',
      clickable: true,
    },
    centeredSlides: true,
    slidesPerView: 3,
  };

  selectedPetId = 0;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(40)]],
    gender: ['', [Validators.required, Validators.pattern(/male|female/)]],
  });

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
    console.log(this.selectedPetId);

    const formData = this.form.value;
    this.petService.createPet({
      petImageId: this.selectedPetId + 1,
      name: formData.name,
      gender: formData.gender,
      level: 1,
      exp: 0,
      trainerId: this.authService.uid,
    });
  }

  get nameControl() {
    return this.form.get('name') as FormControl;
  }

  get genderControl() {
    return this.form.get('gender') as FormControl;
  }
}
