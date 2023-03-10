import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        loadChildren: () =>
          import('../accueil/accueil.module').then((m) => m.AccueilPageModule),
      },
      {
        path: 'evenement',
        loadChildren: () =>
          import('../evenement/evenement.module').then(
            (m) => m.EvenementPageModule
          ),
      },
      {
        path: 'salle',
        loadChildren: () =>
          import('../salle/salle.module').then((m) => m.SallePageModule),
      },

      {
        path: 'tache',
        loadChildren: () =>
          import('../tache/tache.module').then((m) => m.TachePageModule),
      },
      {
        path: 'budget',
        loadChildren: () =>
          import('../budget/budget.module').then((m) => m.BudgetPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
