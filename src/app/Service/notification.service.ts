import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }



  getNotificationByUser(iduser:any):Observable<any>{
    return this.http.get(
      `http://localhost:8080/notifications/allbyUser/${iduser}`
    );
  }
}
