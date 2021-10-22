import { Injectable } from '@angular/core';
import { Product } from 'src/app/Product';
import { Observable,Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CartService {

  private prodIncrem: number= 0;
  private subject = new Subject<any>();

  items: Product[] = [];

  constructor(){}

  bfCount():void{
    this.prodIncrem= this.items.length;
    this.subject.next(this.prodIncrem)
  }

  onCount(): Observable<any>{
    return this.subject.asObservable();
  }

}
