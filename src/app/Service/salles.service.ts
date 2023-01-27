// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SallesService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salle } from '../Model/salle.model';

@Injectable({
  providedIn: 'root',
})
export class SallesService {
  private sallesUrl = 'api/salles';
  private urlbase: String = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  getSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(this.urlbase + 'salles/afficher');
  }

  getSalle(id: number): Observable<Salle> {
    const url = `${this.sallesUrl}/${id}`;
    return this.http.get<Salle>(url);
  }

  updateSalle(salle: Salle): Observable<Salle> {
    return this.http.put<Salle>(this.sallesUrl, salle);
  }

  addSalle(salle: Salle): Observable<Salle> {
    return this.http.post<Salle>(this.sallesUrl, salle);
  }

  deleteSalle(salle: Salle | number): Observable<Salle> {
    const id = typeof salle === 'number' ? salle : salle.id;
    const url = `${this.sallesUrl}/${id}`;

    return this.http.delete<Salle>(url);
  }
}
