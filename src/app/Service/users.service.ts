import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@ionic/cli';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'connexion',
      {
        username,
        password,
      },
      httpOptions
    );
  }
  getOneUserById(id:number):Observable<User> {
    return this.http.get<User>(`http://localhost:8080/user/${id}`);
  } 

  ModifierUser(
    nom: any,
    prenom: any,
    imageprofil: File,
    username: any,
    id: any
  ) {
    const data = new FormData();
    data.append('nom', nom);
    data.append('prenom', prenom);
    data.append('imageprofil', imageprofil);
    data.append('numero', username);

    return this.http.put(`http://localhost:8080/user/update/${id}`, data);
  }
}
