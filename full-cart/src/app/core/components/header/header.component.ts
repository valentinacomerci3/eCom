import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/CartProduct';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartproducts : CartProduct[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
