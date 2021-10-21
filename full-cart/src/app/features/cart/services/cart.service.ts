import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartProduct } from 'src/app/CartProduct';
import { Product } from 'src/app/Product';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CartService {

  items: Product[] = [];
  private apiUrl = 'http://localhost:5000/cartproducts';

  constructor(private http: HttpClient){}

  addToCart(product: Product) {
    this.items.push(product);
  }
  
  getCartProducts(): Observable<CartProduct[]> {
    return this.http.get<CartProduct[]>(this.apiUrl);
  }


}
