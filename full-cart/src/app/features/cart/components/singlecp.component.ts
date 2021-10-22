import { Component, Input, OnInit } from '@angular/core';

import { Product } from 'src/app/Product';
@Component({
  selector: 'app-singlecp',
  templateUrl: './singlecp.component.html',
  styleUrls: ['./singlecp.component.css']
})
export class SinglecpComponent implements OnInit {

  @Input()cartproduct!: Product;

  constructor() { }

  ngOnInit() {
  }

}
