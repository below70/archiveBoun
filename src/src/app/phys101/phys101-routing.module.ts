import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Phys101Page } from './phys101.page';

const routes: Routes = [
  {
    path: '',
    component: Phys101Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Phys101PageRoutingModule {}
