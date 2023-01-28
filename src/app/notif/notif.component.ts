import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { popoverController } from '@ionic/core';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.scss'],
})
export class NotifComponent implements OnInit {
  constructor(private pvCrL: PopoverController) {}

  close() {
    this.pvCrL.dismiss();
  }
  ngOnInit() {}
}
