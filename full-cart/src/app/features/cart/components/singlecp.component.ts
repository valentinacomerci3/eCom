import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/Product';
@Component({
  selector: 'app-singlecp',
  templateUrl: './singlecp.component.html',
  styleUrls: ['./singlecp.component.css']
})
export class SinglecpComponent implements OnInit {

  @Input()cartproduct!: Product;
  @Output() del: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteScp(cartproduct:Product){
  this.del.emit(cartproduct)
  }

}
