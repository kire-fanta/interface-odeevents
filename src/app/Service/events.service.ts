import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  // addEvent(
  //   image: string | undefined,
  //   nom: string | undefined,
  //   organisateurs: string,
  //   type: string,
  //   date: string,
  //   heureDebut: any,
  //   heureFin: any,
  //   description: string | undefined
  // ) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(private http: HttpClient) {}
  FindEventsBystatus(status: string): Observable<any> {
    return this.http.get(
      `http://localhost:8080/evenements/allByStatus/${status}`
    );
  }

  getAllEvenementsByStatus(): Observable<any> {
    return this.http.get('http://localhost:8080/evenements/all/');
  }

  ajouterEvenement(
    description: any,
    nom: string,
    lieu: string,
    etat: string,
    duree: any,
    status: string,
    image: string,
    type: string,

    id_user: any,
    id_status: any,
    heureDebut: any,
    heureFin: any,
    datedebut: any,
    datefin: any
  ): Observable<Event> {
    const data = new FormData();
    data.append('file', image);
    data.append('description', description);
    data.append('heurefin', heureFin);
    data.append('nom', nom);
    data.append('lieu', lieu);
    //data.append('etat', etat);
    data.append('duree', duree);
    data.append('status', status);
    data.append('type', type);
    data.append('datedebut', datedebut);
    data.append('datefin', datefin);
    data.append('heuredebut', heureDebut);

    return this.http.post<Event>(
      `http://localhost:8080/evenements/add/${id_status}/${id_user}`,
      data
    );
  }

  ajouterEvenement2(
    description: any,
    heureFin: any,
    nom: string,
    lieu: string,
    etat: string,
    duree: any,
    status: string,
    image: string,
    type: string,
    date: any,
    heureDebut: any,
    id_user: any,
    id_status: any
  ): Observable<Event> {
    const data = new FormData();
    data.append('file', image);
    data.append('description', description);
    data.append('heureFin', heureFin);
    data.append('nom', nom);
    data.append('lieu', lieu);
    data.append('etat', etat);
    data.append('duree', duree);
    data.append('status', status);
    data.append('type', type);
    data.append('date', date);
    data.append('heureDebut', heureDebut);

    return this.http.post<Event>(`http://localhost:8080/add/${id_user}`, data);
  }
}
