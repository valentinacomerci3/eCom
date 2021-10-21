import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartProduct } from 'src/app/CartProduct';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartproducts!: CartProduct[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartproducts=this.cartService.items
    //this.cartService.getCartProducts().subscribe((cartproducts: CartProduct[]) => (this.cartproducts = cartproducts));
  }


  addTask(cartproduct: CartProduct) {
    //this.cartService.addToCart(cartproduct).subscribe((cartproduct: CartProduct) => this.cartproducts.push(cartproduct));
  }

}
