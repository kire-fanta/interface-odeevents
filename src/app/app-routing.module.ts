import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'tache',
    loadChildren: () =>
      import('./tache/tache.module').then((m) => m.TachePageModule),
  },
  {
    path: 'profil',
    loadChildren: () =>
      import('./profil/profil.module').then((m) => m.ProfilPageModule),
  },
  {
    path: 'evenement',
    loadChildren: () =>
      import('./evenement/evenement.module').then((m) => m.EvenementPageModule),
  },
  {
    path: 'motpasse',
    loadChildren: () =>
      import('./motpasse/motpasse.module').then((m) => m.MotpassePageModule),
  },

  {
    path: 'event-details/:id',
    loadChildren: () =>
      import('./event-details/event-details.module').then(
        (m) => m.EventDetailsPageModule
      ),
  },
  {
    path: 'sal',
    loadChildren: () => import('./sal/sal.module').then((m) => m.SalPageModule),
  },
  {
    path: 'salle',
    loadChildren: () =>
      import('./salle/salle.module').then((m) => m.SallePageModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./events/events.module').then((m) => m.EventsPageModule),
  },
  {
    path: 'evenement-detail/:id',
    loadChildren: () =>
      import('./evenement-detail/evenement-detail.module').then(
        (m) => m.EvenementDetailPageModule
      ),
  },
  // {
  //   path: 'notif',
  //   loadChildren: () => import('./notif/notif.module').then( m => m.NotifPageModule)
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
