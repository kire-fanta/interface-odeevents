import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EventsService } from '../Service/events.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.page.html',
  styleUrls: ['./evenement.page.scss'],
})
export class EvenementPage implements OnInit {
  all: any;
  public evenementSelectionne: any;
  Tableau: any = [];
  responsive = true;
  menuBureau: boolean = true;
  menuMobile: boolean = false;

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.eventsService.getAllEvenementsByStatus().subscribe((data) => {
      this.all = data;
      console.log('mes events: ' + JSON.stringify(this.all));
    });
  }

  supprimer(id: number) {
    this.eventsService.deleteEvent(id).subscribe((data) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
      location.reload();
    });
  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }
}
