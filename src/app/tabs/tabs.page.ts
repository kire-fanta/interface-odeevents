import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NotifComponent } from '../notif/notif.component';
import { UsersService } from '../Service/users.service';
import { TokenstorageService } from '../tokenstorage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  user: any;
  userId: any;
  

  constructor(
    private pvrCtlr: PopoverController,
    private storage: TokenstorageService,
    private userService: UsersService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.userId = this.storage.getUser().id;
    console.log(this.userId + ' is already');
    //this.id = this.route.snapshot.params['id'];
    setTimeout(() => {
      this.getOneUser();
    }, 500);
    console.log(this.user);
  }
  async opennotif() {
    const popup = await this.pvrCtlr.create({
      component: NotifComponent,
    });
    popup.present();
  }
  reloadPage(): void {
    window.location.reload();
  }
  logout(): void {
    this.storage.signOut();
    this.route.navigateByUrl('home');
    this.reloadPage();
  }
  getOneUser() {
    this.userService.getOneUserById(this.userId).subscribe((data) => {
      this.user = data;
    });
  }
}
