import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/* export interface Dispo {
  name: string;
  date: Date;
  dispo: boolean;
} */

@Injectable({
  providedIn: 'root',
})
export class DisponibilityService {
  constructor(private http: HttpClient) {}

  getAllDispos(id: string): Observable<any> {
    return this.http.get<any>(`${environment.urlApi}/users/dispos/${id}`);
  }

  updateDispo(userId, matchDayId, dispo) {
    return this.http.put(
      `${environment.urlApi}/dispos/${userId}&${matchDayId}`,
      dispo
    );
  }
}
