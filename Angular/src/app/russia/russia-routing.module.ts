import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RussiaPage } from './russia.page';

const routes: Routes = [
  {
    path: '',
    component: RussiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RussiaPageRoutingModule {}
