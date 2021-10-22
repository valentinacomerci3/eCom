import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { CartService } from './features/cart/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class UiService {
private prodIncrem: number= 0;
private subject = new Subject<any>();

constructor(cartService:CartService) { }

  onCount(): Observable<any>{
    
    return this.subject.asObservable();
  }
}
