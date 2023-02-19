import { Component, OnInit } from '@angular/core';
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
  constructor(
    private salleservices: SallesService,
    private pvrCtlr: PopoverController
  ) {}
  async opennotif() {
    let popup = await this.pvrCtlr.create({
      component: SalPage,
      cssClass: 'popover-content',
      
      // buttons:[{
      //   role:"cancel",
      //   icon:"close",
      // }]

      
    })
    popup.present();
  }

  ngOnInit() {
    this.salleservices.getSalles().subscribe((data) => {
      this.mesSalles = data;
    });
  }

  //methode pour supprrimer une salle
  supprimer(id: number){
      this.salleservices.deletesall(id).subscribe(data =>{
        Swal.fire({
          // title: 'Are you sure?',
          text: 'Voulez-vous supprimer cette salle  ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Oui',
          cancelButtonText: 'Non', // ajout du bouton "Non"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Votre salle  a été supprimé avec success');
          }
        });
          location.reload();
      })
  }
  
}

// import { NavController } from '@ionic/angular';

// @Component({
//   selector: 'app-salle',
//   templateUrl: './salle.page.html',
//   styleUrls: ['./salle.page.scss'],
// })
// export class SallePage implements OnInit {
//   constructor(private navCtrl: NavController) {}

//   ngOnInit() {}
// }
// export class SallePage implements OnInit {
//   salles: Salle[];
//   constructor(private navCtrl: NavController) {}

//   ngOnInit() {}
// }
