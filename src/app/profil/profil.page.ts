import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../Service/users.service';
import { TokenstorageService } from '../tokenstorage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  imageprofil: any;
  imageUrl: string = "http://localhost:8080/images/user/"
  user: any;
  id!: number;
  modifs: any;
  nom!: string;
  prenom!: string;
  username!: string;
  modif: any = {
    nom: null,
    prenom: null,
    username: null,
  };
  userId: any;
  back() {
    throw new Error('Method not implemented.');
  }
  updatePassword() {
    throw new Error('Method not implemented.');
  }

  constructor(
    private storage: TokenstorageService,
    private userService: UsersService,
    private route: Router
  ) {}

  ngOnInit() {
    this.userId = this.storage.getUser().id;
    console.log(this.userId + ' is already');
    //this.id = this.route.snapshot.params['id'];
    setTimeout(() => {
      this.getOneUser();
    }, 500);
    console.log(this.user);
  }
  logOut: any;
  onProfilePictureSelected(evente: any) {
    this.imageprofil = evente.target['files'][0];
    console.log(this.imageprofil);
  }


  onSubmit(): void {
    this.userService
      .ModifierUser(
        this.nom,
        this.prenom,
        this.imageprofil,
        this.username,
        this.email,
        this.userId
      )
      .subscribe((data) => {
        this.modifs = data;
        console.log(data);
      });
  }
  email(
    nom: string,
    prenom: string,
    imageprofil: any,
    username: string,
    email: any,
    userId: any
  ) {
    throw new Error('Method not implemented.');
  }
  getOneUser() {
    this.userService.getOneUserById(this.userId).subscribe((data) => {
      this.user = data;
    });
  }

  reloadPage(): void {
   window.location.reload();
    
  }

  logout(): void {

    this.storage.signOut();
    this.route.navigateByUrl('home');
    this.reloadPage();
  }

  
}
