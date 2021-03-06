import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Product';
import { CartService } from '../../cart/services/cart.service';


@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {

  @Input()product!: Product;
  @Output() add: EventEmitter<Product> = new EventEmitter();

  constructor() { }

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
