import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../Service/users.service';
import { TokenstorageService } from '../tokenstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  errorMessage = '';
  roles: string[] = [];
  form: any = {
    username: null,
    password: null,
  };
  isLoginFailed = false;
  isLoggedIn = false;
  constructor(
    private route: Router,
    private authService: UsersService,
    private tokenStorage: TokenstorageService
  ) {}
  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        // if (this.isLoggedIn == true)
        //   this.route.navigateByUrl("['tabs/accueil']");
        // else {
        //   this.isLoginFailed = true;
        // }
        this.route.navigate(['tabs/accueil']);
      },
      (err) => {
        this.isLoginFailed = true;
        this.errorMessage = err.error.message;
      }
    );
  }
}
