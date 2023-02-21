import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { EventsService } from '../Service/events.service';

@Component({
  selector: 'app-evenement-detail',
  templateUrl: './evenement-detail.page.html',
  styleUrls: ['./evenement-detail.page.scss'],
})
export class EvenementDetailPage implements OnInit {
  evenementSelectionne: any;
  Tableau: any;
  idev: any;

  constructor(private route: ActivatedRoute,private eventServic: EventsService) {}

  ngOnInit() {
    this.idev = this.route.snapshot.params['id'];
     this.eventServic.getEvenementById(this.idev).subscribe(data => {
      this.evenementSelectionne = data;
  })
}
}
