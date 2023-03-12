import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TachesService {
  constructor(private http: HttpClient) {}

  ajouterTache(tache: any): Observable<any> {
    return this.http.post('http://localhost:8080/tache/add', tache);
  }

  lesStatus(): Observable<any> {
    return this.http.get('http://localhost:8080/status/all');
  }
}
