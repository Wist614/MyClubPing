/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, tap, switchMap } from 'rxjs/operators';
import moment from 'moment';
import { Storage } from '@ionic/storage-angular';
import { AuthResponse } from '../auth/auth-response';
import { Router } from '@angular/router';

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
export class AuthenticationService {
  authSubject = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post(`${environment.urlApi}/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap(async (res) => {
          if (res) {
            await this.storage.set('ACCESS_TOKEN', res.accessToken);
            await this.storage.set('EXPIRES_IN', res.expiresIn);
            this.authSubject.next(true);
          }
        })
      );
  }

  async logout() {
    await this.storage.remove('ACCESS_TOKEN');
    await this.storage.remove('EXPIRES_IN');
    this.router.navigate(['home']);
    this.authSubject.next(false);
  }

  signUp(
    email: string,
    password: string,
    first_name: string,
    last_name: string
  ) {
    return this.http.post(`${environment.urlApi}/auth/register`, {
      email,
      password,
      first_name,
      last_name,
    });
  }

  public isLoggedIn() {
    return this.authSubject.asObservable();
  }

  updatePassword(email: string, password: string) {
    return this.http.put(`${environment.urlApi}/auth/forgot-password`, {
      email,
      password,
    });
  }
}
