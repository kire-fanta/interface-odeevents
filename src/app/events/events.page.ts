import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { NotifComponent } from '../notif/notif.component';
import { ModalComponent } from '../organization-settings-modal/modal.component';
import { EventsService } from '../Service/events.service';
import { StatusService } from '../Service/status.service';
import { UsersService } from '../Service/users.service';
import { TokenstorageService } from '../tokenstorage.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  user: any;

  location: string = 'inside';
  rooms: string[] = ['Salle 1', 'Salle 2', 'Salle 3'];

  nom: any;
  lieu: any;

  description: any;
  etat: any;
  typeEvenement: any;
  duree: any = 10;
  status: any;
  image: any;
  organisateurs!: string;
  type!: string;
  date!: string;
  heureDebut: any;
  event: any;
  heureFin: any;
  id_user: any;
  id_status: any;
  datefin: any;
  datedebut: any;
  users: any;

  constructor(
    private pvrCtlr: PopoverController,
    private eventsservice: EventsService,
    private service: TokenstorageService,
    private eventsService: EventsService,
    private statusService: StatusService
  ) {}

  // isVisible = true;
  // visible() {
  //   this.isVisible = false;
  // }
  // novisible() {
  //   this.isVisible = true;
  // }
  televerser(event: any) {
    this.image = event.target['files'][0];
    console.log(this.image);
  }
  ngOnInit() {
    console.log('locationnnnn');
    this.user = this.service.getUser();
    this.statusService.GetAllStatus().subscribe((data) => {
      this.status = data;
    });
  }

  onLocationChange(location: string) {
    this.location = location;
  }

  onRoomChange(event: any) {
    console.log(event);
    // Faites quelque chose avec la salle sélectionnée
  }

  ajouterEvenement() {
    console.log('ajouterEvenement');
    this.eventsservice
      .ajouterEvenement(
        this.description,
        this.nom,
        this.lieu,
        this.etat,
        this.duree,
        this.status,
        this.image,
        this.type,
        this.user.id,
        this.id_status,
        this.heureDebut,
        this.heureFin,
        this.datedebut,
        this.datefin
      )
      .subscribe((data) => {
        console.log(data);
        Swal.fire({
          heightAuto: false,
          // position: 'top-end',
          icon: 'success',
          text: 'Compte créer avec succès',
          showConfirmButton: false,
          timer: 2500,
        });
      });
    // async openModal() {
    //   const popup = await this.pvrCtlr.create({
    //     component: ModalComponent,
    //   });
    //   popup.present();
    // }
  }
}
