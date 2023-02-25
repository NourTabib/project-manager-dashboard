import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Projet } from '../model/projet';
import * as db from '../../../db.json';
interface ProjetData {
  projets: Projet[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private apiUrl = '../../../db.json'; // relative path to the JSON file

  constructor(private http: HttpClient) { }

  getProjets(): Observable<Projet[]> {
    return this.http.get<ProjetData>(this.apiUrl)
      .pipe(
        map(data => data.projets) // extract the 'projets' array from the JSON data
      );
  }

  getProjet(id: number): Observable<Projet | undefined> {
    return this.getProjets()
      .pipe(
        map(projets => projets.find(p => p.idP === id))
      );
  }

  addProjet(projet: Projet): Observable<Projet> {
    // Implement the code to add a new project to the backend here
    return this.http.post<Projet>(this.apiUrl, projet);
  }

  updateProjet(projet: Projet): Observable<void> {
    // Implement the code to update an existing project in the backend here
    return this.http.put<void>(`${this.apiUrl}/${projet.idP}`, projet);
  }

  deleteProjet(id: number): Observable<void> {
    // Implement the code to delete a project from the backend here
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}