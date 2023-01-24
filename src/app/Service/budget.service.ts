// // import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { PrevisionsDepenses } from './previsions-depenses.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class BudgetService {
//   deletePrevision(id: number) {
//     throw new Error('Method not implemented.');
//   }
  
//   private baseUrl = 'http://localhost:8080/previsions-depenses/add/';
  
//   constructor(private http: HttpClient) { }
  
//   calculerDepense(prevision: PrevisionsDepenses): Observable<PrevisionsDepenses> {
//     return this.http.post<PrevisionsDepenses>(`${this.baseUrl}/calculer`, prevision);
//   }
  
//   gererPrevision(prevision: PrevisionsDepenses): Observable<PrevisionsDepenses> {
//     return this.http.post<PrevisionsDepenses>(`${this.baseUrl}/gerer`, prevision);
//   }
  
//   getAllPrevisions(): Observable<PrevisionsDepenses[]> {
//     return this.http.get<PrevisionsDepenses[]>(`${this.baseUrl}`);
//   }
  
//   supprimerPrevision(idPrevision: any): Observable<any> {
//     return this.http.delete(`${this.baseUrl}/${idPrevision}`);
//   }

//   getPrevisionById(idPrevision: any): Observable<PrevisionsDepenses> {
//     return this.http.get<PrevisionsDepenses>(`${this.baseUrl}/${idPrevision}`);
//   }
// }
