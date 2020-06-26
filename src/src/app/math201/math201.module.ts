import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Math201PageRoutingModule } from './math201-routing.module';

import { Math201Page } from './math201.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Math201PageRoutingModule
  ],
  declarations: [Math201Page]
})
export class Math201PageModule {}
