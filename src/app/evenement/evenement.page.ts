import { Component, OnInit } from '@angular/core';
import { EventsService } from '../Service/events.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.page.html',
  styleUrls: ['./evenement.page.scss'],
})
export class EvenementPage implements OnInit {
  all: any;
  // Tableau qui contiendra les informations sur les événements
  // events = [
  //   {
  //     name: 'Event 1',
  //     description: 'Description of event 1',
  //     organizer: 'Organizer 1',
  //     status: 'Active',
  //     date: '2023-01-01',
  //   },
  //   {
  //     name: 'Event 2',
  //     description: 'Description of event 2',
  //     organizer: 'Organizer 2',
  //     status: 'Inactive',
  //     date: '2023-02-01',
  //   },
  //   {
  //     name: 'Event 3',
  //     description: 'Description of event 3',
  //     organizer: 'Organizer 3',
  //     status: 'Active',
  //     date: '2023-03-01',
  //   },
  // ];

  constructor(private eventsService: EventsService) {}

  ngOnInit() {

    this.eventsService.getAllEvenementsByStatus().subscribe(data=> {
      this.all=data;
      console.log("mes events: " + JSON.stringify(this.all))
    })
  }
}
