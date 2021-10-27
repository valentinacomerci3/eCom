import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CartService } from '../../cart/services/cart.service';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/Order';
import { CheckoutService } from '../services/checkout.service';
import { Product } from 'src/app/Product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orders: Order[] = [];


  total!:number
  ccname!: string;
  cccvv!: string;
  firstname!: string;
  lastname!: string;
  zip!: string;
  country!: string;
  state!: string;
  email!: string;
  address!: string;
  ccnumber!: string;
  ccexp!: string;
  products!: Product[] ;



  subscription!: Subscription;
  coGrandTotal!:number;
  coAfterShipng!:number;
  coSFee=5;



  constructor(private cartService: CartService, private checkoutService:CheckoutService) {}

  ngOnInit(): void {
    this.coAfterShipng=this.cartService.getTotalPrice()+this.coSFee
  }

  sAl(){
    Swal.fire(
      'Thank you!',
      'Your order has been submitted!',
      'success'
    )
  }

  onSubmit(){
      const newOrder = {
        total:this.coAfterShipng,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        address: this.address,
        country: this.country,
        state: this.state,
        zip: this.zip,
        ccname: this.ccname,
        ccnumber: this.ccnumber,
        ccexp: this.ccexp,
        cccvv: this.cccvv,
        products:this.cartService.items

      };


      this.checkoutService.addOrder(newOrder).subscribe((newOrder) => this.orders.push(newOrder));
      
    }
}
