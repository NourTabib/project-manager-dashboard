import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Utilisateur } from '../model/utilisateur';

interface UtilisateurData {
  utilisateurs: Utilisateur[];
}

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiUrl = 'assets/utilisateurs.json';

  constructor(private http: HttpClient) { }

  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<UtilisateurData>(this.apiUrl)
      .pipe(
        map(data => data.utilisateurs)
      );
  }

  getUtilisateur(id: number): Observable<Utilisateur | undefined> {
    return this.getUtilisateurs()
      .pipe(
        map(utilisateurs => utilisateurs.find(u => u.idUtilisateur === id))
      );
  }

  addUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.apiUrl, utilisateur);
  }

  updateUtilisateur(utilisateur: Utilisateur): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${utilisateur.idUtilisateur}`, utilisateur);
  }

  deleteUtilisateur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}