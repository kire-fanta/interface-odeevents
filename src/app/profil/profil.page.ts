import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../Service/users.service';
import { TokenstorageService } from '../tokenstorage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  imageprofil: any;
  // imageUrl: string = 'http://localhost:8080/images/user/';
  user: any;
  id!: number;
  modifs: any;
  modif: any = {
    nom: null,
    prenom: null,
    username: null,
  };
  back() {
    throw new Error('Method not implemented.');
  }
  updatePassword() {
    throw new Error('Method not implemented.');
  }

  constructor(
    private storage: TokenstorageService,
    private userService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = this.storage.getUser().id;
    //this.id = this.route.snapshot.params['id'];
    console.log(this.user);
  }
  logOut: any;
  onProfilePictureSelected(evente: any) {
    this.imageprofil = evente.target['files'][0];
    console.log(this.imageprofil);
  }
  gotoPasswordChangePage() {
    // this.route.navigate(['',this.user])
  }

  onSubmit(nom: string, prenom: string, username: string): void {
    this.userService
      .ModifierUser(nom, prenom, this.imageprofil, username, this.user)
      .subscribe((data) => {
        this.modifs = data;
        console.log(data);
      });
  }
  getOneUser(id: number) {
    this.userService.getOneUserById(id).subscribe((data) => {
      this.user = data;
    });
  }
}