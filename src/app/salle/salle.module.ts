// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// import { IonicModule } from '@ionic/angular';

// import { SallePageRoutingModule } from './salle-routing.module';

// import { SallePage } from './salle.page';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     SallePageRoutingModule
//   ],
//   declarations: [SallePage]
// })
// export class SallePageModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SallePageRoutingModule } from './salle-routing.module';
import { SallePage } from './salle.page';

@NgModule({
  imports: [CommonModule, IonicModule, SallePageRoutingModule],
  declarations: [SallePage],
})
export class SallePageModule {}
