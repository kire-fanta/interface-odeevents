import { Component, OnInit } from '@angular/core';
import { SallesService } from '../Service/salles.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.page.html',
  styleUrls: ['./salle.page.scss'],
})
export class SallePage implements OnInit {
  mesSalles: any;
  constructor(private salleservices: SallesService) {}

  ngOnInit() {
    this.salleservices.getSalles().subscribe((data) => {
      this.mesSalles = data;

    });
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
