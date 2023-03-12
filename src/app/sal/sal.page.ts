import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { SallesService } from '../Service/salles.service';

@Component({
  selector: 'app-sal',
  templateUrl: './sal.page.html',
  styleUrls: ['./sal.page.scss'],
})
export class SalPage implements OnInit {
  nombreplace!: number;
  libelle!: string;
  etage!: string;
  disponibilite!: boolean;
  description!: string;
  image!: File;
  numero!: number;

  salle: any;
  Resultat: any;
  constructor(
    private salleservices: SallesService,
    private router: Router,
    private pvrCtlr: PopoverController,
    private route: Router
  ) {}

  ngOnInit() {}
  onSubmit() {}

  close() {
    this.salleservices.dismiss();
  }

  AjoutSalle() {
    console.log('AjoutSalle');
    this.salleservices
      .addSalle(
        this.image,
        this.nombreplace,
        this.libelle,
        this.etage,
        this.disponibilite,
        this.description,
        this.numero
      ).subscribe(async (data) => {
        console.log(data);
        this.Resultat = data;
        // this.router.navigate(['tabs/salle']);
        if (this.Resultat.status = false) {
          Swal.fire({
            heightAuto: false,
            // position: 'top-end',
            icon: 'warning',
            text: this.Resultat.message,
            showConfirmButton: false,
            timer: 2500,
          });
          this.close();
        } else {
          Swal.fire({
            heightAuto: false,
            // position: 'top-end',
            icon: 'success',
            iconColor: '#ff6600',
            text: this.Resultat.message,
            showConfirmButton: false,

            timer: 2500,
          });
        }
        console.log(this.Resultat.message);

        this.salle = data;
        let popup = await this.pvrCtlr.create({
          component: SalPage,
          cssClass: 'popover-content',

          // buttons:[{
          //   role:"cancel",
          //   icon:"close",
          // }]
        });
        popup.dismiss;
      });








      

    this.route.navigate(['tabs/salle']);

    console.log('kire');
    // return 'la salle a été crée avec succés !';
  }

  televerser(event: any): void {
    this.image = event.target['files'][0] as File;
  }
}
