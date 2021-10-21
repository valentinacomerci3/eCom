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

  items: CartProduct[] = [];
  private apiUrl = 'http://localhost:5000/cartproducts';

  constructor(private http: HttpClient){}

  // addToCart(cartproduct: CartProduct) : Observable<CartProduct>{
  //   return this.http.post<CartProduct>(this.apiUrl, cartproduct, httpOptions);
  // }

  // getCartProducts(): Observable<CartProduct[]> {
  //   return this.http.get<CartProduct[]>(this.apiUrl);
  // }


}
