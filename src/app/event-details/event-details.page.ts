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
import { AlertController } from '@ionic/angular';

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
  montant = 0;
  monTotal = 0;

  // Injection de dépendance de la classe ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private budgetService: BudgetService,
    private eventService: EventDetailService, // Ajout de l'injection de dépendance pour BudgetService
    private eventServic: EventsService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.idev = this.route.snapshot.params['id'];
    this.getEvents();
    // Souscription à la propriété queryParams pour récupérer les données passées par les paramètres de requête
    this.route.queryParams.subscribe((params) => {
      this.event = params['event'];

      this.eventService.getAllPrevisions().subscribe((data) => {
        this.budgets = data;
      });

      // Utilisation de la méthode getBudgets de BudgetService pour récupérer les détails budgétaires de l'événement
      this.eventService.getBudgetss(this.event.id).subscribe((data) => {
        this.budget = data;
      });
    });
  }
  getEvents() {
    this.eventServic.getbudgetbyevent(this.idev).subscribe((data) => {
      this.budgetsUn = data;
      for (let total of this.budgetsUn) {
        this.montant = total.prixUnitaire * total.quantite;
        this.monTotal += this.montant;
      }
    });
  }
  async ajouterBudget() {
    this.idev = this.route.snapshot.params['id'];

    const alert = await this.alertController.create({
      header: 'Ajouter un budget',
      inputs: [
        {
          name: 'libelle',
          type: 'text',
          placeholder: 'Libellé',
        },
        {
          name: 'prixUnitaire',
          type: 'number',
          placeholder: 'Prix unitaire',
          min: 0,
        },
        {
          name: 'quantite',
          type: 'number',
          placeholder: 'Quantité',
          min: 0,
        },
        {
          name: 'montant',
          type: 'number',
          placeholder: 'Montant',
          min: 0,
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Ajouter',
          handler: (data) => {
            // Traitement des données saisies par l'utilisateur
            console.log('Frrr ' + data);
            this.budgetService
              .gererPrevision(data, this.idev)
              .subscribe((donnee) => {
                this.monTotal = 0;
                this.getEvents();
              });
          },
        },
      ],
    });

    await alert.present();
  }
}
