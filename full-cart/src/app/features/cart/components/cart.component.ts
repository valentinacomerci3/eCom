import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartproducts!: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartproducts=this.cartService.items
  }


}
