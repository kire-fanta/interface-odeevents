import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Service/users.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.page.html',
  styleUrls: ['./tache.page.scss'],
})
export class TachePage implements OnInit {
  datedecheance: any;
  Adresseemail: any;
  tache: any;
  description: any;
  users: any;

  constructor(private userS: UsersService) {}

  ngOnInit() {
    this.getAllUser()
  }
  getAllUser() {
    this.userS.getAllUser().subscribe((data) => {
      this.users = data;
    });
  }
  envoyertache() {
    this.datedecheance;
    this.Adresseemail;
    this.tache;
    this.description;
  }
}
