import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  location: string = 'inside';
  rooms: string[] = ['Salle 1', 'Salle 2', 'Salle 3'];

  constructor() {}

  ngOnInit() {}

  onLocationChange(location: string) {
    this.location = location;
  }

  onRoomChange(event: any) {
    // Faites quelque chose avec la salle sélectionnée
  }
}