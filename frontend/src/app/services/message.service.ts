import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';

export interface Message {
  title: string;
  post: string;
}
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  errorMessage: any;
  constructor(private http: HttpClient) {}

  getAllMessages(): Observable<Message> {
    return this.http.get<Message>(`${environment.urlApi}/messages/allMessages`);
  }

  getOneMessage(id) {
    return this.http.get<Message>(`${environment.urlApi}/messages/${id}`);
  }

  addMessage(title: string, post: string) {
    return this.http.post(`${environment.urlApi}/messages/addMessage`, {
      title,
      post,
    });
  }

  updateMessage(id: string, form: string) {
    return this.http.put(`${environment.urlApi}/messages/${id}`, form);
  }

  deleteMessage(id: string) {
    return this.http
      .delete<Message>(`${environment.urlApi}/messages/${id}`)
      .subscribe({
        error: (error) => {
          this.errorMessage = error.message;
        },
      });
  }
}
