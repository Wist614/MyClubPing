import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  errorMessage: any;
  constructor(private http: HttpClient) {}

  addStock(name: string) {
    return this.http.post(`${environment.urlApi}/stocks/addStock`, {
      name,
    });
  }

  getAllStock() {
    return this.http.get(`${environment.urlApi}/stocks/allStocks`);
  }

  getOneStock(id) {
    return this.http.get(`${environment.urlApi}/stocks/${id}`);
  }

  updateStock(id: string, form: any) {
    return this.http.put(`${environment.urlApi}/stocks/${id}`, form);
  }

  deleteStock(id: string) {
    return this.http.delete(`${environment.urlApi}/stocks/${id}`).subscribe({
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
