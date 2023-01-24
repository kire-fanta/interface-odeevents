import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }
FindEventsBystatus(status: string): Observable<any>{
  return this.http.get(
    `http://localhost:8080/evenements/allByStatus/${status}`);
}

}
