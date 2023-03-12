// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';
// import { AppComponent } from './app.component';


// import { IonicModule } from '@ionic/angular';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     ToastrModule.forRoot()
//   ],
//   declarations: [AppComponent,],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ModalComponent } from './organization-settings-modal/modal.component';

@NgModule({
  declarations: [AppComponent, ModalComponent,NotificationsComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


