import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilPage } from './accueil.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilPage,
  },
  // {
  //   path: 'salle',
  //   loadChildren: () =>
  //     import('../salle/salle.module').then((m) => m.SallePageModule),
  // },
  // {
  //   path: 'budget',
  //   loadChildren: () =>
  //     import('../budget/budget.module').then((m) => m.BudgetPageModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilPageRoutingModule {}
