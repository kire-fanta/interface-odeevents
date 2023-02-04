import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EbudgetPage } from './ebudget.page';

const routes: Routes = [
  {
    path: '',
    component: EbudgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EbudgetPageRoutingModule {}
