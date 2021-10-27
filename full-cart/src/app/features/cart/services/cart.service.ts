import { Injectable } from '@angular/core';
import { Product } from 'src/app/Product';
import { Observable,Subject } from 'rxjs';
import { CheckoutComponent } from '../../checkout/components/checkout.component';
import { Order } from 'src/app/Order';


@Injectable({
  providedIn: 'root',
})
export class CartService {

  prodIncrem: number= 0;
  grandTotal: number= 0;
  private subject = new Subject<any>();
  private subject2 = new Subject<any>();



  items: Product[] = [];

  constructor(){}

  //TO SHOW NUMB ON HEADER

  bfCount():void{
    this.prodIncrem= this.items.length;
    const reducer = (previousValue: any, currentValue: any) => (previousValue + currentValue);
    this.grandTotal=(this.items.map((a)=>a.price)).reduce(reducer,0)
    this.subject2.next(this.grandTotal)
    this.subject.next(this.prodIncrem)
  }

  onCount(): Observable<any>{
    return this.subject.asObservable();
  }


 //cant make this work
  onSum(): Observable<any>{
    return this.subject2.asObservable();
  }

  // so have to call this instead and call it again in checkout
  getTotalPrice() : number{

    const reducer = (previousValue: any, currentValue: any) => (previousValue + currentValue);
    this.grandTotal=(this.items.map((a)=>a.price)).reduce(reducer,0)
    return this.grandTotal
  }





}
