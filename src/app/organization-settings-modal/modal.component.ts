// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
//   styleUrls: ['./modal.component.scss'],
// })
// export class ModalComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {}

// }

import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
styleUrls: ['./modal.component.scss'];

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() data: any; // data that will be passed to the modal

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  // method to close the modal
  closeModal() {
    this.modalController.dismiss();
  }
}
