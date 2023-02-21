import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvenementDetailPage } from './evenement-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EvenementDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvenementDetailPageRoutingModule {}
