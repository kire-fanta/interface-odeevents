import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotifComponent } from '../notif/notif.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(private pvrCtlr: PopoverController) {}
  async opennotif() {
    const popup = await this.pvrCtlr.create({
      component: NotifComponent,
    });
    popup.present();
  }
}
