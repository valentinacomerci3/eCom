import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showIncrem!: number;
  subscription!: Subscription;

  constructor(private cartService: CartService, ) {
    this.subscription=this.cartService.onCount().subscribe(value=> this.showIncrem=value)
  }

  ngOnInit(): void {

  }

}
