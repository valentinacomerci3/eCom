import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { SinglecpComponent } from './components/singlecp.component';



@NgModule({
  declarations: [
    CartComponent,
    SinglecpComponent
  ],
  imports: [
    CartRoutingModule,
    CommonModule
  ]
})
export class CartModule { }
