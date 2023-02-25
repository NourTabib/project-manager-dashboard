import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Tache } from '../model/tache';

interface TacheData {
  taches: Tache[];
}

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private apiUrl = '../../../db.json';

  constructor(private http: HttpClient) { }

  getTaches(): Observable<Tache[]> {
    return this.http.get<TacheData>(this.apiUrl)
      .pipe(
        map(data => data.taches)
      );
  }

  getTache(id: number): Observable<Tache | undefined> {
    return this.getTaches()
      .pipe(
        map(taches => taches.find(t => t.idTache === id))
      );
  }

  addTache(tache: Tache): Observable<Tache> {
    return this.http.post<Tache>(this.apiUrl, tache);
  }

  updateTache(tache: Tache): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${tache.idTache}`, tache);
  }

  deleteTache(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}