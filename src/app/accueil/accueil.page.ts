// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-accueil',
//   templateUrl: './accueil.page.html',
//   styleUrls: ['./accueil.page.scss'],
// })
// export class AccueilPage implements OnInit {
//   selectedSegment: string;
//   upcomingEvents: any[];
//   pastEvents: any[];
//   allEvents: any[];

//   constructor() {
//     this.selectedSegment = 'upcoming';
//     this.upcomingEvents = ['Event 1', 'Event 2', 'Event 3'];
//     this.pastEvents = ['Event 4', 'Event 5', 'Event 6'];
//     this.allEvents = [
//       'Event 1',
//       'Event 2',
//       'Event 3',
//       'Event 4',
//       'Event 5',
//       'Event 6',
//     ];
//   }

//   cat:String='event'

//   ngOnInit() {}

// }

import { Component, OnInit } from '@angular/core';
import { Event } from '../Model/event.model'; // importe le modèle pour les événements
import { EventsService } from '../Service/events.service'; // importe le modèle pour les événements

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  currentEvents: any;
  selectedSegment!: string;
  upcomingEvents: Event[] = [];
  pastEvents: Event[] = [];
  allEvents!: Event[];
  list: any;
  state: any;

  constructor(private eventsService: EventsService) {
    //   this.selectedSegment = 'upcoming';
    //   this.upcomingEvents = [
    //     new Event('Event 1', '2022-01-01'),
    //     new Event('Event 2', '2022-02-01'),
    //     new Event('Event 3', '2022-03-01'),
    //   ];
    //   this.pastEvents = [
    //     new Event('Event 4', '2021-12-01'),
    //     new Event('Event 5', '2021-11-01'),
    //     new Event('Event 6', '2021-10-01'),
    //   ];
    //   this.allEvents = [...this.upcomingEvents, ...this.pastEvents];
  }

  ngOnInit() {
    // this.GetEventByState('encour');

    // this.GetEventByState('termine');
    // this.GetEventByState('avenir');
  }

  GetEventByState(state: string) {
    return this.eventsService.FindEventsBystatus(state).subscribe((data) => {
      console.log('ddddddddddddddddddd', data);
      if (state == 'encour') {
        this.currentEvents = data;
        console.log('gggggggggg', data);
      }
      if (state == 'avenir') {
        this.upcomingEvents = data;
      }
      if (state == 'termine') {
        this.pastEvents = data;
      }
    });
  }
}
