import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Phys101PageRoutingModule } from './phys101-routing.module';

import { Phys101Page } from './phys101.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Phys101PageRoutingModule
  ],
  declarations: [Phys101Page]
})
export class Phys101PageModule {}
