import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CartService } from '../../cart/services/cart.service';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/Order';
import { CheckoutService } from '../services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orders: Order[] = [];

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

  subscription!: Subscription;
  coGrandTotal!:number;
  coAfterShipng!:number;
  coSFee=5;



  constructor(private cartService: CartService, private checkoutService:CheckoutService) {}

  ngOnInit(): void {
    this.coAfterShipng=this.cartService.getTotalPrice()+this.coSFee
  }

  onSubmit(){
      const newOrder = {
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
      };


      this.checkoutService.addOrder(newOrder).subscribe((newOrder) => this.orders.push(newOrder));
      console.log(newOrder)
    }
}
