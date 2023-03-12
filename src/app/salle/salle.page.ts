import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { SalPage } from '../sal/sal.page';
import { SallesService } from '../Service/salles.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.page.html',
  styleUrls: ['./salle.page.scss'],
})
export class SallePage implements OnInit {
  mesSalles: any;
  salle: any;
  constructor(
    private salleservices: SallesService,
    private pvrCtlr: PopoverController,
    private router: Router
  ) {}
  async opennotif() {
    let popup = await this.pvrCtlr.create({
      component: SalPage,
      cssClass: 'popover-content',

      // buttons:[{
      //   role:"cancel",
      //   icon:"close",
      // }]
    });
    popup.onDidDismiss().then(()=>{
      this.toutesLesSalles()
    })
    popup.present();
    return await popup.onDidDismiss();
  }

  ngOnInit() {
   this.toutesLesSalles();
  }
toutesLesSalles(){
   this.salleservices.getSalles().subscribe((data) => {
     this.mesSalles = data;
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
        this.salleservices.deletesall(id).subscribe((data) => {
          this.salle = data;
          console.log(data);
             this.toutesLesSalles();

        });

      } else if (result.isDenied) {
        
      }
    });
  }


  
}


