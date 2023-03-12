import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EventsService } from '../Service/events.service';
import { TachesService } from '../Service/taches.service';
import { UsersService } from '../Service/users.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.page.html',
  styleUrls: ['./tache.page.scss'],
})
export class TachePage implements OnInit {
  selectedOptions: any[] = [];

  // datedecheance: any;
  Adresseemail: any;
  tache: any;
  description: any;
  users: any;
  all: any;
  form: any = {};
  taches: any = {
    statutTache: '',
    nomTache: '',
    dateEcheance: '',
    descriptionTache: '',
    evenements: '',
    users:'',
    status:''
  };
  mesStatus: any;
  constructor(
    private userS: UsersService,
    private eventsService: EventsService,
    private tacheService: TachesService
  ) {}

  ngOnInit() {
    this.getAllUser();
    this.tacheService.lesStatus().subscribe(data=>{
      this.mesStatus = data
    })

    this.eventsService.getAllEvenementsByStatus().subscribe((data) => {
      this.all = data;
      console.log('dfhjkdfghjk');
      console.log(this.all.nomEvenement);
      console.log('mes events: ' + JSON.stringify(this.all));
    });
  }
  getAllUser() {
    this.userS.getAllUser().subscribe((data) => {
      this.users = data;
    });
  }
  envoyertache() {
  

    this.taches.nomTache = this.form.tache;
    this.taches.descriptionTache = this.form.description; 
    this.taches.evenements = this.form.id_evenement;
    this.taches.dateEcheance = this.form.datedecheance;
    this.taches.users = this.selectedOptions
    this.taches.status = this.form.idStatus;

    console.log("Status "+this.form.idStatus)

    this.tacheService.ajouterTache(this.taches).subscribe((data) => {
      Swal.fire({
        heightAuto: false,
        icon: 'success',
        text: 'tache créée avec succes',
        timer: 3500,
        iconColor: '#ff6600',
      });
    });
  }

  // envoyertache() {
  //   this.datedecheance;
  //   this.Adresseemail;
  //   this.tache;
  //   this.description;
  // }

  // ajouterTache(){
  //   this.tacheService.ajouterTache().subscribe(data=>{

  //   })
  // }
}










