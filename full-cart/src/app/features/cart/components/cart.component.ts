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
  //subscription2!: Subscription;

  constructor(private cartService: CartService) {
    //this.subscription2=this.cartService.onResult().subscribe(value=> this.grandTotal=value)

  }

  getGrandT():number{
    const reducer = (previousValue: any, currentValue: any) => previousValue + currentValue;
    this.grandTotal=(this.cartproducts.map((a)=>a.price)).reduce(reducer)
    return this.grandTotal
  }

  ngOnInit(): void {
    this.cartproducts=this.cartService.items
    this.grandTotal=this.getGrandT()
    this.afterShipng= this.grandTotal + this.sFee

  }

  deleteFromCart(prdct:Product){

    if (this.cartproducts===[]){
      this.grandTotal=0
    this.afterShipng= 5
    } else

    this.cartService.items.map((a:any, index:any)=>{
      if(prdct.id=== a.id){
        this.cartService.items.splice(index,1);
      }
    })

    this.cartService.bfCount()

    this.grandTotal=this.getGrandT()
    this.afterShipng= this.grandTotal + this.sFee



  }






}
