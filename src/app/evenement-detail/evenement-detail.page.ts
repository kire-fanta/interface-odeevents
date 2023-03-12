import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import Swal from 'sweetalert2';
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

  constructor(
    private route: ActivatedRoute,
    private eventServic: EventsService
  ) {}

  ngOnInit() {
    this.idev = this.route.snapshot.params['id'];
    this.eventServic.getEvenementById(this.idev).subscribe((data) => {
      this.evenementSelectionne = data;
      console.log(data)
    });
  }
  supprimer(id: number) {
    Swal.fire({
      position: 'center',
      title: 'Voulez-vous supprimer ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Oui',
      denyButtonText: 'non',
      icon: 'warning',
      denyButtonColor: 'red',
      // cancelButtonText: 'Annuler',
      cancelButtonColor: 'red',
      confirmButtonColor: 'green',
      heightAuto: false,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //Swal.fire('Saved!', '', 'success');
        console.log(id)
        this.eventServic.deleteEvent(id).subscribe((data) => {
          this.evenementSelectionne = data;
          console.log(data);
          this.toutesLesSalles();
        });
      } else if (result.isDenied) {
      }
    });
  }
  toutesLesSalles() {
    this.eventServic.getAllEvenementsByStatus().subscribe((data) => {
      this.evenementSelectionne = data;
    });
  }
}
