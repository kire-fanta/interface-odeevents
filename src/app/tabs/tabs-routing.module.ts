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
        path: 'events',
        loadChildren: () =>
          import('../events/events.module').then((m) => m.EventsPageModule),
      },
      {
        path: 'salle',
        loadChildren: () =>
          import('../salle/salle.module').then((m) => m.SallePageModule),
      },

      {
        path: 'profil',
        loadChildren: () =>
          import('../profil/profil.module').then((m) => m.ProfilPageModule),
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
