import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotifComponent } from '../notif/notif.component';
import { ModalComponent } from '../organization-settings-modal/modal.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  location: string = 'inside';
  rooms: string[] = ['Salle 1', 'Salle 2', 'Salle 3'];

  constructor(private pvrCtlr: PopoverController) {}

  // isVisible = true;
  // visible() {
  //   this.isVisible = false;
  // }
  // novisible() {
  //   this.isVisible = true;
  // }

  ngOnInit() {}

  onLocationChange(location: string) {
    this.location = location;
  }

  onRoomChange(event: any) {
    // Faites quelque chose avec la salle sélectionnée
  }

  async openModal() {
    const popup = await this.pvrCtlr.create({
      component: ModalComponent,
    });
    popup.present();
  }
}
