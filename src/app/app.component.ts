import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenstorageService } from './tokenstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  user: any;
  constructor(public router: Router, private tokenStorage:TokenstorageService) {
    this.initializeApp();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.user = this.tokenStorage.getUser();
    console.log('je suis ' + this.user.id);
    if (this.user.id != null) {
      this.router.navigate(['/tabs/accueil']);
    } else {
      this.router.navigateByUrl('home');
    }
  }

  initializeApp() {
    this.router.navigateByUrl('home');
  }
}
