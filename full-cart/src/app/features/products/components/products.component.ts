import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from 'src/app/Product';
import { CartService } from '../../cart/services/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productsService: ProductsService,private cartService: CartService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => (this.products = products));
  }

  addProductToCart(item:Product){
    this.cartService.items.push(item)
  }

}
