// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-budget',
//   templateUrl: './budget.page.html',
//   styleUrls: ['./budget.page.scss'],
// })
// export class BudgetPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
// import { BudgetService } from '../Service/budget.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BudgetService } from '../Service/budget.service';
import { EventsService } from '../Service/events.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
  providers: [BudgetService],
})
export class BudgetPage implements OnInit {


  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  prevision: any;
  events: any;
  budgettotal: any;

  constructor(
    private eventsService: EventsService,
    private budgetService: BudgetService,
    private router: Router,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // this.budgetService
    //   .calculerDepense(this.budgettotal.id)
    //   .subscribe((data) => {
    //     this.budgettotal = data;
    //   });
    this.getAllPrevisions();
    this.getAllEvents();
  }

  getAllPrevisions() {
    this.budgetService.getAllPrevisions().subscribe((previsions) => {
      this.prevision = previsions;
    });
  }

  addPrevision() {
    this.router.navigate(['/add-prevision']);
  }

  editPrevision(id: number) {
    this.router.navigate(['/edit-prevision/' + id]);
  }

  supprimerPrevision(idPrevision: number) {
    this.budgetService.supprimerPrevision(idPrevision).subscribe((data) => {
      this.getAllPrevisions();
    });
  }

  getAllEvents() {
    this.budgetService.getEvens().subscribe((Events) => {
      this.events = Events;
      for (let a of this.events) {
        console.log('ffff ' + a.nomEvenement);
      }
    });
  }

  goToEventDetails(event: any) {
    this.navCtrl.navigateForward('event-details', {
      queryParams: {
        event: event,
      },
    });
  }
}
