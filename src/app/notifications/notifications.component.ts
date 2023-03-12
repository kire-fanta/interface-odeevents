import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { UsersService } from '../Service/users.service';
import { Notification, User } from '../Model/user';
import { TokenstorageService } from '../tokenstorage.service';
import { NotificationService } from '../Service/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  userId: any;
  user!: User;
  notifications: Notification[] = [];
  lesNotifis: any;
  constructor(private pvrt: PopoverController,   private storage: TokenstorageService,private usersService:UsersService,private servNotif:NotificationService
) {}

  ngOnInit() {
        this.userId = this.storage.getUser().id;
        this.getUser();
        this.lesNotifs();
        console.log(this.userId + ' is already');
  }
  getUser(){
    this.usersService.getOneUserById(this.userId).subscribe(data=>{
      console.log(data);
      this.user = data
      this.notifications = data.notification
    })
  }
  close() {
    this.pvrt.dismiss();
  }


  lesNotifs(){
this.servNotif.getNotificationByUser(this.userId).subscribe((data) => {
  this.lesNotifis = data;
});
 }

}
