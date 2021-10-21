import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartProduct } from 'src/app/CartProduct';
import { Product } from 'src/app/Product';
import { CartService } from '../../cart/services/cart.service';


@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {

  @Input()product!: Product;
  @Output() add: EventEmitter<CartProduct> = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit():void {
  }

  addToCart(product: Product) {
    const addedProduct = {
      id: this.product.id,
      title:this.product.title,
      img: this.product.img,
      description:this.product.description,
      price:this.product.price
    };
    this.add.emit(addedProduct);
    
  }

}
