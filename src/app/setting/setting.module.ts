import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SettingComponent],
  imports: [CommonModule, SettingRoutingModule, MatButtonModule, MatCardModule],
})
export class SettingModule {}
