import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvenementDetailPageRoutingModule } from './evenement-detail-routing.module';

import { EvenementDetailPage } from './evenement-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvenementDetailPageRoutingModule
  ],
  declarations: [EvenementDetailPage]
})
export class EvenementDetailPageModule {}
