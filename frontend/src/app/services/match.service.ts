/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  errorMessage: any;

  constructor(private http: HttpClient) {}

  addTeam(name_team: string) {
    return this.http.post(`${environment.urlApi}/matchs/addMatch`, {
      name_team,
    });
  }

  getAllMatchs(): Observable<any> {
    return this.http.get<any>(`${environment.urlApi}/matchs/allMatchs`);
  }

  getMatchDetails(id: string) {
    return this.http.get(`${environment.urlApi}/matchs/${id}`);
  }

  updateMatch(id: string, form: any) {
    return this.http.put(`${environment.urlApi}/matchs/${id}`, form);
  }

  deleteMatch(id: string) {
    return this.http.delete(`${environment.urlApi}/matchs/${id}`).subscribe({
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
