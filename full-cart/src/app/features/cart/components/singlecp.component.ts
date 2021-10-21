import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/CartProduct';

@Component({
  selector: 'app-singlecp',
  templateUrl: './singlecp.component.html',
  styleUrls: ['./singlecp.component.css']
})
export class SinglecpComponent implements OnInit {

  @Input()cartproduct!: CartProduct;

  constructor() { }

  ngOnInit() {
  }

}
