import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from 'src/app/Product';
import { CartService } from '../../cart/services/cart.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  showIncrem!: number;
  subscription!: Subscription;

  constructor(private productsService: ProductsService,private cartService: CartService, ) {
    this.subscription=this.cartService.onCount().subscribe(value=> this.showIncrem=value)
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => (this.products = products));
  }

  addProductToCart(item:Product){
    this.cartService.items.push(item);
    this.cartService.bfCount();
    this.cartService.getTotalPrice();
  }

}
