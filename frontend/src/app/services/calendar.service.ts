import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  errorMessage: any;

  constructor(private http: HttpClient) {}

  getAllCalendars() {
    return this.http.get(`${environment.urlApi}/match_days/allMatch_days`);
  }

  getCalendarDetails(id: string) {
    return this.http.get(`${environment.urlApi}/match_days/${id}`);
  }

  addCalendar(name: string, date: string) {
    return this.http.post(`${environment.urlApi}/match_days/addMatch_day`, {
      name,
      date,
    });
  }

  updateCalendar(id: string, form: any) {
    return this.http.put(`${environment.urlApi}/match_days/${id}`, form);
  }

  deleteCalendar(id: string) {
    return this.http
      .delete(`${environment.urlApi}/match_days/${id}`)
      .subscribe({
        error: (error) => {
          this.errorMessage = error.message;
        },
      });
  }
}
