import { Component, OnInit } from '@angular/core';
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
  constructor(private salleservices: SallesService) {}

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
      )
      .subscribe((data) => {
        console.log(data);
        this.salle = data;
      });
    console.log('kire');
    // return 'la salle a été crée avec succés !';
  }

  televerser(event: any): void {
    this.image = event.target['files'][0] as File;
  }
}
