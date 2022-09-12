import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface User {
  aboutUser: string;
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  rank: string;
  numNef?: any;
  phone?: any;
  solde: string;
  cotisation: boolean;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  errorMessage: any;
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User> {
    return this.http.get<User>(`${environment.urlApi}/users/allUsers`);
  }

  getUserDetails(id: string) {
    return this.http.get(`${environment.urlApi}/users/oneUser/${id}`);
  }

  updateUser(id: string, form: any) {
    return this.http.put(`${environment.urlApi}/users/${id}`, form);
  }

  deleteUser(id: string) {
    return this.http.delete(`${environment.urlApi}/users/${id}`).subscribe({
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
