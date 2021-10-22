import { Injectable } from '@angular/core';
import { Product } from 'src/app/Product';
import { Observable,Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CartService {

  private prodIncrem: number= 0;
  private grandTotal: number= 0;
  private subject = new Subject<any>();
  private subject2 = new Subject<any>();


  items: Product[] = [];

  constructor(){}

  bfCount():void{

    this.prodIncrem= this.items.length;
    this.subject.next(this.prodIncrem)
  }


  onCount(): Observable<any>{
    return this.subject.asObservable();
  }

  getTotalPrice() : void{

  //let pricearr=this.items.map((a)=> a.price);

  //test to see if value is stored and passed
  this.grandTotal=this.items.length;
  this.subject2.next(this.grandTotal)

  //it does but then it doesnt show
}

  onResult(): Observable<any>{
    return this.subject2.asObservable();
  }

  

}
