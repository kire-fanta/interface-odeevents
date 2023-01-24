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

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
  // providers: [BudgetService],
})
export class BudgetPage implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  previsions: any;

  // constructor(private budgetService: BudgetService, private router: Router) {}

  // ngOnInit() {
  //   this.getAllPrevisions();
  // }

  // getAllPrevisions() {
  //   this.budgetService.getAllPrevisions().subscribe((previsions) => {
  //     this.previsions = previsions;
  //   });
  // }

  // addPrevision() {
  //   this.router.navigate(['/add-prevision']);
  // }

  // editPrevision(id: number) {
  //   this.router.navigate(['/edit-prevision/' + id]);
  // }

  // deletePrevision(id: number) {
  //   this.budgetService.deletePrevision(id).subscribe(() => {
  //     this.getAllPrevisions();
  //   });
  // }
}
