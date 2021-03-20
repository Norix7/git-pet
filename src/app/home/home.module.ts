import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PetComponent } from './pet.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [HomeComponent, PetComponent],
  imports: [CommonModule, HomeRoutingModule, MatProgressBarModule],
})
export class HomeModule {}
