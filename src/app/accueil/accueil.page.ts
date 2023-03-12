import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Event } from '../Model/event.model'; // importe le modèle pour les événements
import { EventsService } from '../Service/events.service'; // importe le modèle pour les événements

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  currentEvents: any[] = [];
  upcomingEvents:any;
  pastEvents: any[] = [];
  allEvents!: any[];
  list: any;
  state: any;
  selectedSegment: string | undefined;
  navCtrl: any;

  constructor(private eventsService: EventsService) {

  }

  ngOnInit() {
    this.selectedSegment = 'upcoming';

    this.GetEventByState('avenir');
    this.GetEventByState('encour');
    this.GetEventByState('termine');
  }

  GetEventByState(state: string) {
    return this.eventsService.FindEventsBystatus(state).subscribe((data) => {
      console.log(data);

      if (state == 'encour') {
        this.selectedSegment = 'current';
        this.currentEvents = data;
        console.log('current', this.currentEvents);
      }

      if (state == 'avenir') {
        this.selectedSegment = 'upcoming';
        this.upcomingEvents = data;
        console.log('upcomming', this.upcomingEvents);
      }

      if (state == 'termine') {
        this.selectedSegment = 'past';
        this.pastEvents = data;
        console.log(this.pastEvents);
        //  state == 'termine';
      }
    });
  }

  




   goToEvent(event: any) {
    this.navCtrl.navigateForward('events', {
      queryParams: {
        event: event,
      },
    });
  }
}

