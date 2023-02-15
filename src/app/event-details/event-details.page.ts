// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-event-details',
//   templateUrl: './event-details.page.html',
//   styleUrls: ['./event-details.page.scss'],
// })
// export class EventDetailsPage implements OnInit {
//   event: any;
// budgets: any;

//   // Injection de dépendance de la classe ActivatedRoute
//   constructor(

//     private route: ActivatedRoute
//   ) {}

//   ngOnInit() {
//     // Souscription à la propriété queryParams pour récupérer les données passées par les paramètres de requête
//     this.route.queryParams.subscribe((params) => {
//       this.event = params['event'];
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetService } from '../Service/budget.service';
import { EventDetailService } from '../Service/event-detail.service';
import { EventsService } from '../Service/events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  event: any;
  budgets: any;
  budgettotal: any;
  budget: any;
  getbudgetbyevent: any;
  budgetsUn: any;
  idev: any;

  // Injection de dépendance de la classe ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private budgetService: BudgetService,
    private eventService: EventDetailService, // Ajout de l'injection de dépendance pour BudgetService
    private eventServic: EventsService
  ) {}

  ngOnInit() {

    this.idev = this.route.snapshot.params["id"]

    // Souscription à la propriété queryParams pour récupérer les données passées par les paramètres de requête
    this.route.queryParams.subscribe((params) => {
      this.event = params['event'];

      this.eventService.getAllPrevisions().subscribe((data) => {
        this.budgets = data;
      });


      this.eventServic.getbudgetbyevent(this.idev).subscribe((data) => {
        this.budgetsUn = data;
      });

      // Utilisation de la méthode getBudgets de BudgetService pour récupérer les détails budgétaires de l'événement
      this.eventService.getBudgetss(this.event.id).subscribe((data) => {
        this.budget = data;
      });
    });
  }
}
