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
import events from 'inquirer/lib/utils/events';
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
  mont = 0;

  Tableau :any = [] 
  totaux = 0;

  constructor(
    private eventsService: EventsService,
    private budgetService: BudgetService,
    private router: Router,
    private navCtrl: NavController,
    private evenetService:EventsService
  ) {}

  ngOnInit() {
    // Arret
    // this.getEventById(2)
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
        console.log('ID ' + a.idEvenement);
        //  this.getEventById(a.idEvenement);

        
      }
      for(let b of this.events){
         this.evenetService
           .getbudgetbyevent(b.idEvenement)
           .subscribe((data) => {
              for (let m of data) {
                this.mont = m.prixUnitaire * m.quantite;
                this.totaux += this.mont
                this.Tableau.push(this.totaux)

              }
           });
      }
      
              console.log('Ev3 ' + this.Tableau);
        
    });
  }

  goToEventDetails(event: any, idevent: any) {
    this.navCtrl.navigateForward('event-details/' + idevent, {
      queryParams: {
        event: event,
      },
    });
  }

  // les budgets pqr id

  // getEventById(idbudget:any){
  //   this.evenetService.getbudgetbyevent(idbudget).subscribe(data=>{
  //     for(let m of data){
  //       this.mont += m.prixUnitaire * m.quantite;

  //     }
  //     console.log('Ev3 ' + this.mont);
  //   })
  // }
}
