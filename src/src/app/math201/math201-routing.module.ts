import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Math201Page } from './math201.page';

const routes: Routes = [
  {
    path: '',
    component: Math201Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Math201PageRoutingModule {}
