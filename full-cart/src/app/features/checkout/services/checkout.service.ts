import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/Order';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private apiUrl = 'http://localhost:5000/orders';

  constructor(private http: HttpClient) {}

  addOrder(newOrder:Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl,newOrder,httpOptions);
  }

}
