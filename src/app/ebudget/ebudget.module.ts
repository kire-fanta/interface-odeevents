import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbudgetPageRoutingModule } from './ebudget-routing.module';

import { EbudgetPage } from './ebudget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbudgetPageRoutingModule
  ],
  declarations: [EbudgetPage]
})
export class EbudgetPageModule {}
