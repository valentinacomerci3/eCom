import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from 'src/app/Product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartproducts!: Product[];
  grandTotal!:number;
  subscription2!: Subscription;

  constructor(private cartService: CartService) {
    this.subscription2=this.cartService.onResult().subscribe(value=> this.grandTotal=value)

  }

  ngOnInit(): void {
    this.cartproducts=this.cartService.items
  }

  deleteFromCart(prdct:Product){

    this.cartService.items.map((a:any, index:any)=>{
      if(prdct.id=== a.id){
        this.cartService.items.splice(index,1);
      }
    })
    this.cartService.bfCount()
  }

  


}
