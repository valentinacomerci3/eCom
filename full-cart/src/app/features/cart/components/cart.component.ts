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
  afterShipng!:number;
  sFee=5;
  subscription2!: Subscription;
  showTotal:number=0

    //this is pointless unless I get observable/subscription to work
  constructor(private cartService: CartService, ) {
    this.subscription2=this.cartService.onSum().subscribe(value=> this.showTotal=value)
  }


  ngOnInit(): void {
    this.cartproducts=this.cartService.items
    this.grandTotal=this.cartService.getTotalPrice()
    this.afterShipng= this.grandTotal + this.sFee
  }

  deleteFromCart(prdct:Product){

    if (this.cartproducts.length==1){
      this.mapAndSplice(prdct);
      this.grandTotal=0
      this.afterShipng= 5
    } else
    this.mapAndSplice(prdct);

    this.cartService.bfCount()

    this.grandTotal=this.cartService.getTotalPrice()
    this.afterShipng= this.grandTotal + this.sFee
  }

  mapAndSplice(prdct:Product){
    this.cartService.items.map((a:any, index:any)=>{
      if(prdct.id=== a.id){
        this.cartService.items.splice(index,1);
      }
    })
  }






}
